import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import newsBanner from "../../assets/news-banner.jpg"
import HomePost from '../Home/HomePost'

import Pagination from '@/Common/Pagination'
import NewsPost from './NewsPost'
import { withoutAuthAxios } from '@/config'
import Head from 'next/head'




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
    <>

<Head>
        <title>News</title>
         <link rel='icon'  href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAA+CAYAAACSqr0VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4NTkzMTAxMy0wMjE1LTRmN2MtYjcwNy0zZmI5OGI1YjZjODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBCMENEREI4RDNBMTFFQjlFNDhGNkYyMjI5OTVBNjQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBCMENEREE4RDNBMTFFQjlFNDhGNkYyMjI5OTVBNjQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWIwY2QzMTktNzAwNi0wMTQ2LTlkODItNGNhOTk0NjRjYThhIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDM1NTYxMDItMDQ4OS0zMDQ3LWFjMDktMDIyZGIxMzMxMzQyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DGd5NgAADJdJREFUeNrsWgt0FcUZntmbkHdCCCE3VA9QnlKg1YOFI1YNJQ8pD3kJhHCkqG1TAZEAhocJQRAEE8BEQC2VI48oUCq1SAwKqIVjrWIOtYJGFGs1D57JSQIhuXf6ze7evXN39z6TEI9x4cvM7N2d+f9v//+ff2bXQr4HR/iklAHBA3tLTafP1re3LBL5fhy3AtEgpleHJyRiSqqVSrQntVACpPxoIZwEkEEkGak/EiKRFC4FVTAyMj0tqMMSEplxL4W7pFBJs5AYYFjHtRCJ3grEEych7e427UoIXCSFOt3FgZSOayEU1kApkeG0kNujZv+mS4cjJPrBMRGIHSN4/JBBNUjArzuehWBGAYJlCYxIay+xgtovftBkDz8nd0ALoWm62UXEzTGZ4wZ2GEJi/jiuJ6GkL0A0GN0mpcMQ4kjGXEAN6DiEyEHTPJiKuKfzvPGhP3hCOj96nwWPf6SWf7hHGDDiB08IMtHhQIxJhmqGGz79BiU+N/M2lF9VPLLj8g2aXfyJDfzaRTdCLPAwBMW33ELqgM9wIgvo1PbZOk01CaDuMKTLwomJbUpE0czu0HsbqtuByxIs43NU9gDPEEbO4IJpAG2LwbssnhgLJ73dh4Aqok2StMTCjEjomYdqOfSejXIxuLA7YshKnOSWwvc0iwljH1gLM37VBuYxCpB8CKgiWnU7wLopw2J9NuMhJhPBcnAqHCgFGW9pQRWNahRPy3cwxv8PBUHv4uYD1o0z+rceHyTVrd7uA2ty3JJJrRL8oQsP0mXQ7UXAyhR9mRinxIEK8GOF/LN8oXzxOJT/sW6YsTmhID2hVQKqu3TdvYXEA79oybAJ+elDEgpmlEKXQ9BpkKwcI47i5Yo5O04ZCMHJBpDxhECGUhJiAYmZxE6+SFifvjxh3fTwQISKWzb5FqToN7uk674jILfp9vT07gnrp2+DHrAKlswY0YhQ2bgGLPeUh2znFiGQoViUXb4/Eo0n0Szvtmba7G5PTfPPjNXN5ADhVxofv3pqJGTMg7zlzI6AyRh1PGQdKRsr5+38n1tC8KMNdzxuQoazMzvrjvY2Zmdl8U9OTfU9fvg13eoxomvOlEhvY3Rdcb8lfuX9D0FmEIGAyRAwudx2weKdpFwE1nrNVCvn7zqI4qgbMhRLU8rBKEu65k45DGF/7lHQ3CkhMPt7AnQXjmAgyaNLPjE5DfKVQXkETGblsqtyEjekrISuNT6l7iBjkRcylFKpj0L947ilk7d3yZ50kxvzuFNdm5AWIMVNbjMEs1Ap5D0EOQZxmTTlHaTYBVIUmc+ivdXntUzVgt0f4abdPpDhGJCifADnymOzJqyOfWxCtJfp9rQP0+5pXdvFPWPn39c9dsGEbRi7jNlYMtHJ5kIKE0hR9FlSlbX7un9biIwtw82TcXMnL2Q4hbCxULSXov1w5znjV6LcWrP5b80m71pKgVu8hAT9NX0Rs3pd/7bhPLHQRRhrIXgMZ7JH8ZjJ8FTkqV2pywbO91q4bDiHktr5FM/+ido+v1e7VYuLz0HJIj/IcLZtLB5lIcoj8aumJkKuIbqYUOpD3DgB1OvOpeDJr0K/Oeg/XBmTGWRxkctoKYuqHy9mgS3/GVmFjq+Yk8HckSGWX0KJZJ1SjcAxHwi5Dhwx5CM2dkxWUh3HjBTmnpQD1UtfeS/g/RDcfBkErDYng3gjg/9WajLdHj+/7NUGH6fbw7r2SBosvYv+bXpSRCKIOSk8pchu8QaRbPp29nUAZDDo8JaJhZQokdYnlOjaMSE9wgei7xP68Yh3Ul48n7PnTIsJuZC7p5Gnt36Swesfh/aNuglKxBvih4+EVC95pRzlOUMcsbHDyhgm47sQo5FSjzKv1bYQ0dkudH7SDzJ4WeLy7lZBJXDKMRd7hXLdm4btAPTNbI6xdHLo5VNIWXdx1b7KViMEnTGQsdgPMnibzyQpuqd7WIvwvrgMMZ2RhoYNjD6LcS65kGJzS0ol2gWtvsl8ae1f3sYgb2hm6JmMupCfhH+EBzpC99DfFJK1XgI2A1/rzpWq170N2IQ+JClEuoO7jTaeTSDBSErOpXX769rm3a6dZcNS0jCo5IEMXj8Y3C20B+4IdpnECTms5TmLkOcYD8M5XFeTsD79fVTFVxJ3MZsdhElTqWPhqqVniiHxWRblpyhearPXEJc3vPZvKLvdAxnHUB/byRqWYbL3wRPHOL83d55Jl3BfZ11fg9HbSyBlLHDM1FKUMvvKptea2/S9DJR+AgJcFcjg/4rRHhrWJ2phaJ+o6TTM8iEe0UkI3iQowRXL83c83DMN+JmOkD2hP43M42MBC0HKUGKzFzNFFgcZ72DZ8Lr/wwVwRD88ZhUGnAcyXuB5SljfqEFwpSy0kwS3yQhODOUb1b/X3X4bFo8fJxSkzxLOnVTdZaJw7gjwHcBzh97C+W+aKhvvgNJnSBCNkN8LW+hRrG/yr5XXfoK1zFy0HwZG1W47+C+/X1QFQgiUXmOJCCrslBg2lu+JQLgB8kpSjBaM5LFmlkSDpAfQEt/RrgZG41mIvr0U2Etc/X0CkKYjgx85rMm2EAREUKY9zySMlxTWP/oMCMlvvtjYE+4d0Is3GoBPdwUJmSBhDiJ4N0M8sQv+3MwyQ3pE9MFtWbpuuOW8Z0JIuXAuHVgHiHssnzX+t340f38EQoJpkGwd8gpX/RJaqUu0GmURlcgWLFIvtAkh1oIZ/bBanA8SZqEM01aV+mlODHA29m1Q15Dhlsig0+hC3AJ8B7jbCyH6a/gx7doXdSlwldkOAmQSLDpi5J18eSvgKurboeXGqqzdn7cKIdZNGXfCHbIQI8bLm7V2kzWNkDaLFgKX4ecXhPaJjMGVuR6GMSNEf5Rd/ax2KrVIn4IAi6y4zkKIRgZvK3sjVP7CkWBdRQ+gzK+cv+sffhOSWJhhYTzAMbIQJPxS2UtwLKF1RKhW4uIqopU02y8GxYUMAXjKHtcCQsZc/bRmJqyDk+Ikw6JzF4tiHRoxDmvhq2Wl/ABaPwPsr5y70+aRkMSimdys+bb9Y9C9p5qMKct+ZtybdMYPYsxLmnnd7ogluWEDY66qMSEQQk40nLryCMg4CYWpQoZCikaIJFiIRSSEaN/BUsenW3LKS87h7wbU/1wxZ0edCyGJz83sjmIuFP8D/6bF9f2FjhCDhXDFiYmF2DW3AWosEZaBIb0iP+JeGAAhSfVllxdgxhrrsAwHKUQfSyQiWIqDBNVqFCLUN4Wq8pRewd+taBRWPLLjOwlkPKXmANkyGe53z8TC8CMT3gAx4VWhesQ01zTNk1+q+3+U1n146RrKseILNGUIYUz5N+YqL/Ogi/O3zqru5zgXnM8VwIPAKe8JiKHiIgNhusFcrezRhk9qDuJJfOXnO5nluH8tYSZyMBPFme5BmZ43HKdUDlYEwUz4dvwODsSQZNyZhXtTXTfgjUozveKGTXvDzaH2q82LqWIlvi64DtQevxAD97jbhVy+MGImM4JqQNRRijKbz6d89Z2PGHLY4yxjLcwYhE6yMOoMxI3gFswwYhwB7E3ot3/U8LiDulcMZjGEod/BtScubKPB0jA5ZgRJSmwQ6gHMNFhf0V3QPL9y3s5PfErdMR3xC39r3TiDCzoHyIR4sW5diJm7FzO6TTBIyYVA/CuDfV6sY1fNu9V9QcQwc9fg/VE3Lm0mKOWp/BZUiyrn76wIaC2DJIbfuAwLsTUoZ6GzBUAvl08KzOIHc358YSLjN8B+dUF3m5uhmwC+Mh7jJJOqgZMqL6Q01qk3sr5Svn0h26uydnndKPJrLZOwbroEl5kIU0bmyoYTu7gpRJx5h5aHaK7CcxE7ysy63SUvqDkPX7gdcuMyz8OveQpAwqek/g5WsgVuIylu48xBNPexOKZgxU1U13kf9XyU+6uzi+1tuvyXv8FYNXUET8uh5gQoTnVrGBcyUK9HfUrdy28c0iWCfL1yl44QPsX2BiHfOa6LmJ52LwjYi7gRIcYSl8RMiSUM5V9BRMH53D3HA/rIKVBCzi9/9TgGnQRT7IfmZqDBZYbRXIdUon6Xngz1cSw3mWY3i2Two7645BDvA6gU+hVnvwZVhn4X8vZOCpSMFlmI4bOE7ElxsIxMWMMcIIEoqfsZWEZa7Z/+/rW7+5AMlagr273yB3GE9EQqYLpkj5o1ugesowSWMUBxF6kKZRGw5dL6/RdbQ49W/x41dsGEEJCQATKSQMrcmudf97hRA0JuVTeCOCEZIGOFx926B8fEgpBCxI6jIGLnlWcPNLam/G3yga6/B0jh+x5fArUgpKY9Zfm/AAMA5W2WE3stxWUAAAAASUVORK5CYII='/>

        
        
      </Head>


   {/*             
               
        <title>Create Next App</title>
        <meta property="og:type" content={meta.type} key="ogtype" />
        <meta property="og:site_name" content="What is Web3?" key="ogsitename" />
        <meta property="og:description" content={meta.description} key="ogdesc" />
        <meta property="og:title" content={meta.title} key="ogtitle" />
        <meta property="og:image" content={meta.imageUrl} key="ogimage"  />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.imageUrl} />
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

    
    </>
  )
}

export default index