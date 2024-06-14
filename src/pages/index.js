import { FRONT_END_DOMAIN } from "@/constant";
import PageTitle from "@/components/Common/PageTitle";
import Head from "next/head";
const projectTitle='TesseractX'
const title = 'BITMATIC ART';
const description = 'Your Page Description';
const imgUrl = 'https://d17ha18jyelis7.cloudfront.net/collections/originals/16395541-68bd-4f66-a581-6528fb9ffbf4-1705050528582';

const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&imageUrl=${encodeURIComponent(imgUrl)}`;


console.log('imageURL', imageURL)
function HomePage() {
    return (
        <>
            <Head>
            <PageTitle
                title={projectTitle}
                imageUrl={imageURL}
                description={description}
            />
            </Head>
            <div>
                Your Content Here
            </div>
        </>
    );
}

export default HomePage;
