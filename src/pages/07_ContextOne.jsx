import ExperimentBody from '../ui/ExperimentBody';
import { Grid } from '@material-ui/core';
import ContextPreHook from '../project_components/07_context_one/ContextPreHook';
function PassingState() {
  return (
    <ExperimentBody title="Context I: Intra-page">
      <Grid item xs={12}>
        <ContextPreHook />
      </Grid>
    </ExperimentBody>
  );
}

export default PassingState;
