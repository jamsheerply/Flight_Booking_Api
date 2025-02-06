const express = require("express");
const registerController = require("../controllers/register.controller");
const registerValidation = require("../utils/validation/registerValidation");
const loginController = require("../controllers/login.controller");

const authRouter = express.Router();

authRouter.post("/register", registerValidation, registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;
