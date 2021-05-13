import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Container } from "@material-ui/core";
import { useStyles } from "./styles";
import image from "./only_juniors.png";

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img src={image} alt="onlyJuniors" className={classes.logo} />
      </div>
      <AppBar position="static" color="transparent" className={classes.appbar}>
        <Container maxWidth="lg">
          <div className={classes.navbar}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <HomeOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AddBoxOutlinedIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ChatIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};
