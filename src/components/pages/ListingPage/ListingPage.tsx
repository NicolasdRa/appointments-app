import { Box, Grid, Hidden, Paper } from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { Footer } from '../../ui/Footer/Footer';
import { CustomCard } from '../../ui/CustomCard/CustomCard';

import { Doctor } from '../../../redux/types';

import { useStyles } from './styles';
import { useAppSelector } from '../../../hooks/hooks';
import { selectDoctors } from '../../../redux/doctorSlice';

export const ListingPage = () => {
  const classes = useStyles();

  const doctors: Doctor[] = useAppSelector(selectDoctors);

  return (
    <Box>
      <Header />
      <Box className={classes.imageContainer} />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} lg={10}>
          <Paper className={classes.galleryContainer}>
            <Box className={classes.cardGallery}>
              {doctors.map((doctor) => (
                <CustomCard key={doctor.id} doctor={doctor} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Footer />
      </Hidden>
    </Box>
  );
};
