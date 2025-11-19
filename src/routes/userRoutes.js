const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const userService = require("../services/userService");
const {
  createUserValidation,
  updateUserValidation,
} = require("../middleware/validators/userValidators");

// GET /api/users - Get all users
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await userService.getAllUsers();
    res.json({ success: true, data: users });
  })
);

// GET /api/users/:id - Get user by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.json({ success: true, data: user });
  })
);

// POST /api/users - Create user
router.post(
  "/",
  createUserValidation,
  asyncHandler(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, data: user });
  })
);

// PUT /api/users/:id - Update user
router.put(
  "/:id",
  updateUserValidation,
  asyncHandler(async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ success: true, data: user });
  })
);

// DELETE /api/users/:id - Delete user
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json({ success: true, message: "User deleted" });
  })
);

module.exports = router;
