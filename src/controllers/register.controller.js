const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const registerController = async (req, res) => {
  try {
    const allowedFields = ["name", "email", "password"];

    Object.keys(req.body).forEach((key) => {
      if (!allowedFields.includes(key)) {
        throw new Error(`${key} is an invalid field`);
      }
    });

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: passwordHash,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = registerController;
