import { Html, Head, Main, NextScript } from "next/document";
import PageTitle from "@/components/Common/PageTitle";
// import Head from "next/head";
const projectTitle='TesseractX'
const FRONT_END_DOMAIN = 'https://meta-og2.vercel.app/'; // Replace with your domain
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/FavLogo.ico" />
        <link rel="manifest" href="/manifest.json" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={FRONT_END_DOMAIN} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={FRONT_END_DOMAIN} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageURL} />
        <link rel="icon" href="/favicon.ico" />
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
