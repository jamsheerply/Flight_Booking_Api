const express = require("express");
const searchFlightsController = require("../controllers/search-flights.controller");
const jwtMiddleware = require("../middlewares/jwt.middleware");
const amadeusTokenMiddleware = require("../middlewares/amadeusToken.middlware");
const bookFlightController = require("../controllers/book-flight.controller");
const getUserBookingController = require("../controllers/getUserBooking.controller");

const bookingRouter = express.Router();

bookingRouter.post(
  "/search-flights",
  jwtMiddleware,
  amadeusTokenMiddleware,
  searchFlightsController
);
bookingRouter.post(
  "/book-flight",
  jwtMiddleware,
  amadeusTokenMiddleware,
  bookFlightController
);
bookingRouter.get("/", jwtMiddleware, getUserBookingController);

module.exports = bookingRouter;
