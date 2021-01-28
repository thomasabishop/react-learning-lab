import React, { useReducer } from "react";
import md5 from "md5-hash";
import ReactivationKey from "./ReactivationKey";
import {
  Paper,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";

const initialFormState = {
  username: "",
  secretQuestion: "",
  reactivationKey: "",
};

const generateHash = (a, b) => {
  if (a !== "" && b !== "") {
    return md5(a + b);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUTS":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "GENERATE_KEY":
      return {
        ...state,
        reactivationKey: generateHash(state.email, state.secretQuestion),
      };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
};

function ReducerOne() {
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const handleTextChange = (event) => {
    dispatch({
      type: "HANDLE_INPUTS",
      field: event.target.name,
      payload: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "GENERATE_KEY",
    });
  };
  const handleReset = (event) => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginTop: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Reducer One
      </Typography>
      <Typography variant="body1">
        This uses the <b>useReducer</b> hook. It takes a username and the answer
        to a secret question from the user and returns a password reactivation
        key in the form of an MD5 hash.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          type="text"
          label="Enter username"
          margin="dense"
          fullWidth
          value={formState.username}
          onChange={(event) => handleTextChange(event)}
        />
        <TextField
          name="secretQuestion"
          type="text"
          label="Answer to secret question"
          margin="dense"
          fullWidth
          value={formState.secretQuestion}
          onChange={(event) => handleTextChange(event)}
        />
        <ButtonGroup style={{ marginTop: "1rem" }}>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
          <Button color="secondary" variant="outlined" onClick={handleReset}>
            Reset
          </Button>
        </ButtonGroup>
      </form>
      <ReactivationKey reactivationKey={formState.reactivationKey} />
    </Paper>
  );
}

export default ReducerOne;
