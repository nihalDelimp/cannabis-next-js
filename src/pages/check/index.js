import Link from 'next/link';
import React from 'react'




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
  
const index = ({data}) => {

   
   console.log("Dssd",data)

    

  return (
    <div>

        {
            data.map((item)=>{
                return(
                    <>
                     

                     <h5> <Link  href={`/check/${item.slug}`} >{item.slug}</Link>  </h5>
                    </>
                )
            })
        }
    </div>
  )
}

export default index