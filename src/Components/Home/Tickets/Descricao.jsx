import React from 'react';

const Descricao = ({ tiket }) => {
  return (
    <div className="flex flex-col gap-2 font-roboto dark:text-white">
      {tiket.tipo === 'chamado' && (
        <>
          <p>
            Prezados, Sr(a). {tiket.nome.split(' ')[0]} entrou em contato{' '}
            {tiket.informacao}
          </p>
          <p>Nome: {tiket.nome}</p>
          <p>Login: {tiket.login}</p>
          <p>Ramal: {tiket.ramal}</p>
          {tiket.local ? <p>Local: {tiket.local}</p> : null}
          {tiket.patrimonio ? <p>Patrimônio: {tiket.patrimonio}</p> : null}
        </>
      )}

      {tiket.tipo === 'queda' && (
        <>
          <p>
            Senhor(a) não identificado entrou em contato com o helpdesk no ramal
            3416 e interrompeu a ligação antes do atendimento inicial.
          </p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}

      {tiket.tipo === 'trasnferencia' && (
        <>
          <p>
            Senhor(a) {tiket.nome} entrou em contato solicitando transferência
            de ligação para o(a) senhor(a) {tiket.destinatario}.
          </p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}
      {tiket.tipo === 'reiteracao' && (
        <>
          <p>
            Senhor(a) {tiket.nome} entrou em contato requisitando a reiteração e
            brevidade no chamado{' '}
            <a
              target="_blank"
              className=" font-semibold hover:underline"
              href={`https://jira.stf.jus.br/browse/SERVICEDESK-${tiket.chamado}`}
              rel="noreferrer"
            >
              SERVICEDESK-{tiket.chamado}
            </a>
            .
          </p>
          <p>Login: {tiket.login}</p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}
    </div>
  );
};

export default Descricao;
