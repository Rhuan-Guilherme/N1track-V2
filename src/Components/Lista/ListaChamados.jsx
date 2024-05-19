import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';
import { TicketContext } from '../../Context/TicketContext';
import Ticket from '../Home/Tickets/Ticket';
import { UserContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const ListaChamados = () => {
  const { slide } = React.useContext(AnimeContext);
  const { tickets, moreTickets, getTikcets } = React.useContext(TicketContext);
  const { login } = React.useContext(UserContext);

  if (!login) return <Navigate to="/login" />;
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900 flex flex-col items-center pt-8 overflow-y-auto ${
        slide ? 'px-10' : 'pl-0'
      }`}
    >
      <div className=" flex gap-3 flex-initial">
        <button
          onClick={() => getTikcets(50, 'Aberto')}
          className="dark:bg-cinza-700 p-2 rounded-md font-semibold dark:text-cinza-100"
        >
          Aberto
        </button>
        <button
          onClick={() => getTikcets(50, 'Fechado')}
          className="dark:bg-cinza-700 p-2 rounded-md font-semibold dark:text-cinza-100"
        >
          Fechado
        </button>
        <button
          onClick={() => getTikcets(50, 'all')}
          className="dark:bg-cinza-700 p-2 rounded-md font-semibold dark:text-cinza-100"
        >
          Todos
        </button>
      </div>

      <div className="bg-cinza-100 dark:bg-cinza-700 h-auto w-10/12 mt-5 m-3 flex flex-wrap justify-center items-center px-3 py-5 gap-3 rounded-lg ">
        {tickets && tickets.map((ticket) => <Ticket tiket={ticket} />)}
      </div>
      <button className="bg-cinza-50" onClick={() => moreTickets()}>
        maisasds
      </button>
    </section>
  );
};

export default ListaChamados;
