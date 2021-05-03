import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { MenuDesk } from '../MenuDesk/MenuDesk';
import { useStyles } from './styles';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.logo}>
            <Logo />
          </Box>

          <Hidden mdUp>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>
            <MenuDesk />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};
