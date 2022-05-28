import { createTheme } from '@mui/material/styles';

export const theme = {
  black: '#34423D',
  green: '#22E0A1',
  darkGreen: '#1DD195',
  lightGreen: '#B5F1DD',
  neutral1: '#EAEFED',
  neutral2: '#CAD6D1',
  neutral3: '#A3B8B0',
  neutral4: '#709085',
  neutral5: '#587169 ',
  neutral6: '#465953',
  neutral7: '#F5FAF8',
  background: '#F8FAF9',
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#1DD195',
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
});
