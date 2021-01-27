import ExperimentBody from "../ui/ExperimentBody";
import GithubUsers from "../project_components/04_github-directory/GithubUsers";
import { Grid } from "@material-ui/core";
function GithubUserDir() {
  return (
    <ExperimentBody title="GitHub User Directory">
      <Grid item xs={12}>
        <GithubUsers />
      </Grid>
    </ExperimentBody>
  );
}
export default GithubUserDir;
