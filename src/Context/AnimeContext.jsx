import React from 'react';

export const AnimeContext = React.createContext();

export const AnimeStorage = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  const [modalVips, setModalVips] = React.useState(false);
  const [modalUsers, setModalUsers] = React.useState(false);
  const [modalBind, setModalBind] = React.useState(false);
  return (
    <AnimeContext.Provider
      value={{
        slide,
        setSlide,
        modalVips,
        setModalVips,
        modalUsers,
        setModalUsers,
        modalBind,
        setModalBind,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
