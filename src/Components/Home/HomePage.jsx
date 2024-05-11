import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const navigate = useNavigate();

  if (!login) return <Navigate to="/login" />;
  return <div className="w-screen bg-cinza-50 dark:bg-cinza-900">asd</div>;
};

export default HomePage;
