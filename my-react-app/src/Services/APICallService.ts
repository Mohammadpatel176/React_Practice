import axios, { AxiosResponse } from 'axios';

export interface APICallData {
  apiUrl: string,
  method:string,
  data?: any,
  headers:object 
}

const APIService = {
  fetchData: async (apiCallData: APICallData): Promise<AxiosResponse<any>> => {
    try {
      const response = await axios.get(apiCallData.apiUrl);
      return response; 
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

  postData: async (apiCallData: APICallData): Promise<AxiosResponse<any>> => {
    try {
      if (apiCallData.data) {
        const response = await axios.post(apiCallData.apiUrl, apiCallData.data);
        return response; 
      } else {
        throw new Error('Data is required for POST requests');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      throw error; 
    }
  },

  putData: async (apiCallData: APICallData): Promise<AxiosResponse<any>> => {
    try {
      if (apiCallData.data) {
        const response = await axios.put(apiCallData.apiUrl, apiCallData.data);
        return response;
      } else {
        throw new Error('Data is required for updating the response');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error; 
    }
  },

  deleteData: async (apiCallData: APICallData): Promise<AxiosResponse<any>> => {
    try {
      if (apiCallData.data) {
        const response = await axios.delete(apiCallData.apiUrl, { data: apiCallData.data });
        return response;
      } else {
        throw new Error('For delete operation, data is required');
      }
    } catch (error) {
      console.error('Error while deleting data:', error);
      throw error; 
    }
  }
};

export default APIService;
