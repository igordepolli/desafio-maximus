import React from 'react';
import { AppBar, CardMedia, Link, Toolbar } from '@material-ui/core';
import './styles.css';
import Logo from '../../images/logo-maximus.png';

const TopBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="left">
            <Link href="/">
              <img className="logo" src={Logo} alt="logo-maximus" />
            </Link>
            <Link
              variant="h6"
              className="title"
              color="inherit"
              underline="none"
              href="/"
            >
              áximus Soluções
            </Link>
          </div>
          <div className="right">
            <Link
              variant="h6"
              className="leftLink"
              color="inherit"
              underline="none"
              href="/signup"
            >
              REGISTRAR
            </Link>
            <Link
              variant="h6"
              className="rightLink"
              color="inherit"
              underline="none"
              href="/login"
            >
              LOGAR
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
