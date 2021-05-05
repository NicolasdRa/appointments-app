import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Image from '../../../assets/images/staff6.png';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
      position: 'relative',
      margin: '1rem 1.6rem',
      borderRadius: '8px ',

      [theme.breakpoints.up('lg')]: {
        margin: '2rem 0 0 0',
        position: 'relative',
        borderRadius: '8px ',
        // padding: '2rem 2rem',
        width: '100%',
      },

      [theme.breakpoints.up('lg')]: {
        margin: '2rem 0 ',
        position: 'relative',
        borderRadius: '8px ',
      },
    },

    text: {
      fontSize: '1rem',
      lineHeight: 1.8,
      margin: '1.5rem 0 .5rem 1rem',

      [theme.breakpoints.up('lg')]: {
        fontSize: '1.2rem',
        margin: '1.5rem 0 1rem 1rem',
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
