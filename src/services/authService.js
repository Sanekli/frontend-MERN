import axios from 'axios';


const API_URL = 'http://localhost:5000';

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/api/auth/SignIn`, credentials);
    const { token } = response.data;

    // Store the token in localStorage
    localStorage.setItem('authToken', token);

    // Return the token or other necessary data
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error.response ? error.response.data : new Error('Network Error');
  }
};

export const logout = () => {
  localStorage.removeItem('authToken');
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

export const setupAxiosInterceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

setupAxiosInterceptors();
