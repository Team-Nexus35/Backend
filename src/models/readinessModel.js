module.exports = (sequelize, DataTypes) => {
  const Readiness = sequelize.define("Readiness", {
    companyName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearFounded: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    employees: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hasFinancialRecords: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    annualRevenue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    hasTaxClearance: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    hasBusinessPlan: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    fundingNeed: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    growthStage: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  

  return Readiness;
};
