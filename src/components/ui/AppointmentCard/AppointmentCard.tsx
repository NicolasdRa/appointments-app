import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

import { useStyles } from './styles';
import { Appointment } from '../../../redux/types';
import { useAppDispatch } from '../../../hooks/hooks';
import { cancel } from '../../../redux/appointmentSlice';

export const AppointmentCard = (appointment: Appointment) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { date, time, title, doctor, description }: Appointment = appointment;

  const handleClickCancel = (): void => {
    const confirmationDialogue = window.confirm(
      'Do you want to delete the appointment?',
    );

    if (confirmationDialogue === true) {
      dispatch(cancel(appointment));
    }
  };

  return (
    <Card className={classes.root}>
      <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
        <Grid item xs={8}>
          <CardContent>
            <Typography
              className={classes.date}
              color='textSecondary'
              gutterBottom>
              {date} - {time}
            </Typography>
            <Typography variant='h5' component='h2' className={classes.title}>
              {title}
            </Typography>
            <Typography className={classes.doctor} color='textSecondary'>
              {doctor}
            </Typography>
            <Typography variant='body2' component='p'>
              {description}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          <CardActions className={classes.btnContainer}>
            <Button
              size='small'
              className={classes.btn}
              onClick={handleClickCancel}>
              Cancel Appointment
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
