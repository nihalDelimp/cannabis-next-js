import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import newsBanner from "../../assets/news-banner.jpg"
import HomePost from '../Home/HomePost'
import axios from 'axios'
import Pagination from '@/Common/Pagination'
import NewsPost from './NewsPost'
import { withoutAuthAxios } from '@/config'

const index = () => {

  const [data, setdata] = useState([])
  const [postPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, settotalCount] = useState('')


     const getData=async()=>{
      
      await withoutAuthAxios()
      .get(`/api/get_news_list?page=${currentPage}&limit=${postPerPage}`)
       
      .then((response)=>{

        if(response.data.status==1){
  
        settotalCount(response.data.data.total_count) 
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
  },[currentPage])

  const paginate = (number) => {
 
    setCurrentPage(number)
  }
    

  return (
    <div>
         <section className="hm_banner">
                <div className="banner_box">
                     
                    <img src='./assets/news-banner.jpg' alt="Na" />
                </div>
            </section>

            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="leftWrap">
                                <div className="leftWrapin ">
                                    <div className="cardMain list-wrapper">

             <NewsPost postsData={data}     /> 
    
             </div>
             </div>
             </div>

             </div>
             </div>
             </div>
             </section>

             <Pagination postsPerPage={postPerPage} totalPosts={totalCount} paginate={paginate} currentPage={currentPage} />

    
    </div>
  )
}

export default index