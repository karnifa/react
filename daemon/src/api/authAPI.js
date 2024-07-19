// src/api/authAPI.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/system/usuarios/signin`, credentials);  
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Failed to login');
  }
};

const getUser = async (token,id) => {  
  console.log(`${API_URL}/system/usuarios/${id}`)
  const response = await axios.get(`${API_URL}/system/usuarios/${id}`, {      
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response)
    return response.data;
}

const register = async (userData) => {
  const response = await axios.post(`${API_URL}/system/usuarios`, userData, {
    headers: {
      'Content-Type': 'application/json'
    }
  }); 

  if (response.status === 200 || response.status === 201) {
    return response.data;
  } else {
    throw new Error('Failed to register');
  }
};

export default {
  login,
  register,
  getUser
};