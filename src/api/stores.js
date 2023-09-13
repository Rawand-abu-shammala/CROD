import axios from 'axios';

const baseURL = 'https://some-data.onrender.com';

export const getAllStores = async () => {
  try {
    const response = await axios.get(`${baseURL}/stores`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStoreById = async (id) => {
  try {
    const response = await axios.get(`${baseURL}/stores/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createStore = async (storeData) => {
  try {
    const response = await axios.post(`${baseURL}/stores`, storeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateStore = async (id, storeData) => {
  try {
    const response = await axios.put(`${baseURL}/stores/${id}`, storeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteStore = async (id) => {
  try {
    await axios.delete(`${baseURL}/stores/${id}`);
  } catch (error) {
    throw error;
  }
};
