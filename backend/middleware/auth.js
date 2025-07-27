const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your_default_secret";

// Generate JWT
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
}

// Verify JWT
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

module.exports = {
  generateToken,
  verifyToken,
};
