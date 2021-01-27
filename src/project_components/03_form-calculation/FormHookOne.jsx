import React, { useEffect, useState } from "react";
import { Paper, Typography, TextField, Button, Grid } from "@material-ui/core";
function FormHookOne() {
  const [email, setEmail] = useState(
    sessionStorage.getItem("storedEmail") || ""
  );
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [formOutput, setFormOutput] = useState("Form output");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormOutput(
      JSON.stringify({ email: email, phone: phone, age: age }, null, 2)
    );
  };

  useEffect(() => {
    sessionStorage.setItem("storedEmail", email);
  }, [email]);

  // Session storage persists until new session, i.e. opening in a new tab
  // Local storage persists even after the tab being closed

  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginBottom: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Hook-based form, no abstraction
      </Typography>
      <Typography variant="body1" gutterBottom>
        This form is written unoptimised, with a dedicated state variable for
        each input. The <strong>email</strong> input persists on refresh, by
        utilising the browser's <strong>localStorage </strong>object
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          variant="outlined"
          size="small"
          label="Email address"
          margin="normal"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          type="text"
          variant="outlined"
          size="small"
          label="Phone number"
          margin="normal"
          fullWidth
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          type="number"
          variant="outlined"
          size="small"
          label="Age"
          margin="normal"
          fullWidth
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
        <Grid item sm={6} md={6} lg={6}>
          <Button type="submit" color="primary" variant="outlined">
            Submit
          </Button>
        </Grid>
      </form>
      <Paper
        variant="outlined"
        style={{ background: "#f7f7c9", padding: "1rem", marginTop: "1rem" }}
      >
        <Typography>{formOutput}</Typography>
      </Paper>
    </Paper>
  );
}

export default FormHookOne;
