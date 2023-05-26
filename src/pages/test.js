import Head from "next/head";
//import styles from "../styles/Home.module.css";

export default function test() {
  const meta = {
    title: "What is Web3?",
    description:
      "Web3 is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
    imageUrl:
      "https://images.unsplash.com/photo-1684848140767-92b247834dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    type: "article",
    twitterHandle: "https://twitter.com/ugwutotheeshoes",
    date: "17/03/2022"
  };
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="What is Web3?" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.twitterHandle} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <main >
        <h1 >What is Web3?</h1>

        <p >
          Web3 is the next step in the evolution of the internet and, possibly,
          the organization of society. According to legend, Web 1.0 was the era
          of decentralized, open protocols, when the majority of internet
          activity consisted of visiting individual static webpages. Web 2.0 is
          the period of centralization, in which a large portion of
          communication and commerce occurs on closed platforms controlled by a
          few super-powerful corporations—think Google, Facebook, and Amazon—and
          subject to the nominal supervision of centralized government
          authorities. Web3 is meant to liberate the world from monopolistic
          domination.
        </p>
      </main>
    </div>
  );
}
