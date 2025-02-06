const flightBookingModel = require("../models/flightBooking.model");

const getUserBookingController = async (req, res) => {
  try {
    const userId = req.user._id;

    const bookings = await flightBookingModel.find({ userId });

    return res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    console.error("Error retrieving user bookings:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Error retrieving user bookings",
    });
  }
};

module.exports = getUserBookingController;
