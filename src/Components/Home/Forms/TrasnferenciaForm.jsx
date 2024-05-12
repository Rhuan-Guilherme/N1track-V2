import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';

const TrasnferenciaForm = () => {
  const {
    nome,
    setNome,
    ramal,
    setRamal,
    destinatario,
    setDestinatario,
    postTickets,
  } = React.useContext(TicketContext);

  function handleSubmit(event) {
    event.preventDefault();
    postTickets('trasnferencia');
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
          label="Destinatario"
          type="text"
          name="destinatarios"
          value={destinatario}
          onChange={({ target }) => setDestinatario(target.value)}
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
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default TrasnferenciaForm;
