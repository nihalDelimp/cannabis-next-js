import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { withoutAuthAxios } from '@/config';

const NewsData = () => {

  const router=useRouter()

  
     
  

const getData=async(id)=>{
  
         await withoutAuthAxios()
         .post(`/api/event-show/${id}`)
         .then((response)=>{
          console.log("Sds",response.data.data.event)
         }).catch((error)=>{
          console.log("dssd",error)
         })
}


   useEffect(()=>{

    const id =router.query.slug
    getData(id)
   },[router.query.slug])

  return (
    <div>  </div>
  )
}

export default NewsData