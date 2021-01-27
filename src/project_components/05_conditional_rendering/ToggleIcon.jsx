import React from "react";
import { Typography, Button, Grid, Paper, Box } from "@material-ui/core";
import Happy from "@material-ui/icons/SentimentSatisfiedTwoTone";
import Sad from "@material-ui/icons/SentimentVeryDissatisfiedTwoTone";
class ToggleIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happy: true,
    };
  }

  toggle() {
    this.setState({
      happy: !this.state.happy,
    });
  }

  render() {
    console.log(this.state.happy);
    const happy = this.state.happy;
    return (
      <Paper style={{ padding: "1rem" }} variant="outlined">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Binary state toggle
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
                This uses a class component and the ternary operator to render
                one of two icons dependent on Boolean state that toggles based
                on the button click.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" onClick={() => this.toggle()}>
              Click
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Box>
              {happy ? <Happy fontSize="large" /> : <Sad fontSize="large" />}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default ToggleIcon;
