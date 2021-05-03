import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import clsx from 'clsx';

import {
  Button,
  Fade,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
} from '@material-ui/core/';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { CustomAvatar } from '../CustomAvatar/CustomAvatar';

import { useStyles } from './styles';

export const MenuDesk = () => {
  const classes = useStyles();
  const history = useHistory();

  const isAuthenticated = true;
  const user = { name: 'John', lastName: 'Doe', img: '' };

  // log out functionality
  const handleLogOut = (e: any): void => {
    e.preventDefault();
    // dispatch(logOutUser());
    // dispatch(unloadCurrentUser());
    history.push('/');
  };

  // menu functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // login button rotate
  const [expanded, setExpanded] = useState(open);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenu = (e: any): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    handleExpandClick();
    setAnchorEl(null);
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button component={Link} to='/listing' className={classes.navLink}>
          Doctors
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button component={Link} to='/myaccount' className={classes.navLink}>
          My Account
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {user ? (
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
            aria-controls='desk-menu'
            aria-haspopup='true'
            onClick={handleMenu}>
            <CustomAvatar />
          </IconButton>
        ) : (
          <Button
            // variant="outlined"
            // component={Link}
            // to="/login"

            aria-label='menu'
            aria-controls='desk-menu'
            aria-haspopup='true'
            onClick={(e) => {
              handleMenu(e);
            }}
            className={classes.navLink}>
            Login
            <ArrowDropDownIcon
              style={{ padding: 0, height: '1.1rem', width: '1.1rem' }}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            />
          </Button>
        )}
      </ListItem>
      <Menu
        id='desk-menu'
        open={open}
        onClose={handleClose}
        keepMounted
        anchorEl={anchorEl}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        // prop below fixes padding added to body on open
        disableScrollLock={true}>
        {isAuthenticated ? (
          <MenuItem onClick={handleClose} component={Link} to='/profile'>
            Your Appointments
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose} component={Link} to='/login'>
            Login
          </MenuItem>
        )}
        {isAuthenticated ? (
          <MenuItem onClick={handleLogOut} component={Link} to='/'>
            Log out
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose} component={Link} to='/signup'>
            Signup
          </MenuItem>
        )}
      </Menu>
    </List>
  );
};
