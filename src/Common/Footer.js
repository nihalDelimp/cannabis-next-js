import React from "react";



import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wraper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="footercolWraper">
                <div className="footColOne">
                  <div className="footer_logo">
                    <img src="../../assets/footer-logo.png" alt="footerLogo" />
                  </div>
                  <div className="footer_desc">
                    <h3 className="sec_title">ABOUT CANNABIS CAPITOL</h3>
                    <p>
                      Cannabis Capitol is the community and industry’s leading
                      informational hub. Our innovative approach to connect
                      every aspect of the industry allows us to create the
                      platform for voices to be heard and skills to be
                      showcased. Cannabis Capitol is committed to giving a
                      behind-the-scenes look into the lives of community
                      leaders, innovators, activists, artists, consumers and
                      companies. We are an all encompassing platform dedicated
                      to educate, entertain and connect like-minded individuals.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 footer--menu--links">
              <div className="footercolWraper">
                <div className="footColOne">
                  <ul className="footer_links">
                    <li className="link_item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="link_item">
                      <Link href="/shows">Entertainment</Link>
                    </li>
                    <li className="link_item">
                      <Link href="/production">Production</Link>
                    </li>
                    {/*<li className="link_item"><Link href="/network">Events</Link></li> */}
                    <li className="link_item">
                      <Link href="/news">News</Link>
                    </li>
                    <li className="link_item">
                      <Link href="/network">Network</Link>
                    </li>
                    <li className="link_item">
                      <Link href="/creative">Creative Compound</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footercolWraper">
                <h3 className="sec_title">social</h3>
                <div className="footer_social">
                  <a
                    href="https://channelstore.roku.com/details/c30603e6e4fa652a792041ccc96c8bda/cannabis-capitol-network"
                    target="_blank"
                  >
                    <img src="../../assets/roku.svg" alt="fb" />
                  </a>
                  <a
                    href="https://www.instagram.com/cannabiscapitol"
                    target="_blank"
                  >
                    <img src="../../assets/instagram.png" alt="fb" />
                  </a>
                  <a
                    href="https://www.facebook.com/cannacapitol"
                    target="_blank"
                  >
                    <img src="../../assets/facebook.png" alt="fb" />
                  </a>
                  <a
                    href="https://www.youtube.com/c/CannabisCapitol"
                    target="_blank"
                  >
                    <img src="../../assets/youtube.png" alt="fb" />
                  </a>
                  <a
                    href="https://www.twitch.tv/cannabiscapitol"
                    target="_blank"
                  >
                    <img src="../../assets/twitch.png" alt="fb" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
