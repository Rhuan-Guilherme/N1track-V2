import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AnimeContext } from '../../Context/AnimeContext';
import FormOptions from './FormOptions';
import ChamadoForm from './Forms/ChamadoForm';
import { TicketContext } from '../../Context/TicketContext';
import ReiteracaoForm from './Forms/ReiteracaoForm';
import TrasnferenciaForm from './Forms/TrasnferenciaForm';
import QuedaForm from './Forms/QuedaForm';
import Ticket from './Tickets/Ticket';

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const { slide } = React.useContext(AnimeContext);
  const { tickets } = React.useContext(TicketContext);

  if (!login) return <Navigate to="/login" />;
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900 flex flex-col items-center pt-8 overflow-y-auto ${
        slide ? 'px-10' : 'pl-0'
      }`}
    >
      <div className="mb-10">
        <FormOptions />
      </div>
      <div className="w-auto md:w-10/12 xl:w-6/12 border border-cinza-200 rounded-md p-5 dark:bg-cinza-700 dark:border-cinza-600">
        <Routes>
          <Route path="/" element={<ChamadoForm />} />
          <Route path="reiteracao" element={<ReiteracaoForm />} />
          <Route path="trasnferencia" element={<TrasnferenciaForm />} />
          <Route path="queda" element={<QuedaForm />} />
        </Routes>
      </div>
      <div className="bg-cinza-100 dark:bg-cinza-700 h-auto w-10/12 mt-5 m-3 flex flex-wrap justify-center items-center px-3 py-5 gap-3 rounded-lg ">
        {tickets && tickets.map((ticket) => <Ticket tiket={ticket} />)}
      </div>
    </section>
  );
};

export default HomePage;
