const { body, validationResult } = require("express-validator");
const formatValidationErrors = require("./formatValidationErrors ");
const registerValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .trim()
    .isLength({ min: 3 })
    .isLength({ max: 30 })
    .withMessage("Name must be between 5 and 30 characters long"),
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .isLength({ max: 30 }),
  body("password")
    .isStrongPassword()
    .withMessage("Password must be strong")
    .isLength({ max: 30 }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: formatValidationErrors(errors.array()),
      });
    } else next();
  },
];

module.exports = registerValidation;
