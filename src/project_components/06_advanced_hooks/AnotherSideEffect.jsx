import React, { useState, useEffect } from "react";

import { ButtonGroup, Button, Typography, Paper } from "@material-ui/core";

const AnotherSideEffect = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter + 1);

  // Effect runs at every instance, no refinement
  useEffect(() => {
    console.log("render");
    return () => console.log("unmounting");
  });

  // Effect runs once, due to empty array
  useEffect(() => {
    console.log("rendering once due to empty array");
    return () => console.log("unmounting");
  }, []);
  // When we pass an empty array, we can only do this if our effect is not dependent on any state or props. If the useEffect function refers to state or props and you pass a blank array, you will get an ESLint warning that you should heed. It's a sign that that you are not using an effect that is independent of re-rendering.

  // Effect only runs if condition defined above is met
  const condition = counter === 3;
  useEffect(() => {
    console.log("initial render and then re-render once on condition");
    return () => console.log("unmounting");
  }, [condition]);

  return (
    <Paper variant="outlined" style={{ padding: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Another side-effect demo
      </Typography>
      <Typography variant="body1" gutterBottom>
        This exists just to test the lifecycle methods of{" "}
        <strong>useEffect</strong> in the console. View console to see what I'm
        logging.
      </Typography>

      <Typography variant="h5" component="h2">
        {counter}
      </Typography>

      <ButtonGroup
        size="small"
        color="primary"
        aria-label="outlined primary button group"
        style={{ marginTop: "1rem" }}
      >
        <Button onClick={handleClick}>+1</Button>
        <Button onClick={() => setCounter(0)}>Reset</Button>
      </ButtonGroup>
    </Paper>
  );
};

export default AnotherSideEffect;
