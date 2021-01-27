import React from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";

class ChangeTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "The glass is half full",
    };
  }
  updateText() {
    this.setState({ text: "The glass is half empty" });
  }

  revertText() {
    this.setState({ text: "The glass is half full" });
  }

  render() {
    return (
      <Grid item xs={12}>
        <Typography variant="h6" component="h2" gutterBottom>
          Using class component
        </Typography>
        <Grid item xs={6}>
          <Paper className="classTextOutput" variant="outlined">
            <Typography>{this.state.text}</Typography>
          </Paper>
        </Grid>

        <Button
          className="classButton"
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => this.updateText()}
        >
          Change text
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => this.revertText()}
        >
          Revert text
        </Button>
      </Grid>
    );
  }
}

export default ChangeTextClass;
