import React, { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import GlobalContext from "./AppContext";

const StateDisplay = (props) => {
  const data = useContext(GlobalContext);
  return (
    <Card variant="outlined" style={{ margin: "1rem 0" }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          State
        </Typography>
        <Typography variant="h5" component="h2">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StateDisplay;
