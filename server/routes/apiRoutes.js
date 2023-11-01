const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// RCM for Medical Billing
router.post('/insuranceVerifier', apiController.verifyInsurance);
router.get('/complianceAuditor', apiController.auditCompliance);

// Social Media Hub
router.get('/crisisManager', apiController.manageCrisis);
router.get('/sentimentAnalyzer', apiController.analyzeSentiment);

// SEO-M for Event Planning
router.get('/userExperienceAuditor', apiController.auditUserExperience);
router.get('/socialShareBooster', apiController.boostSocialShare);

// Health & Well-Being
router.get('/sleepCoach', apiController.coachSleep);
router.get('/mindfulnessMentor', apiController.mentorMindfulness);

module.exports = router;