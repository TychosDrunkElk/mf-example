/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script src={`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mf-example-remote.vercel.app'}/_next/static/chunks/remoteEntry.js`} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument