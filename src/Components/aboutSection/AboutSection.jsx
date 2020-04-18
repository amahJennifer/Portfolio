import React from 'react'
import linkedin from "../../assests/images/linkedin.svg"
import facebook from "../../assests/images/facebook.svg"
import behance from "../../assests/images/behance.svg"
import instagram from "../../assests/images/instagram.svg"
import skype from "../../assests/images/skype.svg"
import twitter from "../../assests/images/twitter.svg"
import whatsapp from "../../assests/images/whatsapp.svg"

import "./aboutsection.css"
const AboutSection = () => {
  return (
    <div id="about" className=" animated fadeInUp delay-2s aboutSection">
      <div className="aboutContainer">
        <div className="little">
          <b>A little Bit</b> 
        </div>
        <div className="aboutMe">About ME</div>
        <div className="about-text">
          <p>Jennifer Amah is a FullStack developer from Nigeria,She studied Computer Science And
            Management with first class degree from Wisconsin International University College</p>
          <p>Over the years she has worked on several live projects to solve real life problems ,Most of these Projects are fintech Apps .
          Jennifer is most excited about fintech applications ,making and using purchasing power at the comfort of your bedroom.
          </p>
          <p>Over the years she has worked on several live projects to solve real life problems ,Most of these Projects are fintech Apps .
          Jennifer is most excited about fintech applications ,making and using purchasing power at the comfort of your bedroom
          </p>
        </div>
        <div className="socialContainer">
          <div className="social">
            <a href="https://www.linkedin.com/in/jennifer-amah-aa2949122/">
              <img src={linkedin} className="social-icon"/>
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/jennifer-amah-aa2949122/">
              <img src={skype} className="social-icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/jennifer-amah-aa2949122/">
              <img src={behance} className="social-icon" />
            </a>
          </div>
          <div className="social">
            <a href="https://wa.me/2348148547405">
              <img src={whatsapp} className="social-icon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection
