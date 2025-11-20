const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const UserAuth = sequelize.define(
  "UserAuth",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    tableName: "user_auth",
    timestamps: true,
    underscored: true,
  }
);

module.exports = UserAuth;
