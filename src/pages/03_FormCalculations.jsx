import ExperimentBody from "../ui/ExperimentBody";
import FormCalculation from "../project_components/03_form-calculation/FormCalculation";
import FormHookOne from "../project_components/03_form-calculation/FormHookOne";
import FormHookTwo from "../project_components/03_form-calculation/FormHookTwo";
import { Grid } from "@material-ui/core";
function FormCalculations() {
  return (
    <ExperimentBody title="Form calculations">
      <Grid item xs={12}>
        <FormCalculation />
        <FormHookOne />
        <FormHookTwo />
      </Grid>
    </ExperimentBody>
  );
}
export default FormCalculations;
