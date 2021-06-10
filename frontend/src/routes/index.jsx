import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import Home from '../views/Home';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import PrivateRoute from './Private';

function Routes() {
  return (
    <StoreProvider>
      <Switch>
        <Route restricted={false} component={Login} path="/login" exact />
        <Route restricted component={SignUp} path="/signup" exact />
        <PrivateRoute component={Home} path="/" exact />
      </Switch>
    </StoreProvider>
  );
}

export default Routes;
