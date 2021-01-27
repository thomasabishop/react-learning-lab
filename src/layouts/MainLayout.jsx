import React from "react";
import Header from "../ui/Header";
import { Box, Container } from "@material-ui/core";

function MainLayout(props) {
  return (
    <React.Fragment>
      <Header />
      <Box m={4}>
        <Container maxWidth="lg">{props.children}</Container>
      </Box>
    </React.Fragment>
  );
}

export default MainLayout;
