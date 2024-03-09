import React from 'react'
import './HeroImagestyle.css'
// import IntroImg from "../assets/intro-bg.jpg"
import IntroImage from "../assets/MainImg.jpg"
import {Link} from 'react-router-dom'

const HeroImage = () => {
  return (
    <div className='hero'>
      <div className="mask">
        <img src={IntroImage} alt="IntroImg" className="intro-img" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>Frontend Developer.</h1>
        <div>
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
