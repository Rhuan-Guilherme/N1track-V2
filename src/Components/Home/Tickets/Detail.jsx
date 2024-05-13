import React from 'react';

const Detail = ({ status, tipo, vip }) => {
  return (
    <>
      {vip === 'sim' && (
        <span
          className={`border ${
            status === 'Fechado'
              ? 'bg-cinza-300 dark:bg-cinza-800 border-cinza-600 text-cinza-400'
              : 'bg-[#fcec63] dark:bg-[#4a4c29] dark:text-yellow-200 border-yellow-300 text-yellow-600'
          }   rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 bg-yellow-400 ${
              status === 'Fechado' ? 'bg-cinza-500' : 'bg-yellow-400'
            } rounded-full`}
          ></span>
          VIP
        </span>
      )}
      {tipo === 'chamado' && vip === 'nao' && (
        <span
          className={`border ${
            status === 'Fechado'
              ? 'bg-cinza-300 dark:bg-cinza-800 border-cinza-600 text-cinza-400'
              : 'bg-[#CECAFF] dark:bg-[#29324C] dark:text-azul-200 border-azul-600 text-azul-900'
          }   rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 bg-azul-600 ${
              status === 'Fechado' ? 'bg-cinza-500' : 'bg-azul-600'
            } rounded-full`}
          ></span>
          Chamado
        </span>
      )}

      {tipo === 'queda' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 dark:bg-cinza-800 border-cinza-600 text-cinza-400'
              : 'bg-red-200 dark:bg-[#663636] border-red-600 text-red-900 dark:text-red-300'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2  ${
              status === 'Fechado' ? 'bg-cinza-500' : 'bg-red-600'
            } rounded-full`}
          ></span>
          Queda
        </span>
      )}
      {tipo === 'reiteracao' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 dark:bg-cinza-800 border-cinza-600 text-cinza-400'
              : 'bg-orange-200 dark:bg-[#5a381fbe] border-orange-600 text-orange-900 dark:text-orange-300'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 ${
              status === 'Fechado' ? 'bg-cinza-500' : 'bg-orange-600'
            }   rounded-full`}
          ></span>
          Reiteração
        </span>
      )}
      {tipo === 'trasnferencia' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 dark:bg-cinza-800 border-cinza-600 text-cinza-400'
              : 'bg-azul-100 dark:bg-[#2f4958] border-azul-400 text-azul-900 dark:text-azul-200'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 ${
              status === 'Fechado' ? 'bg-cinza-500' : 'bg-azul-400'
            }  rounded-full`}
          ></span>
          Trasnferência
        </span>
      )}
    </>
  );
};

export default Detail;
