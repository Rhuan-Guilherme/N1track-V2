import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';

const Organograma = () => {
  const { slide } = React.useContext(AnimeContext);
  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900  pt-[3.5rem] overflow-y-auto ${
        slide ? 'px-20' : 'px-10'
      }`}
    ></section>
  );
};

export default Organograma;
