import React from 'react';
import { Divider, Grid, Paper } from '@material-ui/core';
import SignUp from '../../components/SignUp';
import TableUser from '../../components/TableUser';
import TopBarHome from '../../components/TopBarHome';
import './styles.css';

const Home = () => {
  return (
    <Grid item>
      <Grid item>
        <TopBarHome />
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <Paper elevation={10} className="paperLeft">
            <SignUp />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={10} className="paperRight">
            <TableUser />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
