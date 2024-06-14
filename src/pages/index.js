import Head from 'next/head';

// Constants for the page
const FRONT_END_DOMAIN = 'https://meta-og2.vercel.app'; // Replace with your domain
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

// Constructing the full URL for the dynamically generated image
const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;

function TestPage({ meta }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Your Content Here
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const meta = {
    title,
    description,
    url: `${FRONT_END_DOMAIN}`,
    image: imageURL,
  };

  return {
    props: {
      meta,
    },
  };
}

export default TestPage;
