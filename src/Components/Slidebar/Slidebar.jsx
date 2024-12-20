import React from 'react';
import styles from './slidebar.module.css';
import ButtonSlide from './ButtonSlide';
import Seta from '../../assets/seta.svg?react';
import { UserContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { AnimeContext } from '../../Context/AnimeContext';

const Slidebar = () => {
  const [theme, setTheme] = React.useState(false);
  const navigate = useNavigate();
  const { userLogout, login, data } = React.useContext(UserContext);
  const { slide, setSlide, setModalVips, setModalBind } =
    React.useContext(AnimeContext);

  let themeLocal = window.localStorage.getItem('theme');
  const toogleThemeMode = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'ligth');
    } else {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    }
  };

  if (!login) return <></>;
  return (
    <section
      className={`h-full relative bg-cinza-100 dark:bg-cinza-950 transition-all duration-300 z-10 border-r border-cinza-200 dark:border-cinza-700 ${
        slide ? 'w-20 md:w-60' : 'w-0'
      } ${styles.section}`}
    >
      <button
        onClick={() => setSlide(!slide)}
        className="absolute bg-azul-700 dark:border dark:border-azul-500  w-6 h-14 top-8 -right-[26px] -z-1 rounded-r-md"
      >
        <Seta
          className={`${
            slide ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300`}
        />
      </button>
      <div
        className={`${
          slide ? 'block' : 'hidden'
        } flex flex-col items-center justify-center md:items-start md:px-2 mt-7`}
      >
        <div className="w-full mb-1 p-2 rounded-lg flex gap-1">
          <div className="w-12 h-12 rounded-full border border-cinza-600">
            <img
              className="w-full rounded-full "
              src={`/avatar${4}.png`}
              alt=""
            />
          </div>
          <div className="hidden md:flex flex-col justify-center">
            <span className="text-sm font-semibold text-cinza-900 dark:text-cinza-200">
              {data.nome}
            </span>
            <span className="text-xs text-cinza-600 dark:text-cinza-300 truncate hover:text-clip max-w-32">
              {data.email}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start gap-1 lg:gap-1.5 w-full">
          <div className="h-[1px] w-full bg-cinza-400"></div>
          <ButtonSlide onClick={() => navigate('/')} icon="home" name="Home" />
          <ButtonSlide
            onClick={() => navigate('/lista')}
            icon="receipt_long"
            name="lista de chamados"
          />
          <ButtonSlide
            onClick={() => navigate('/organograma')}
            icon="table_rows"
            name="Organograma"
          />
          <ButtonSlide
            onClick={() => setModalVips(true)}
            icon="star"
            name="Vips"
          />
          {/* <ButtonSlide
            onClick={() => setModalBind(true)}
            icon="edit_note"
            name="Binds"
          /> */}
          <div className="h-[1px] w-full bg-cinza-400"></div>
          {themeLocal === 'ligth' ? (
            <ButtonSlide
              onClick={() => toogleThemeMode()}
              icon="dark_mode"
              name="Modo escuro"
            />
          ) : (
            <ButtonSlide
              onClick={() => toogleThemeMode()}
              icon="light_mode"
              name="Modo claro"
            />
          )}

          <ButtonSlide
            icon="monitoring"
            name="Desempenho"
            onClick={() => navigate('/desempenho')}
          />
          {/* <ButtonSlide icon="contact_support" name="Suporte" /> */}
          <div className="h-[1px] w-full bg-cinza-400"></div>
          {/* <ButtonSlide icon="settings" name="Configurações" /> */}
          <ButtonSlide onClick={() => userLogout()} icon="logout" name="Sair" />
        </div>
      </div>
    </section>
  );
};

export default Slidebar;
