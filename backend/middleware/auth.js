/* const jwt = require("jsonwebtoken");

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

 */

// jwt.js
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your_default_secret";

// 🔐 Create a token with payload (e.g., { id, username })
function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "2h" });
}

// ✅ Verify token, returns payload (throws if invalid/expired)
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

// 🛡️ Express middleware to protect routes
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: "Access token missing" });
  }

  try {
    const user = verifyToken(token);
    req.user = user; // Inject user info into request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}

module.exports = {
  generateToken,
  verifyToken,
  authenticateToken,
};
