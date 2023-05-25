import { withoutAuthAxios } from '@/config'
import React, { useEffect,useState } from 'react'
import ProductionsPage from "./ProductionPage"
const index = () => {
     
  const [data, setdata] = useState([])

   const getData=async()=>{
        await withoutAuthAxios()
        .get(`/api/event-list?page=${1}&limit=${6}`)
        .then((response)=>{
         
          if(response.data.status==1){
            setdata(response.data.data.event.data)
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
      <section className="hm_banner">
                <div className="banner_box">
                    {/* <img src={eventsBaner} className="" alt="" /> */}
                </div>
            </section>
            <section className="wrap_con">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="leftWrap">
                                <div className="leftWrapin ">
                                    <div className="cardMain list-wrapper">
                                      <ProductionsPage  events={data}  />
                                    </div>
                                    { /* <Pagination postsPerPage={postPerPage} totalPosts={totalCount} paginate={paginate} currentPage={currentPage} />
                                 */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default index