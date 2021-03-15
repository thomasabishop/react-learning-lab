import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

class ChangeTextClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'The glass is half full',
    };
  }
  updateText() {
    this.setState({ text: 'The glass is half empty' });
  }

  revertText() {
    this.setState({ text: 'The glass is half full' });
  }

  render() {
    return (
      <Paper
        variant="outlined"
        style={{ padding: '1rem', marginBottom: '1rem' }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Using class component
        </Typography>

        <Paper className="classTextOutput" variant="outlined">
          <Typography>{this.state.text}</Typography>
        </Paper>

        <Button
          className="classButton"
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => this.updateText()}
        >
          Change text
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => this.revertText()}
        >
          Revert text
        </Button>
      </Paper>
    );
  }
}

export default ChangeTextClass;
