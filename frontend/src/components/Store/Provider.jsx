import React from 'react';
import useStorage from '../../utils/UseStorage';
import Context from './Context';

// eslint-disable-next-line react/prop-types
const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage('token');

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
