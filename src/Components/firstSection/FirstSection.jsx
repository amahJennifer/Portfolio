import React from 'react'
import profile from "../../assests/images/profile.png"
import "./firstsection.css"
const FirstSection = () => {
  return (
		<div className="firstSection">
			<div className="aboutBtn animated fadeInUp delay-2s">
				<a href="#about">Get to know Me</a>
			</div>
			<div className="profile">
				<img className="profileImage" src={profile} alt="profile Image " />
			</div>
			<div className="profileName">
				<div className="titleName">
					<h2 className="animated fadeInLeft">Jennifer</h2>
				</div>

				<div className="animated fadeInRight titleName outline">
					<h2>Amah</h2>
				</div>
			</div>
		</div>
	);
}

export default FirstSection
