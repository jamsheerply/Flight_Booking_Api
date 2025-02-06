require("dotenv").config();

exports.PORT = process.env.PORT;

exports.DB_URL = process.env.DB_URL;

exports.JWT_SECRECT = process.env.JWT_SECRECT;

exports.AMADEUS_TOKEN_URL = process.env.AMADEUS_TOKEN_URL;

exports.AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID;

exports.AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;

exports.AMADEUS_FLIGHT_URL = process.env.AMADEUS_FLIGHT_URL;

exports.AMADEUS_BOOKING_URL = process.env.AMADEUS_BOOKING_URL;

exports.NODE_ENV = process.env.NODE_ENV;
