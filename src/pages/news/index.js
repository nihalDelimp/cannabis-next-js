import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import newsBanner from "../../assets/news-banner.jpg"
import HomePost from '../Home/HomePost'
import axios from 'axios'
import Pagination from '@/Common/Pagination'
import NewsPost from './NewsPost'
import { withoutAuthAxios } from '@/config'
import Head from 'next/head'

import { CldOgImage } from 'next-cloudinary';



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
    
  const imgurl="https://images.unsplash.com/photo-1614350292382-c448d0110dfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  return (
    <div>

<Head>
<meta property="og:url" content="https://www.example.com"/>
<meta property="og:title" content="Open Graph Title"/>
<meta property="og:description" content="Open Graph Description"/>
<meta property="og:image" content="https://d1zbg1tvj6dkkl.cloudfront.net/images/posts/news/qXrQvulF3mXJExPl09DYOmBWDlUHPN5YTm0NuIw5.jpg"></meta>
<meta property="og:site_name" content="YourSiteName"></meta>
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:site" content="@site"></meta>
<meta name="twitter:creator" content="@handle"></meta>
</Head>

   {/*             
               
<title>News Aricle form canabis </title>
<meta name="title" content="canabis capitol"/>
<meta name="description" content="canabis capitol is a game "/>


<meta property="og:type" content="website"/>
<meta property="og:url" content="https://metatags.io/"/>
<meta property="og:title" content="canabis capitol"/>
<meta property="og:description" content="canabis capitol is a game "/>
<meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://metatags.io/"/>
<meta property="twitter:title" content="canabis capitol"/>
<meta property="twitter:description" content="canabis capitol is a game "/>
<meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

                 </Head>



  
  <NextSeo
      title="Podcast Page Title"
      description="Next SEO PodCast"
      openGraph={{
        title: 'Open Graph Audio',
        description: 'Description of open graph audio',
        url: 'https://www.example.com/audio/audio',
        audio: [
          {
            url: 'http://examples.opengraphprotocol.us/media/audio/1khz.mp3',
            secureUrl: 'https://d72cgtgi6hvvl.cloudfront.net/media/audio/1khz.mp3',
            type: "audio/mpeg"
          },
          {
            url: 'http://examples.opengraphprotocol.us/media/audio/250hz.mp3',
            secureUrl: 'https://d72cgtgi6hvvl.cloudfront.net/media/audio/250hz.mp3',
            type: "audio/mpeg"
          },
        ]
       
      }}
    />
    */}

  

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