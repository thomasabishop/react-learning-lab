import ExperimentBody from "../ui/ExperimentBody";
import CounterClass from "../project_components/02_counters/CounterClass";
import CounterHookOne from "../project_components/02_counters/CounterHookOne";
import CounterHookTwo from "../project_components/02_counters/CounterHookTwo";
import { Grid } from "@material-ui/core";

function Counters() {
  return (
    <ExperimentBody title="Counters">
      <Grid item xs={12} sm={12} md={4}>
        <CounterClass />
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <CounterHookOne />
      </Grid>

      <Grid item xs={12} sm={12} md={4}>
        <CounterHookTwo />
      </Grid>
    </ExperimentBody>
  );
}
export default Counters;
