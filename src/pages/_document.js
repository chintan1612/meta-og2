import { Html, Head, Main, NextScript } from "next/document";
import PageTitle from "@/components/Common/PageTitle";
// import Head from "next/head";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/FavLogo.ico" />
        <link rel="manifest" href="/manifest.json" />
  
        <script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          async=""
          strategy="afterInteractive" // Load after initial render
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
