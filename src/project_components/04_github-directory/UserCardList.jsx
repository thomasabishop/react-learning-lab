import UserCard from "./UserCard";
import { Grid } from "@material-ui/core";
const CardList = (props) => {
  return (
    <Grid container spacing={3}>
      {props.profiles.map((profile) => (
        <Grid item xs={12} sm={12} md={4}>
          <UserCard {...profile} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;
