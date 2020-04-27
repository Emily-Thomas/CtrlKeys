import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b2cecf',
    },
    secondary: {
      main: '#3d5367',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#fffdef',
      secondary: '#fffdef',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
    },
  },
});

export default theme;
