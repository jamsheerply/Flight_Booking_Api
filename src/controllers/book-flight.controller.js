const axios = require("axios");
const flightBookingModel = require("../models/flightBooking.model");
const { AMADEUS_BOOKING_URL } = require("../config/config");

const bookFlightController = async (req, res) => {
  try {
    const bookingData = req.body;

    const token = req.amadeusToken;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Missing Amadeus API token" });
    }

    const amadeusResponse = await axios.post(AMADEUS_BOOKING_URL, bookingData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/vnd.amadeus+json",
      },
    });

    if (amadeusResponse.status !== 200 && amadeusResponse.status !== 201) {
      return res.status(amadeusResponse.status).json({
        success: false,
        message: "Booking failed at Amadeus",
        data: amadeusResponse.data,
      });
    }

    const bookingToStore = {
      userId: req.user._id,
      data: amadeusResponse.data,
    };

    const confirmedBooking = await flightBookingModel.create(bookingToStore);

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking: confirmedBooking,
    });
  } catch (error) {
    console.error("Error in bookFlightController:", error);
    return res.status(400).json({
      success: false,
      error: error.code || 400,
      message: error.response ? error.response.data : error.message,
    });
  }
};

module.exports = bookFlightController;
