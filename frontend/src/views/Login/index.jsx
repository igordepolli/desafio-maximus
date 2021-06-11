import React from 'react';
import { Paper } from '@material-ui/core';
import LoginComponent from '../../components/Login';
import TopBar from '../../components/TopBar';
import './styles.css';

const Login = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div className="container">
        <Paper elevation={10}>
          <LoginComponent />
        </Paper>
      </div>
    </div>
  );
};

export default Login;
