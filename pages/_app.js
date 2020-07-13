import Head from 'next/head';

import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Personal website of David Pike Frontend Web Developer" />
        <meta name="author" content="David Pike" />
        <title>David Pike - Senior Frontend Web Developer</title>
        <link
          rel="preload"
          href="/fonts/source-sans-pro-v11-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
