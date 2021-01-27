import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  chip: {
    marginRight: "10px",
    marginBottom: "10px",
  },
  media: {
    height: 140,
  },
}));

const LaunchCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia className={classes.media} image={props.image} />
        <CardContent>
          <Typography variant="overline" color="textSecondary" gutterBottom>
            {props.taskType}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography color="textSecondary">{props.description}</Typography>
          <br />
          {props.technologies.map((technology) => (
            <Chip size="small" label={technology} className={classes.chip} />
          ))}
        </CardContent>
        <CardActions>
          <Button component={Link} to={props.link} color="primary" size="small">
            Take a look
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default LaunchCard;
