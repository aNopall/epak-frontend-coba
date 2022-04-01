import { fuseDark, skyBlue } from '@fuse/colors';
import { lightBlue, red } from '@mui/material/colors';

const lightText = {
  primary: 'rgb(17, 24, 39)',
  secondary: 'rgb(107, 114, 128)',
  disabled: 'rgb(149, 156, 169)',
};

const darkText = {
  primary: 'rgb(255,255,255)',
  secondary: 'rgb(229, 231, 235)',
  disabled: 'rgb(156, 163, 175)',
};

const themesConfig = {
  default: {
    palette: {
      mode: 'light',
      text: lightText,
      common: {
        black: 'rgb(17, 24, 39)',
        white: 'rgb(255, 255, 255)',
      },
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: '#FFFFFF',
        default: '#EEF0F4',
      },
      error: red,
    },
    status: {
      danger: 'orange',
    },
  },
};

export default themesConfig;
