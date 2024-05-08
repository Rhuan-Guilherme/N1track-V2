import React from 'react';
import { UserContext } from '../../Context/UserContext';

const Header = () => {
  const { data, userLogout, login } = React.useContext(UserContext);

  if (!login) return <></>;
  return (
    <header className="flex justify-between">
      <div>RoadTrack</div>
      {data && <p>{data.nome}</p>}
      <button onClick={() => userLogout()}>Sair</button>
    </header>
  );
};

export default Header;
