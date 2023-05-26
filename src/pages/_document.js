import { Html, Head,Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  

   
  return (
    <Html lang="en">
    
     <Head/>
     

      <body>
        <Main />
        <NextScript />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"  strategy="beforeInteractive" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"   strategy="beforeInteractive" /> 
       
   
      </body>
     
    </Html>
  )
}
