import Grid from "@material-ui/core/Grid";

export const Main = () => {
  return (
    <Grid container spacing={1}>
      <Grid item md={9}>
        <div>Zdes chto-to</div>
      </Grid>
      <Grid item md={3}>
        <div>Zdes chto-to</div>
      </Grid>
    </Grid>
  );
};
