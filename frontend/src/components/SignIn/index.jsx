import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import './styles.css';

const SignIn = () => {
  return (
    <div className="container">
      <Paper elevation={10}>
        <Grid container alignItems="center" justify="center">
          <Grid align="center" item>
            <Typography variant="h1" align="center">
              Log In
            </Typography>
          </Grid>
          <form align="center" noValidate autoComplete="off">
            <TextField label="Usuário" fullWidth required />
            <TextField label="Senha" type="password" fullWidth required />
            <Button variant="contained" color="primary" fullWidth>
              Log In
            </Button>
          </form>
          <Grid item>
            <Link href="/" align="center" underline="always">
              Novo usuário? Registre-se.
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default SignIn;
