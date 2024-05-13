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
        <Modal.Header className="dark:bg-cinza-950  dark:border-t dark:border-x dark:border-cinza-600">
          Lista de VIPS
        </Modal.Header>
        <Modal.Body className="dark:bg-cinza-900 rounded-b-md dark:border-b dark:border-x dark:border-cinza-600">
          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className=" w-3/6 relative">
                <input
                  value={value}
                  onChange={onChange}
                  type="text"
                  placeholder="Login"
                  className="border border-cinza-400 w-full text-base p-3 bg-cinza-100 dark:bg-cinza-950 dark:text-cinza-100 dark:border-cinza-400 rounded-lg transition-all"
                />
                {user && (
                  <div className="w-full bg-cinza-200 dark:bg-cinza-950 dark:text-cinza-100 max-h-96 border border-cinza-400 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[3rem] ">
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
              <button className="bg-azul-700 dark:bg-azul-600 px-4 text-white font-Roboto font-semibold rounded-lg text-sm">
                ADICIONAR
              </button>
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Nome
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Login
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Area demandante
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Excluir
                  </Table.HeadCell>
                </Table.Head>
                {vips &&
                  vips.map((item) => (
                    <Table.Body key={item.id} className="divide-y">
                      <Table.Row className="bg-cinza-100 dark:bg-cinza-700  border-b border-cinza-300 dark:border-cinza-500">
                        <Table.Cell className="whitespace-nowrap font-medium text-cinza-900 dark:text-cinza-100 ">
                          {item.Name}
                        </Table.Cell>
                        <Table.Cell className="dark:text-cinza-200">
                          {item.login}
                        </Table.Cell>
                        <Table.Cell className="dark:text-cinza-200">
                          {item.area}
                        </Table.Cell>
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
