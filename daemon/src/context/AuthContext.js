// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';
import authAPI from '../api/authAPI';
import { getAuthToken, setAuthToken, removeAuthToken } from '../utils/authCookies';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      authAPI.getUser(token)
        .then(setUser)
        .catch(console.error);
    }
  }, []);

  const login = async (credentials) => {   
    const data = await authAPI.login(credentials);        
    setAuthToken(data.token);       
    const userData = await authAPI.getUser(data.token,data.id);    
    setUser(userData);
    
  };

  const logout = () => {
    removeAuthToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};