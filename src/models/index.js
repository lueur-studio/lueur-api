const { sequelize } = require("../config/database");
const User = require("./userModel");
const UserAuth = require("./userAuthModel");

const db = {
  sequelize,
  User,
  UserAuth,
};

// Define associations
User.hasOne(UserAuth, {
  foreignKey: "user_id",
  as: "auth",
  onDelete: "CASCADE",
});

UserAuth.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

module.exports = db;
