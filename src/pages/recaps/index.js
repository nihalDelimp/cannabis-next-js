import React,{useState} from 'react'
import banner from "../../assets/intertainment.png"
import Image from 'next/image';
import Link from 'next/link';
//import ShowMoreText from "react-show-more-text";
import dynamic from "next/dynamic";
import ReactPlayer from 'react-player';
import Head from 'next/head';
const index = () => {
     
    const [realTimeVideo, setrealTimeVideo] = useState('https://player.vimeo.com/video/422883518?h=aee925f4ae&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;loop=1')

    const meta = {
        title: "Recaps",
        description:
          "Recaps is the next step in the evolution of the internet and, possibly, the organization of society. According to legend, Web 1.0 was the era of decentralized, open protocols, when the majority of internet activity consisted of visiting individual static webpages.",
        imageUrl:
              "https://d1zbg1tvj6dkkl.cloudfront.net/images/posts/news/uzRaPxw17xQRy9S8sjLDfByP7BDri0KWUM10N1G9.png"
    };
  return (
    <>
    <Head>
        

        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.imageUrl} />
      </Head>
    <section className="hm_banner">
        <div className="banner_box">
            <img src="./assets/intertainment.png" alt="dffdf"  />
        </div>
    </section>
    <section className="wrap_con">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="intertainWraper">
                        <div className="intertainWraperIn">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="news_listBottom player__video__tab">
                                        <ul className="newsList">
                                            <li className="newsListItem bigBannner">
                                                <div className="intThumbnail">
                                                    <ReactPlayer url={realTimeVideo} className="player__video" controls />
                                                    <div className="showLive">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="postTopRightWraper">
                                        {/* <div className="newslistTop">
                                            <h2 className="newslistTop--title sec_title">SHOWS</h2>
                                            <p className="newslistTop--content">
                                                The shows on the Cannabis Capitol network features a variety of cannabis personalities and influencers.
                                                {realTimeVideo === undefined ? "Daily live streams from Cannabis Capitol studios featuring various cannabis  personalities and influencers." : videoDetails}
                                            </p>
                                        </div> */}
                                        <div className="p-3">
                                            <ul className="newsList">
                                                <li className="newsListItem">
                                                    <div className="intDetails">
                                                        <h3 style={{ color: '#23945f' }} className="sec_title">Most Recent</h3>
                                                        <div className="newscard--postPara">
                                                        Season 3 of Pimps & Kinfolk started off super strong! Shout out to the legends @dazdillinger & @lileazy_e for stopping by
an putting us on some major pimpin with our host with the most @slinkjohnson Huge shout out to our Network Sponsors
@extrax.ca @reefersbysublime @dime.industries @topshelfcultivation_ @zatix.420 @rolly.ca @bearflaggroup
@infuseddigital {/*   <ShowMoreText
                                                                lines={5}
                                                                more=" Show more"
                                                                less="... Show less"
                                                                expanded={false}
                                                                truncatedEndingComponent={"..."}
                                                            >
                                                                Season 3 of Pimps & Kinfolk started off super strong! Shout out to
the legends @dazdillinger & @lileazy_e for stopping by an putting us
on some major pimpin with our host with the most @slinkjohnson
Huge shout out to our Network Sponsors @extrax.ca
@reefersbysublime @dime.industries @topshelfcultiva.
                                                            </ShowMoreText>

                                                            */}

                                                            
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intertainWraper" >
                        <div className="intertainWraperIn">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="newslistTop" >
                                        <h2 className="newslistTop--title sec_title">Shows</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default dynamic (() => Promise.resolve(index), {ssr: false})