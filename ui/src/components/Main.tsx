import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { CardItem } from "./CardItem/CardItem";
import { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [feed, setFeed] = useState([] as any[]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    refreshFeed();
  }, []);

  const refreshFeed = () => {
    axios.get('/getFeed')
      .then((res) => {
        setFeed(res.data)
        console.log(res.data)
      })
  }

  const handleChange = (name: string) => (event: any) => {
    setMessage(event.target.value)
  };

  const sendPost = () => {
    axios.post('/addPost',{
      author: 'MemeLord',
      body: message,
      timestamp: + new Date(),
    }).then(refreshFeed)
  }

  return (
    <Grid container spacing={1}>
      <Grid item md={9}>
        { feed.sort((a,b) =>  b.timestamp - a.timestamp).map((item) =>  <CardItem key={item._id} {...item}/>) }
      </Grid>
      <Grid item md={3}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Отправить тупняк
            </Typography>
            <TextField
              id="outlined-uncontrolled"
              label="Поделись дегродацией"
              margin="normal"
              variant="outlined"
              value={message}
              onChange={handleChange('content')}
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={ sendPost }>Отправить</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
