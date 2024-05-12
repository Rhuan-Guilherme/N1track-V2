import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';

const ChamadoForm = () => {
  const { nome, setNome } = React.useContext(TicketContext);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('enviou');
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
        <Input label="Login do usuário" type="text" name="login" />
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input label="Ramal" type="text" name="ramal" />
        <Input label="Patrimônio" type="text" name="patrimonio" />
      </div>
      <div>
        <Input label="Informação" type="text" name="informacao" />
      </div>
      <div>
        <Input label="Local" type="text" name="local" />
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default ChamadoForm;
