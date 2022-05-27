import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Providers from '../src/providers';
import { ThemeProvider } from '@emotion/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Providers>
  );
}

export default MyApp;
