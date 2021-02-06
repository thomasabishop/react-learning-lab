import { useReducer } from "react";
import ReducerTable from "./ReducerTable";
import AnnualCost from "./AnnualCost";
import {
  Paper,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  TextField,
} from "@material-ui/core";

const initialState = {
  labourHours: "",
  labourCost: "",
  travelHours: "",
  travelCost: "",
  partsCost: "",
  annualMaintenance: 0,
  tableData: [],
};

const totalCost = (labourHours, labourCost, travelHours, travelCost, parts) => {
  const labourTotal = labourHours * labourCost;
  const travelTotal = travelHours * travelCost;
  return labourTotal + travelTotal + parts;
};

const returnTable = (func) => {
  let total = func * 4;
  return ["Service costs", func, func, func, func, total];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUTS":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "TOTAL":
      return {
        ...state,
        annualMaintenance: totalCost(
          Number(state.labourHours),
          Number(state.labourCost),
          Number(state.travelHours),
          Number(state.travelCost),
          Number(state.partsCost)
        ),
        tableData: returnTable(
          totalCost(
            Number(state.labourHours),
            Number(state.labourCost),
            Number(state.travelHours),
            Number(state.travelCost),
            Number(state.partsCost)
          )
        ),
      };
    case "DUMMY":
      return state.tableData;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function ReducerTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = (event) =>
    dispatch({
      type: "HANDLE_INPUTS",
      field: event.target.name,
      payload: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "TOTAL" });
  };
  const handleReset = () => dispatch({ type: "RESET" });

  return (
    <Paper variant="outlined" style={{ padding: "1rem", marginTop: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Reducer Two
      </Typography>
      <Typography variant="body1">Description of component</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          type="number"
          name="labourHours"
          value={state.labourHours}
          label="Hours for labour"
          onChange={handleTextChange}
          size="small"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          type="number"
          name="labourCost"
          value={state.labourCost}
          label="Hourly labour cost"
          onChange={handleTextChange}
          size="small"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          type="number"
          name="travelHours"
          value={state.travelHours}
          label="Hours for travel"
          onChange={handleTextChange}
          size="small"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          type="number"
          name="travelCost"
          value={state.travelCost}
          label="Hourly travel cost"
          onChange={handleTextChange}
          size="small"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          type="number"
          name="partsCost"
          value={state.partsCost}
          label="Parts cost"
          onChange={handleTextChange}
          size="small"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <Grid container style={{ marginTop: "1rem" }}>
          <Grid item md={3}>
            <ButtonGroup>
              <Button variant="outlined" type="submit">
                Submit
              </Button>
              <Button
                onClick={handleReset}
                color="secondary"
                variant="outlined"
              >
                Reset
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item md={9}>
            <AnnualCost annualCost={state.annualMaintenance} />
          </Grid>
        </Grid>
      </form>
      <ReducerTable data={state.tableData} />
    </Paper>
  );
}

export default ReducerTwo;
