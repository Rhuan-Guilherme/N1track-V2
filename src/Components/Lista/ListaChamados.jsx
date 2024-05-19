import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';
import { TicketContext } from '../../Context/TicketContext';
import Ticket from '../Home/Tickets/Ticket';
import { UserContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const ListaChamados = () => {
  const { slide } = React.useContext(AnimeContext);
  const { tickets, getTikcets } = React.useContext(TicketContext);
  const { login } = React.useContext(UserContext);
  const [ticketsLimit, setTicketsLimit] = React.useState(50);
  const [status, setStatus] = React.useState('all');

  const moreTickets = () => {
    setTicketsLimit((prevTickets) => {
      const newTickets = prevTickets + 50;
      getTikcets(newTickets, status);
      return newTickets;
    });
  };

  if (!login) return <Navigate to="/login" />;
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900 flex flex-col items-center pt-8 overflow-y-auto p-4 ${
        slide ? 'px-10' : 'pl-0'
      }`}
    >
      <div className="flex gap-3 flex-initial  w-10/12 font-Poppins text-sm">
        <button
          onClick={() => {
            getTikcets(50, 'Aberto');
            setStatus('Aberto');
          }}
          className="dark:bg-cinza-700 bg-cinza-100 border-cinza-300  py-2 px-3 rounded-md border font-semibold dark:text-cinza-200 dark:border-cinza-600"
        >
          Abertos
        </button>
        <button
          onClick={() => {
            getTikcets(50, 'Fechado');
            setStatus('Fechado');
          }}
          className="dark:bg-cinza-700 bg-cinza-100 border-cinza-300  py-2 px-3 rounded-md border font-semibold dark:text-cinza-200 dark:border-cinza-600"
        >
          Fechados
        </button>
        <button
          onClick={() => {
            getTikcets(50, 'all');
            setStatus('all');
          }}
          className="dark:bg-cinza-700 bg-cinza-100 border-cinza-300  py-2 px-3 rounded-md border font-semibold dark:text-cinza-200 dark:border-cinza-600"
        >
          Todos
        </button>
      </div>

      <div className="bg-cinza-100 dark:bg-cinza-700 h-auto w-10/12 mt-5 m-3 flex flex-wrap justify-center items-center px-3 py-5 gap-3 rounded-lg ">
        {tickets && tickets.map((ticket) => <Ticket tiket={ticket} />)}
      </div>
      <button
        className="dark:bg-cinza-700 bg-cinza-100 border-cinza-300  py-2 px-3 rounded-md border font-semibold dark:text-cinza-200 dark:border-cinza-600"
        onClick={() => moreTickets()}
      >
        Mostrar mais chamados
      </button>
    </section>
  );
};

export default ListaChamados;
