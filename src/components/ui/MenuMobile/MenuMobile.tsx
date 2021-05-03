import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Fade, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './styles';
import { user } from '../../../assets/data';

export const MenuMobile = () => {
  const classes = useStyles();
  const history = useHistory();

  // log out functionality
  const handleLogOut = (e: any): void => {
    e.preventDefault();

    history.push('/');
  };

  // menu functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e: any): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        // aria-label='menu'
        aria-controls='mobile-menu'
        aria-haspopup='true'
        onClick={handleMenu}>
        <MenuIcon />
      </IconButton>

      <Menu
        id='mobile-menu'
        open={open}
        onClose={handleClose}
        keepMounted
        anchorEl={anchorEl}
        TransitionComponent={Fade}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
        {user ? (
          <>
            <MenuItem onClick={handleClose} component={Link} to='/myaccount'>
              My Account
            </MenuItem>
            <MenuItem onClick={handleLogOut} component={Link} to='/'>
              Log out
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClose} component={Link} to='/'>
              Login
            </MenuItem>

            <MenuItem onClick={handleClose} component={Link} to='/signup'>
              Signup
            </MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
};
