import React from 'react';
import { Divider, Grid } from '@material-ui/core';
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
        <Grid item xs={4} className="gridLeft">
          <SignUp />
        </Grid>
        <Grid item xs className="gridRight">
          <TableUser />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
