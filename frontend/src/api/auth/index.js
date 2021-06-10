import { useContext } from 'react';
import StoreContext from '../../components/Store/Context';

export const Logout = () => {
  const { setToken } = useContext(StoreContext);
  setToken(null);
};

export const Login = async (credentials) => {
  const data = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return data.json();
};
