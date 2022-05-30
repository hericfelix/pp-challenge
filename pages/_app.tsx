import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from '../src/providers';
import { ThemeProvider } from '@emotion/react';
import { theme, muiTheme } from '../styles/theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </Providers>
  );
}

export default MyApp;
