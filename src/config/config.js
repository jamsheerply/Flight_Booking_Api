const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL;

const JWT_SECRET = process.env.JWT_SECRET;

const AMADEUS_TOKEN_URL = process.env.AMADEUS_TOKEN_URL;

const AMADEUS_CLIENT_ID = process.env.AMADEUS_CLIENT_ID;

const AMADEUS_CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;

const AMADEUS_FLIGHT_URL = process.env.AMADEUS_FLIGHT_URL;

const AMADEUS_BOOKING_URL = process.env.AMADEUS_BOOKING_URL;

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  PORT,
  DB_URL,
  JWT_SECRET,
  AMADEUS_TOKEN_URL,
  AMADEUS_CLIENT_ID,
  AMADEUS_CLIENT_SECRET,
  AMADEUS_FLIGHT_URL,
  AMADEUS_BOOKING_URL,
  NODE_ENV,
};
