import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 210,
      maxWidth: 210,
      display: 'flex',
      flexDirection: 'column',
      margin: '0.5rem',
      // minWidth: '14rem',
      overflow: 'visible',

      [theme.breakpoints.up('md')]: {
        maxWidth: '16rem',
      },
    },

    media: {
      height: 140,
    },
  }),
);
