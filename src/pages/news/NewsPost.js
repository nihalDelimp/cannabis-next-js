import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Image from 'next/image'
import  { getFormatedDate } from "../../Helper/Help"
import Link from 'next/link'
const NewsPost = ({postsData}) => {
    
    console.log("post",postsData)
    const limitDesc=100;
    
     
  return (
   <>
          

    
      {
        postsData.map((item)=>{

            return(
                    
            <div className="newscard list-item" key={item.id} >
            <div className="newscard--wrap" >
                <div className="newscard--videoPlay">
                <img src={item.image}    alt="sfdff"  />
                </div>


                <div className="newscard--postCont">
                   <h4 className="newscard--postCategory">{item.category.title}</h4>
                   <h2 className="newscard--postTitle">{item.title} </h2>
                   <span className="newscard--postDate">{getFormatedDate(item.created_at)}
                             </span>
                             <div className="newscard--postPara">
                            {item.content.length > limitDesc ?
                                (
                                <><div dangerouslySetInnerHTML={{ __html: item.content.substring(0, limitDesc)+"..."}}/></>
                                ) :
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                }
                            </div>
                    </div>

                    <Link href={`/news/${item.slug}`}  className="newscard--linkDetails"  >Continue Reading</Link>
                    </div>
                    </div>

        
        )
        })
      }

          

{/*
 

       {
        data.map((item)=>{
            return(
                <div className="newscard list-item" key={item.id}>
                   <Image src={item.image}  width={363}  height={204}  alt="sfdff"  />
                  <p>{item.category.title}</p>

                  <p>{item.title}</p>
                  <p>{item.created_at}</p>
                  
                  <p>{item.content}</p>
               </div>
            )
        })
       }

       */}
  


   </>
  )
}

export default NewsPost