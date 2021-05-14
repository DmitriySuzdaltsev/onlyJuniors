import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    marginTop: "10px",
  },
  avatar: {
    backgroundColor: red[500],
  },
  username: {
    color: "#242529",
    fontSize: "16px",
    lineHeight: "20px",
    fontWeight: 600,
    cursor: 'pointer'
  },
  userAccount: {
    fontSize: "14px",
    color: "#8a96a3",
    cursor: 'pointer',
    "&:hover": {
      color: "#007aff",
    },
  },
});

interface Props {
  author: any
  body: string
  _id: string
}

export const CardItem = (props: Props) => {
  const classes = useStyles();
  const history = useHistory()
  const avatar = () => (
    <Avatar aria-label="recipe" className={classes.avatar}>
      KEK
    </Avatar>
  );
  const title = () => (
    <Link className={classes.username} onClick={onCardClick(props._id)}>
      { props.author }
    </Link>
  );
  const subtitle = () => (
    <Link className={classes.userAccount} onClick={onCardClick(props._id)}>
      @{ props.author }
    </Link>
  );

  const onCardClick = (id: string) => () => {
    history.push(`/user/${id}`)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={avatar()}
        title={title()}
        subheader={subtitle()}
        action={
          <IconButton aria-label="settings">
            <MoreHorizIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          { props.body }
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
