import { getFormatedDate } from '@/Helper/Help'
import Link from 'next/link'
import React from 'react'

const ProductionPage = ({events}) => {
    console.log("events",events)
  const limitDesc=100

  return (
   <>
              {events.map((item) => (
                <div className="newscard list-item" key={item.id}>
                    <div className="newscard--wrap ">
                        <div className="newscard--videoPlay">
                        <img src={item.image_path} className="newscard--postThum" alt="item" />
                            {/* 
                            {user && user.role == '3' ?
                                <img src={item.image_path} className="newscard--postThum" alt="item" />
                                :
                                <Link to={{
                                    pathname: `/RSVP/${item.slug}`,
                                    state: { productionId: item.id }
                                }} >
                                    <img src={item.image_path} className="newscard--postThum" alt="item" />
                                </Link>} */}
                        </div>
                        <div className="newscard--postCont">
                            <h4 className="newscard--postCategory">Production</h4>
                            <h3 className="newscard--postTitle" >{item.name}</h3>
                            <span className="newscard--postDate">
                                              
                            
                            </span>
                            <div className="newscard--postPara">
                             {item.discription.length > limitDesc ?
                                    <div dangerouslySetInnerHTML={{ __html: item.discription.substring(0, limitDesc) + '...' }} />
                                    :
                                    <div dangerouslySetInnerHTML={{ __html: item.discription }} />
                                }

                            
                            </div>
                            <Link href={`/RSVP/${item.slug}`}  ><button className="newscard--linkDetails">More Details</button> </Link> 
                        </div>
                        
                        </div>
                          
                            
                            
                    
                </div>
            ))}

</>
  )
}

export default ProductionPage