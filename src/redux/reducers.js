```javascript
import { combineReducers } from 'redux';
import { USER_LOGIN, USER_LOGOUT, UPDATE_DASHBOARD, UPDATE_INSURANCE, UPDATE_COMPLIANCE, UPDATE_CRISIS, UPDATE_SENTIMENT, UPDATE_USER_EXPERIENCE, UPDATE_SOCIAL_SHARE, UPDATE_SLEEP, UPDATE_MINDFULNESS } from './actions';

const initialState = {
  user: null,
  dashboard: {},
  insurance: {},
  compliance: {},
  crisis: {},
  sentiment: {},
  userExperience: {},
  socialShare: {},
  sleep: {},
  mindfulness: {}
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
}

function dashboardReducer(state = initialState.dashboard, action) {
  if (action.type === UPDATE_DASHBOARD) {
    return action.dashboard;
  }
  return state;
}

function insuranceReducer(state = initialState.insurance, action) {
  if (action.type === UPDATE_INSURANCE) {
    return action.insurance;
  }
  return state;
}

function complianceReducer(state = initialState.compliance, action) {
  if (action.type === UPDATE_COMPLIANCE) {
    return action.compliance;
  }
  return state;
}

function crisisReducer(state = initialState.crisis, action) {
  if (action.type === UPDATE_CRISIS) {
    return action.crisis;
  }
  return state;
}

function sentimentReducer(state = initialState.sentiment, action) {
  if (action.type === UPDATE_SENTIMENT) {
    return action.sentiment;
  }
  return state;
}

function userExperienceReducer(state = initialState.userExperience, action) {
  if (action.type === UPDATE_USER_EXPERIENCE) {
    return action.userExperience;
  }
  return state;
}

function socialShareReducer(state = initialState.socialShare, action) {
  if (action.type === UPDATE_SOCIAL_SHARE) {
    return action.socialShare;
  }
  return state;
}

function sleepReducer(state = initialState.sleep, action) {
  if (action.type === UPDATE_SLEEP) {
    return action.sleep;
  }
  return state;
}

function mindfulnessReducer(state = initialState.mindfulness, action) {
  if (action.type === UPDATE_MINDFULNESS) {
    return action.mindfulness;
  }
  return state;
}

export default combineReducers({
  user: userReducer,
  dashboard: dashboardReducer,
  insurance: insuranceReducer,
  compliance: complianceReducer,
  crisis: crisisReducer,
  sentiment: sentimentReducer,
  userExperience: userExperienceReducer,
  socialShare: socialShareReducer,
  sleep: sleepReducer,
  mindfulness: mindfulnessReducer
});
```