const express = require("express");
const router = express.Router();
const { findAllUsers } = require("../DynamoDBFunctions/UserDynamoDBFunction");
router.get("/api/users", async (req, res) => {
  try {
    const users = await findAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error with get users request" });
  }
});

module.exports = router;
