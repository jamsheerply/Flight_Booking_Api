const {
  AMADEUS_CLIENT_ID,
  AMADEUS_CLIENT_SECRET,
  AMADEUS_TOKEN_URL,
} = require("../config/config");

const amadeusTokenMiddleware = async (req, res, next) => {
  try {
    const response = await fetch(AMADEUS_TOKEN_URL, {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: AMADEUS_CLIENT_ID,
        client_secret: AMADEUS_CLIENT_SECRET,
      }),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching token: ${response.statusText}`);
    }

    const data = await response.json();
    req.amadeusToken = data.access_token;

    next();
  } catch (error) {
    console.error("Error fetching Amadeus token:", error);
    res.status(500).json({ error: "Failed to fetch Amadeus token" });
  }
};

module.exports = amadeusTokenMiddleware;
