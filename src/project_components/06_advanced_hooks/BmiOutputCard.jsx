import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  ButtonGroup,
} from "@material-ui/core";

function BmiOutputCard(props) {
  return (
    <Card style={{ margin: "2rem 0" }} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Body Mass Index
        </Typography>
        <Typography variant="h5" component="h2">
          0
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup>
          <Button variant="outlined">Toggle Unit</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default BmiOutputCard;
