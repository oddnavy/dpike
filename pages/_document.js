import Document, { Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = 'UA-119176449-1';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "9fe312310dd6468789156ec47d6032c5"}'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
