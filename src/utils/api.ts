import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY; // Use VITE_ prefix
const BASE_URL = 'https://v6.exchangerate-api.com/v6'; // Base URL for the API

export const fetchExchangeRates = async (baseCurrency: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw new Error('Failed to fetch exchange rates');
  }
};

export const convertCurrency = (amount: number, rate: number): number => {
  return Number((amount * rate).toFixed(2));
};
