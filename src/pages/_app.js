//import "../style/global.scss"
 //import "../style/css/style.css"
import "../style/index.scss"

import Footer from "@/Common/Footer";
import Header from "@/Common/Header";
import store, { persistor } from "@/Redux/store";
import Head from "next/head";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {

  const meta = {
    title: "What is canabis capitol?",
    description:
      "canabis  capitol is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
    imageUrl:
      "https://d1zbg1tvj6dkkl.cloudfront.net/images/posts/news/qXrQvulF3mXJExPl09DYOmBWDlUHPN5YTm0NuIw5.jpg",
    type: "just testing ",
  
  };
  return (
    
  <>
    <Head>
        <title>Create Next App</title>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="What is Web3?" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
     
      </Head>     

      
       
  <Provider store={store}>   
  <PersistGate loading={null} persistor={persistor}>
  <Header/>

  <Component {...pageProps} />
  <Footer/>
  </PersistGate>
  
  </Provider>   
  
  </>
  )
}
