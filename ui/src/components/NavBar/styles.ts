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
    logoContainer: {
      width: '220px',
      height: '40px',
      top: '5px',
      position: 'absolute',
      left: '10px',
    },
    logo: {
      width: '100%',
      height: '100%',
    }
  }));