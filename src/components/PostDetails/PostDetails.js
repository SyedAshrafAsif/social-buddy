import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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


const PostDetails = () => {
    const classes = useStyles();
    const {postId} = useParams();

    const [post, setPost] = useState({}); 
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setPost(data))
    }, [postId]) 

    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComments(data))
    }, [postId])
  
    return (
        <div>
            <Card className={classes.root, classes.size} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Details of Post {postId}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                    Post User_Id: {post.userId}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Post Title: {post.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Body: {post.body}
                    </Typography>                    
                </CardContent>           
            </Card> 
            <br/>
            <div>   
                <h2 style={{color: 'steelBlue', textAlign: 'center'}}>Top Comments</h2>             
                {
                    comments.map(comment => <Comments comments={comment}></Comments>)
                }                                
            </div> 
        </div>
    );
};

export default PostDetails;