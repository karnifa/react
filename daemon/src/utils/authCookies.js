// src/utils/authCookies.js

import Cookies from 'js-cookie';

const TOKEN_KEY = 'auth_token';

export const setAuthToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Cookie expira em 7 dias
};

export const getAuthToken = () => {
  return Cookies.get(TOKEN_KEY);
};

export const removeAuthToken = () => {
  Cookies.remove(TOKEN_KEY);
};