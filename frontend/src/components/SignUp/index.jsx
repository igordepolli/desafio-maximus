import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import SignUpApi from '../../api/User/SignUp';
import './styles.css';

function initialState() {
  return { name: '', email: '', username: '', password: '', password2: '' };
}

const SignUp = () => {
  const [values, setValues] = useState(initialState);
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

    if (values.password !== values.password2) {
      // eslint-disable-next-line no-alert
      alert("Password's don't match!");
    } else {
      const data = await SignUpApi(values);

      if (data.id) {
        // eslint-disable-next-line no-alert
        alert('Registro realizado com sucesso!');
        return history.push('/login');
      }
      // eslint-disable-next-line no-alert
      alert(data.message);

      setValues(initialState);
    }
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
              name="password2"
              label="Repita a senha"
              type="password"
              onChange={onChange}
              value={values.password2}
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
