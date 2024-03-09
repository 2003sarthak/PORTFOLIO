import React from 'react'
import './FooterStyle.css'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode,SiCodingninjas } from "react-icons/si";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              D-12 Pratap Nagar , Agra
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              +91 8791719046
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
              2003sarthakgoyal@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>A developer enthusiastic, Frontend developer</p>
          <div className="social">
            <Link to="https://www.linkedin.com/in/sarthak-goyal-181996227?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADjrnnEBy8RPkZ1EwqcmrZthF7Ogp32S6XE" target="_blank">
              <FaLinkedin size={30} className='social-btn'/>
            </Link>
            <Link to="https://api.whatsapp.com/send/?phone=918791719046&text&type=phone_number&app_absent=0" target="_blank">
              <FaWhatsapp size={30} className='social-btn'/>
            </Link>
            <Link to="https://leetcode.com/sg_goyal225/" target="_blank">
              <SiLeetcode size={30} className='social-btn'/>
            </Link>
            <Link to="https://www.codingninjas.com/studio/profile/sg_goyal225" target="_blank">
              <SiCodingninjas size={30} className='social-btn'/>
            </Link>
            <Link to="https://github.com/settings/profile" target="_blank">
              <FaGithub size={30} className='social-btn'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
