import { React, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";

const CounterHookTwo = () => {
  const [counter, setCounter] = useState(0);

  const inc = [1, 5, 10, 100];

  const Incrementor = () => {
    return (
      <ButtonGroup size="small" color="primary">
        {inc.map((x) => (
          <Button onClick={() => setCounter(counter + x)}>+{x}</Button>
        ))}
        <Button onClick={() => setCounter(0)}>Reset</Button>
      </ButtonGroup>
    );
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Using hook
        </Typography>
        <Typography variant="h5" component="h2">
          {counter}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Incrementor></Incrementor>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CounterHookTwo;
