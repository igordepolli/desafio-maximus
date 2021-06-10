import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Login as LoginUser } from '../../api';
import Alert from '../../utils/Alert';
import StoreContext from '../Store/Context';
import './styles.css';

function initialState() {
  return { userName: '', password: '' };
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

    try {
      const data = await LoginUser(values);

      if (data.token) {
        setToken(data.token);
        return history.push('/');
      }
    } catch (err) {
      Alert(err);
    }

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
            <Link href="/" underline="always">
              Novo usuário? Registre-se.
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
