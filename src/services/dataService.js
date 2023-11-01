import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/dashboard`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchInsuranceData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/insurance`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchComplianceData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/compliance`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchCrisisData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/crisis`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSentimentData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sentiment`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserExperienceData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user-experience`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSocialShareData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/social-share`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSleepData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sleep`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMindfulnessData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/mindfulness`);
    return response.data;
  } catch (error) {
    throw error;
  }
};