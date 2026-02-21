const { Readiness } = require("../models");

const allowedFields = [
  "companyName",
  "sector",
  "country",
  "yearFounded",
  "employees",
  "hasFinancialRecords",
  "annualRevenue",
  "hasTaxClearance",
  "hasBusinessPlan",
  "fundingNeed",
  "growthStage"
];

exports.submitReadinessService = async (userId, data) => {
  // Filter only allowed fields
  const filteredData = Object.keys(data)
    .filter(key => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  const existing = await Readiness.findOne({
    where: { UserId: userId }
  });

  if (existing) {
    await existing.update(filteredData);
    return existing;
  }

  return await Readiness.create({
    ...filteredData,
    UserId: userId
  });
};