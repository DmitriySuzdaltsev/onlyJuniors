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
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "100%",
        boxShadow: 'none'
    },
    avatar: {
        backgroundColor: red[500],
        width: theme.spacing(10),
        height: theme.spacing(10),
        position: 'absolute',
        top: '-50px',
        left: '16px',
        border: '2px solid white'
    },
    username: {
        color: "#242529",
        fontSize: "19px",
        lineHeight: "24px",
        fontWeight: 600,
    },
    userAccount: {
        fontSize: "14px",
        color: "#8a96a3"
    },
    content: {
        position: 'relative'
    },
    actionsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    actionButton: {
        color: "#00aff0",
        "&:hover": {
            backgroundColor: "rgb(0 145 234 / 15%)",
        },
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    userInfo: {
        marginTop: '-24px'
    },
    userContent: {
        marginTop: '24px'
    }

}));



export const UserPageCard = () => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <Card className={classes.root}>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="300"
                image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
                <Avatar aria-label="recipe" className={classes.avatar}>
                    KEK
                </Avatar>
                <div className={classes.actionsContainer}>
                    <IconButton className={classes.actionButton}>
                        <StarBorderIcon />
                    </IconButton>
                    <IconButton className={classes.actionButton}>
                        <FileCopyIcon />
                    </IconButton>
                </div>
                <Typography component="div" className={classes.userInfo}>
                    <div className={classes.username}>
                        Pepega
                    </div>
                    <div className={classes.userAccount}>
                        @Pepega
                    </div>
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p" className={classes.userContent}>
                    Lorem ipsum dolor sit amet
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">Больше информации</Button>
            </CardActions>
        </Card>
    );
};