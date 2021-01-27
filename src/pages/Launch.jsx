import { Grid } from "@material-ui/core";
import MainLayout from "../layouts/MainLayout";
import LaunchCard from "../ui/LaunchCard";
import taskIndex from "../data/taskIndex";

function Launch() {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {taskIndex.map((data, index) => (
          <LaunchCard key={index} {...data} />
        ))}
      </Grid>
    </MainLayout>
  );
}

export default Launch;
