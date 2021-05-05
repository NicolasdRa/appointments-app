import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      display: 'flex',
      fontSize: '14px',
      margin: '0 2rem',

      [theme.breakpoints.up('xl')]: {
        margin: '0 1.5',
      },
    },

    listItem: {
      color: 'inherit',
      width: 'auto',
      margin: '0',
      padding: '0',
    },

    listItemText: {
      padding: '0 !important',
    },

    navLink: {
      color: theme.palette.common.beige,
      opacity: 0.8,
      padding: '.5rem 1rem',
      fontSize: '.9rem',
      borderRadius: '4px',

      lineHeight: '20px',
      textDecoration: 'none',
      margin: '0px',
      display: 'inline-flex',
      '&:hover,&:focus': {
        opacity: 1,
        background: 'rgba(200, 200, 200, 0.2)',
      },
    },

    navLinkActive: {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textDecorationColor: theme.palette.common.greyOverlay,
      textUnderlineOffset: '8px',
    },

    menuButton: { marginLeft: '.3rem' },

    expand: {
      transform: 'rotate(0deg)',
      // marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },

    expandOpen: {
      transform: 'rotate(180deg)',
    },
  }),
);
