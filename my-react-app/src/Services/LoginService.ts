import APIService, { APICallData } from './APICallService.ts';

export interface LoginData {
  uniqueCode: string,
  userName: string,
  password: string
};

export const checkLoginSuccess = async (loginData: LoginData) => {
  try {
    const apiCallData: APICallData = {
      apiUrl: 'https://api.postalpincode.in/pincode/110001', 
      data: loginData, 
    };

    const response = await APIService.fetchData(apiCallData);
    return response.data; 

  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};