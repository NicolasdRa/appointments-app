import Avatar from '@material-ui/core/Avatar';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import { useStyles } from './styles';

import { user } from '../../../assets/data';

export const CustomAvatar = () => {
  const classes = useStyles();

  const { firstName, lastName, img } = user;

  if (user) {
    let initials;
    firstName
      ? (initials = firstName.charAt(0).toUpperCase())
      : (initials = 'U');

    return (
      <div className={classes.root}>
        <Avatar src={img} className={classes.small}>
          {initials}
        </Avatar>
      </div>
    );
  } else {
    return <AccountCircleRoundedIcon />;
  }
};