import React from 'react';
import { DELETE_BIND, GET_BINDS, POST_BINDS } from '../API/api';

const useBinds = () => {
  const [bind, setBind] = React.useState([]);
  const [termoBind, setTermoBind] = React.useState([]);

  async function returnBindTermo(termo) {
    const { url, options } = POST_BINDS({
      auto: true,
      termo: termo,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setTermoBind(json);
    } catch (err) {
      console.log(err);
    }
  }

  async function returnBinds() {
    const { url, options } = GET_BINDS();
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      setBind(json);
    } catch (err) {
      console.log(err);
    }
  }
  React.useEffect(() => {
    returnBinds();
  }, []);

  async function addBind(nome, informacao) {
    const { url, options } = POST_BINDS({
      auto: false,
      termo: '',
      nome,
      informacao,
    });
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      returnBinds();
    } catch (err) {
      console.log(err);
    }
  }

  const deleteBind = React.useCallback(async (id) => {
    console.log(id);
    const { url, options } = DELETE_BIND(id);
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      returnBinds();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    bind,
    setTermoBind,
    returnBinds,
    deleteBind,
    addBind,
    returnBindTermo,
    termoBind,
  };
};

export default useBinds;
