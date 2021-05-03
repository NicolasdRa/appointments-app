import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    beige?: string;
    beigeLight?: string;
    orangeLight?: string;
    chalk?: string;
    blue?: string;
    turquoise?: string;
    green?: string;
    red?: string;
  }
}
