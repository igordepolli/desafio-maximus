import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, TextField, Typography } from '@material-ui/core';
import LoginApi from '../../api/User/Login';
import Logo from '../../images/logo-maximus.png';
import StoreContext from '../Store/Context';
import './styles.css';

function initialState() {
  return { username: '', password: '' };
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

    const data = await LoginApi(values);

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
      <Grid item>
        <Grid align="center" item>
          <img className="logoCard" src={Logo} alt="logo-maximus" />
        </Grid>
        <Grid item>
          <Typography variant="h1" align="center">
            Log In
          </Typography>
        </Grid>
        <Grid item>
          <form align="center" onSubmit={onSubmit}>
            <TextField
              name="username"
              label="Usuário"
              onChange={onChange}
              value={values.username}
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
      </Grid>
    </div>
  );
};

export default Login;
