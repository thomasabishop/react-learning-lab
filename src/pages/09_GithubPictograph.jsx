import React from 'react';
import MainLayout from '../layouts/MainLayout.jsx';
import Pictograph from '../project_components/09_github_pictograph/Pictograph';
import { Typography } from '@material-ui/core';

function GithubPictograph() {
  return (
    <MainLayout>
      <Typography variant="h4" component="h2" gutterBottom>
        Recreating the GitHub commit frequency pictograph
      </Typography>

      <Pictograph />
    </MainLayout>
  );
}

export default GithubPictograph;
