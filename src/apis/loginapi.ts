import apiClient from '@/utils/apiClient';
import axios from 'axios';

export const SignUpUserInfoApi = async (
  username: string,
  phone: string,
  password: string,
  email: string
) => {
  const phonenumber = `${phone.slice(0, 3)}-${phone.slice(3, 7)}-${phone.slice(7)}`;
  try {
    const response = await apiClient.post('/api-member/join', {
      username: username,
      phone: phonenumber,
      password: password,
      email: email,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};
