import React from 'react';
import { UserContext } from './UserContext';
import {
  DELETE_TICKETS,
  GET_TIKECTS,
  POST_TIKCET,
  PUT_FECHA_TICKETS,
  PUT_REABRE_TICKETS,
} from '../API/api';

export const TicketContext = React.createContext();

export const TicketStorage = ({ children }) => {
  const { data } = React.useContext(UserContext);
  const [id, setId] = React.useState(null);
  const [tickets, setTickets] = React.useState([]);
  const [copy, setCopy] = React.useState(false);

  const [nome, setNome] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [ramal, setRamal] = React.useState('');
  const [patrimonio, setPatrimonio] = React.useState('');
  const [informacao, setInformacao] = React.useState('');
  const [local, setLocal] = React.useState('');
  const [area, setArea] = React.useState('');
  const [chamado, setChamado] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [destinatario, setDestinatario] = React.useState('');
  const [vip, setVip] = React.useState(null);

  const getTikcets = React.useCallback(
    async (limit = 50, status = 'all') => {
      try {
        const { url, options } = GET_TIKECTS(id, limit, status);
        const response = await fetch(url, options);
        const json = await response.json();
        setTickets(json);
      } catch (err) {
        console.log(err);
      }
    },
    [id],
  );

  async function postTickets(tipo) {
    const now = new Date();
    const dia = now.getDate();
    const mes = now.getMonth() + 1;
    const ano = now.getFullYear();
    const hora = now.getHours();
    const minuto = now.getMinutes();
    const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;

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
        chamado: chamado,
        destinatario: destinatario,
        tipo: tipo,
        created_at: `${dia}/${mes}/${ano} às ${hora}:${minutoFormatado}`,
        vip: vip ? 'sim' : 'nao',
      });
      const response = await fetch(url, options);
      const json = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      setLogin('');
      setNome('');
      setArea('');
      setCargo('');
      setRamal('');
      setPatrimonio('');
      setInformacao('');
      setLocal('');
      setVip('');
      setDestinatario('');
      setChamado('');
      getTikcets();
    }
  }

  async function deleteTicket(id) {
    try {
      const { url, options } = DELETE_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      getTikcets();
    } catch (err) {
      console.log(err);
    }
  }

  async function fechaTicket(id) {
    try {
      const { url, options } = PUT_FECHA_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      getTikcets();
    } catch (err) {
      console.log(err);
    }
  }

  async function reabreTicket(id) {
    try {
      const { url, options } = PUT_REABRE_TICKETS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      getTikcets();
    } catch (err) {
      console.log(err);
    }
  }

  const clipboard = (ticket, tipo) => {
    let cardText = '';
    switch (tipo) {
      case 'chamado':
        cardText = `Prezados, o Sr(a). ${
          ticket.nome.split(' ')[0]
        } entrou em contato ${ticket.informacao}.\n\nNome: ${
          ticket.nome
        }\nLogin: ${ticket.login}\nRamal: ${ticket.ramal}\nLocal: ${
          ticket.local
        }\nPatrimônio: ${ticket.patrimonio}\n
        `;
        break;
      case 'queda':
        cardText = `Senhor(a) Senhor(a) não identificado entrou em contato com o helpdesk no ramal 3416 e interrompeu a ligação antes do atendimento inicial.\n\nRamal: ${ticket.ramal}`;
        break;
      case 'trasnferencia':
        cardText = `Senhor(a) ${ticket.nome} entrou em contato solicitando transferência de ligação para o(a) senhor(a) ${ticket.destinatario}.\n\nRamal: ${ticket.ramal}`;
        break;
      case 'reiteracao':
        cardText = `Senhor(a) ${ticket.nome} entrou em contato requisitando a reiteração e brevidade no chamado SERVICEDESK-${ticket.chamado}\n\nLogin: ${ticket.login}\nRamal: ${ticket.ramal}`;
        break;
      default:
        console.error('Tipo de cartão desconhecido:', tipo);
        break;
    }

    navigator.clipboard
      .writeText(cardText)
      .then(() => {
        setCopy(true);
        setTimeout(() => {
          setCopy(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Erro ao copiar o conteúdo:', err);
        alert(
          'Erro ao copiar o conteúdo. Verifique se o navegador suporta essa funcionalidade.',
        );
      });
  };

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
    }
    getTikcets();
  }, [getTikcets, data]);

  return (
    <TicketContext.Provider
      value={{
        nome,
        setNome,
        login,
        setLogin,
        ramal,
        setRamal,
        patrimonio,
        setPatrimonio,
        informacao,
        setInformacao,
        local,
        setLocal,
        area,
        setArea,
        chamado,
        setChamado,
        destinatario,
        setDestinatario,
        cargo,
        setCargo,
        vip,
        setVip,
        postTickets,
        getTikcets,
        tickets,
        deleteTicket,
        fechaTicket,
        reabreTicket,
        copy,
        setCopy,
        clipboard,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
