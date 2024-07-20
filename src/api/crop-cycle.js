import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/`,
});

export const getCropcycles = async () => {
  try {
    const response = await summaryAPI.get('crop-cycles');
    return response.data;
  } catch (error) {
    console.error('Error fetching province:', error);
    throw error;
  }
};

