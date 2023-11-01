```javascript
export const API_URL = process.env.API_URL;

export const DOM_IDS = {
  dashboard: "dashboard",
  insuranceVerifier: "insuranceVerifier",
  complianceAuditor: "complianceAuditor",
  crisisManager: "crisisManager",
  sentimentAnalyzer: "sentimentAnalyzer",
  userExperienceAuditor: "userExperienceAuditor",
  socialShareBooster: "socialShareBooster",
  sleepCoach: "sleepCoach",
  mindfulnessMentor: "mindfulnessMentor",
  login: "login",
  register: "register",
  logout: "logout"
};

export const FUNCTION_NAMES = {
  authenticateUser: "authenticateUser",
  aggregateData: "aggregateData",
  verifyInsurance: "verifyInsurance",
  auditCompliance: "auditCompliance",
  manageCrisis: "manageCrisis",
  analyzeSentiment: "analyzeSentiment",
  auditUserExperience: "auditUserExperience",
  boostSocialShare: "boostSocialShare",
  coachSleep: "coachSleep",
  mentorMindfulness: "mentorMindfulness",
  login: "login",
  register: "register",
  logout: "logout"
};

export const PERFORMANCE_REQUIREMENT = 3000; // in milliseconds
```