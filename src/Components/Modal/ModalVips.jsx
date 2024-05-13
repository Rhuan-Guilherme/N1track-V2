import React from 'react';
import useUsers from '../../Hooks/useUsers';
import { Modal, Table, Tooltip } from 'flowbite-react';
import { AnimeContext } from '../../Context/AnimeContext';

const ModalVips = () => {
  const {
    user,
    setUser,
    returnUsers,
    returnVips,
    vips,
    setVips,
    value,
    setValue,
    deleteVip,
    addVips,
  } = useUsers();
  const { modalVips, setModalVips } = React.useContext(AnimeContext);
  const [modalSize] = React.useState('5xl');
  console.log(vips);

  const clickUser = (targer) => {
    const value = targer.innerText;
    setValue(value);
    setUser(null);
    console.log(user);
  };

  function onChange({ target }) {
    setValue(target.value);
    if (value.length > 2) {
      returnUsers(value);
    } else {
      setUser(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addVips(value);
    setValue('');
  }

  return (
    <>
      <Modal
        show={modalVips}
        size={modalSize}
        onClose={() => setModalVips(false)}
      >
        <Modal.Header className="dark:bg-cinzaRoxo-800  dark:border-t dark:border-x dark:border-cinzaRoxo-100">
          Lista de VIPS
        </Modal.Header>
        <Modal.Body className="dark:bg-cinzaRoxo-600 rounded-b-md dark:border-b dark:border-x dark:border-cinzaRoxo-100">
          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className=" w-3/6 relative">
                <input
                  value={value}
                  onChange={onChange}
                  type="text"
                  placeholder="Login"
                  className="border border-cinza-400 w-full text-base p-3 bg-cinza-100 dark:bg-cinzaRoxo-700 dark:border-cinzaRoxo-100 rounded-lg transition-all focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100 hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
                />
                {user && (
                  <div className="w-full bg-cinza-200 max-h-96 border border-cinza-400 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[3rem] ">
                    {user.map((user) => (
                      <div
                        key={user.id}
                        onClick={({ target }) => clickUser(target)}
                        className="border-b border-cinza-400 p-2 cursor-pointer flex items-center gap-4 indent-px"
                      >
                        {user.login} {user.vip == 'sim' && <span> - VIP</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-azul-700 px-4 text-white font-Roboto font-semibold rounded-lg text-sm">
                ADICIONAR
              </button>
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="bg-cinza-200">Nome</Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200">
                    Login
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200">
                    Area demandante
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200">
                    Excluir
                  </Table.HeadCell>
                </Table.Head>
                {vips &&
                  vips.map((item) => (
                    <Table.Body key={item.id} className="divide-y">
                      <Table.Row className="bg-cinza-100 dark:bg-cinzaRoxo-800 border-b border-cinza-300 dark:border-cinzaRoxo-200">
                        <Table.Cell className="whitespace-nowrap font-medium text-cinza-900 dark:text-cinza-400">
                          {item.Name}
                        </Table.Cell>
                        <Table.Cell>{item.login}</Table.Cell>
                        <Table.Cell>{item.area}</Table.Cell>
                        <Table.Cell>
                          <Tooltip content="Duplo clique">
                            <button
                              onDoubleClick={() => deleteVip(item.id)}
                              className="bg-red-600 dark:bg-red-700 p-2 text-white font-poppins rounded-lg"
                            >
                              Deletar
                            </button>
                          </Tooltip>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalVips;
