const express = require("express");
const router = express.Router();

const {
  findAllUsers,
  createUser,
} = require("../DynamoDBFunctions/UserDynamoDBFunction");

router.get("/users", async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error with get users request" });
  }
});

router.post("/addUser", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error with add user request" });
  }
});

module.exports = router;
