import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { Button, Grid } from '@material-ui/core';

import { Logo } from '../Logo/Logo';

import { useStyles } from './styles';

export const Footer = () => {
  const classes = useStyles();
  const date = moment(new Date()).format('YYYY');

  return (
    <footer className={classes.main}>
      <Grid container direction='row' justify='center'>
        <Grid
          item
          md={4}
          xl={3}
          container
          direction='row'
          justify='center'
          alignItems='center'>
          <Grid item component={Link} to='/listing' className={classes.link}>
            Doctors
          </Grid>
          <Grid item component={Link} to='/profile' className={classes.link}>
            Appointments
          </Grid>
        </Grid>

        <Grid
          item
          container
          md={4}
          xl={3}
          direction='column'
          justify='center'
          alignItems='center'>
          <Button disableRipple component={Link} to='/'>
            <Logo />
          </Button>
          <p className={classes.text}>
            {`© 2019 - ${date} by Nicolás di Rago. All rights reserved.`}
          </p>
        </Grid>

        <Grid
          item
          container
          md={4}
          xl={3}
          direction='row'
          justify='center'
          alignItems='center'
          className={classes.link}>
          <p className={classes.text}>
            * Mytinerary is not a travel agency, charges no fees and holds no
            responsibility for the content created by users.
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};