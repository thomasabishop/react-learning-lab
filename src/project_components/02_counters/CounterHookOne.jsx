import { React, useState } from 'react';
import {
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
  Button,
  Typography,
} from '@material-ui/core';

const CounterHookOne = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);
  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Using hook
        </Typography>
        <Typography variant="h5" component="h2">
          {counter}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          size="small"
          color="primary"
          aria-label="outlined primary button group"
        >
          <Button onClick={handleClick}>+1</Button>
          <Button onClick={() => setCounter(0)}>Reset</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default CounterHookOne;
