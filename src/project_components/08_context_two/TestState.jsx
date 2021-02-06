import { React, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@material-ui/core";

const TestState = (props) => {
  return (
    <Card variant="outlined" style={{ margin: "1rem 0" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Local store
        </Typography>
        <Typography variant="h5" component="h2">
          {props.testState}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.action} variant="outlined">
          Toggle state
        </Button>
      </CardActions>
    </Card>
  );
};

export default TestState;
