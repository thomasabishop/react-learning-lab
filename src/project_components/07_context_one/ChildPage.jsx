import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ExperimentBody from "../../ui/ExperimentBody";
import { Grid, Typography, Paper, Button } from "@material-ui/core";

function ChildPage() {
  const context = useContext();
  return (
    <ExperimentBody title="Child page">
      <Grid item xs={12}>
        <Paper variant="outlined" style={{ padding: "1rem" }}>
          <Typography variant="body1">{context.a}</Typography>
          <Button
            component={Link}
            to="/passing-state-around"
            variant="outlined"
            style={{ marginTop: "1rem" }}
          >
            Return to parent component
          </Button>
        </Paper>
      </Grid>
    </ExperimentBody>
  );
}

export default ChildPage;
