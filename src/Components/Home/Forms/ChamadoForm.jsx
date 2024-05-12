import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';
import useUsers from '../../../Hooks/useUsers';

const ChamadoForm = () => {
  const { nome, setNome } = React.useContext(TicketContext);
  const { user, returnUsers } = useUsers();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('enviou chamado');
    returnUsers(nome);
    console.log(user);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row relative">
        <Input
          label="Nome do usuário"
          type="text"
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
        <Input label="Login do usuário" type="text" name="login" />

        {user && user.length > 0 && (
          <div className="w-full bg-cinza-100 max-h-96 border border-cinza-300 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[4.5rem] ">
            {user.map((user) => (
              <div
                key={user.id}
                className="border-b border-cinza-400 p-2 cursor-pointer flex items-center gap-4 indent-px"
              >
                <span className="">{user.login}</span>
              </div>
            ))}
          </div>
        )}
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
