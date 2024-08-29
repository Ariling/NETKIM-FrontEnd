import apiClient from '@/utils/apiClient';
import axios from 'axios';

export const getPressReleaseApi = async () => {
  try {
    const response = await apiClient.get('/api-news');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getSearchApi = async () => {
  try {
    const response = await apiClient.get('/api-prf');
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const getPrfInfoApi = async (prfnm: string) => {
  try {
    const response = await apiClient.post(`/api-prf/find`, {
      prfnm: prfnm,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const postPressReleaseApi = async (
  performanceId: number,
  key: string,
  synopsis: string,
  actors: string,
  seats: number,
  interviewee: string,
  interviewContent: string
) => {
  try {
    const response = await apiClient.post('/api-news', {
      performanceId: performanceId,
      key: key,
      synopsis: synopsis,
      actors: actors,
      seats: seats,
      interviewee: interviewee,
      interviewConten: interviewContent,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};

export const previewApi = async (
  performanceId: number,
  key: string,
  synopsis: string,
  actors: string,
  seats: number,
  interviewee: string,
  interviewContent: string
) => {
  try {
    const response = await apiClient.post('/api-news/preview', {
      performanceId: performanceId,
      key: key,
      synopsis: synopsis,
      actors: actors,
      seats: seats,
      interviewee: interviewee,
      interviewConten: interviewContent,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response;
      return result;
    }
  }
};
