import ExperimentBody from '../ui/ExperimentBody';
import ToggleIcon from '../project_components/05_conditional_rendering/ToggleIcon';
import { Grid } from '@material-ui/core';

function ConditionalRendering() {
  return (
    <ExperimentBody title="Conditional rendering">
      <Grid item xs={12}>
        <ToggleIcon />
      </Grid>
    </ExperimentBody>
  );
}

export default ConditionalRendering;
