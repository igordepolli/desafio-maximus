import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import FormLogin from '../../components/FormLogin';
import './styles.css';

const Login = () => {
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
            <FormLogin />
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
