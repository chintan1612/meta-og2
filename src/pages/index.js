import { FRONT_END_DOMAIN } from "@/constant";
import Head from "next/head";
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;


console.log('imageURL', imageURL)
function HomePage() {
    return (
        <>
            <Head>
                <title>TesseractX</title>
                <meta
                    name="description"
                    content="TesseractX is the ultimate NFT marketplace on PulseChain, offering generous rewards. Buy, sell, and trade unique digital collectibles!"
                />
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
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
            </Head>
            <div>
                Your Content Here
            </div>
        </>
    );
}

export default HomePage;
