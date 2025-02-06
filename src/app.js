const express = require("express");
const { PORT } = require("./config/config");
const DBConnect = require("./config/db");
const errorHandler = require("./utils/error/errorHandler");
const authRouter = require("./routes/auth.router");
const bookingRouter = require("./routes/booking.router");
const cookieParser = require("cookie-parser");
const logger = require("./utils/error/logger");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/booking", bookingRouter);

// Error handling
app.use(errorHandler);

app.use((req, res, next) => {
  logger.warn(`Not Found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    error: `Route ${req.originalUrl} not found`,
  });
});

DBConnect()
  .then(() => {
    logger.info("Connected to MongoDB");
    app.listen(PORT, () => {
      logger.info(`Server is connected to port: ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("Database connection failed:", err);
    process.exit(1);
  });
