import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache =
    clientSideEmotionCache, pageProps } = props;

  return (
    <>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport"
          content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>

        {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

          <CssBaseline />
          
          {/* <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WT7BQQ2');
      `}
      </Script> */}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
</>  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
