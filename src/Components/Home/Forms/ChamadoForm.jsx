import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';
import useUsers from '../../../Hooks/useUsers';
import useTickets from '../../../Hooks/useTickets';

const ChamadoForm = () => {
  const {
    nome,
    setNome,
    login,
    setLogin,
    ramal,
    setRamal,
    patrimonio,
    setPatrimonio,
    informacao,
    setInformacao,
    local,
    setLocal,
    area,
    setArea,
    cargo,
    setCargo,
    vip,
    setVip,
  } = React.useContext(TicketContext);
  const { user, setUser, returnUsers } = useUsers();
  const { postTickets } = useTickets();

  function clickUser(target) {
    const value = target.innerText;
    setLogin(value);
    const returnName = user.map((user) => {
      if (user.login === value) {
        setNome(user.name);
        setArea(user.area);
        setCargo(user.cargo);
        if (user.vip == 'sim') {
          setVip(true);
        }
      }
    });
    returnName;
    setUser(null);
    console.log(user);
  }

  function handleLogin({ target }) {
    const inputValue = target.value;
    setLogin(inputValue);
    if (inputValue.length >= 2) {
      returnUsers(inputValue);
    } else {
      setUser('');
      setNome('');
      setCargo('');
      setVip(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    postTickets('chamado');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
      {vip && (
        <div className="absolute right-[120px] -top-1 text-sm bg-amarelo-500 dark:bg-amarelo-600 dark:border dark:border-amarelo-400 h-6 py-[1px] px-2 rounded-lg text-cinza-50 font-semibold flex items-center justify-center">
          <span className="material-symbols-outlined text-sm leading-3">
            star
          </span>
        </div>
      )}
      {cargo && (
        <div
          className="absolute right-0 -top-1 text-sm bg-azul-600 dark:border dark:border-azul-400
        dark:text-azul-50 h-6 w-28 py-[1px] px-3 rounded-lg text-cinza-50 font-semibold flex items-center justify-center"
        >
          {cargo}
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row relative">
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
          onChange={handleLogin}
        />

        {user && user.length > 0 && (
          <div className="w-full bg-cinza-100 max-h-96 border border-cinza-300 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[4.5rem] ">
            {user.map((user) => (
              <div
                key={user.id}
                onClick={({ target }) => clickUser(target)}
                className="border-b border-cinza-400 p-2 cursor-pointer flex items-center gap-4 indent-px"
              >
                <span className="">{user.login}</span>
              </div>
            ))}
          </div>
        )}
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
          label="Patrimônio"
          type="text"
          name="patrimonio"
          value={patrimonio}
          onChange={({ target }) => setPatrimonio(target.value)}
        />
      </div>
      <div>
        <Input
          label="Informação"
          type="text"
          name="informacao"
          value={informacao}
          onChange={({ target }) => setInformacao(target.value)}
        />
      </div>
      <div>
        <Input
          label="Local"
          type="text"
          name="local"
          value={local}
          onChange={({ target }) => setLocal(target.value)}
        />
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default ChamadoForm;
