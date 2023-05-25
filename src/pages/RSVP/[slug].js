import { getFormatedDate } from '@/Helper/Help'
import { withoutAuthAxios } from '@/config'
import { useRouter } from 'next/router'
import React, { useEffect,useState } from 'react'
const RsvpData = () => {
    
  const router=useRouter()

  const [data, setdata] = useState([])

  const getData=async(id)=>{
     await withoutAuthAxios()
     .post(`/api/event-show/${id}`)
     .then((response)=>{
      console.log("d",response.data.data.event)
      setdata(response.data.data.event)
     }).catch((error)=>{
      console.log("SDsds",error)
     })
  }

   useEffect(()=>{

    const id =router.query.slug
    getData(id)
   },[router.query.slug])

  return (
    <div>
    
    <section className="logoBanner">
                <div className="container">
                    <div className="logoBanner--wraper">
                        <img src="../../assets/logo-bannerSection.png" alt="" />
                    </div>
                </div>
            </section>


            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="leftWrap">
                                <div className="leftWrapin">
                                    <div className="articleMain">
                                        <h2 className="articleMain--title">{data?.name}</h2>
                                        {/* <h3 className="articleMain--subTitle">Sub Title</h3> */}
                                        <div className="articleMain--info">
                                            <span className="articleMain--type">Production</span>
                                            {/* <span className="articleMain--category">
                                                {specificArticle.post?.category !== null ? <Link to={`/news/category/${specificArticle.post?.category?.slug}`}>
                                                    {specificArticle.post?.category === null ? "Uncategorized" : specificArticle.post?.category?.title}
                                                </Link> : "Uncatergorized"}
                                            </span> */}
                                            <span className="articleMain--date"> {getFormatedDate(data?.created_at)}  </span>
                                        </div>
                                        <div className="articleMain--content">
                                            <div className=" col articleMain--thumbnail">
                                                <img src={data?.image_path} />
                                            </div>
                                            <div className="articleMain--description">
                                                <p dangerouslySetInnerHTML={{ __html: data?.discription }} />
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
                                        <h3 className="sidebarTitle sec_title">{data?.status === "1" ? "Click on the button below to join Production" : "This Production is not available right now!."}</h3>
                                        <div>
                                          
                                        </div>
                                        <h5 className="">
                                           {/* {token ?
                                                <button className="btn btn-info" disabled={data?.status === "0"} onClick={handleModel} >Join the Production</button>
                                                : <button className="btn btn-info" disabled={data?.status === "0"} onClick={unAuthorized} data-toggle="modal" data-target="#loginForm">Join the Production</button>
                                           */}
                                        </h5>
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

export default RsvpData