import React from 'react';
import { Modal } from 'flowbite-react';
import { TicketContext } from '../../Context/TicketContext';
import { PUT_TICKETS } from '../../API/api';
import Input from '../Home/Forms/Input';

const ModalEdit = ({ ticket, show, onClose }) => {
  const [nome, setNome] = React.useState(ticket.nome);
  const [login, setLogin] = React.useState(ticket.login);
  const [ramal, setRamal] = React.useState(ticket.ramal);
  const [patrimonio, setPatrimonio] = React.useState(ticket.patrimonio);
  const [informacao, setInformacao] = React.useState(ticket.informacao);
  const [local, setLocal] = React.useState(ticket.local);
  const [chamado, setChamado] = React.useState(ticket.chamado);
  const [destinatario, setDestinatario] = React.useState(ticket.destinatario);

  const { getTikcets } = React.useContext(TicketContext);

  const handleAtualizacao = async (e) => {
    e.preventDefault();
    try {
      const { url, options } = PUT_TICKETS({
        ticket_id: ticket.id,
        nome,
        login,
        ramal,
        patrimonio,
        informacao,
        local,
        chamado,
        destinatario,
      });
      const response = await fetch(url, options);
      const json = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      getTikcets();
      onClose();
    }
  };

  return (
    <>
      <Modal show={show} size="2xl" onClose={onClose}>
        <Modal.Header className="dark:bg-cinza-900 dark:border-b dark:border-cinza-500">
          Edição
        </Modal.Header>
        <Modal.Body className="dark:bg-cinza-900 ">
          <form onSubmit={handleAtualizacao}>
            {ticket.tipo == 'chamado' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    label="Nome"
                    name="nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </Input>
                  <Input
                    type="text"
                    label="Login"
                    name="login"
                    value={login}
                    onChange={({ target }) => setLogin(target.value)}
                  >
                    Login
                  </Input>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="ramal"
                    label="Ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </Input>
                  <Input
                    type="text"
                    name="patrimonio"
                    label="Patrimônio"
                    value={patrimonio}
                    onChange={({ target }) => setPatrimonio(target.value)}
                  >
                    Patrimônio
                  </Input>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="informacao"
                    label="Informação"
                    value={informacao}
                    onChange={({ target }) => setInformacao(target.value)}
                  >
                    Informação
                  </Input>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="local"
                    label="Local"
                    value={local}
                    onChange={({ target }) => setLocal(target.value)}
                  >
                    Local
                  </Input>
                </div>
              </div>
            )}

            {ticket.tipo == 'reiteracao' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="nome"
                    label="Nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </Input>
                  <Input
                    type="text"
                    name="login"
                    label="Login"
                    value={login}
                    onChange={({ target }) => setLogin(target.value)}
                  >
                    Login
                  </Input>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="ramal"
                    label="Ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </Input>
                  <Input
                    type="text"
                    name="patrimonio"
                    label="Nº do chamado"
                    value={chamado}
                    onChange={({ target }) => setChamado(target.value)}
                  >
                    Chamado
                  </Input>
                </div>
              </div>
            )}
            {ticket.tipo == 'queda' && (
              <div className="flex gap-2">
                <Input
                  type="text"
                  name="ramal"
                  value={ramal}
                  label="Ramal"
                  onChange={({ target }) => setRamal(target.value)}
                >
                  Ramal
                </Input>
              </div>
            )}

            {ticket.tipo == 'trasnferencia' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="nome"
                    value={nome}
                    label="Nome"
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </Input>
                  <Input
                    type="text"
                    name="destinatario"
                    label="Destinatario"
                    value={destinatario}
                    onChange={({ target }) => setDestinatario(target.value)}
                  >
                    Destinatario
                  </Input>
                </div>
                <div className="flex gap-2">
                  <Input
                    type="text"
                    name="ramal"
                    label="Ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </Input>
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <button className="bg-azul-600 font-semibold text-azul-100 p-2 rounded-lg">
                  Atualizar
                </button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
