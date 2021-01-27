import MainLayout from "../layouts/MainLayout";
import { Box, Paper, Typography, Divider, Grid } from "@material-ui/core";

const ExperimentBody = (props) => {
  return (
    <MainLayout>
      <Paper>
        <Box p={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" component="h2" gutterBottom>
                {props.title}
              </Typography>
              <Divider />
            </Grid>
            {props.children}
          </Grid>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default ExperimentBody;
