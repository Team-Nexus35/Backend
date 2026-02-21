const { Readiness } = require("../models");
const { createAndMatch } = require("../services/aiService");
const { calculateReadinessScore, getReadinessLevel } = require("../services/readinessScoring");

exports.match = async (req, res) => {
  try {
    const readiness = await Readiness.findOne({
      where: { UserId: req.user.id }
    });

    if (!readiness) {
      return res.status(400).json({
        success: false,
        message: "Please complete readiness assessment first."
      });
    }

    // Calculate score
    const score = calculateReadinessScore(readiness);
    const level = getReadinessLevel(score);

    // 🚨 Block matching if score is too low
    if (score < 40) {
      return res.status(403).json({
        success: false,
        message: "Your readiness score is too low for grant matching.",
        score,
        level
      });
    }

    if (score < 80) {
      return res.status(403).json({
        success: false,
        message: "Improve your readiness to at least 80% before matching.",
        score,
        level
      });
    }

    // If score >= 80 → allow matching
    const result = await createAndMatch(readiness, req.user.id);

    return res.status(200).json({
      success: true,
      score,
      level,
      match: result
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Matching failed",
      error
    });
  }
};