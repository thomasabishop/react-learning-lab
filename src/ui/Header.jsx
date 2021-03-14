import React from 'react';
import {
  makeStyles,
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import Logo from '../../src/react-lab-logo.svg';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';

// Add sticky on scroll functionality
function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(() => ({
  root: {},
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  logo: {
    width: '45px',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar variant="dense" className={classes.header}>
            <IconButton
              component={Link}
              to="/"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img className={classes.logo} src={Logo} alt="" />
            </IconButton>
            <Typography className={classes.title}>
              Thomas's React Learning Lab
            </Typography>
            <IconButton
              href="https://github.com/thomasabishop"
              color="inherit"
              aria-label="menu"
            >
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  );
};

export default Header;
