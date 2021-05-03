import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Image from '../../../assets/images/staff6.png';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      '*::-webkit-scrollbar': {
        height: '.2rem',
        width: '.4rem',
        borderRadius: '2px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.secondary.main,
        opacity: 0.8,
      },
    },

    main: { width: '100vw' },

    imageContainer: {
      display: 'flex',
      backgroundImage: `url(${Image})`,
      backgroundColor: theme.palette.common.beigeLight,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      height: '25vh',
      width: '90vw',
      flexDirection: 'column',
      borderRadius: '12px',

      [theme.breakpoints.up('lg')]: {
        height: '40vh',
        width: '70vw',
      },
    },

    galleryContainer: {
      margin: '1rem 1.6rem',
      position: 'relative',
      borderRadius: '8px ',
      backgroundColor: theme.palette.common.backgroundSubtle,
      padding: '1rem 1rem',
      // boxShadow:
      //   '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
      // zIndex: 500,

      [theme.breakpoints.up('lg')]: {
        margin: '2rem 0 0 0',
        position: 'relative',
        borderRadius: '8px ',
        padding: '2rem 2rem',
      },

      [theme.breakpoints.up('lg')]: {
        margin: '2rem 0 0 0',
        position: 'relative',
        borderRadius: '8px ',
        padding: '3rem 5rem',
      },
    },

    text: {
      color: theme.palette.common.blue,
      fontSize: '.9rem',
      lineHeight: 1.8,
      margin: '.5rem',

      [theme.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
      },
    },

    cardGallery: {
      position: 'relative',
      display: 'flex',
      flex: '0 1 auto',
      width: 'auto',
      height: 'auto',
      overflowX: 'auto',
    },
  }),
);
