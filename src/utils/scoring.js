// utils/scoring.js

/**
 * Calculate fit score based on form values
 * @param {Object} values - Form values
 * @returns {number} - Calculated score (0-100)
 */
export const calculateFitScore = (values) => {
  let score = 0;

  // 1. Monthly Budget (0-35 points)
  const monthlyBudgetScore = {
    "under-200": 0,
    "200-500": 10,
    "500-1000": 20,
    "1000-3000": 30,
    "3000plus": 35,
    "": 0,
  };
  score += monthlyBudgetScore[values.monthlyBudget] || 0;

  // 2. Setup Budget (0-30 points)
  const setupBudgetScore = {
    "under-500": 0,
    "500-1500": 10,
    "1500-3000": 20,
    "3000-8000": 25,
    "8000plus": 30,
    "": 0,
  };
  score += setupBudgetScore[values.setupBudget] || 0;

  // 3. Timeline (2-15 points)
  const timelineScore = {
    asap: 15,
    "30days": 10,
    "30-60days": 5,
    "60plus": 2,
    "": 0,
  };
  score += timelineScore[values.startTimeline] || 0;

  // 4. Decision Maker (0-15 points)
  const decisionMakerScore = {
    yes: 15,
    "not-sure": 5,
    no: 0,
    "": 0,
  };
  score += decisionMakerScore[values.decisionMaker] || 0;

  // 5. Regulated industry (healthcare/care/medical tourism) = +10
  const highValueIndustries = ["healthcare", "care", "medical-tourism"];
  if (highValueIndustries.includes(values.regulated)) {
    score += 10;
  }

  // 6. Wants AI automation/agents = +10
  const wantsAIAutomation =
    values.servicesInterested?.includes("ai-automation") || false;
  const wantsAIAgents =
    values.servicesInterested?.includes("ai-assistant") || false;
  if (wantsAIAutomation || wantsAIAgents) {
    score += 10;
  }

  // 7. Has CRM already = +5
  const hasCRM = values.crm && values.crm !== "none";
  if (hasCRM) {
    score += 5;
  }

  // 8. Response time “next day / not sure” = +5
  const slowResponse = ["next-day", "not-sure"].includes(values.responseTime);
  if (slowResponse) {
    score += 5;
  }

  // Ensure score doesn't exceed 100 (though max possible is 35+30+15+15+10+10+5+5 = 125)
  // But we'll cap it at 100 as per your spec
  return Math.min(score, 100);
};

/**
 * Get qualification status based on score
 * @param {number} score - Calculated fit score (0-100)
 * @returns {string} - Qualification status: 'qualified', 'semi-qualified', or 'not-qualified'
 */
export const getQualificationStatus = (score) => {
  if (score >= 50) return "qualified";
  if (score >= 30) return "semi-qualified";
  return "not-qualified";
};

/**
 * Optional: Get detailed breakdown of score
 * @param {Object} values - Form values
 * @returns {Object} - Score breakdown by category
 */
export const getScoreBreakdown = (values) => {
  const breakdown = {
    monthlyBudget: 0,
    setupBudget: 0,
    timeline: 0,
    decisionMaker: 0,
    regulated: 0,
    aiInterest: 0,
    hasCRM: 0,
    responseTime: 0,
    total: 0,
  };

  // Monthly Budget
  const monthlyBudgetScore = {
    "under-200": 0,
    "200-500": 10,
    "500-1000": 20,
    "1000-3000": 30,
    "3000plus": 35,
  };
  breakdown.monthlyBudget = monthlyBudgetScore[values.monthlyBudget] || 0;

  // Setup Budget
  const setupBudgetScore = {
    "under-500": 0,
    "500-1500": 10,
    "1500-3000": 20,
    "3000-8000": 25,
    "8000plus": 30,
  };
  breakdown.setupBudget = setupBudgetScore[values.setupBudget] || 0;

  // Timeline
  const timelineScore = {
    asap: 15,
    "30days": 10,
    "30-60days": 5,
    "60plus": 2,
  };
  breakdown.timeline = timelineScore[values.startTimeline] || 0;

  // Decision Maker
  const decisionMakerScore = {
    yes: 15,
    "not-sure": 5,
    no: 0,
  };
  breakdown.decisionMaker = decisionMakerScore[values.decisionMaker] || 0;

  // Regulated industry
  const highValueIndustries = ["healthcare", "care", "medical-tourism"];
  if (highValueIndustries.includes(values.regulated)) {
    breakdown.regulated = 10;
  }

  // AI interest
  const wantsAIAutomation =
    values.servicesInterested?.includes("ai-automation") || false;
  const wantsAIAgents =
    values.servicesInterested?.includes("ai-assistant") || false;
  if (wantsAIAutomation || wantsAIAgents) {
    breakdown.aiInterest = 10;
  }

  // Has CRM
  if (values.crm && values.crm !== "none") {
    breakdown.hasCRM = 5;
  }

  // Response time
  if (["next-day", "not-sure"].includes(values.responseTime)) {
    breakdown.responseTime = 5;
  }

  // Calculate total
  breakdown.total = Object.values(breakdown).reduce((sum, val) => sum + val, 0);

  return breakdown;
};
