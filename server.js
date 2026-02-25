require("dotenv").config();

const app = require("./src/app");
const sequelize = require("./src/config/connection");

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    // Actually connect to DB
    await sequelize.authenticate();
    console.log("Database connected successfully");

    // Bind to 0.0.0.0 for Railway
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Unable to connect to database:", error);
    process.exit(1); // crash properly if DB fails
  }
}

start();