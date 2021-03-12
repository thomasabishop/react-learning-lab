import React from 'react';
import Header from '../ui/Header';
import { Box, Container } from '@material-ui/core';

function MainLayout(props) {
  return (
    <React.Fragment>
      <Header />
      <Box m={1}>
        <Container style={{ marginTop: '2rem' }} maxWidth="xl">
          {props.children}
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default MainLayout;
