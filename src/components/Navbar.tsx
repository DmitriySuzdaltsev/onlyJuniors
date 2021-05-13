import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navbar: {
    justifyContent: "space-between",
    display: "flex",
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Container maxWidth="lg" className={classes.navbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeOutlinedIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ChatIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <AccountCircleIcon />
          </IconButton>
        </Container>
      </AppBar>
    </div>
  );
};
