import { React, useState } from "react";
import { Paper, Typography, Button, Grid } from "@material-ui/core";

const ChangeTextHook = () => {
  const start = "In my end is my beginning";
  const change = "In my beginning is my end";

  const [text, textChange] = useState(start);
  return (
    <Grid item xs={12}>
      <Typography variant="h6" component="h2" gutterBottom>
        Using hook
      </Typography>
      <Grid item xs={6}>
        <Paper className="classTextOutput" variant="outlined">
          <Typography>{text}</Typography>
        </Paper>
      </Grid>

      <Button
        className="classButton"
        size="small"
        variant="outlined"
        color="primary"
        onClick={() => textChange(change)}
      >
        Change text
      </Button>
      <Button
        size="small"
        variant="outlined"
        color="secondary"
        onClick={() => textChange(start)}
      >
        Revert text
      </Button>
    </Grid>
  );
};

export default ChangeTextHook;
