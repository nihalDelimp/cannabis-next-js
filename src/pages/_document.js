import { Html, Head,Main, NextScript } from 'next/document'

export default function Document() {
  
  const meta = {
    title: "canabis ",
    description:
      "canabis  capitol is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
    imageUrl:
      "https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    type: "just checking ",
  
  };
   
  return (
    <Html lang="en">
    
      <Head>
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
       
     

      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"   />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"    /> 
       
   
      </body>
     
    </Html>
  )
}
