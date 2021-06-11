import React from 'react';
import { Paper } from '@material-ui/core';
import SignUpComponent from '../../components/SignUp';
import TopBar from '../../components/TopBar';

const SignUp = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        <Paper elevation={10}>
          <SignUpComponent />
        </Paper>
      </div>
    </div>
  );
};

export default SignUp;
