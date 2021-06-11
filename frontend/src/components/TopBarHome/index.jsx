import React, { useContext } from 'react';
import { AppBar, Link, Toolbar } from '@material-ui/core';
import Logo from '../../images/logo-maximus.png';
import StoreContext from '../Store/Context';
import './styles.css';

const TopBarHome = () => {
  const { setToken } = useContext(StoreContext);

  function logout() {
    setToken(null);
  }

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
              className="rightLink"
              color="inherit"
              underline="none"
              onClick={logout}
              href="/login"
            >
              LOGOUT
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBarHome;
