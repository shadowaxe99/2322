import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchInsuranceData = async () => {
  try {
    const response = await axios.get(`${API_URL}/insurance`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSocialMentions = async () => {
  try {
    const response = await axios.get(`${API_URL}/socialMentions`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSentimentTrends = async () => {
  try {
    const response = await axios.get(`${API_URL}/sentimentTrends`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserExperienceData = async () => {
  try {
    const response = await axios.get(`${API_URL}/userExperience`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSocialShareMetrics = async () => {
  try {
    const response = await axios.get(`${API_URL}/socialShare`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSleepCycleData = async () => {
  try {
    const response = await axios.get(`${API_URL}/sleepCycle`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBiofeedbackData = async () => {
  try {
    const response = await axios.get(`${API_URL}/biofeedback`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};