import { Link } from 'react-router-dom';
import { Box, Button, Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export const HeroSection = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.main}>
      <Grid item sm={12}>
        <Box className={classes.imageContainer}>
          <Typography variant='h1' className={classes.title}>
            Find your doctor
          </Typography>
          <Typography variant='subtitle1' className={classes.subTitle}>
            among the best qualified professionals in your area
          </Typography>
          <Button
            component={Link}
            to='/listing'
            variant='outlined'
            color='secondary'
            className={classes.btn}>
            Start
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
