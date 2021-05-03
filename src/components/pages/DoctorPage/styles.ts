import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DummyMap from '../../../assets/images/dummyMap.jpg';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      display: 'flex',
      margin: '35vh auto',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto',
      width: '100%',
    },

    header: {
      backgroundColor: theme.palette.secondary.main,
      height: '18vh',
      borderRadius: '6px',
      boxShadow:
        '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 1rem',
    },

    userImg: {
      boxShadow:
        '0 5px 15px -8px rgb(0 0 0 / 24%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
      borderRadius: '6px',
      height: 'auto',
      maxWidth: '100%',
      margin: '2rem 2rem 0 1rem',
    },

    user_info: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '3rem 1rem',
    },

    userFullName: {
      color: theme.palette.common.chalk,
    },

    discipline: {},

    infoBlock: {
      padding: '1rem',
      minHeight: '57vh',
    },

    gallery: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '3rem',
      flex: '0 0 auto',
    },

    text: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 auto',
      lineHeight: 1.8,
      margin: '.5rem',
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
      alignItems: 'center',
      width: '14rem',
      margin: '1.5rem auto',
    },

    divider: {
      margin: '1rem 0 .5rem 0',
    },

    mapContainer: {
      width: '100%',
      height: '25vh',
    },

    map: {
      height: '100%',
      width: 'auto',
      padding: '.5rem',
      borderRadius: '12px',
    },
  }),
);
