import { useParams } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

import { Header } from '../../ui/Header/Header';

import { useStyles } from './styles';

import { selectDoctors, setCurrent } from '../../../redux/doctorSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Doctor } from '../../../redux/types';
import DummyMap from '../../../assets/images/dummyMap.jpg';
import { toogleFormOpen } from '../../../redux/uiSlice';

interface NameParams {
  name: string;
}

export const DoctorPage = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const { name } = useParams<NameParams>();

  const doctors: Doctor[] = useAppSelector(selectDoctors);

  console.log(doctors);
  const doctor: Doctor = doctors.filter(
    (doctor) => doctor.lastName === name,
  )[0];

  const { firstName, lastName, picture } = doctor;

  const handleOpenForm = (): void => {
    dispatch(setCurrent(doctor));
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
                      src={picture}
                      alt={firstName + '' + lastName}
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
                        general practitioner
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.infoBlock}>
                    <Typography variant='subtitle1' className={classes.text}>
                      DOCTOR PROFILE
                    </Typography>
                    <Typography variant='body2' className={classes.text}>
                      Dear patients, welcome to my general practice in Berlin!
                      Here I am happy to advise you on all acute and chronic
                      health complaints with regard to the appropriate therapy.
                      Please make an appointment directly online. My team and I
                      welcome you to our friendly practice. Here I am your first
                      point of contact for all general health concerns and
                      complaints and I am also at your side in the context of
                      follow-up examinations and follow-up treatments after any
                      illnesses.
                    </Typography>
                    <Typography variant='body2' className={classes.text}>
                      For holistic general medical care, the relationship of
                      trust between patient and practitioner is particularly
                      important to me. Speaking medicine is my focus. I cover
                      the entire range of primary care services and also perform
                      vaccinations and health check-ups. Of course, you will
                      also receive medical certificates and referrals to various
                      specialists during my consultation hours, if necessary. I
                      look forward to booking your appointment. Your Dr.{' '}
                      {lastName}
                    </Typography>
                    <Divider className={classes.divider} />
                    <Grid container>
                      <Grid item xs={12} lg={6}>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Languages spoken
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          English, German and Spanish
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Website
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          wwww.dr{firstName}
                          {lastName}.com
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <Divider className={classes.divider} />
                        <Button
                          variant='contained'
                          color='secondary'
                          className={classes.bookBtn}
                          onClick={handleOpenForm}>
                          BOOK AN APPOINTMENT
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Paper className={classes.infoBlock}>
                    <Typography variant='subtitle1' className={classes.text}>
                      OPENING HOURS & CONTACT{' '}
                    </Typography>
                    <Grid container>
                      <Grid item xs={12} lg={6}>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Opening hours
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Mo: 8:30 am - 1:00 pm 3:00 pm - 6:00 pm
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Tue: 8:30 am - 1:00 pm 3:00 pm - 6:00 pm
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Wed: 8:30 am - 1:00 pm 3:00 pm - 6:00 pm
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Thu: 8:30 am - 1:00 pm 3:00 pm - 6:00 pm
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Fri: 8:30 am - 1:00 pm 3:00 pm - 6:00 pm
                        </Typography>
                      </Grid>
                      <Grid item xs={12} lg={6}>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Phone number
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          MPhone number: 030 89405090
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Emergency contact
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          In emergencies, please contact 030 116117 (emergency
                          medical service)
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid container>
                      <Grid item xs={12} lg={6}>
                        <Box className={classes.mapContainer}>
                          <img
                            src={DummyMap}
                            alt='location'
                            className={classes.map}
                          />
                        </Box>
                      </Grid>

                      <Grid item xs={12} lg={6}>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Access information
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          {firstName} {lastName}'s practice
                        </Typography>
                        <Typography
                          variant='subtitle1'
                          className={classes.text}>
                          Torstrasse 222, 11111 Berlin
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Local public transport
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Local public transport: U-Bahn - U Schönleinstr. (Line
                          U8) U-Bahn - U
                        </Typography>
                        <Typography variant='body2' className={classes.text}>
                          Ground floor barrier-free
                        </Typography>
                      </Grid>
                    </Grid>
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
