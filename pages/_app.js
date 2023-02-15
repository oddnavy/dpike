import Head from "next/head";
import localFont from "@next/font/local";

import "../styles.css";

const sourceSans = localFont({
  src: [
    {
      path: "../public/fonts/source-sans-pro-v11-latin-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/source-sans-pro-v11-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Personal website of David Pike Frontend Web Developer"
        />
        <meta name="author" content="David Pike" />
        <title>David Pike - Senior Frontend Web Developer</title>
      </Head>
      <div className={sourceSans.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
