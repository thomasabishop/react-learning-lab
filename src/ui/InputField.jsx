import { TextField } from "@material-ui/core";

const InputField = (props) => {
  return (
    <TextField
      name={props.name}
      label={props.label}
      value={props.value}
      size="small"
      variant="outlined"
      margin="dense"
      fullWidth
    />
  );
};

export default InputField;
