import React from "react";
import axios from "axios";
import { TextField, Grid, Button } from "@material-ui/core";
// I DON"T UNDERSTAND HOW STATE IS LIFTED UP HERE
// THE ACTUAL STATE CHANGE COMES FROM THE AXIOS REQUEST NOT THE PARENT COMPONENT

class EnterUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // new stuff
      userName: "", // establishes state for the user name form field
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(response.data);
  };

  handleChange = (event) => {
    this.setState({ userName: event.target.value }); // updates the userName field when it changes from user input
  };

  render() {
    return (
      <form>
        <Grid container spacing={3}>
          <Grid item sm={6} md={4} lg={6}>
            <TextField
              type="text"
              variant="outlined"
              fullWidth
              size="small"
              label="Enter GitHub username"
              value={this.state.userName}
              onChange={this.handleChange}
              required
            />
          </Grid>
          <Grid item sm={6} md={4} lg={6}>
            <Button
              color="primary"
              variant="outlined"
              onClick={this.handleSubmit}
            >
              Add user
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default EnterUserForm;
