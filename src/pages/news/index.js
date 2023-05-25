import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import NewsPost from './NewsPost';
import { withoutAuthAxios } from '@/config';
import Pagination from '@/Common/Pagination';
import { NextSeo } from 'next-seo';
const Index = ({ data, totalCount, currentPage, paginate }) => {

  return (
    <div>


      <NextSeo
        title="Nihal Chaurasia"
        description="This is a demo description"
        canonical="https://cannabis-next-js.vercel.app"
        openGraph={{
          url: 'https://cannabis-next-js.vercel.app',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp' },
            { url: 'https://bountifield.org/wp-content/uploads/2020/03/social-images_Facebook-Photo-1200x630px.jpg.webp' },
          ],
          site_name: 'YourSiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />


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

      <Pagination
        postsPerPage={6}
        totalPosts={totalCount}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { page = 1, limit = 6 } = context.query;
  const currentPage = parseInt(page, 10);

  try {
    const response = await withoutAuthAxios().get(`/api/get_news_list?page=${currentPage}&limit=${limit}`);
    console.log(response.data.data.posts, "Nihalll")
    console.log(response.data.status, "Helooo")
    if (response.data.status == 1) {
      const totalCount = response.data.data.total_count;
      const data = response.data.data.posts;
      console.log(response.data.data.posts, "dtatatata")
      return {
        props: {
          data,
          totalCount,
          currentPage,
        },
      };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return {
    props: {
      data: [],
      totalCount: 0,
      currentPage: 1,
    },
  };
}

export default Index;
