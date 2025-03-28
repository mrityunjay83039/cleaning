const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET is not set in environment variables.");
}

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ success: false, message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res
            .status(401)
            .json({
              success: false,
              message: "Token expired. Please log in again.",
            });
        } else {
          return res
            .status(401)
            .json({ success: false, message: "Invalid token." });
        }
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error during authentication." });
  }
};
