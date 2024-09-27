import "@/styles/globals.css";
import useGTM from "@/hooks/useGTM";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   // GTM Initialization
  //   const handleGTM = () => {
  //     window.dataLayer = window.dataLayer || [];
  //     window.dataLayer.push({
  //       event: "gtm.js",
  //       "gtm.start": new Date().getTime(),
  //     });
  //   };
  //   handleGTM();
  // }, []);
  return (
    <>
      <Script id="gtm" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MT6Q2N3B');
      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
