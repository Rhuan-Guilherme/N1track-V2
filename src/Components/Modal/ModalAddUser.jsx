import React from 'react';
import { AnimeContext } from '../../Context/AnimeContext';
import { Modal } from 'flowbite-react';
import Input from '../Home/Forms/Input';
import Button from '../Home/Forms/Button';
import useUsers from '../../Hooks/useUsers';

const ModalAddUser = () => {
  const { modalUsers, setModalUsers } = React.useContext(AnimeContext);
  const [modalSize] = React.useState('5xl');
  const { addUser, message, setMessage } = useUsers();
  const [login, setLogin] = React.useState('');
  const [name, setName] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [area, setArea] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addUser(login, name, cargo, area);
    setLogin('');
    setName('');
    setCargo('');
    setArea('');
    setMessage('');
  }
  return (
    <>
      <Modal
        show={modalUsers}
        size={modalSize}
        onClose={() => setModalUsers(false)}
      >
        <Modal.Header className="dark:bg-cinza-950  dark:border-t dark:border-x dark:border-cinza-600">
          Adicionar novo usuário
        </Modal.Header>
        <Modal.Body className="dark:bg-cinza-900 rounded-b-md dark:border-b dark:border-x dark:border-cinza-600">
          <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
            <div className="w-full flex gap-3">
              <Input
                label="Login"
                type="text"
                name="login"
                value={login}
                onChange={({ target }) => setLogin(target.value)}
              />
              <Input
                label="Nome"
                type="text"
                name="nome"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>
            <div className="w-full flex gap-3">
              <Input
                label="Cargo"
                type="text"
                name="cargo"
                value={cargo}
                onChange={({ target }) => setCargo(target.value)}
              />
              <Input
                label="Area demandante"
                type="text"
                name="area"
                value={area}
                onChange={({ target }) => setArea(target.value)}
              />
            </div>
            {message && (
              <p className="text-cinza-700 dark:text-cinza-200">{message}!</p>
            )}
            <Button>Adicionar</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAddUser;
