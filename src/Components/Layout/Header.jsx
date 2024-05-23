import React from 'react';
import { UserContext } from '../../Context/UserContext';
import Logo from '../../assets/Logo.svg?react';
import styles from './layout.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const { login, data } = React.useContext(UserContext);
  

  if (!login) return <></>;
  return (
    <header className="grid grid-cols-3 py-3 px-6 sm:px-16 bg-cinza-100 dark:bg-cinza-950 dark:border-cinza-700 border-b border-cinza-200 text-cinza-800 dark:text-cinza-100 transition-all duration-300">
      <div className={`${styles.logo} flex items-center justify-self-start`}>
        <Logo />
        <span className="font-Roboto font-semibold text-2xl pl-3">N1Track</span>
      </div>
      <ul className="sm:flex items-center gap-8 justify-self-center font-Roboto font-medium hidden">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/organograma">Organograma</NavLink>
        </li>
        <li>
          <NavLink to="/lista">Lista</NavLink>
        </li>
      </ul>
      <div className="sm:flex items-center gap-8 justify-self-end font-Roboto font-medium hidden">
          <div className="w-12 h-12 rounded-full border border-cinza-600">
            <img
              className="w-full rounded-full "
              src={`/avatar${4}.png`}
              alt=""
            />
          </div>
          <div className="hidden lg:flex flex-col justify-center">
            <span className="text-sm font-semibold text-cinza-900 dark:text-cinza-200">
              {data.nome}
            </span>
            <span className="text-xs text-cinza-600 dark:text-cinza-300 ">
              {data.email}
            </span>
          </div>
        </div>
    </header>
  );
};

export default Header;
