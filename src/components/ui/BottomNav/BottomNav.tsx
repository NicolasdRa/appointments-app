import { useState } from 'react';
import { Link } from 'react-router-dom';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import { CustomAvatar } from '../CustomAvatar/CustomAvatar';
import { user } from '../../../assets/data';

import { useStyles } from './styles';

export const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('recents');

  const handleChange = (e: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to='/'
        label='Home'
        value='home'
        icon={<HomeRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to='/listing'
        label='Explore'
        value='explore'
        icon={<SearchRoundedIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to={user ? '/myaccount' : '/'}
        label='My Account'
        value='myaccount'
        icon={user ? <CustomAvatar /> : <AccountCircleRoundedIcon />}
      />
    </BottomNavigation>
  );
};
