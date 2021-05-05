import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    appBar: {
      display: 'flex',
      border: '0',
      borderRadius: '3px',
      padding: '0.625rem 0',
      color: '#555',
      width: '100%',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transition: 'all 150ms ease 0s',
      alignItems: 'center',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 'unset',
    },

    toolbar: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',

      [theme.breakpoints.up('lg')]: {
        width: '80%',
      },

      [theme.breakpoints.up('xl')]: {
        width: '75%',
      },
    },

    logo: {
      display: 'flex',
      width: '5.5rem',
      marginLeft: '.5rem',
      opacity: 0.8,

      [theme.breakpoints.up('md')]: {
        width: '7rem',
        marginLeft: '1rem',
      },
      [theme.breakpoints.up('lg')]: {
        width: '6rem',
        marginLeft: '3rem',
      },
      [theme.breakpoints.up('xl')]: {
        width: '7rem',
        marginLeft: '2.5rem',
      },
    },

    title: {
      flexGrow: 1,
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);
