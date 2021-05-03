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
import { useAppDispatch } from '../../../hooks/hooks';
import { setCurrent } from '../../../redux/doctorSlice';

interface CustomCardProps {
  key: string;
  doctor: Doctor;
}

export const CustomCard = ({ doctor }: CustomCardProps) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { title, firstName, lastName, picture } = doctor;

  const handleClickSetCurrentDoctor = (): void => {
    dispatch(setCurrent(doctor));
  };

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
          component={Link}
          to={`doctor/${lastName}`}
          onClick={handleClickSetCurrentDoctor}
          className={classes.btn}>
          Make an appoinment
        </Button>
      </CardActions>
    </Card>
  );
};
