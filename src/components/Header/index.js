import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import Logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 55,
  },
}));

function Header() {
  const classes = useStyles();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <Link to="/">
            <img src={Logo} alt="CtrlKeys Logo" className={classes.logo} />
          </Link>
        </Box>
        <Typography variant="h6" className={classes.title}></Typography>
        {!isAuthenticated ? (
          <Button color="secondary" onClick={() => loginWithRedirect({})}>
            Login
          </Button>
        ) : (
          <Button color="secondary" onClick={() => logout()}>
            Log out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
