const { AMADEUS_FLIGHT_URL } = require("../config/config");

const searchFlightsController = async (req, res) => {
  try {
    const allowedFields = ["departure", "destination", "date", "travelers"];
    Object.keys(req.body).forEach((key) => {
      if (!allowedFields.includes(key)) {
        throw new Error(`${key} is an invalid field`);
      }
    });

    const { departure, destination, date, travelers } = req.body;
    const token = req.amadeusToken;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Missing Amadeus API token" });
    }
    const queryParams = new URLSearchParams({
      originLocationCode: departure,
      destinationLocationCode: destination,
      departureDate: date,
      adults: travelers,
    });

    const response = await fetch(
      `${AMADEUS_FLIGHT_URL}?${queryParams.toString()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/vnd.amadeus+json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching flights: ${response.statusText}`);
    }

    const data = await response.json();

    res.status(200).json({ status: true, data });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: false,
      error: 400,
      message: error.message,
    });
  }
};

module.exports = searchFlightsController;
