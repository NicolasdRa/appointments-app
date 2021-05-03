import { Link } from 'react-router-dom';

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { useStyles } from './styles';

import { Doctor } from '../../../redux/types';

interface CustomCardProps {
  key: string;
  doctor: Doctor;
}

export const CustomCard = ({ key, doctor }: CustomCardProps) => {
  const classes = useStyles();

  const { title, firstName, lastName, picture } = doctor;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} title='Doctor' />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='h2'>
            {`${title} ${firstName} ${lastName}`}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Berlin - Kreuzberg
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            general practitioner
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='secondary'
          component={Link}
          to={`doctor/${lastName}`}>
          Make an appoinment
        </Button>
      </CardActions>
    </Card>
  );
};
