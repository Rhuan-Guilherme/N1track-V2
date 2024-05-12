import React from 'react';

export const AnimeContext = React.createContext();

export const AnimeStorage = ({ children }) => {
  const [slide, setSlide] = React.useState(false);
  return (
    <AnimeContext.Provider value={{ slide, setSlide }}>
      {children}
    </AnimeContext.Provider>
  );
};
