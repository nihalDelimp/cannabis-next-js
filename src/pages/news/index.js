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


  <Head>
    <title>Cool Title</title>
    <meta name="description" content="Checkout our cool page" key="desc" />
    <meta property="og:title" content="Social Title for Cool Page" />
    <meta
      property="og:description"
      content="And a social description for our cool page"
    />
    <meta
      property="og:image"
      content="https://example.com/images/cool-page.jpg"
    />
  </Head>


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
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="canonical" href="https://www.espncricinfo.com/series/8048/report/1370351/lucknow-super-giants-vs-mumbai-indians-eliminator-ipl" />
        <title>Recent Match Report - Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator | ESPN.in  </title>
        <meta name="description" content="Read the detailed Reports &amp; Articles of Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator only on ESPN.in" />
        <link rel="manifest" href="/manifest.json" />
        <meta property="fb:app_id" content="116656161708917" />
        <meta property="og:site_name" content="ESPN" />
        <meta property="og:url" content="https://www.espncricinfo.com/series/8048/report/1370351/lucknow-super-giants-vs-mumbai-indians-eliminator-ipl" />
        <meta property="og:title" content="Recent Match Report - Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator | ESPN.in" />
        <meta property="og:description" content="Read the detailed Reports &amp; Articles of Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator only on ESPN.in" />
        <meta property="og:image" content="https://a.espncdn.com/i/cricket/cricinfo/1378182_1400x2101.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="ESPN" />
        <meta name="twitter:url" content="https://www.espncricinfo.com/series/8048/report/1370351/lucknow-super-giants-vs-mumbai-indians-eliminator-ipl" />
        <meta name="twitter:title" content="Recent Match Report - Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator | ESPN.in" />
        <meta name="twitter:description" content="Read the detailed Reports &amp; Articles of Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator only on ESPN.in" />
        <meta name="twitter:image" content="https://a.espncdn.com/i/cricket/cricinfo/1378182_1400x2101.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:app:name:iphone" content="ESPN" />
        <meta name="twitter:app:id:iphone" content="317469184" />
        <meta name="twitter:app:name:googleplay" content="ESPN" />
        <meta name="twitter:app:id:googleplay" content="com.espn.score_center" />
        <meta name="title" content="Recent Match Report - Lucknow Super Giants vs Mumbai Indians, Indian Premier League 2023, Eliminator | ESPN.in" />
        <meta name="medium" content="article" />
        <meta name="robots" content="noindex,nofollow" />

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