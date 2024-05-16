import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';
import { BarChart } from '@mui/x-charts/BarChart';
import { GET_DATA_GRAPICHS } from '../../API/api';

const Desempenho = () => {
  const { slide } = React.useContext(AnimeContext);
  const [data, setData] = React.useState('');

  async function getData() {
    try {
      const { url, options } = GET_DATA_GRAPICHS();
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
    } catch (err) {
      console.log(err);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <section
      className={`w-screen bg-cinza-50 dark:bg-cinza-900  pt-[3.5rem] overflow-y-auto ${
        slide ? 'px-20' : 'px-10'
      }`}
    >
      <h1 className="text-2xl font-Roboto mb-2 border-b inline-block ">
        Grafico de abertura de chamados
      </h1>
      {data && (
        <section className="bg-cinza-100 rounded-lg flex">
          <BarChart series={data} width={window.innerWidth} height={780} />
        </section>
      )}
    </section>
  );
};

export default Desempenho;
