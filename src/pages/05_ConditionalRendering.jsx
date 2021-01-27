import ExperimentBody from "../ui/ExperimentBody";
import ToggleIcon from "../project_components/05_conditional_rendering/ToggleIcon";
import TimedGreeting from "../project_components/05_conditional_rendering/TimedGreeting";
import { Grid } from "@material-ui/core";

function ConditionalRendering() {
  return (
    <ExperimentBody title="Conditional rendering">
      <Grid item xs={12}>
        <ToggleIcon />
      </Grid>
      <Grid item xs={12}>
        {/*  <TimeBasedGreeting /> */}
        <TimedGreeting />
      </Grid>
    </ExperimentBody>
  );
}

export default ConditionalRendering;
