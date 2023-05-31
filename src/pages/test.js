import Head from "next/head";
import Link from "next/link";
import React from "react";

const test = () => {
  const meta = {
    title: "What is test?",
    description:
      "test2 is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
    imageUrl:
      "https://d1zbg1tvj6dkkl.cloudfront.net/images/posts/news/wFfYy2tFj9K6uxTnYbuljEqan6laYcFXsJslUwPc.jpg"
  };
  return (
    <div>
      <Head>
        <title>Create Next App</title>

        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
      </Head>

      <Link href="/">
        <h1> Home</h1>
      </Link>
      <p> xcxcxc </p>
    </div>
  );
};

export default test;
