import apiClient from '@/utils/apiClient';
import axios from 'axios';

export const deleteReporterApi = async (reporterId: number) => {
  try {
    const response = await apiClient.delete(`/api-reporter/${reporterId}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getReporterApi = async () => {
  try {
    const response = await apiClient.get('/api-reporter');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const postReporterApi = async (
  reporterName: string,
  email: string,
  press: string,
  rtype: string
) => {
  try {
    const response = await apiClient.post('/api-reporter', {
      reporterName: reporterName,
      email: email,
      press: press,
      rtype: rtype,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};
