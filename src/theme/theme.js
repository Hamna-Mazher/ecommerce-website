import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: { main: '#B88E2F' },
    secondary: { main: '#FFF3E3' },
    text: { primary: '#000000' },
    background: { default: '#FFFFFF' },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

theme = responsiveFontSizes(theme);
export default theme;
