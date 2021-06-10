import React, { useContext } from 'react';
import StoreContext from '../../components/Store/Context';

const Home = () => {
  const { setToken } = useContext(StoreContext);

  function logout() {
    setToken(null);
  }

  return (
    <div>
      <h1>Página principal</h1>
      <button type="button" onClick={logout}>
        Sair
      </button>
    </div>
  );
};

export default Home;
