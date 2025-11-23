const express = require("express");
const router = express.Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const eventRoutes = require("./eventRoutes");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/events", eventRoutes);

module.exports = router;
