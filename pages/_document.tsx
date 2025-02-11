import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
          <meta name="google-site-verification" content="your-google-site-verification-code" />
          <meta name="msvalidate.01" content="your-bing-verification-code" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#F9D5C5" />
          <meta name="msapplication-TileColor" content="#F9D5C5" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

