import React from "react";
import {} from "@material-ui/core";
import UserForm from "./EnterUserForm";
import UserCardList from "./UserCardList";
import { Typography, Paper } from "@material-ui/core";

class GithubUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div>
        <Paper
          style={{ padding: ".5rem", background: "#eeeeee" }}
          variant="outlined"
        >
          <Typography variant="body1">
            This application takes a GitHub username handle as input, queries
            the GitHub user API and returns the profile image and current
            workplace of the user.
          </Typography>
        </Paper>
        <Typography variant="body1">
          <p>Some usernames you might like to try:</p>
          <ul>
            <li>sophiebits (Sophie Alpert)</li>
            <li>sdras (Sarah Drasner)</li>
            <li>emmabostian (Emma Bostian)</li>
            <li>wesbos (Wes Bos)</li>
          </ul>
        </Typography>
        <UserForm onSubmit={this.addNewProfile} />
        <UserCardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default GithubUsers;
