import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import newsBanner from "../../assets/news-banner.jpg"
import HomePost from '../Home/HomePost'
import axios from 'axios'
import Pagination from '@/Common/Pagination'
import NewsPost from './NewsPost'
import { withoutAuthAxios } from '@/config'
import Head from 'next/head'

const index = () => {
  const [data, setdata] = useState([])
  const [postPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, settotalCount] = useState('')


  const getData = async () => {

    await withoutAuthAxios()
      .get(`/api/get_news_list?page=${currentPage}&limit=${postPerPage}`)

      .then((response) => {

        if (response.data.status == 1) {

          settotalCount(response.data.data.total_count)
          setdata(response.data.data.posts)
        }
      }, (error) => {
        console.log("error", error)
      }).catch((error) => {
        console.log("error", error)
      })
  }



  useEffect(() => {
    getData()
  }, [currentPage])

  const paginate = (number) => {

    setCurrentPage(number)
  }


  return (
    <div>

      <Head>


        <title>Nihal</title>
        <meta name="description" content="Hello Test" />

        <meta property="og:url" content="https://cannabis-next-js.vercel.app/news" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nihal" />
        <meta property="og:description" content="Hello Test" />
        <meta property="og:image" content="https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cannabis-next-js.vercel.app" />
        <meta property="twitter:url" content="https://cannabis-next-js.vercel.app/news" />
        <meta name="twitter:title" content="Nihal" />
        <meta name="twitter:description" content="Hello Test" />
        <meta name="twitter:image" content="https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp" />

      </Head>


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

                    <NewsPost postsData={data} />

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