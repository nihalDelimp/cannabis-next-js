import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {



  return (
    <Html lang="en">
      <Head >
        <meta property="og:url" content="https://www.example.com" />
        <meta property="og:title" content="Open Graph Title" />
        <meta property="og:description" content="Open Graph Description" />
        <meta property="og:image" content="https://www.example.com/og-image.jpg" />
        <meta property="og:site_name" content="YourSiteName" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@handle" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" strategy="beforeInteractive" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" strategy="beforeInteractive" />
      </body>

    </Html>
  )
}
