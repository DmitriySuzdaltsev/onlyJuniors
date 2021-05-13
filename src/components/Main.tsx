import Grid from "@material-ui/core/Grid";
import { CardItem } from "./CardItem/CardItem";

export const Main = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={9}>
        <CardItem />
        <CardItem />
      </Grid>
      <Grid item md={3}>
        <div>Zdes chto-to</div>
      </Grid>
    </Grid>
  );
};
