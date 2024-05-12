import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';

const ReiteracaoForm = () => {
  const {
    nome,
    setNome,
    login,
    setLogin,
    ramal,
    setRamal,
    chamado,
    setChamado,
    postTickets,
  } = React.useContext(TicketContext);

  function handleSubmit(event) {
    event.preventDefault();
    postTickets('reiteracao');
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row ">
        <Input
          label="Nome do usuário"
          type="text"
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <Input
          label="Login do usuário"
          type="text"
          name="login"
          value={login}
          onChange={({ target }) => setLogin(target.value)}
        />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          label="Ramal"
          type="text"
          name="ramal"
          value={ramal}
          onChange={({ target }) => setRamal(target.value)}
        />
        <Input
          label="Nº do chamado"
          type="text"
          name="chamado"
          value={chamado}
          onChange={({ target }) => setChamado(target.value)}
        />
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default ReiteracaoForm;
