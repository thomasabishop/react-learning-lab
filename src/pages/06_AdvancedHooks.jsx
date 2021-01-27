import ExperimentBody from "../ui/ExperimentBody";
import { Grid } from "@material-ui/core";
import SideEffect from "../project_components/06_advanced_hooks/SideEffect";
import AnotherSideEffect from "../project_components/06_advanced_hooks/AnotherSideEffect";
import Reducer from "../project_components/06_advanced_hooks/Reducer";
function AdvancedHooks() {
  return (
    <ExperimentBody title="Advanced hooks">
      <Grid item xs={12}>
        <SideEffect />
        <AnotherSideEffect />
        <Reducer />
      </Grid>
    </ExperimentBody>
  );
}

export default AdvancedHooks;
