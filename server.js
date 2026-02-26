require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/connection");

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    // Connect to database
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // 🔥 Sync models (creates tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log("Models synced successfully");

    // Start server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
}

start();