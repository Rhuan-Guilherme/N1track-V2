import React from 'react';

export const TicketContext = React.createContext();

export const TicketStorage = ({ children }) => {
  const [nome, setNome] = React.useState('rhuan');

  return (
    <TicketContext.Provider value={{ nome, setNome }}>
      {children}
    </TicketContext.Provider>
  );
};
