import axios from 'axios';
import API_BASE_URL from '../config';

const summaryAPI = axios.create({
  baseURL: `${API_BASE_URL}/`,
});



export const getFarmers = async () => {
  try {
    const response = await summaryAPI.get('farmers');
    return response.data;
  } catch (error) {
    console.error('Error fetching  farmers:', error);
    throw error;
  }
};

