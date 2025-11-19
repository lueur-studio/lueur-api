const { body, validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  next();
};

const createUserValidation = [
  body("username").trim().notEmpty().isLength({ min: 3, max: 50 }),
  body("email").trim().isEmail().normalizeEmail(),
  body("password").isLength({ min: 6 }),
  validate,
];

const updateUserValidation = [
  body("username").optional().trim().isLength({ min: 3, max: 50 }),
  body("email").optional().trim().isEmail().normalizeEmail(),
  body("firstName").optional().trim(),
  body("lastName").optional().trim(),
  validate,
];

module.exports = {
  createUserValidation,
  updateUserValidation,
};
