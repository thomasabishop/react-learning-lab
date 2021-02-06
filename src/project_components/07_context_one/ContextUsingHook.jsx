import React, { useContext } from "react";
import { Paper, Typography, Box } from "@material-ui/core";

const NumberContext = React.createContext(42);

const Context = () => {
  const data = useContext(NumberContext);
  return <Typography>{data}</Typography>;
};
function ContextUsingHook() {
  return (
    <Paper
      style={{
        padding: "1rem",
        margin: "1rem 0",
        background: "#eeeeee",
      }}
      variant="outlined"
    >
      <Typography>
        Hi, I pass data down to my child below (the integer, 42) but I do it
        using the useContext hook which simplifies the syntax.
      </Typography>

      <Box display="flex">
        <div
          style={{
            border: "2px solid dodgerblue",
            background: "lightblue",
            color: "dodgerblue",
            margin: "1rem",
          }}
          className="common-styles"
        >
          <Context />
        </div>
      </Box>
    </Paper>
  );
}

export default ContextUsingHook;
