// import { FRONT_END_DOMAIN } from "@/constant";
import PageTitle from "@/components/Common/PageTitle";
import Head from "next/head";
const projectTitle = 'TesseractX'
const FRONT_END_DOMAIN = 'https://meta-og2.vercel.app/'; // Replace with your domain
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;


console.log('imageURL', imageURL)
function HomePage() {
    return (
        <>
            <Head>

                <meta content="https://ipfs.io/ipfs/QmQSfMFJbciYKnhgLfMNr4Jw43ww5wV2j5AMDd2G8y8zVP" property="og:image" />
                <meta content="No image show" property="og:image:alt" />
                <meta content="HEART HEADS" name="application-name" />
                <meta content="HEART HEADS" property="og:site_name" />
                <meta content="website" property="og:type" />
                <meta content="1200" property="og:image:width" />
                <meta content="817" property="og:image:height" />
                <meta content="HEART HEADS - Composable NFT's, Mint items and create your unique heart head on PulseChain!"
                    property="og:description" />
                <meta content="Heart Heads - NFT Collection, Mint items and create your unique heart head on PulseChain!"
                    property="og:title" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title"
                    content="Heart Heads - NFT Collection, Mint items, and create your unique heart head on PulseChain!" />
                <meta name="twitter:description"
                    content="HEART HEADS - Composable NFT's, Mint items, and create your unique heart head on PulseChain!" />
                <meta name="twitter:image" content="https://ipfs.io/ipfs/QmQSfMFJbciYKnhgLfMNr4Jw43ww5wV2j5AMDd2G8y8zVP" />



                <meta content="HEART HEADS - Composable NFT's ,Mint items and create your unique heart head on PulseChain!"
                    name="title" />
                <meta content="HEART HEADS - Composable NFT's ,Mint items and create your unique heart head on PulseChain!"
                    name="description" />
                <meta content="HEART HEADS - Composable NFT's ,Mint items and create your unique heart head on PulseChain!"
                    property="og:title" />
                <meta content="HEART HEADS - Composable NFT's ,Mint items and create your unique heart head on PulseChain!"
                    property="og:description" />
                <meta content={FRONT_END_DOMAIN} property="og:url" />
                <meta content="HEART HEADS - Composable NFT's ,Mint items and create your unique heart head on PulseChain!"
                    name="keywords" />


            </Head>
            <div>
                Your Content Here
            </div>
        </>
    );
}

export default HomePage;
