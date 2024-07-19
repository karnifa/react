// src/components/Dashboard.js

import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user.login}!</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;