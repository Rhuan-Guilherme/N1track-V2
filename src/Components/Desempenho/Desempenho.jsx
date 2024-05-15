import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';

const Desempenho = () => {
  const { slide } = React.useContext(AnimeContext);
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900  pt-[3.5rem] overflow-y-auto ${
        slide ? 'px-20' : 'px-10'
      }`}
    >
      <h1 className="text-2xl font-Roboto">Grafico de abertura de chamados</h1>
    </section>
  );
};

export default Desempenho;
