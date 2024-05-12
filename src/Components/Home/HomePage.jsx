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

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const { slide } = React.useContext(AnimeContext);
  const { nome } = React.useContext(TicketContext);

  if (!login) return <Navigate to="/login" />;
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900 flex flex-col items-center pt-8 ${
        slide ? 'pl-10' : 'pl-0'
      }`}
    >
      <section className="mb-10">
        <FormOptions />
      </section>
      <div className="w-auto md:w-10/12 lg:w-6/12 border border-cinza-200 rounded-md p-5 dark:bg-cinza-700 dark:border-cinza-600">
        <Routes>
          <Route path="/" element={<ChamadoForm />} />
          <Route path="reiteracao" element={<ReiteracaoForm />} />
          <Route path="trasnferencia" element={<TrasnferenciaForm />} />
          <Route path="queda" element={<QuedaForm />} />
        </Routes>
      </div>
      {nome}
    </section>
  );
};

export default HomePage;
