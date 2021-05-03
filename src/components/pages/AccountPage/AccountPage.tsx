import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  Paper,
  Typography,
} from '@material-ui/core';

import { Header } from '../../ui/Header/Header';

import { useStyles } from './styles';

import { user } from '../../../assets/data';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { selectAppointments } from '../../../redux/appointmentSlice';
import { AppointmentCard } from '../../ui/AppointmentCard/AppointmentCard';
import { toogleFormOpen } from '../../../redux/uiSlice';

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
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item xs={12} lg={9}>
          <Box className={classes.container}>
            <Box className={classes.content}>
              <Box className={classes.header}>
                <Grid
                  container
                  direction='row'
                  justify='flex-start'
                  alignItems='flex-start'>
                  <Grid item xs={12} sm={2}>
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
                container
                direction='row'
                justify='center'
                alignItems='flex-start'
                spacing={3}>
                <Grid item container xs={12} lg={6}>
                  <Grid item xs={12}>
                    <Paper className={classes.infoBlock}>
                      <Typography variant='subtitle1' className={classes.text}>
                        PERSONAL INFO
                      </Typography>
                      <Typography variant='body2' className={classes.text}>
                        Name: {firstName} {lastName}
                      </Typography>
                      <Typography variant='body2' className={classes.text}>
                        username: {email}
                      </Typography>
                      <Typography variant='body2' className={classes.text}>
                        member since: {memberSince}
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.infoBlock}>
                      <Typography variant='subtitle1' className={classes.text}>
                        PATIENT INFO
                      </Typography>
                      <Typography variant='body2' className={classes.text}>
                        Name: {firstName} {lastName}
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
                    <Typography variant='subtitle1' className={classes.text}>
                      APPOINTMENTS
                    </Typography>
                    {appointments.length === 0 ? (
                      <Typography variant='body2' className={classes.text}>
                        No active appointments to show
                      </Typography>
                    ) : (
                      appointments.map((appointment) => (
                        <AppointmentCard {...appointment} />
                      ))
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            {/* {matchesSm ? <BottomNav className={classes.bottomNav} /> : <Footer />} */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
