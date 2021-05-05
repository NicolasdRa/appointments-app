import { Box, Button, Grid, Hidden, Typography } from '@material-ui/core';

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
        <Box className={classes.content}>
          <Box>
            <Grid item xs={12}>
              <Box className={classes.infoBlock}>
                <Typography variant='subtitle1' className={classes.text}>
                  PATIENT INFO
                </Typography>
                <Box className={classes.infoLine}>
                  <Typography variant='body2' className={classes.boldText}>
                    Name:{' '}
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {firstName} {lastName}
                  </Typography>
                </Box>
                <Box className={classes.infoLine}>
                  <Typography variant='body2' className={classes.boldText}>
                    email:
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {email}
                  </Typography>
                </Box>
                <Box className={classes.infoLine}>
                  <Typography variant='body2' className={classes.boldText}>
                    member since:
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {memberSince}
                  </Typography>
                </Box>
                <Box className={classes.infoLine}>
                  <Typography variant='body2' className={classes.boldText}>
                    date of birth:
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {dateOfBirth}
                  </Typography>
                </Box>
                <Box className={classes.infoLine}>
                  <Typography variant='body2' className={classes.boldText}>
                    insurance:
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {insurance}
                  </Typography>
                </Box>

                <Button
                  variant='contained'
                  className={classes.bookBtn}
                  onClick={handleOpenForm}>
                  BOOK AN APPOINTMENT
                </Button>
              </Box>
            </Grid>
          </Box>
          <Box>
            <Box className={classes.infoBlock}>
              <Typography variant='subtitle1' className={classes.text}>
                CURRENT APPOINTMENTS ({appointments.length})
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
            </Box>
          </Box>
        </Box>
      </Grid>
      <Footer />
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </Box>
  );
};
