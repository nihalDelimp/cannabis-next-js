import { getFormatedDate } from '@/Helper/Help'
import React, { useEffect,useState } from 'react'
import RightLink from './RightLink'
import { withoutAuthAxios } from '@/config'
import { useRouter } from 'next/router'
import Head from 'next/head'

const NewsData = () => {




     <Head>
      <meta name='checking' content='testing'  />
     </Head>

    const router=useRouter()
    const [data, setdata] = useState([])
   

   const getData=async(id)=>{
     await withoutAuthAxios()
     .get(`/api/get_news_detail/?slug=${id}`)
     .then((response)=>{
        setdata(response.data.data.post)
     }).catch((error)=>{
        console.log("ds",error)
     }) 

   }

   useEffect(()=>{
    const id =router.query.slug
    getData(id)
      // getData()
   },[router.query.slug])



  return (
    <div>
  
    <section className="logoBanner">
                    <div className="container">
                        <div className="logoBanner--wraper">
                      <img src=".././assets/logo-bannerSection.png" alt="Na" />  
                        </div>
                    </div>
                </section>
     

     <h1 style={{textAlign:"center"}}>Testing</h1>
    
                <section className="wrap_con">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="leftWrap">
                                    <div className="leftWrapin">
                                        <div className="articleMain">
                                            <h2 className="articleMain--title">{data?.title}</h2>
                                            <h3 className="articleMain--subTitle">{data?.sub_title}</h3>
                                            <div className="articleMain--info">
                                                <span className="articleMain--type">News</span>
                                                <span className="articleMain--category">
                                                   
                                                </span>
                                               <span className="articleMain--author">{data?.user_name}</span> 
                                                  <span className="articleMain--date"> 
                                                   {getFormatedDate(data?.created_at)}
                                                  </span>
                                               {/* <span className="articleMain--tags"> {data?.post && data?.post??.tags && data.post.tags.length > 0 && data?.post?.tags.map((item) => (
                                                    <Link to={`/news/tags/${item?.slug}`} key={item?.id}> #{item?.title} </Link>
                                                ))}</span>*/}
                                                <span className="articleMain--tags">
    
                                                  
                                               
                                            
                                                
                                                 
                                                 </span>
    
                                            </div>
                                            <div className="articleMain--content">
    
                                            {
    
                                            data?
                                            <div className="articleMain--thumbnail">
    
                                            <img src={data?.image} />
                                            </div>
                                            :
                                            
                                            <iframe src={`https://www.youtube.com/embed/tgbNymZ7vqY`} className="player__video"
                                            title='video'
                                        />
    
                                            
                                           
                                        }  
                                                                                                         
                                  
                                                <div className="articleMain--description">
                                                  
                                                    <p dangerouslySetInnerHTML={{ __html: data?.content }} />
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="rightWrap">
                                    <div className="rightWrapinIn">
                                        <div className="sidebarMain">
                                            <RightLink  />
                                        </div>
                                        <div className="sidebarMain">
    
    
                                            <h3 className="sidebarTitle sec_title">Network Sponsors</h3>
                                            <div >
                                              {/*   <img src={advertising_banner} alt="Item" />*/}
                                            </div>
    
    
                                            {/* <h3 className="sidebarTitle sec_title">Advertisement</h3>
                                            <div >
                                                <img src={sponser1} alt="Item" />
                                            </div>
                                            <div >
                                                <img src={sponser2} alt="Item" />
                                            </div> */}
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    
         
          
        </div>
  )
}

export default NewsData