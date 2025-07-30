const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/auth");
const {
  addCartToUser,
  deleteCartItem,
} = require("../DynamoDBFunctions/AddToCartDBFunction");

router.post("/addToCart", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; // From JWT middleware
    const { product, quantity } = req.body;

    if (!product || !product.id) {
      return res
        .status(400)
        .json({ error: "Product object with valid id required" });
    }

    const cart = await addCartToUser(userId, product, quantity || 1);

    return res.status(200).json({ cart });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return res.status(500).json({ error: "Failed to add product to cart" });
  }
});

router.delete(
  "/deleteCartItem/:cartItemId",
  authenticateToken,
  async (req, res) => {
    const userId = req.user.id; // from JWT
    const cartItemId = parseInt(req.params.cartItemId); // Important!

    try {
      const result = await deleteCartItem(userId, cartItemId);
      if (!result) {
        return res.status(404).json({ error: "Cart item not found" });
      }
      return res
        .status(200)
        .json({ message: "Cart item deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to delete product from cart" });
    }
  }
);

module.exports = router;
