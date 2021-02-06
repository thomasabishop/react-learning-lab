import ExperimentBody from "../ui/ExperimentBody";
import { Grid } from "@material-ui/core";
import App from "../project_components/08_context_two/App";
import TestState from "../project_components/08_context_two/TestState";

function ContextTwo() {
  return (
    <ExperimentBody title="Context II: Intra-page">
      <Grid item xs={12}>
        <App />
      </Grid>
    </ExperimentBody>
  );
}

export default ContextTwo;
