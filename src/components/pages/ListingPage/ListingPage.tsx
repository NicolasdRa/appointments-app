import { Box, Grid, Hidden, Paper, Typography } from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/Footer/Footer';
import { BottomNav } from '../../ui/BottomNav/BottomNav';
import { CustomCard } from '../../ui/CustomCard/CustomCard';

import { Doctor } from '../../../redux/types';

import { useAppSelector } from '../../../hooks/hooks';
import { selectDoctors } from '../../../redux/doctorSlice';

import { useStyles } from './styles';

export const ListingPage = () => {
  const classes = useStyles();

  const doctors: Doctor[] = useAppSelector(selectDoctors);

  return (
    <Box>
      <Header />
      <Grid container direction='column' justify='center' alignItems='center'>
        <Box className={classes.imageContainer} />
        <Grid item xs={12} lg={8}>
          <Paper className={classes.galleryContainer}>
            <Typography variant='subtitle1' className={classes.text}>
              Browse our featured practitioners
            </Typography>
            <Box className={classes.cardGallery}>
              {doctors.map((doctor) => (
                <CustomCard key={doctor.id} doctor={doctor} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </Box>
  );
};
