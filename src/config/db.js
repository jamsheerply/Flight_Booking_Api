const mongoose = require("mongoose");
const { DB_URL } = require("./config");

async function DBConnect() {
  await mongoose.connect(DB_URL);
}

module.exports = DBConnect;
