import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: { width: '100vw' },

    imageContainer: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.main,
      height: '20vh',
      width: '90vw',
      flexDirection: 'column',
      borderRadius: '12px',
      // boxShadow:
      //   '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',

      [theme.breakpoints.up('md')]: {
        height: '20vh',
      },

      [theme.breakpoints.up('lg')]: {
        height: '20vh',
        width: '70vw',
      },
    },

    userImg: {
      boxShadow:
        '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
      borderRadius: '6px',
      height: 'auto',
      maxWidth: '100%',
      margin: '1rem',

      [theme.breakpoints.up('xl')]: {
        height: '8rem',
        margin: '2rem',
      },
    },

    user_info: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem 0',

      [theme.breakpoints.up('xl')]: {
        margin: '2rem 0',
      },
    },

    userFullName: {
      color: theme.palette.common.chalk,
    },

    discipline: {},

    infoBlock: {
      padding: '1rem',
      margin: '0 1rem',
      minHeight: '30vh',
      minWidth: '320px',
      backgroundColor: theme.palette.common.beigeLight,

      [theme.breakpoints.up('lg')]: {
        minWidth: '420px',
      },

      [theme.breakpoints.up('xl')]: {
        minWidth: '320px',
      },
    },

    gallery: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '3rem',
      flex: '0 0 auto',
    },

    title: {
      color: theme.palette.common.blue,
      fontWeight: 'bolder',
      margin: '.5rem',
    },

    text: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto',
      lineHeight: 1.8,
      margin: '.5rem',
    },

    bookBtn: {
      display: 'flex',
      alignItems: 'center',
      width: '14rem',
      margin: '1.5rem auto',
    },

    divider: {
      margin: '1rem 0 .5rem 0',
    },

    appointmentGallery: {
      display: 'flex',
      flexDirection: 'column',
    },
    root: {
      width: '100%',
      maxWidth: '50ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'flex',
    },
  }),
);
