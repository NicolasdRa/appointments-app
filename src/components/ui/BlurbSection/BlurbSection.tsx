import { Box, Typography } from '@material-ui/core';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';

import { useStyles } from './styles';

export const BlurbSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.blurb}>
        <LocalHospitalOutlinedIcon color='secondary' style={{ fontSize: 60 }} />
        <Typography className={classes.text}>
          Access to thousands of healthcare professionals
        </Typography>
      </Box>
      <Box className={classes.blurb}>
        <TodayOutlinedIcon color='secondary' style={{ fontSize: 60 }} />
        <Typography className={classes.text}>
          Make an appointment 24/7
        </Typography>
      </Box>
      <Box className={classes.blurb}>
        <AssignmentTurnedInOutlinedIcon
          color='secondary'
          style={{ fontSize: 60 }}
        />
        <Typography className={classes.text}>
          Checkout your appoinment history
        </Typography>
      </Box>
    </Box>
  );
};
