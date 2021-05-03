import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#292c33',
    },
    secondary: {
      main: '#6EBBCF',
    },
    common: {
      black: '#292c33',
      beige: '#BFA6A2',
      beigeLight: '#efebe9',
      orangeLight: '#fbe9e7',
      chalk: '#fafafa',
      blue: '#1A4270',
      turquoise: '#40E0D0',
      green: '#4caf50',
      red: '#ef5350',
      blueSubheader: '#31537B',
      greyOverlay: '#4A4A4A',
      textHeadings: '#0E0E2C',
      texBody: '#4A4A68',
      textSubtle: '#8C8CA1',
      backgroundLight: '#FAFCFE',
      backgroundSubtle: '#ECF1F4',
    },
  },

  typography: {
    fontFamily: ['Roboto', '"Roboto Slab"', 'sans-serif'].join(','),

    // topNavTab: {
    //   textTransform: 'none',
    //   fontSize: '.8rem',
    //   fontWeight: 300,
    //   minWidth: 10,
    //   marginLeft: '25px',
    // },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
        color: '#292c33',
      },
    },

    MuiGrid: {
      container: {
        width: '100% !important',
        margin: ' 0 !important',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
