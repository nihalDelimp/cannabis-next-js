import { Html, Head,Main, NextScript } from 'next/document'

export default function Document(props) {

 
  /*
  const meta = {
    title: "canabis ",
    description:
      "canabis  capitol is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
    imageUrl:
      "https://d1zbg1tvj6dkkl.cloudfront.net/images/posts/news/K5mPhDaHCsQ3m0vtNx7mextD7gUSZqJgMnS78YOX.png",
    type: "just checking ",
  
  };*/
   
  return (
    <Html lang="en">
    
    {/*  <Head>
        <title>Create Next App</title>
        <meta property="og:type" content={meta.type} key="ogtype" />
        <meta property="og:site_name" content="What is Web3?" key="ogsitename" />
        <meta property="og:description" content={meta.description} key="ogdesc" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image" content={meta.imageUrl} key="ogimage"  />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
     
      </Head>    
       
       */}
     <Head/>

      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"   />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"    /> 
       
   
      </body>
     
    </Html>
  )
}
