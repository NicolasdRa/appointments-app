import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '.5rem 0',

      [theme.breakpoints.up('lg')]: {
        minWidth: 375,
      },
      [theme.breakpoints.up('xl')]: {
        minWidth: 560,
      },
    },
    date: {
      fontSize: '.8rem',
    },

    title: {
      fontSize: '1.2rem',
    },
    doctor: {
      fontSize: '.8rem',
      marginBottom: 12,
    },
    btnContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },

    btn: {
      marginTop: '.3rem',
      color: theme.palette.common.red,
    },
  }),
);
