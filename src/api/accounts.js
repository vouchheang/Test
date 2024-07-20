import axios from 'axios';
import API_BASE_URL from '../config';

const accountsAPI = axios.create({
  baseURL: `${API_BASE_URL}`,
});


export const getAccounts = async () => {
  try {
    const response = await accountsAPI.get('/accounts');
    return response.data;
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};






