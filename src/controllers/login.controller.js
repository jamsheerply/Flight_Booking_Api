const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
require("dotenv").config();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user?._id, name: user?.name }, JWT_SECRET, {
      expiresIn: "1d",
    });

    console.log("token", token);
    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = loginController;
