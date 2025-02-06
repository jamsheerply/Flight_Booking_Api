const { NODE_ENV } = require("../../config/config");
const logger = require("./logger");

const errorHandler = (err, req, res, next) => {
  // Log error details
  logger.error("Error details:", {
    error: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
    user: req.user ? req.user.id : "anonymous",
  });

  // Determine status code
  const statusCode = err.statusCode || 500;

  // Send response
  res.status(statusCode).json({
    success: false,
    error: NODE_ENV === "production" ? "An error occurred" : err.message,
  });
};

module.exports = errorHandler;
