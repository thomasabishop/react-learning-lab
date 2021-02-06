import React, { useState } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

const multipliers = [5, 10, 100];

// Output component, receives state in form of props from parent function
const OutputContainer = (props) => {
  return (
    <Paper variant="outlined" style={{ minHeight: "30px", margin: "1rem 0" }}>
      <Typography variant="body1">{props.data}</Typography>
    </Paper>
  );
};

/* Main parent component */
function SideEffect() {
  /* State management */
  // Retrieve form value
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // Apply calculation on click and pass down to child as prop
  const [output, setOutput] = useState("");
  const handleClick = () => {
    if (input !== "") {
      setOutput(multipliers.map((x) => x * input).join(", "));
    }
  };
  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginBottom: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Side-effects
      </Typography>

      <Typography variant="body1">
        On the component/rendered level, an integer <i>i</i> is entered.
        <i>i</i> is multiplied by 5, 10, 15 and the produce is returned within
        the component for each multiplier. As a side-effect, each element in the
        rendered array is summed. This value is then output as a window alert.
      </Typography>

      <form>
        <TextField
          type="number"
          value={input}
          label="Enter value"
          size="small"
          margin="normal"
          onChange={handleChange}
        />
      </form>
      <Button size="small" variant="outlined" onClick={handleClick}>
        Click
      </Button>
      <OutputContainer data={output} />
    </Paper>
  );
}

export default SideEffect;
