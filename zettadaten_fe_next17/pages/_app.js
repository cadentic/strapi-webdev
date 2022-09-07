{/*
import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../../zettadaten_fe/src/theme';
import createEmotionCache from '../../zettadaten_fe/src/createEmotionCache';
import { StyledEngineProvider } from '@mui/material/styles';
import Navigations from '../components/Navigation';
import CopyerightZettadaten from '../components/CopyerightZettadaten';
//import CssBaseline from '@mui/material/CssBaseline';
// import Testimonial from '../components/Testimonial';

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache =
    clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <StyledEngineProvider injectFirst>
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport"
          content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>

        {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

{/*        <CssBaseline />
      */}          
          {/* <Script id="google-tag-manager" strategy="afterInteractive">
            {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WT7BQQ2');
      `}
      </Script> 
    
    */}
    {/*       
           
        <Component {...pageProps} />
      </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
</>  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};     */}


import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/Theme';
//import { wrapper, store } from "../store/store";
//import { Provider } from "react-redux";


import createEmotionCache from '../src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <Provider store={store}> */}
          <Component {...pageProps} />
          {/* </Provider> */}
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// export default wrapper.withRedux(MyApp);