import React from 'react';
import { POST_RETURN_USERS } from '../API/api';

const useUsers = () => {
  const [user, setUser] = React.useState([]);

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

  return { user, setUser, returnUsers };
};

export default useUsers;
