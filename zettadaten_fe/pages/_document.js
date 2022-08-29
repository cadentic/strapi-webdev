import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* -- Google Tag Manager -- */}
                    <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WT7BQQ2');</script>
                    /* -- End Google Tag Manager -- */
                    {/* PWA primary color */}
                    <meta name="theme-color"
                        content={theme.palette.primary.main} />
                    <link rel="shortcut icon"
                        href="/static/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href=
                        "https://fonts.googleapis.com/css?family=sans-serif:300,400,500,700&display=swap"
                    />
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    {/* -- Google Tag Manager (noscript) -- */}
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WT7BQQ2"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
                    {/*  End Google Tag Manager (noscript) -- */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between 
    // all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.

    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);

    // This is important. It prevents emotion to render invalid HTML.
    // See 
    // https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}

            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};