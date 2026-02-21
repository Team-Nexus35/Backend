const asyncHandler = require("express-async-handler");
const { submitReadinessService } = require("../services/readinessService");
const {
  calculateReadinessScore,
  getReadinessLevel
} = require("../services/readinessScoring");

exports.submitReadiness = asyncHandler(async (req, res) => {

  const readiness = await submitReadinessService(
    req.user.id,
    req.body
  );

  const score = calculateReadinessScore(readiness);
  const level = getReadinessLevel(score);

  res.status(200).json({
    success: true,
    readiness,
    score,
    level
  });
});