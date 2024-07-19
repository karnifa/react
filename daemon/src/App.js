// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/LoginView.jsx';
import Register from './components/register/RegisterView.jsx';
import Dashboard from './components/dashboard/DashboardView.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return <>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
          </Routes>
          <ToastContainer />
          </AuthProvider>
        </> 
};

export default App;