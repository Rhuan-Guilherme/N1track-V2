import React, { useContext } from 'react';
import Descricao from './Descricao';
import Detail from './Detail';
import { TicketContext } from '../../../Context/TicketContext';
import ModalEdit from '../../Modal/ModalEdit';
// import ModalEdit from '../Modal/ModalEdit';

const Ticket = ({ tiket }) => {
  const { deleteTicket, fechaTicket, reabreTicket, clipboard } =
    useContext(TicketContext);
  const [showModal, setShowModal] = React.useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`flex flex-col gap-2 bg-white border dark:bg-cinza-950 w-[18.1rem] h-auto p-3 rounded-md relative font-Roboto${
        tiket.status === 'Fechado'
          ? 'border border-green-500 opacity-60'
          : 'border border-cinza-200 dark:border-cinza-500'
      } ${
        tiket.vip === 'sim' &&
        'border-yellow-400 border-2 dark:border-yellow-400 '
      }`}
    >
      {tiket.status === 'Fechado' ? (
        <button
          onClick={() => reabreTicket(tiket.id)}
          className="w-6 h-6 rounded-md bg-green-400 absolute -top-2 -right-2 text-white hover:bg-red-600 hover:scale-110 transition-all"
        >
          <span
            data-v-32fc746a=""
            className="material-symbols-outlined text-base"
          >
            check
          </span>
        </button>
      ) : (
        <button
          onClick={() => deleteTicket(tiket.id)}
          className="w-6 h-6 rounded-md bg-cinza-100 dark:bg-cinza-700 dark:text-white dark:border-cinza-500 border border-cinza-200 absolute right-2 hover:bg-red-600 hover:text-cinza-50 transition-all"
        >
          <span
            data-v-32fc746a=""
            className="material-symbols-outlined text-sm"
          >
            close
          </span>
        </button>
      )}

      <p className="text-xs font-semibold text-cinza-700 dark:text-cinza-200">
        {tiket.created_at}
      </p>

      <div className="flex items-center gap-3 text-cinza-700 dark:text-cinza-50 font-semibold">
        <p className="font-roboto">
          {tiket.nome.split(' ')[0]} - {tiket.ramal}
        </p>
        <Detail status={tiket.status} tipo={tiket.tipo} vip={tiket.vip} />
      </div>

      {tiket.area && (
        <p className="text-xs font-semibold text-cinza-900 dark:text-cinza-200">
          {tiket.area}
        </p>
      )}

      <span className="h-[1px] bg-cinza-300 dark:bg-cinza-500"></span>

      <Descricao tiket={tiket} />
      {tiket.status === 'Aberto' && (
        <>
          <span className="h-[1px] bg-cinza-300 dark:bg-cinza-500"></span>

          <div className=" h-12 rounded-lg flex justify-center items-center gap-2 ">
            <button
              onClick={handleEditClick}
              className="cursor-pointer font-semibold transition-all duration-100 bg-cinza-100 text-cinza-800 dark:bg-cinza-900 dark:text-cinza-100 px-4 py-2 rounded-lg
              border-cinza-200 dark:border-cinza-700
              border-b-[4px]  hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Editar
            </button>
            <button
              onClick={() => clipboard(tiket, tiket.tipo)}
              className="cursor-pointer font-semibold transition-all duration-100 bg-cinza-100 text-cinza-800 dark:bg-cinza-900 dark:text-cinza-100 px-4 py-2 rounded-lg
              border-cinza-200 dark:border-cinza-700
              border-b-[4px]  hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Copiar
            </button>
            <button
              onClick={() => fechaTicket(tiket.id)}
              className="cursor-pointer font-semibold transition-all duration-100 bg-cinza-100 text-cinza-800 dark:bg-cinza-900 dark:text-cinza-100 px-4 py-2 rounded-lg
              border-cinza-200 dark:border-cinza-700
              border-b-[4px]  hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
              Concluir
            </button>
            {showModal && (
              <ModalEdit
                ticket={tiket}
                show={showModal}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Ticket;
