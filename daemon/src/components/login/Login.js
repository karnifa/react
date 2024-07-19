import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../../features/auth/authSlice';

const navigationButton = (navigate) => {
  const handleNavigate = () => {
    navigate('/register');
  };

  return handleNavigate;
};

export { navigationButton };
