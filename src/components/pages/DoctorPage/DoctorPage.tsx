import { useParams, Redirect } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  Grid,
  Hidden,
  Typography,
} from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/Footer/Footer';
import { BottomNav } from '../../ui/BottomNav/BottomNav';

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

  const doctor: Doctor = doctors.filter(
    (doctor) => doctor.lastName === name,
  )[0];

  if (!doctor) {
    return <Redirect to='/' />;
  }

  const { firstName, lastName, picture } = doctor;

  const handleOpenForm = (): void => {
    dispatch(setCurrent(doctor));
    dispatch(toogleFormOpen());
  };

  return (
    <Box>
      <Header />
      <Box className={classes.main}>
        <Box className={classes.imageContainer}>
          <Grid
            container
            direction='row'
            justify='flex-start'
            alignItems='flex-start'>
            <Grid item xs={6} sm={2}>
              <img
                src={picture}
                alt={firstName + '' + lastName}
                className={classes.userImg}
              />
            </Grid>
            <Grid item xs={6} lg={6}>
              <Box className={classes.user_info}>
                <Typography variant='h5' className={classes.userFullName}>
                  Dr. {firstName} {lastName}
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
        <Box className={classes.content}>
          <Box className={classes.infoBlock}>
            <Typography variant='subtitle1' className={classes.text}>
              DOCTOR PROFILE
            </Typography>
            <Typography variant='body2' className={classes.text}>
              Dear patients, welcome to my general practice in Berlin! Here I am
              happy to advise you on all acute and chronic health complaints
              with regard to the appropriate therapy. Please make an appointment
              directly online. My team and I welcome you to our friendly
              practice. Here I am your first point of contact for all general
              health concerns and complaints and I am also at your side in the
              context of follow-up examinations and follow-up treatments after
              any illnesses. Your Dr. {lastName}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container>
              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitle}>
                  Languages
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  English, German and Spanish
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitle}>
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
                  className={classes.bookBtn}
                  onClick={handleOpenForm}>
                  BOOK AN APPOINTMENT
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.infoBlock}>
            <Typography variant='subtitle1' className={classes.text}>
              OPENING HOURS & CONTACT{' '}
            </Typography>
            <Grid container>
              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitleUp}>
                  Opening hours
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Mo, Wed: 8:30am - 5:00pm
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Tue, Thu: 8:30am - 1:00pm
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Fri: 8:30am - 3pm
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Sat: 8:30am - 1pm
                </Typography>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitleUp}>
                  Phone number
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  030 89405090
                </Typography>
                <Typography variant='subtitle1' className={classes.subtitle}>
                  Emergency contact
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  In emergencies, please contact 030 116117 (emergency medical
                  service)
                </Typography>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitle}>
                  Location
                </Typography>
                <Box className={classes.mapContainer}>
                  <img src={DummyMap} alt='location' className={classes.map} />
                </Box>
              </Grid>

              <Grid item xs={12} lg={6}>
                <Typography variant='subtitle1' className={classes.subtitle}>
                  Access information
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  {firstName} {lastName}'s practice
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Torstrasse 222, 11111 Berlin
                </Typography>

                <Typography variant='body2' className={classes.text}>
                  U-Bahn - U Schönleinstr. (Line U8)
                </Typography>
                <Typography variant='body2' className={classes.text}>
                  Ground floor barrier-free
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </Box>
  );
};
