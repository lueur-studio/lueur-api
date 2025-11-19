require("dotenv").config();
const app = require("./app");
const { sequelize, connectDB } = require("./config/database");

const PORT = process.env.PORT || 3000;

const runServer = async () => {
  try {
    await connectDB();
    // Only sync without alter to prevent index issues
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(
        `Server running in ${
          process.env.NODE_ENV || "development"
        } mode on port ${PORT}`
      );
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

runServer();
