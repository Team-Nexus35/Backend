const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./userModel")(sequelize, Sequelize);
db.Readiness = require("./readinessModel")(sequelize, Sequelize);
db.MatchResult = require("./matchResultModel")(sequelize, Sequelize);

// Associations
db.User.hasOne(db.Readiness, { foreignKey: "UserId" });
db.Readiness.belongsTo(db.User);

db.User.hasMany(db.MatchResult, { foreignKey: "UserId" });
db.MatchResult.belongsTo(db.User);

module.exports = db;