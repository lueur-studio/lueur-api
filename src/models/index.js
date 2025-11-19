const { sequelize } = require("../config/database");
const User = require("./userModel");

const db = {
  sequelize,
  User,
};

// Define associations here
// Example: User.hasMany(Images);

module.exports = db;
