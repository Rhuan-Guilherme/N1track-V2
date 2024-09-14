import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';
import { AnimeStorage } from './Context/AnimeContext';
import { TicketStorage } from './Context/TicketContext';
import HomePage from './Components/Home/HomePage';
import Header from './Components/Layout/Header';
import Slidebar from './Components/Slidebar/Slidebar';
import ModalVips from './Components/Modal/ModalVips';
import ModalAddUser from './Components/Modal/ModalAddUser';
import ModalBindInfo from './Components/Modal/ModalBindInfo';
import Organograma from './Components/Organograma/Organograma';
import Desempenho from './Components/Desempenho/Desempenho';
import ListaChamados from './Components/Lista/ListaChamados';


function App() {
  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <section className="containerSection">
        
          <AnimeStorage>
            <Slidebar />
            <TicketStorage>
              <ModalVips />
              <ModalAddUser />
              <ModalBindInfo />
              <Routes>
              
                <Route path="/*" element={<HomePage />} />
                <Route path="/organograma" element={<Organograma />} />
                <Route path="/desempenho" element={<Desempenho />} />
                <Route path="/lista" element={<ListaChamados />} />
                <Route path="/login/*" element={<Login />} />
              </Routes>
            </TicketStorage>
          </AnimeStorage>
        </section>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
