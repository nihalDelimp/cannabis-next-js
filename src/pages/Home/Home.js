import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import mainImage from "../../assets/banner.png"
import advertising_banner from "../../assets/advertising_banner.jpg"
import MainPost from './MainPost';
import HomePost from './HomePost';
import Pagination from '@/Common/Pagination';
import axios from 'axios'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { withoutAuthAxios } from '@/config';
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Home = () => {
   


  const [data, setdata] = useState([])
  const [postPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, settotalCount] = useState('')

  
  const getData=async()=>{
      
    await withoutAuthAxios()
    .get(`/api/get_news_list?page=${currentPage}&limit=${postPerPage}`)

    .then((response)=>{
     // console.log("resp",response)
      if (response.data.status==1) {
        
      settotalCount(response.data.data.total_count) 
        setdata(response.data.data.posts)
      }
    },(error)=>{
      console.log("error",error) 
    } 
    ).catch((error)=>{
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

       
        
     
         <img src="./assets/banner.png"  />
 
        </div>
      </section>
      <section className="wrap_con">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="leftWrap">
                <div className="leftWrapin">
                  <div className="cardMain list-wrapper">
                    <div className="newscard list-item firstNews">
                    <MainPost/> 
                    </div>

                    

                 {/*    <h1 dangerouslySetInnerHTML={{__html:uri }}  >sdsssss</h1>
                   */}
                   <HomePost postsData={data}     />
                  </div>

     
          
                  <Pagination postsPerPage={postPerPage} totalPosts={totalCount} paginate={paginate} currentPage={currentPage} />
                
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="rightWrap">
                <div className="rightWrapinIn">
                  <div className="sidebarMain searchSidebar">
                    {/* <form className="formSidebar" action="">
                            <input type="search" name="search" className="searchRight"
                                placeholder="Search and hit etner..." />
                        </form> */}
                  </div>
                  {/* <div className="sidebarMain newsletterSidebar">
                                <h3 className="sidebarTitle sec_title">Join Our Network</h3> */}
                  {/* <form className="formSidebar" action=""> */}
                  {/* <label>Email Address</label>
                            <input type="email" name="email" className="searchRight"
                                placeholder="Your Email Address" /> */}
                  {/* <Link to="/">
                                        <input type="submit" data-toggle="modal" value="Sign up" data-target="#signupForm" />
                                        <SingupForm />
                                    </Link>
                                </form> */}
                  {/* </div> */}
                  {/* <div className="sidebarMain">
                                <h3 className="sidebarTitle sec_title">Instagram</h3> */}
                  {/* <div className="rightadv"> */}
                  {/* <img src={instagram} alt="alt" /> */}
                  {/* <InstaPost /> */}

                  {/* </div> */}
                  {/* </div> */}
                  {/* <Sponsers limit={3} ads={adsPosts?.advertisements}/> */}

                  <div className="sidebarMain">
                    <h3 className="sidebarTitle sec_title">Network Sponsors</h3>
                    <div>
                      <img src="./assets/advertising_banner.jpg"   alt="na"/>
                    </div>
                    {/* <div >
                                    <img src={sponser2} alt="Item" />
                                </div>
                                <div >
                                    <img src={sponser3} alt="Item" />
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default dynamic  (() => Promise.resolve(Home), {ssr: false}) ;
//export default dynamic (() => Promise.resolve(index), {ssr: false})