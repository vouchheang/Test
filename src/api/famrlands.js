import axios from 'axios';
import API_BASE_URL from '../config';

const farmlandsAPI = axios.create({
  baseURL: `${API_BASE_URL}`,
});


export const getFarmlands = async () => {
  try {
    const response = await farmlandsAPI.get('/farmlands');
    return response.data;
  } catch (error) {
    console.error('Error fetching farmlands:', error);
    throw error;
  }
};






