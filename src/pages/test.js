import { withoutAuthAxios } from '@/config'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'




/*
export const getStaticProps = async () => {
  
  const res = await fetch(`${process.env.LARAVEL_BASEURL}/api/event-list`);
  const resp = await res.json();
  const data= resp.data.event.data
  console.log("Sds",data)   

  return {
    props: {
      data,
    },
  };

}
*/

const test = ({}) => {

  //  console.log("Sds",data)
   
    
    


  return (
    
<>

  xcxcx

   

    <h1>xc</h1>
</>
   
  )
}


export default dynamic  (() => Promise.resolve(test), {ssr: false}) ;

/*


*/