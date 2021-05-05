import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 200,
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
      height: 130,
      borderRadius: '6px',
      margin: '1rem',
    },

    btn: {
      color: theme.palette.common.beige,
    },
  }),
);
