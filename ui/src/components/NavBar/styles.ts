import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    navbar: {
      justifyContent: "space-between",
      display: "flex",
    },
    appbar: {
      boxShadow: "none",
      borderBottom: "1px solid lightgray",
    },
  }));