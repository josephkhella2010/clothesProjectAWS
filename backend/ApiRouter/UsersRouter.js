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
      return res.status(400).json({ error: "All fields are required" });
    }

    const users = await findAllUsers();
    const existUser = users.find(
      (user) => user.username === username || user.email === email
    );

    if (existUser) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }

    const newUser = await createUser(req.body);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "error with add user request" });
  }
});

module.exports = router;
