import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";

function ReactivationKey(props) {
  return (
    <Card style={{ margin: "2rem 0" }} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Your unique reactivation key
        </Typography>
        <Typography variant="h5" component="h2">
          {props.reactivationKey}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Button size="small" variant="outlined">
            Click to copy
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default ReactivationKey;
