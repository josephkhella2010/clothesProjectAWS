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

    // Step 1: Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Step 2: Check if user already exists
    const users = await findAllUsers();
    const existUser = users.find(
      (user) =>
        user.username?.toLowerCase() === username.toLowerCase() ||
        user.email?.toLowerCase() === email.toLowerCase()
    );

    if (existUser) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }

    // Step 3: Create new user
    const newUser = await createUser(req.body);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error("🔥 Error in POST /addUser:", error);
    res.status(500).json({ error: "Server error while adding user" });
  }
});

module.exports = router;
