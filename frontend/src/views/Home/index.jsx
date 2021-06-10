import React from 'react';
import { Logout } from '../../api';
import './styles.css';

const Home = () => {
  return (
    <div>
      <h1>Página principal</h1>
      <button type="button" onClick={Logout}>
        Sair
      </button>
    </div>
  );
};

export default Home;
