import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      backgroundColor: 'transparent',
      margin: '0 0 4rem 0',

      [theme.breakpoints.up('md')]: {
        margin: '0 auto',
        padding: '2rem 4rem',
      },
    },

    link: {
      color: theme.palette.primary.light,
      fontFamily: 'Roboto',
      opacity: 0.7,
      fontSize: ' .9rem',
      margin: '.2rem 1rem',
      textDecoration: 'none',
    },

    logo: {
      width: '7rem',
      color: theme.palette.primary.main,
      opacity: 0.8,
    },

    text: {
      color: theme.palette.primary.light,
      opacity: 0.7,
      fontFamily: 'Roboto',
      fontSize: ' .75rem',
      lineHeight: 1.8,
      margin: '.5rem 0',
      padding: '0 3rem',
      textDecoration: 'none',
    },
  }),
);
