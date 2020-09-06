import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import fakeImage from '../../fakeImage/fakeImage'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  commentBox: {
    border: '2px solid lightGray',
    borderRadius: '10px',
    boxShadow: '5px 5px 10px lightGray'
  }
}));

const Comments = (props) => {
    const classes = useStyles();
    const images = fakeImage.slice(0,1);
    const [image, setImage] = useState(images);
    const comment = props.comments;
   
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid className={classes.commentBox} container spacing={2}>
                    {
                        image.map(image => <Grid item>
                            <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={image.image} />
                            </ButtonBase>
                        </Grid>)
                    }
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                {comment.name}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                {comment.email}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                {comment.body}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Paper>
    </div>
        
    );
};

export default Comments;