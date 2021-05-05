import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '2rem',
      margin: '0 3rem',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        padding: '2.5rem, 3rem',
      },
    },

    blurb: {
      display: 'flex',
      flexDirection: 'column',
      margin: '1rem',
      width: '200px',
      alignItems: 'center',
      textAlign: 'center',

      [theme.breakpoints.up('md')]: {
        width: '180px',
      },
    },

    text: {
      fontSize: '1rem',
      color: theme.palette.primary.main,
      marginTop: '1.5rem',
    },

    bold: {
      fontWeight: 'bolder',
      display: 'inline',
    },
  }),
);
