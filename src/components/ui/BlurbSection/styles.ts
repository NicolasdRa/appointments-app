import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: '2rem',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },

    blurb: {
      display: 'flex',
      flexDirection: 'column',
      margin: '2rem',
      width: '200px',
      alignItems: 'center',
      textAlign: 'center',
    },

    text: {
      fontSize: '1.1rem',
      color: theme.palette.secondary.main,
      marginTop: '1.5rem',
    },
  }),
);
