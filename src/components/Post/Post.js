import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 25,
    },
    pos: {
      marginBottom: 12,
    },
    size: {
      border: '2px solid lightGray',
      borderRadius: '10px',
      margin: '20px 15px',
      boxShadow: '5px 5px 10px lightGray'
    }
  });

const Post = (props) => {
    const {title, body, id} = props.post;
    const history = useHistory();
    const handleClick = (postId) => {
      const url = `/postDetails/${postId}`;
      history.push(url);
    }
    const classes = useStyles();
    return (
        <Card className={classes.root, classes.size} variant="outlined">
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Title: {title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {body}
            </Typography>
          </CardContent>
          <CardActions>
            {/*<Link to={`/postDetails/${id}`}>See More</Link>*/}
            <Button onClick={() => handleClick(id)} variant="outlined" color="secondary">See More</Button>
          </CardActions>
        </Card>
      );
};

export default Post;