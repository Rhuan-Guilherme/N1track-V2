import React from 'react';
import { ADD_VIPS, DELETE_VIPS, GET_VIPS, POST_RETURN_USERS } from '../API/api';

const useUsers = () => {
  const [user, setUser] = React.useState([]);
  const [vips, setVips] = React.useState([]);
  const [value, setValue] = React.useState(null);

  async function returnUsers(termo) {
    const { url, options } = POST_RETURN_USERS({ termo: termo });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setUser(json);
    } catch (err) {
      console.log(err);
    }
  }

  async function returnVips() {
    const { url, options } = GET_VIPS();
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setVips(json);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    returnVips();
  }, []);

  const deleteVip = React.useCallback(async (id) => {
    try {
      const { url, options } = DELETE_VIPS({ id, remove: 'true' });
      const response = await fetch(url, options);
      returnVips();
    } catch (error) {
      console.error('Ocorreu um erro ao excluir o VIP:', error);
    }
  }, []);

  const addVips = React.useCallback(async (login) => {
    try {
      const { url, options } = ADD_VIPS({ login });
      const response = await fetch(url, options);
      console.log(response);
      returnVips();
    } catch (error) {
      console.error('Ocorreu um erro ao adicionar o VIP:', error);
    }
  }, []);

  return {
    user,
    setUser,
    returnUsers,
    returnVips,
    vips,
    setVips,
    value,
    setValue,
    deleteVip,
    addVips,
  };
};

export default useUsers;
