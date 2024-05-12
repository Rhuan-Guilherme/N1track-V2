import React from 'react';
import { POST_TIKCET } from '../API/api';
import { TicketContext } from '../Context/TicketContext';
import { UserContext } from '../Context/UserContext';

const useTickets = () => {
  const { data } = React.useContext(UserContext);
  const { nome, login, ramal, patrimonio, informacao, local } =
    React.useContext(TicketContext);

  async function postTickets(tipo) {
    try {
      const { url, options } = POST_TIKCET({
        user_id: data.id,
        criador: data.nome,
        nome: nome,
        login: login,
        ramal: ramal,
        patrimonio: patrimonio,
        informacao: informacao,
        local: local,
        tipo: tipo,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  }

  return { postTickets };
};

export default useTickets;
