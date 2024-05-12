import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';

const QuedaForm = () => {
  const { ramal, setRamal, postTickets } = React.useContext(TicketContext);

  function handleSubmit(event) {
    event.preventDefault();
    postTickets('queda');
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          label="Ramal da queda"
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

export default QuedaForm;
