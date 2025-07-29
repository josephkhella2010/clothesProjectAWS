const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/auth");
const { addCartToUser } = require("../DynamoDBFunctions/AddToCartDBFunction");

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
    res.status(500).json({ error: "Failed to add product to cart" });
  }
});

module.exports = router;
