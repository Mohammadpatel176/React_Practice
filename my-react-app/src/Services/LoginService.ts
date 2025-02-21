import APIService, { APICallData } from '../Services/APICallService';

export interface LoginData {
  uniqueCode: string;
  userName: string;
  password: string;
}

export const checkLoginSuccess = async (loginData: LoginData) => {
  try {
    const apiCallData: APICallData = {
      apiUrl: 'https://your-auth-api.com/login', 
      method: 'POST', 
      data: loginData, 
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await APIService.fetchData(apiCallData);

    if (!response || response.status !== 200) {
      throw new Error('Login failed! Please check your credentials.');
    }

    return response.data; 
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('An error occurred while logging in. Please try again.');
  }
};
