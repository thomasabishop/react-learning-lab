import React, { useState } from "react";
import PropTypes from "prop-types";
import greetingData from "./greetingData";
import {
  Paper,
  Grid,
  Button,
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  img: {
    height: 100,
  },
}));

// Child component
const Greeting = (props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia className={classes.img} image={props.image} />
      <CardContent>
        <Typography variant="h6" component="h2">
          Good {props.salutation}!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          What would you like to do {props.callToAction}?
        </Typography>
      </CardContent>
    </Card>
  );
};

const ShowGreeting = (props) => {
  const time = props.hour;
  if (time > 0 && time <= 11) {
    return <Greeting {...greetingData.morning} />;
  } else if (time > 12 && time <= 17) {
    return <Greeting {...greetingData.afternoon} />;
  } else {
    return <Greeting {...greetingData.evening} />;
  }
};

const getHour = () => {
  let hour = parseInt(new Date().toLocaleTimeString().match(/^\d\d/)[0]);
  return hour;
};

// Parent function
function TimedGreeting() {
  const [hour, setHour] = useState(2);
  const handleClick = () => setHour(getHour);
  return (
    <Paper style={{ padding: "1rem" }} variant="outlined">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Time-based greeting card
          </Typography>
          <Paper
            style={{
              padding: ".5rem",
              margin: "1rem 0",
              background: "#eeeeee",
            }}
            variant="outlined"
          >
            <Typography variant="body1">
              This class-based component generates a time-specific greeting
              based on the time of day, utilising the built in <code>Date</code>
              API
            </Typography>
          </Paper>
          <Button onClick={handleClick} variant="outlined">
            Generate greeting
          </Button>
          <Box style={{ marginTop: "1rem" }} spacing={3}>
            <ShowGreeting time={hour} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

Greeting.propTypes = {
  image: PropTypes.string.isRequired,
  salutation: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
};

export default TimedGreeting;
