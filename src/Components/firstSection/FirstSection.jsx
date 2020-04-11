import React from 'react'
import profile from "../../assests/images/profile.png"
import "./firstsection.css"
const FirstSection = () => {
  return (
    <div className="firstSection">
      <div className="profile">
        <img className="profileImage" src={profile} alt="profile Image " />
      </div>
      <div className="profileName">
        <div className="titleName">
          <h2>Jennifer</h2>
        </div>
        
        <div className="titleName outline">
          <h2>Amah</h2>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
