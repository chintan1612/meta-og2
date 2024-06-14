"use client";

import { FRONT_END_DOMAIN } from "@/constant";
import Head from "next/head";
import React, { useEffect } from "react";

const BASE_TITLE = "TesseractX";

export default function PageTitle({
    title = "TesseractX",
    description = "",
    imageUrl = "",
    id = "",
    coverUrl = "",
}) {
    // useEffect(() => {
    //     window.document.title = `${BASE_TITLE} - ${title}`;
    // }, []);
    const imageURL = `${FRONT_END_DOMAIN}/api/og?title=${encodeURIComponent(
        title
    )}&description=${encodeURIComponent(
        description
    )}&imageUrl=${encodeURIComponent(imageUrl)}&coverUrl=${encodeURIComponent(
        coverUrl
    )}`;
    console.log("🚀 ~ imageURL1:", imageURL)




    return (
        <Head>
     
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url"  content={FRONT_END_DOMAIN} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageURL} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:url"  content={FRONT_END_DOMAIN} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageURL} />
        </Head>
    );
}
