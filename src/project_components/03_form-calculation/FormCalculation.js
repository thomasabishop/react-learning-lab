import React from "react";
import { TextField, Grid, Button, Typography, Paper } from "@material-ui/core";

class FormCalculation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outputSum: "",
      inputOne: "",
      inputTwo: "",
    };
    this.virginState = this.state;
  }

  returnSum = (x, y) => x + y;

  resetForm = () => {

    
    this.setState(this.virginState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.inputOne && this.state.inputTwo !== "") {
      this.setState({ outputSum: this.returnSum( Number(this.state.inputOne),
          Number(this.state.inputTwo)
        ),
      });
    }
    console.log(this.state.inputOne);
  };
  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value, // this distinguishes the two inputs without using separate handle funcs see https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
    });
  };

  render() {
    return (
      <Paper
        variant="outlined"
        style={{ padding: "1rem", marginBottom: "1rem" }}
      >
        <Typography variant="h5" gutterBottom style={{ marginBottom: "1rem" }}>
          Class component form
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "1rem" }}>
          This form uses a React class component to carry out a simple sum
          function.
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item sm={6} md={4} lg={6}>
              <TextField
                type="number"
                variant="outlined"
                fullWidth
                size="small"
                label="Enter integer"
                name="inputOne"
                value={this.state.inputOne}
                onChange={this.handleChange}
                required
              />
            </Grid>

            <Grid item sm={6} md={6} lg={6}>
              <TextField
                variant="outlined"
                fullWidth
                size="small"
                label="Enter integer"
                name="inputTwo"
                value={this.state.inputTwo}
                onChange={this.handleChange}
                required
              />
            </Grid>

            <Grid item sm={12} md={12} lg={12}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Sum"
                InputProps={{
                  readOnly: true,
                }}
                value={this.state.outputSum}
              />
            </Grid>

            <Grid item sm={6} md={6} lg={6}>
              <Button
                onClick={this.handleSubmit}
                color="primary"
                variant="outlined"
              >
                Calculate
              </Button>
              <Button
                style={{ marginLeft: "1em" }}
                color="secondary"
                variant="outlined"
                onClick={this.resetForm}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default FormCalculation;
