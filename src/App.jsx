import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { UserStorage } from './Context/UserContext';
import HomePage from './Components/Home/HomePage';
import Header from './Components/Layout/Header';
import Slidebar from './Components/Slidebar/Slidebar';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <section className="containerSection">
          <Slidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
        </section>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
