import { Link } from 'react-router-dom';
import moment from 'moment';

import { Button, Grid, Hidden } from '@material-ui/core';

import { Logo } from '../Logo/Logo';

import { useStyles } from './styles';

export const Footer = () => {
  const classes = useStyles();
  const date = moment(new Date()).format('YYYY');

  return (
    <footer className={classes.main}>
      <Grid container direction='row' justify='center'>
        <Hidden smDown>
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
            <Grid
              item
              component={Link}
              to='/myaccount'
              className={classes.link}>
              My account
            </Grid>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          md={4}
          xl={3}
          direction='column'
          justify='center'
          alignItems='center'>
          <Button
            disableRipple
            component={Link}
            to='/'
            className={classes.logo}>
            <Logo />
          </Button>

          <p className={classes.text}>
            {`© ${date} by Nicolás di Rago. All rights reserved.`}
          </p>
        </Grid>
        <Hidden mdDown>
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
              * MyDoc charges no fees and holds no responsibility for the
              content created by its users.
            </p>
          </Grid>
        </Hidden>
      </Grid>
    </footer>
  );
};
