import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  ButtonGroup,
  Button,
  Typography,
} from "@material-ui/core";

class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
  }

  // Is it correct to directly target this.state outside of the constructor?
  // I thought there was a rule against this? Check docs!
  countDown() {
    this.setState({
      counterValue: this.state.counterValue - 1,
    });
  }

  countUp() {
    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  }

  resetCounter() {
    this.setState({
      counterValue: 0,
    });
  }

  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Using class component
          </Typography>
          <Typography variant="h5" component="h2">
            {this.state.counterValue}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup
            size="small"
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => this.countUp()}>+1</Button>
            <Button onClick={() => this.countDown()}>-1</Button>
            <Button onClick={() => this.resetCounter()}>Reset</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    );
  }
}

export default CounterClass;
