import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 640,
      margin: '.5rem 0',
    },
    title: {
      fontSize: '1rem',
    },
    pos: {
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
