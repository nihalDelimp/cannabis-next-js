//import "../style/global.scss"
 //import "../style/css/style.css"
import "../style/index.scss"

import Footer from "@/Common/Footer";
import Header from "@/Common/Header";
import store, { persistor } from "@/Redux/store";

import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {


  return (
    
  <>
  
    

      
       
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
