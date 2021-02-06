import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import GlobalContext from "./AppContext";

const StateUpdater = () => {
  const [update, setUpdate] = useState("");

  const handleChange = (event) => {
    setUpdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Card variant="outlined" style={{ margin: "1rem 0" }}>
      {update}
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField type="text" value={update} onChange={handleChange} />
          <Button
            type="submit"
            style={{ marginLeft: "1rem" }}
            variant="outlined"
          >
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default StateUpdater;
