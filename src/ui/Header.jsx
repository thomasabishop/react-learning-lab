import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(() => ({
  flexEven: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.flexEven}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          component={Link}
          to="/"
        >
          <HomeIcon />
        </IconButton>
        <Typography variant="h6">Thomas's React Learning Lab</Typography>
        <div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
