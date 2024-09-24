import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager } from '@next/third-parties/google'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MT6Q2N3B"
  height="0" width="0" style={{display:"none",visibility:"hidden"}}>
  </iframe>
  </noscript>
      </Head>
      <GoogleTagManager gtmId="GTM-MT6Q2N3B" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
