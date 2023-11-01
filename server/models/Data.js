```javascript
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rcmData: {
    insuranceVerifier: {
      type: Object,
      required: true
    },
    complianceAuditor: {
      type: Object,
      required: true
    }
  },
  socialMediaData: {
    crisisManager: {
      type: Object,
      required: true
    },
    sentimentAnalyzer: {
      type: Object,
      required: true
    }
  },
  seoData: {
    userExperienceAuditor: {
      type: Object,
      required: true
    },
    socialShareBooster: {
      type: Object,
      required: true
    }
  },
  healthData: {
    sleepCoach: {
      type: Object,
      required: true
    },
    mindfulnessMentor: {
      type: Object,
      required: true
    }
  }
});

module.exports = mongoose.model('Data', DataSchema);
```