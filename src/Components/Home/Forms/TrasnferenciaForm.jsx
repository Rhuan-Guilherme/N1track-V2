import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';

const TrasnferenciaForm = () => {
  const { nome, setNome } = React.useContext(TicketContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('enviou trasnferência');
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
        <Input label="Destinatario" type="text" name="destinatarios" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input label="Ramal" type="text" name="ramal" />
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default TrasnferenciaForm;
