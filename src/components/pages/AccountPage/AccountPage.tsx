import {
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  Paper,
  Typography,
} from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/Footer/Footer';
import { BottomNav } from '../../ui/BottomNav/BottomNav';

import { user } from '../../../assets/data';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { selectAppointments } from '../../../redux/appointmentSlice';
import { AppointmentCard } from '../../ui/AppointmentCard/AppointmentCard';
import { toogleFormOpen } from '../../../redux/uiSlice';

import { useStyles } from './styles';

export const AccountPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const {
    firstName,
    lastName,
    email,
    memberSince,
    dateOfBirth,
    insurance,
    img,
  } = user;

  const appointments = useAppSelector(selectAppointments);

  const handleOpenForm = () => {
    dispatch(toogleFormOpen());
  };

  return (
    <Box>
      <Header />
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        className={classes.main}>
        <Box className={classes.imageContainer}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'>
            <Grid item xs={6} sm={2}>
              <img
                src={img}
                alt={`${firstName} ${lastName}`}
                className={classes.userImg}
              />
            </Grid>
            <Grid item xs={6} lg={6}>
              <Box className={classes.user_info}>
                <Typography variant='h5' className={classes.userFullName}>
                  {firstName} {lastName}
                </Typography>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  className={classes.discipline}>
                  Active appointments: {appointments.length}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid
          item
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
          spacing={3}
          xs={12}
          lg={8}>
          <Grid item container xs={12} lg={6}>
            <Grid item xs={12}>
              <Paper className={classes.infoBlock}>
                <Typography variant='subtitle1' className={classes.title}>
                  Patient Info
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Name: {firstName} {lastName}
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  email: {email}
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  member since: {memberSince}
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  date of birth: {dateOfBirth}
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  insurance: {insurance}
                </Typography>

                <Divider className={classes.divider} />
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.bookBtn}
                  onClick={handleOpenForm}>
                  BOOK AN APPOINTMENT
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container xs={12} lg={6}>
            <Paper className={classes.infoBlock}>
              <Typography variant='subtitle1' className={classes.title}>
                Current appointments ({appointments.length})
              </Typography>
              {appointments.length === 0 ? (
                <Typography variant='body2' className={classes.text}>
                  No active appointments to show
                </Typography>
              ) : (
                appointments.map((appointment) => (
                  <AppointmentCard key={appointment.id} {...appointment} />
                ))
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </Box>
  );
};
