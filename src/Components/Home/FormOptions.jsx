import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const FormOptions = () => {
  return (
    <nav
      className={`${styles.nav} flex gap-4 font-Roboto text-cinza-900 dark:text-cinza-100`}
    >
      <NavLink
        to="/"
        className="flex items-center justify-center gap-2 p-2 rounded-md border border-cinza-300 dark:border-cinza-500 dark:bg-cinza-950 hover:bg-cinza-200 hover:shadow hover:text-cinza-800 dark:hover:bg-cinza-900 dark:hover:text-cinza-200 transition-all"
      >
        <span className="material-symbols-outlined ">description</span>
        <span className="hidden md:inline">Chamado</span>
      </NavLink>

      <NavLink
        to="/reiteracao"
        className="flex items-center justify-center gap-2 p-2 rounded-md border border-cinza-300 dark:border-cinza-500 dark:bg-cinza-950 hover:bg-cinza-200 hover:shadow hover:text-cinza-800 dark:hover:bg-cinza-900 dark:hover:text-cinza-200 transition-all"
      >
        <span className="material-symbols-outlined ">
          notification_important
        </span>
        <span className="hidden md:inline">Reiteração</span>
      </NavLink>

      <NavLink
        to="/trasnferencia"
        className="flex items-center justify-center gap-2 p-2 rounded-md border border-cinza-300 dark:border-cinza-500 dark:bg-cinza-950 hover:bg-cinza-200 hover:shadow hover:text-cinza-800 dark:hover:bg-cinza-900 dark:hover:text-cinza-200 transition-all"
      >
        <span className="material-symbols-outlined ">phone_forwarded</span>
        <span className="hidden md:inline">Transferência</span>
      </NavLink>

      <NavLink
        to="/queda"
        className="flex items-center justify-center gap-2 p-2 rounded-md border border-cinza-300 dark:border-cinza-500 dark:bg-cinza-950 hover:bg-cinza-200 hover:shadow hover:text-cinza-800 dark:hover:bg-cinza-900 dark:hover:text-cinza-200 transition-all"
      >
        <span className="material-symbols-outlined ">phone_missed</span>
        <span className="hidden md:inline">Queda</span>
      </NavLink>
    </nav>
  );
};

export default FormOptions;
