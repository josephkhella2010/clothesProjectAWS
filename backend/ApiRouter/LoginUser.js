const express = require("express");
const router = express.Router();
const { generateToken } = require("../middleware/auth");

const jwt = require("../middleware/auth");
const { findAllUsers } = require("../DynamoDBFunctions/UserDynamoDBFunction");
const JWT_SECRET = process.env.JWT_SECRET || "mysecretkey"; // Store secret in .env in production

router.post("/loginUser", async (req, res) => {
  const { username, password } = req.body;
  const AllUsers = await findAllUsers();
  const existUser = AllUsers.find(
    (user) =>
      user.username.toLowerCase() === username.toLowerCase() ||
      user.email.toLowerCase() === username.toLowerCase()
  );

  try {
    if (!username || !password) {
      return res.status(409).json({ error: "fill all fields" });
    }

    if (!existUser) {
      return res
        .status(409)
        .json({ error: "user is not found please register" });
    }
    // Create JWT token
    const token = generateToken({
      id: existUser.id,
      username: existUser.username,
      email: existUser.email,
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: existUser,
    });
    return res
      .status(200)
      .json({ message: "Login successful", token, user: existUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "error with login request" });
  }
});

module.exports = router;
