import Head from "next/head";

// Constants for the page
const FRONT_END_DOMAIN = 'https://meta-og2.vercel.app'; // Replace with your domain
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

// Constructing the full URL for the dynamically generated image
const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;

function TestPage() {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${FRONT_END_DOMAIN}/test`} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageURL} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={`${FRONT_END_DOMAIN}/test`} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={imageURL} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                Your Content Here
            </div>
        </>
    );
}

export default TestPage;
