import React, { useState, useEffect } from "react";
import { Paper, Typography, TextField, Button, Grid } from "@material-ui/core";
function FormHookTwo() {
  const resetState = {
    email: "",
    phone: "",
    age: "",
  };

  const initialState = {
    email: sessionStorage.getItem("email") || "",
    phone: sessionStorage.getItem("phone") || "",
    

    age: sessionStorage.getItem("age") || "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const handleChange = (event) => 

  {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const [formOutput, setFormOutput] = useState("Form output");
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormOutput(JSON.stringify(formValues, null, 2));
  };

  const handleReset = () => {
    setFormValues({ ...resetState });
  };

  useEffect(() => {
    Object.entries(formValues).map(([key, val]) =>
      sessionStorage.setItem(key, val)
    );
  }, [formValues]);

  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginBottom: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Hook-based form, with input abstraction
      </Typography>
      <Typography variant="body1" gutterBottom>
        This version <i>is</i> optimised. Instead of maintaining a state
        variable for each input, the inputs have a single overall state. The
        inputs are distinguished by the HTML <strong>name</strong> attribute.
        This is then used as a generic key with ES6 object destructuring to
        capture the change in state of the individual inputs.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          value={formValues.email}
          onChange={handleChange}
          type="text"
          variant="outlined"
          size="small"
          label="Email address"
          margin="normal"
          fullWidth
        />
        <TextField
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
          type="text"
          variant="outlined"
          size="small"
          label="Phone number"
          margin="normal"
          fullWidth
        />
        <TextField
          name="age"
          value={formValues.age}
          onChange={handleChange}
          type="number"
          variant="outlined"
          size="small"
          label="Age"
          margin="normal"
          fullWidth
        />
        <Grid item sm={6} md={6} lg={6}>
          <Button type="submit" color="primary" variant="outlined">
            Submit
          </Button>
          <Button
            style={{ marginLeft: "1em" }}
            color="secondary"
            variant="outlined"
            onClick={handleReset}
          >
            Reset
          </Button>
        </Grid>
      </form>
      <Paper
        variant="outlined"
        style={{ background: "#e0f7c9", padding: "1rem", marginTop: "1rem" }}
      >
        <Typography>{formOutput}</Typography>
      </Paper>
    </Paper>
  );
}

export default FormHookTwo;
