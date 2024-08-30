import apiClient from '@/utils/apiClient';
import { SERVER_URL } from '@/utils/jsonURL';
import axios from 'axios';

export const MypageRoleChangeApi = async (certificate: File) => {
  const formData = new FormData();
  formData.append('certificate', certificate);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const response = await apiClient.post(
      `${SERVER_URL}/api-member/role-manager`,
      formData,
      config
    );
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const VerifyEmailApi = async () => {
  try {
    const response = await apiClient.post(`${SERVER_URL}/api-member/verify`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getMemberApi = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/api-member`);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};
