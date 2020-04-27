import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Word from '../../assets/word.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.text.primary}`,
  },
  media: {
    objectFit: 'scale-down',
  },
}));

function LessonCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to="/lesson">
        <CardMedia
          component="img"
          alt="Microsoft Word Logo"
          height="140"
          image={Word}
          title="Microsoft Word"
          classes={{ media: classes.media }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Microsoft Word
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Learn easy ways to increase your efficency of writing those
            important documents. From basics like copy and pasting, to checking
            your grammar and spelling.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Progress
        </Button>
        <Button size="small" color="primary">
          Stats
        </Button>
      </CardActions>
    </Card>
  );
}

export default LessonCard;
