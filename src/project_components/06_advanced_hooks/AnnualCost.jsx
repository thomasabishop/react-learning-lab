import { TextField } from "@material-ui/core";

const AnnualCost = (props) => {
  return (
    <TextField
      value={props.annualCost}
      label="Annual maintenance cost"
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{ readOnly: true }}
    />
  );
};

export default AnnualCost;
