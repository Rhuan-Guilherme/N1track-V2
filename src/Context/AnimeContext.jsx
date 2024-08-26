import React from 'react';

export const AnimeContext = React.createContext();

export const AnimeStorage = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  const [modalVips, setModalVips] = React.useState(false);
  const [modalUsers, setModalUsers] = React.useState(false);
  const [modalBind, setModalBind] = React.useState(false);
  const [chart, setChart] = React.useState(true);
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
        chart, 
        setChart
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
