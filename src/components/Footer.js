import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <section className='ext_footer'>
      <div className='heading'>
        <h3>Reach US</h3>
      </div>
      <div className='footer-icons'>
        <ul >
          <li>
            <img src="footer/fb_icon_outline.svg" alt="fb" width="50" height="50" />
          </li>
          <li>
            <img src="footer/tw_icon_outline.svg" alt="fb" width="50" height="50" />
          </li>
          <li>
            <img src="footer/insta_icon_outline.png" alt="fb" width="50" height="50" />
          </li>
          <li>
            <img src="footer/yt_icon_outline.svg" alt="fb" width="50" height="50" />
          </li>
          <li>
            <img src="footer/app_icon_outline.svg" alt="fb" width="50" height="50" />
          </li>
          <li>
            <img src="footer/310_icon_outline.svg" alt="fb" width="50" height="50" />
          </li>
        </ul>
      </div>
      <div className='container-footer'>
        <div className='col-12'>
          <ul>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">INTERNATIONAL SERVICES</a></li>
            <li><a href="/">ZONG COMMUNICATIONS HUB</a></li>
            <li><a href="/">CORPORATE SOCIAL RESPONSIBILITY</a></li>
            <li><a href="/">MY ZONG APP</a></li>
            <li><a href="/">VENDOR PORTAL</a></li>
            <li><a href="/">CAREERS</a></li>
            <li><a href="/">SIM PRICE</a></li>
            <li><a href="/">CONTACT US</a></li>
            <li><a href="/">BHASHA DAM FUND</a></li>
            <li><a href="/">PTA TERMS & CONDITIONS</a></li>
            <li><a href="/">BYN PORTAL</a></li>
            <li><a href="/">SIM ISSUANCE PROCESS</a></li>
            <li><a href="/">TOSDP</a></li>
            <li><a href="/">BECOME OUR DIGITAL PARTNER</a></li>
            <li><a href="/">BECOME A ZONG FRANCHISEE</a></li>
          </ul>
          <ul>
            <li>© ZONG 2023. All rights reserved.</li><br /><br />
            <li>&copy; Developed & Maintained by Stars IT Developers</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer
