import React from 'react';
import { GET_USER, POST_TOKEN, POST_VALIDATE_TOKEN } from '../API/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const userLogout = React.useCallback(() => {
    setData(null);
    setLogin(false);
    setError(null);
    setLoading(false);
    navigate('/login');
    window.localStorage.removeItem('token');
  }, [navigate]);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    try {
      setError(false);
      const response = await fetch(url, options);
      const { data } = await response.json();
      setData(data);
      setLogin(true);
    } catch (err) {
      console.log(err);
      setLogin(false);
    }
  }

  async function userLogin(email, senha) {
    const { url, options } = POST_TOKEN({
      email: email,
      senha: senha,
    });
    try {
      setLoading(true);
      setError(false);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Usuário ou senha inválidos.');
      const { token } = await response.json();
      await getUser(token);
      window.localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      setError(err.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function validateToken() {
      const token = window.localStorage.getItem('token');
      if (token) {
        const { url, options } = POST_VALIDATE_TOKEN({ token });
        try {
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido!');
          getUser(token);
        } catch (err) {
          userLogout();
          console.log(err);
        }
      }
    }
    validateToken();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ data, error, login, loading, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
