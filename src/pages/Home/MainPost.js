import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import ReactPlayer from 'react-player';
import dynamic from "next/dynamic";
const MainPost = () => {
     
   
    const [realTimeVideo, setrealTimeVideo] = useState('https://vimeo.com/823827863?embedded=true&source=vimeo_logo&owner=152424759')
    

  return (
    <div className="newscard--wrap">
    <div className="newscard--videoPlay">

      
       
           
     <ReactPlayer url={realTimeVideo} className="player__video" controls /> 
                
       
    </div>
    <div className="newscard--postCont">
       
        <h2 className="newscard--postTitle">Pimps and Kinfolk | Season 3 Episode 1 Feat. Daz Dillinger and Lil Eazy E</h2>
      
        <div className="newscard--postPara">
        Season 3 of Pimps & Kinfolk started off super strong! Shout out to the legends @dazdillinger & @lileazy_e for stopping by an putting us on some major pimpin with our host with the most @slinkjohnson Huge shout out to our Network Sponsors @extrax.ca @reefersbysublime @dime.industries @topshelfcultivation_ @zatix.420 @rolly.ca @bearflaggroup @infuseddigital
        </div>
    </div>
    <Link href="/moreentertainment" className="newscard--linkDetails">More Videos</Link>
</div>
  )
}

export default dynamic (() => Promise.resolve(MainPost), {ssr: false})