import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Image from '../../../assets/images/doc1.jpg';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: { width: '100vw' },

    imageContainer: {
      display: 'flex',
      backgroundImage: `url(${Image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      height: '50vh',
      width: '90vw',
      flexDirection: 'column',
      borderRadius: '12px',

      [theme.breakpoints.up('md')]: {
        height: '53vh',
      },

      [theme.breakpoints.up('lg')]: {
        height: '60vh',
        width: '70vw',
      },
    },

    title: {
      color: theme.palette.common.chalk,
      margin: '3rem 0 0 2rem',
      fontSize: '3rem',
      fontFamily: `'Signika', serif`,
      fontWeight: 700,

      [theme.breakpoints.up('md')]: {
        margin: '6rem 0 0 4rem',
        fontSize: '3rem',
      },

      [theme.breakpoints.up('lg')]: {
        fontSize: '4rem',
      },

      [theme.breakpoints.up('xl')]: {
        margin: '8rem 0 0 4rem',
        fontSize: '5.5rem',
      },
    },

    subTitle: {
      margin: '1rem 0 0 2rem',
      width: '50%',

      [theme.breakpoints.up('md')]: {
        margin: '1rem 0 0 4.3rem',
        width: '100%',
      },

      [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },
    },

    btn: {
      width: '7rem',
      color: theme.palette.common.chalk,
      borderColor: theme.palette.common.chalk,
      margin: '1rem 0 0 2rem',
      '&:hover': {
        backgroundColor: theme.palette.common.chalk,
        color: theme.palette.common.blueSubheader,
      },

      [theme.breakpoints.up('md')]: {
        width: '12rem',
        margin: '1rem 0 0 4.2rem',
      },

      [theme.breakpoints.up('xl')]: {
        width: '15rem',
        fontSize: '1.3rem',
        margin: '2rem 0 0 4.2rem',
      },
    },
  }),
);
