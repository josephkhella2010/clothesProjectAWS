const express = require("express");
const { findAllProducts } = require("../DynamoDBFunctions/DynamoDBfunctions");
const router = express.Router();
router.get("/api/products", async (req, res) => {
  try {
    const products = await findAllProducts();
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "the request with get product " });
  }
});

module.exports = router;
