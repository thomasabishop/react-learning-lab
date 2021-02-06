import React, { useState } from "react";
import { Paper, Typography, Box, Button } from "@material-ui/core";
import ContextUsingHook from "./ContextUsingHook";

const StyleContext = React.createContext();

const toggleStyles = {
  firstStyle: {
    border: "2px solid dodgerblue",
    background: "lightblue",
    color: "dodgerblue",
  },
  secondStyle: {
    border: "2px solid firebrick",
    background: "lightsalmon",
    color: "firebrick",
  },
};

const Child = () => {
  return (
    <StyleContext.Consumer>
      {(value) => (
        <div className="common-styles" style={value}>
          <Typography variant="body2">
            I'm a <b>child</b>. I <b>consume</b> the data my parent provides.
          </Typography>
        </div>
      )}
    </StyleContext.Consumer>
  );
};

function ContextPreHook() {
  const [style, setStyle] = useState(toggleStyles.firstStyle);

  const handleClick = () => {
    style === toggleStyles.firstStyle
      ? setStyle(toggleStyles.secondStyle)
      : setStyle(toggleStyles.firstStyle);
  };
  return (
    <Paper variant="outlined" style={{ padding: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Context API using consumer/provider and useContext
      </Typography>
      <Typography variant="body1" gutterBottom>
        Two methods for passing data using the Context API.
      </Typography>

      <Paper
        style={{
          padding: "1rem",
          margin: "1rem 0",
          background: "#eeeeee",
        }}
        variant="outlined"
      >
        <StyleContext.Provider value={style}>
          <Typography>
            I'm a <b>parent</b> and the <b>provider </b>component of the of the
            boxes below. They are my children. I'm controlling their appearance
            by passing them an object which contains CSS rules. Even though they
            are not my direct descendents (there are other components in
            between), I am still able to pass props directly down to them,
            without having to pass them to the intervening components.
          </Typography>

          <Box
            margin={2}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            flexWrap="wrap"
          >
            <Child />
            <Child />
            <Child />
          </Box>
          <Typography>
            If you click the button below, the style data passed to me will
            change. This will update my children. Go ahead, give it a click!
          </Typography>

          <Button
            onClick={handleClick}
            style={{ marginTop: "1rem" }}
            variant="outlined"
            disableElevation
          >
            Toggle style context
          </Button>
        </StyleContext.Provider>
      </Paper>

      <ContextUsingHook />
    </Paper>
  );
}
export default ContextPreHook;
