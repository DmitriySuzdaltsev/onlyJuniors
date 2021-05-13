import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

export const Main = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={9}>
          <div>Zdes chto-to</div>
        </Grid>
        <Grid item md={3}>
          <div>Zdes chto-to</div>
        </Grid>
      </Grid>
    </Container>
  );
};
