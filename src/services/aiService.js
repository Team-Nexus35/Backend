const axios = require("axios");

exports.createAndMatch = async (readiness) => {
  try {
    // Validate required fields before sending
    if (
      !readiness.companyName ||
      !readiness.sector ||
      !readiness.country ||
      !readiness.growthStage ||
      !readiness.fundingNeed
    ) {
      throw new Error("Missing required readiness fields for AI matching");
    }

    // Map Node fields → FastAPI schema fields
    const payload = {
      company_name: readiness.companyName,
      sector: readiness.sector,
      nationality: readiness.country,
      business_stage: readiness.growthStage,
      funding_need_usd: Number(readiness.fundingNeed),

      // Optional fields (only if they exist)
      annual_revenue_usd: readiness.annualRevenue
        ? Number(readiness.annualRevenue)
        : undefined,

      employees: readiness.employees
        ? Number(readiness.employees)
        : undefined
    };

    console.log("Payload sent to AI:");
    console.log(payload);

    const response = await axios.post(
      "http://127.0.0.1:8000/api/v1/companies",
      payload,
      { timeout: 10000 }
    );

    return response.data;

  } catch (err) {
    console.log("AI Validation Error:");
    console.log(err.response?.data || err.message);
    throw err;
  }
};