module.exports = (sequelize, DataTypes) => {
  return sequelize.define("MatchResult", {
    fastapiCompanyId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matchScore: DataTypes.FLOAT,
    result: {
      type: DataTypes.JSON,
      allowNull: false
    }
  });
};