import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

class UserCard extends React.Component {
  render() {
    const profile = this.props;
    return (
      <Card>
        <CardContent>
          <img
            alt=""
            style={{ height: "100px", width: "100px" }}
            src={profile.avatar_url}
          />
          <Typography variant="h6" component="h2">
            {profile.name}
          </Typography>
          <Typography color="textSecondary">{profile.company}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default UserCard;
