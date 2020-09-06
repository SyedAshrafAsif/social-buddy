import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  size: {
    border: '2px solid Gray',
    borderRadius: '15px',
    margin: '50px 15px',
    boxShadow: '5px 5px 10px gray'

  }
});

const Comments = (props) => {
    const classes = useStyles();
    const comment = props.comments;
    const image = props.images;
   
    return (
        <div>
            <Card className={classes.root, classes.size}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image=""
                    />
                    <CardContent>
                        <img src={image.img} alt=""/>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name: {comment.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h4">
                            Email: {comment.email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {comment.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Share
                    </Button>
                </CardActions>
            </Card>
        </div>
        
    );
};

export default Comments;