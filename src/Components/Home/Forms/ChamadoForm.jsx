import React from 'react';
import Input from './Input';
import { TicketContext } from '../../../Context/TicketContext';
import Button from './Button';
import useUsers from '../../../Hooks/useUsers';
import { Tooltip } from 'flowbite-react';
import { AnimeContext } from '../../../Context/AnimeContext';
import useBinds from '../../../Hooks/useBinds';

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
    postTickets,
  } = React.useContext(TicketContext);
  const { user, setUser, returnUsers } = useUsers();
  const { termoBind, setTermoBind, returnBindTermo } = useBinds();
  const { setModalUsers, setModalBind } = React.useContext(AnimeContext);

  function clickUser(target) {
    const value = target.innerText;
    setLogin(value);
    const returnName = user.map((user) => {
      if (user.login === value) {
        console.log(user.area);
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
      setCargo('');
      setVip(false);
    }
  }

  function clickInfo(target) {
    const value = target.innerText;

    const returnBind = termoBind.map((bind) => {
      if (bind.nome === value) {
        setInformacao(bind.informacao);
        setTermoBind('');
      }
    });
    returnBind;
  }

  function handleInfo({ target }) {
    const inputValue = target.value;
    setInformacao(inputValue);
    if (inputValue.length >= 2) {
      returnBindTermo(inputValue);
    } else {
      setTermoBind('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    postTickets('chamado');
  }

  async function generateTextWithIa() {
    const apiKey = 'teste';
    const url = 'https://api.openai.com/v1/chat/completions';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'Você é um assistente que melhora textos e deixa o mais formal possivel.',
            },
            {
              role: 'user',
              content: `Melhore bem o seguinte texto: "${informacao}".`,
            },
          ],
          max_tokens: 50,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setInformacao(data.choices[0].message.content);
      } else {
        console.log('erro ao corrigir com o chatgpt');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
      {vip && (
        <div className="absolute right-[120px] z-10 -top-1 text-sm bg-amarelo-500 dark:bg-amarelo-600 dark:border dark:border-amarelo-400 h-6 py-[1px] px-2 rounded-lg text-cinza-50 font-semibold flex items-center justify-center">
          <Tooltip content={area}>
            <span className="material-symbols-outlined text-sm leading-3">
              star
            </span>
          </Tooltip>
        </div>
      )}
      {cargo && (
        <div
          className="absolute z-10 right-0 -top-1 text-sm bg-azul-600 dark:border dark:border-azul-400
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
        <div className="w-full relative">
          <Input
            label="Login do usuário"
            type="text"
            name="login"
            value={login}
            onChange={handleLogin}
          />
          <button
            onClick={() => setModalUsers(true)}
            type="button"
            className="absolute right-3 top-[40px] text-cinza-300 dark:text-cinza-600"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>

        {user && user.length > 0 && (
          <div className="w-full bg-cinza-200 dark:bg-cinza-900 dark:text-cinza-100 max-h-96 border border-cinza-300 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[4.5rem] ">
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
      <div className="relative flex gap-2">
        <Input
          label="Informação"
          type="text"
          name="informacao"
          value={informacao}
          onChange={handleInfo}
        />
        {termoBind && termoBind.length > 0 && (
          <div className="w-full bg-cinza-200 dark:bg-cinza-900 dark:text-cinza-100 max-h-96 border border-cinza-300 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[4.5rem] ">
            {termoBind.map((bind) => (
              <div
                key={bind.id}
                onClick={({ target }) => clickInfo(target)}
                className="border-b border-cinza-400 p-2 cursor-pointer flex items-center gap-4 indent-px"
              >
                <span className="">{bind.nome}</span>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => setModalBind(true)}
          type="button"
          className="absolute right-[4rem] top-[40px] text-cinza-300 dark:text-cinza-600"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
        <div className="flex items-end">
          <Tooltip content="Clique duplo">
            <button
              onDoubleClick={generateTextWithIa}
              type="button"
              className=" text-cinza-100 dark:text-cinza-100 rounded-md bg-azul-700 bg-gradient-to-b from-azul-500 flex p-[9px]"
            >
              <span className="material-symbols-outlined">psychology</span>
            </button>
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          label="Local"
          type="text"
          name="local"
          value={local}
          onChange={({ target }) => setLocal(target.value)}
        />
        <div className="w-full">
          <label className="inline-block mb-2 font-Poppins text-sm text-cinza-900 dark:text-cinza-200">
            Local pré definido
          </label>
          <select
            value={local}
            onChange={({ target }) => setLocal(target.value)}
            className="bg-cinza-100 border border-cinza-200 rounded-md w-full focus:outline-none hover:outline-none focus:border-azul-500 hover:border-azul-500 hover:bordera focus:bg-cinza-50 hover:bg-cinza-50 dark:bg-cinza-950 dark:shadow dark:border-cinza-950 dark:text-cinza-200 dark:hover:bg-cinza-950 dark:hover:border-cinza-400 dark:focus:bg-cinza-950 dark:focus:border-azul-600 transition-all p-2 pr-10"
          >
            <option></option>
            <option value="Anexo 2A / 6° andar / Gabinete Ministra Cármen Lúcia">
              Gabinete Min. Cármem Lúcia
            </option>
            <option value="Anexo 2A / 6° andar / Gabinete Ministro Gilmar Mendes">
              Gabinete Min. Gilmar Mendes
            </option>
            <option value="Anexo 2A / 5° andar / Gabinete Ministro André Mendonça">
              Gabinete Min. André Mendonça
            </option>
            <option value="Anexo 2A / 4° andar / Gabinete Ministro Dias Toffoli">
              Gabinete Min. Dias Toffoli
            </option>
            <option value="Anexo 2A / 5° andar / Gabinete Ministro Nunes Marques">
              Gabinete Min. Nunes Marques
            </option>
            <option value="Anexo 2A / 4° andar / Gabinete Ministro Cristiano Zanin">
              Gabinete Min. Cristiano Zanin
            </option>
            <option value="Anexo 2A / 3° andar / Gabinete Ministro Luiz Fux">
              Gabinete Min. Luiz Fux
            </option>
            <option value="Anexo 2A / 5° andar / Gabinete Ministro Flávio Dino">
              Gabinete Min. Flávio Dino
            </option>
            <option value="Anexo 2A / 3° andar / Gabinete Ministro Edson Fachin">
              Gabinete Min. Edson Fachin
            </option>
            <option value="Anexo 2A / 3° andar / Gabinete Ministro Alexandre de Moraes">
              Gabinete Min. Alexandre de Moraes
            </option>
          </select>
        </div>
      </div>
      <Button>REGISTRAR</Button>
    </form>
  );
};

export default ChamadoForm;
