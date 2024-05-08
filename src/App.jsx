import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Principal</h1>} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
