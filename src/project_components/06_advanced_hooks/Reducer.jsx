import React, { useReducer } from "react";
import { Paper, Typography, TextField, Button } from "@material-ui/core";

const initialFormState = {
  email: "",
  password: "",
  proofOfLogin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUTS":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "PROVE LOGIN":
      return {
        ...state,
        proofOfLogin: (state.email + state.password).toUpperCase(),
      };

    default:
      return state;
  }
};

function Reducer() {
  const [formState, dispatch] = useReducer(reducer, initialFormState);

  const handleTextChange = (event) => {
    dispatch({
      type: "HANDLE INPUTS",
      field: event.target.name,
      payload: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "PROVE LOGIN",
    });
  };
  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginTop: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Reducer
      </Typography>
      <Typography variant="body1">
        Insert description of component here.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="text"
          label="Enter username"
          margin="dense"
          fullWidth
          value={formState.username}
          onChange={(event) => handleTextChange(event)}
        />
        <TextField
          name="password"
          type="text"
          label="Enter password"
          margin="dense"
          fullWidth
          value={formState.password}
          onChange={(event) => handleTextChange(event)}
        />
        <button type="submit">Submit</button>
      </form>

      <Paper style={{ marginTop: "1rem" }} variant="outlined">
        <p>{formState.proofOfLogin}</p>
      </Paper>
    </Paper>
  );
}

export default Reducer;
