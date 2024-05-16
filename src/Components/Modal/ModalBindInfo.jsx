import React from 'react';
import { Button, Modal, Table, Tooltip } from 'flowbite-react';
import { AnimeContext } from '../../Context/AnimeContext';
import useBinds from '../../Hooks/useBinds';

const ModalBindInfo = () => {
  const { modalBind, setModalBind } = React.useContext(AnimeContext);
  const [modalSize] = React.useState('5xl');
  const { bind, deleteBind, addBind, returnBindTermo, termoBind } = useBinds();
  const [nome, setNome] = React.useState('');
  const [info, setInfo] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addBind(nome, info);
    setInfo('');
    setNome('');
  }

  return (
    <>
      <Modal
        show={modalBind}
        size={modalSize}
        onClose={() => setModalBind(false)}
      >
        <Modal.Header className="dark:bg-cinza-950  dark:border-t dark:border-x dark:border-cinza-600">
          Binds de informações
        </Modal.Header>
        <Modal.Body className="dark:bg-cinza-900 rounded-b-md dark:border-b dark:border-x dark:border-cinza-600">
          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className=" relative flex gap-3 w-full">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor=""
                    className="text-cinza-800 dark:text-cinza-200 font-Poppins text-sm "
                  >
                    Nome da bind
                  </label>
                  <input
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                    type="text"
                    className="border border-cinza-400  text-base p-3 bg-cinza-100 dark:bg-cinza-950 dark:text-cinza-100 dark:border-cinza-400 rounded-lg transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label
                    htmlFor=""
                    className="text-cinza-800 dark:text-cinza-200 font-Poppins text-sm "
                  >
                    informacao
                  </label>
                  <input
                    value={info}
                    onChange={({ target }) => setInfo(target.value)}
                    type="text"
                    className="border border-cinza-400 w-full text-base p-3 bg-cinza-100 dark:bg-cinza-950 dark:text-cinza-100 dark:border-cinza-400 rounded-lg transition-all"
                  />
                </div>
              </div>
              <div className="flex justify-start items-end">
                <button className="bg-azul-700 dark:bg-azul-600 px-4 h-[50px] text-white font-Roboto font-semibold rounded-lg text-sm">
                  ADICIONAR
                </button>
              </div>
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Nome da bind
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Informação
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-200 dark:bg-cinza-950">
                    Excluir
                  </Table.HeadCell>
                </Table.Head>
                {bind &&
                  bind.map((item) => (
                    <Table.Body key={item.id} className="divide-y">
                      <Table.Row className="bg-cinza-100 dark:bg-cinza-700  border-b border-cinza-300 dark:border-cinza-500">
                        <Table.Cell className="whitespace-nowrap font-medium text-cinza-900 dark:text-cinza-100 ">
                          {item.nome}
                        </Table.Cell>
                        <Table.Cell className="dark:text-cinza-200">
                          {item.informacao}
                        </Table.Cell>
                        <Table.Cell>
                          <Tooltip content="Duplo clique">
                            <button
                              onDoubleClick={() => deleteBind(item.id)}
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

export default ModalBindInfo;
