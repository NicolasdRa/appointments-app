import Avatar from '@material-ui/core/Avatar';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import { user } from '../../../assets/data';

import { useStyles } from './styles';

export const CustomAvatar = () => {
  const classes = useStyles();

  const { firstName, img } = user;

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
