import apiClient from '@/utils/apiClient';
import axios from 'axios';

export const deleteAdminReporterApi = async (reporterId: number) => {
  try {
    const response = await apiClient.delete(`/api-admin/default-pr/${reporterId}`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getAdminReporterApi = async () => {
  try {
    const response = await apiClient.get('/api-admin/default-pr');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const postAdminReporterApi = async (
  reporterName: string,
  email: string,
  press: string,
  rtype: string
) => {
  try {
    const response = await apiClient.post('/api-admin/default-pr', {
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

export const postAdminApi = async (memberIdx: number, companyName: string) => {
  try {
    const response = await apiClient.post('/api-admin', {
      memberIdx: memberIdx,
      companyName: companyName,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getAdminApi = async () => {
  try {
    const response = await apiClient.get('/api-admin');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};
