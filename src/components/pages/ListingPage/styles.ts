import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Image from '../../../assets/images/staff3.jpg';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imageContainer: {
      display: 'flex',
      backgroundImage: 'url(' + Image + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      height: '30vh',
      width: '100%',
      flexDirection: 'column',
      borderRadius: '12px',

      [theme.breakpoints.up('md')]: {
        height: '40vh',
      },

      [theme.breakpoints.up('lg')]: {
        // height: '60vh',
      },
    },

    galleryContainer: {
      margin: '2rem 0 0 0',
      position: 'relative',
      borderRadius: '8px ',
      padding: '3rem 5rem',
      boxShadow:
        '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)',
      zIndex: 500,
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
