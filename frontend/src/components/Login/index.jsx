import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import StoreContext from '../Store/Context';
import './styles.css';

function initialState() {
  return { userName: '', password: '' };
}

async function login(credentials) {
  const data = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return data.json();
}

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  // eslint-disable-next-line consistent-return
  async function onSubmit(event) {
    event.preventDefault();

    const data = await login(values);

    if (data.token) {
      setToken(data.token);
      return history.push('/');
    }
    // eslint-disable-next-line no-alert
    alert(data.message);

    setValues(initialState);
  }

  return (
    <div className="container">
      <Paper elevation={10}>
        <Grid item>
          <Grid item>
            <Typography variant="h1" align="center">
              Log In
            </Typography>
          </Grid>
          <Grid item>
            <form align="center" onSubmit={onSubmit}>
              <TextField
                name="userName"
                label="Usuário"
                onChange={onChange}
                value={values.userName}
              />
              <TextField
                name="password"
                label="Senha"
                type="password"
                onChange={onChange}
                value={values.password}
              />

              <Button type="submit" variant="contained" color="primary">
                Log In
              </Button>
            </form>
          </Grid>
          <Grid align="center" item>
            <Link href="/signup" underline="always">
              Novo usuário? Registre-se.
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
