import { withoutAuthAxios } from '@/config'
import axios from 'axios'
import Link from 'next/link'
import React,{useState,useEffect} from 'react'

const RightLink = () => {

     
    const [data, setdata] = useState([])

    const getData=async()=>{
        
         await withoutAuthAxios()
         .get(`/api/get_news_list?page=${1}&limit=${6}`)
         .then((response)=>{
                
          if(response.data.status==1){
             console.log("resp",response)
            console.log(response.data.data.posts)
            setdata(response.data.data.posts)
          }
        },(error)=>{
          console.log("error",error)
        }).catch((error)=>{
            console.log("error",error)
        })  
    }

    useEffect(()=>{
          getData()
    },[])


  return (
    <div>
    <h3 className="sidebarTitle sec_title">Related Links</h3>
    {/* <div className="rightadv">   */}
    <div className="relatedArticle">
        <ul className="relatedArticle--list">
           {data.map((item)=>(
          <li className="relatedarticle--items"  key={item.id} >  <Link href={`/news/${item.slug}`}  key={item.id}>   {item.title}</Link></li>
           ))}
        </ul>
    </div>
    {/* </div> */}
</div>
  )
}

export default RightLink