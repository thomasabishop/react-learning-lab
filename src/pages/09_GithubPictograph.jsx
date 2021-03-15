import React, { useState } from 'react';
import ExperimentBody from '../ui/ExperimentBody';
import Pictograph from '../project_components/09_github_pictograph/Pictograph';
import { generateCommitData } from '../project_components/09_github_pictograph/generateData';

import { ButtonGroup, Button } from '@material-ui/core';

function GithubPictograph() {
  const filled = generateCommitData();
  const empty = generateCommitData('empty');

  const [initialState, updateInitialState] = useState(empty);

  return (
    <ExperimentBody title="Recreating the GitHub commit frequency pictograph">
      <Pictograph data={initialState} />
      <ButtonGroup style={{ marginTop: '1rem' }}>
        <Button onClick={() => updateInitialState(filled)}>
          Load or refresh data
        </Button>
        <Button onClick={() => updateInitialState(empty)}>Reset</Button>
      </ButtonGroup>
    </ExperimentBody>
  );
}

export default GithubPictograph;
