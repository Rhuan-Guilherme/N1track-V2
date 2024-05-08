import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { Navigate, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { login, data } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/');
  }, [data, navigate]);

  if (!login) return <Navigate to="/login" />;
  return <div>ola</div>;
};

export default HomePage;
