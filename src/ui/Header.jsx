import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Logo from "../../src/react-lab-logo.svg";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },

  logo: {
    width: "70px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img className={classes.logo} src={Logo} alt="" />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Thomas's React Learning Lab
          </Typography>
          <IconButton
            href="https://github.com/thomasabishop/react-learning-lab"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
