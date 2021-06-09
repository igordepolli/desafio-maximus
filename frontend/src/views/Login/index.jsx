import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import './styles.css';

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="container">
      <Paper elevation={10}>
        <Grid alignItems="center" justify="center">
          <Grid align="center" item>
            <Typography variant="h1" align="center">
              Log In
            </Typography>
          </Grid>
          <Grid item>
            <form align="center" onSubmit={handleSubmit}>
              <TextField
                name="user"
                label="Usuário"
                onChange={(event) => setUserName(event.target.value)}
              />
              <TextField
                name="password"
                label="Senha"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />

              <Button type="submit" variant="contained" color="primary">
                Log In
              </Button>
            </form>
          </Grid>
          <Grid align="center" item>
            <Link href="/" underline="always">
              Novo usuário? Registre-se.
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
