import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

const options: ThemeOptions | undefined = {
  palette: {
    background: {
      default: '#FAFAFA',
      paper: '#EDEDED',
    },
    divider: '#EAEAEA',
    primary: {
      main: '#9765a4',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#ffc20d',
      light: '#9b7b71',
      contrastText: '#FFF',
    },
    error: {
      main: '#E25335',
      contrastText: '#FFF',
    },
    warning: {
      main: amber[700],
      contrastText: '#FFF',
    },
    success: {
      main: '#59C00B',
      contrastText: '#FFF',
    },
    grey: {
      400: '#000',
      600: '#575757',
    },
  },
};

const theme = createMuiTheme(options);

export default theme;
