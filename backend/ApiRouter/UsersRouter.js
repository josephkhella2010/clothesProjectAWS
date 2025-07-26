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
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      // Validate input
      return res.status(400).json({ error: "All fields are required" });
    }
    const userData = req.body;
    const newUser = await createUser(userData);
    const existUser = newUser.find(
      (user) => user.username === username || user.email === email
    );
    if (existUser) {
      res.status(405).json({ error: "username is already exist" });
    }
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error with add user request" });
  }
});

module.exports = router;
