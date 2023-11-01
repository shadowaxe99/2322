// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const FETCH_DASHBOARD_DATA = 'FETCH_DASHBOARD_DATA';
export const FETCH_INSURANCE_DATA = 'FETCH_INSURANCE_DATA';
export const FETCH_COMPLIANCE_DATA = 'FETCH_COMPLIANCE_DATA';
export const FETCH_SOCIAL_MENTIONS = 'FETCH_SOCIAL_MENTIONS';
export const FETCH_SENTIMENT_DATA = 'FETCH_SENTIMENT_DATA';
export const FETCH_USER_EXPERIENCE_DATA = 'FETCH_USER_EXPERIENCE_DATA';
export const FETCH_SOCIAL_SHARE_DATA = 'FETCH_SOCIAL_SHARE_DATA';
export const FETCH_SLEEP_CYCLE_DATA = 'FETCH_SLEEP_CYCLE_DATA';
export const FETCH_MINDFULNESS_DATA = 'FETCH_MINDFULNESS_DATA';

// Action Creators
export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});

export const fetchDashboardData = (data) => ({
  type: FETCH_DASHBOARD_DATA,
  payload: data
});

export const fetchInsuranceData = (data) => ({
  type: FETCH_INSURANCE_DATA,
  payload: data
});

export const fetchComplianceData = (data) => ({
  type: FETCH_COMPLIANCE_DATA,
  payload: data
});

export const fetchSocialMentions = (data) => ({
  type: FETCH_SOCIAL_MENTIONS,
  payload: data
});

export const fetchSentimentData = (data) => ({
  type: FETCH_SENTIMENT_DATA,
  payload: data
});

export const fetchUserExperienceData = (data) => ({
  type: FETCH_USER_EXPERIENCE_DATA,
  payload: data
});

export const fetchSocialShareData = (data) => ({
  type: FETCH_SOCIAL_SHARE_DATA,
  payload: data
});

export const fetchSleepCycleData = (data) => ({
  type: FETCH_SLEEP_CYCLE_DATA,
  payload: data
});

export const fetchMindfulnessData = (data) => ({
  type: FETCH_MINDFULNESS_DATA,
  payload: data
});