import React from 'react'
import profile from "../../assests/images/profile.png"
import "./firstsection.css"
const FirstSection = () => {
  return (
		<div className="firstSection">
			<div className="container p-5">
				<div className="pro">
						<div className=" row profile">
         <div>
						<img className="col img-thumbnail" src={profile} alt="profile Image " />
				</div>
				<div className="profile-name col ">
					<h2 className="animated fadeInLeft titleName">Jennifer</h2>
							<h2 className="animated fadeInRight titleName outline">Amah</h2>
							<div className="stack">

							</div>
							<h4 className="animated fadeInDown mt-5">FullStack Developer</h4>
							<h5 className="animated fadeInUp">REACT.JS,NODE.JS</h5>
			</div>
				</div>

				</div>
			
				<div className="mt-5 animated fadeInUp delay-2s aboutBtn">
					<a href="#about">Get to know Me</a>
				</div>

			</div>
			
		</div>
	);
}

export default FirstSection
