import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import StoreContext from '../components/Store/Context';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
