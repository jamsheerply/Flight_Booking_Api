const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const { JWT_SECRET } = require("../config/config");

const jwtMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        status: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: false,
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized",
      });
    }

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized: User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(`jwtMiddleware: ${error.message}`);
    res.status(400).json({
      status: false,
      error: 400,
      message: error.message,
    });
  }
};

module.exports = jwtMiddleware;
