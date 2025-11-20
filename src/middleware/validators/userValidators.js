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
  body("email").trim().isEmail().normalizeEmail(),
  body("name").trim().notEmpty().isLength({ min: 1, max: 100 }),
  body("password").isLength({ min: 6 }),
  validate,
];

const updateUserValidation = [
  body("email").optional().trim().isEmail().normalizeEmail(),
  body("name").optional().trim().notEmpty().isLength({ min: 1, max: 100 }),
  body("password").optional().isLength({ min: 6 }),
  validate,
];

module.exports = {
  createUserValidation,
  updateUserValidation,
};
