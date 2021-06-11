import React, { useState } from 'react';
import { createBrowserHistory } from 'history';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import SignUpApi from '../../api/User/SignUp';
import './styles.css';

function initialState() {
  return {
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };
}

const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const history = createBrowserHistory({ forceRefresh: true });

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  async function onSubmit(event) {
    event.preventDefault();

    if (values.password !== values.confirmPassword) {
      alert("Password's don't match!");
    } else {
      const data = await SignUpApi(values);

      if (data.id) {
        alert('Registro realizado com sucesso!');

        return history.push('/');
      }
      alert(data.message);
    }

    return null;
  }

  return (
    <div className="container">
      <Grid item>
        <Grid item>
          <Typography variant="h1" align="center">
            Cadastrar
          </Typography>
        </Grid>
        <Grid item>
          <form align="center" onSubmit={onSubmit}>
            <TextField
              name="name"
              label="Nome"
              onChange={onChange}
              value={values.name}
              required
            />
            <TextField
              name="email"
              label="E-mail"
              type="email"
              onChange={onChange}
              value={values.email}
              required
            />
            <TextField
              name="username"
              label="Usuário"
              onChange={onChange}
              value={values.username}
              required
            />
            <TextField
              name="password"
              label="Senha"
              type="password"
              onChange={onChange}
              value={values.password}
              required
            />
            <TextField
              name="confirmPassword"
              label="Repita a senha"
              type="password"
              onChange={onChange}
              value={values.confirmPassword}
              required
            />

            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
