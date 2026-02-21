exports.calculateReadinessScore = (readiness) => {
  let score = 0;

  // Financial Records
  if (readiness.hasFinancialRecords) score += 15;

  // Tax Clearance
  if (readiness.hasTaxClearance) score += 15;

  // Business Plan
  if (readiness.hasBusinessPlan) score += 15;

  // Revenue
  if (readiness.annualRevenue && readiness.annualRevenue > 0) {
    score += 10;
  }

  // Employees
  if (readiness.employees && readiness.employees > 0) {
    score += 10;
  }

  // Funding Need
  if (readiness.fundingNeed && readiness.fundingNeed > 0) {
    score += 5;
  }

  // Growth Stage
  if (readiness.growthStage) {
    score += 10;
  }

  // Sector
  if (readiness.sector) {
    score += 10;
  }

  // Country
  if (readiness.country) {
    score += 10;
  }

  return score;
};


exports.getReadinessLevel = (score) => {
  if (score >= 80) return "Highly Ready";
  if (score >= 40) return "Moderately Ready";
  return "Not Ready";
};