import React from 'react';

export const TicketContext = React.createContext();

export const TicketStorage = ({ children }) => {
  const [nome, setNome] = React.useState('');
  const [login, setLogin] = React.useState('');
  const [ramal, setRamal] = React.useState('');
  const [patrimonio, setPatrimonio] = React.useState('');
  const [informacao, setInformacao] = React.useState('');
  const [local, setLocal] = React.useState('');
  const [area, setArea] = React.useState('');
  const [chamado, setChamado] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [destinatario, setDestinatario] = React.useState('');
  const [vip, setVip] = React.useState(null);

  return (
    <TicketContext.Provider
      value={{
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
        chamado,
        setChamado,
        destinatario,
        setDestinatario,
        cargo,
        setCargo,
        vip,
        setVip,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
