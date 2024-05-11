import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Logo from '../../assets/Logo.svg?react';
import LoginForm from './LoginForm';
import LoginCadastro from './LoginCadastro';
import { UserContext } from '../../Context/UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login) return <Navigate to="/" />;
  return (
    <div className="grid grid-cols-2 h-screen w-screen p-2">
      <section className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="cadastro" element={<LoginCadastro />} />
        </Routes>
      </section>
      <section className="flex flex-col items-center justify-center bg-gradient-to-b from-azul-600 to-azul-900 rounded-lg">
        <div className="mb-4">
          <Logo />
        </div>
        <h2 className="text-[105px] leading-none font-bold text-azul-50 font-Roboto">
          N1Track
        </h2>
        <p className="text-center font-Roboto text-azul-100">
          Sua solução completa para o gerenciamento eficientee <br /> o registro
          de chamados em 1º nível.
        </p>
      </section>
    </div>
  );
};

export default Login;
