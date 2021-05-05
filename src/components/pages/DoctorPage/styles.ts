import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },

    imageContainer: {
      display: 'flex',
      backgroundColor: theme.palette.common.beigeLight,
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

      [theme.breakpoints.up('lg')]: {
        height: '7rem',
        margin: '1.3rem 2rem',
      },

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
      color: theme.palette.primary.main,
    },

    discipline: {},

    content: {
      width: '90vw',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '1rem 0',

      [theme.breakpoints.up('lg')]: {
        flexDirection: 'row',
        width: '70vw',
      },
    },

    infoBlock: {
      padding: '1rem 1rem',
      width: '100%',

      [theme.breakpoints.up('md')]: {
        width: '50%',
      },
    },

    gallery: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '3rem',
      flex: '0 0 auto',
    },

    subtitleUp: {
      margin: '0',
      fontWeight: 'bolder',
    },

    subtitle: {
      margin: '1rem 0 .5rem 0',
      fontWeight: 'bolder',
    },

    text: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto',
      lineHeight: 1.8,
      margin: '.5rem .5rem 1rem 0',
    },

    info: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '-3rem',
      padding: '0 1rem 0 0',
    },

    bookBtn: {
      display: 'flex',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.common.beigeLight,
      width: '14rem',
      margin: '2rem 0',
    },

    divider: {
      margin: '.5rem 0',
    },

    mapContainer: {
      width: '90%',
    },

    map: {
      height: 'auto',
      width: '100%',
      borderRadius: '12px',
    },
  }),
);
