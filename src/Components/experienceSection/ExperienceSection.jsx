import React from 'react'
import "./expSection.css"
const ExperienceSection = () => {
  return (
		<div className="exp-Section animated fadeInRight delay-3s">
			<div className="exp-container">
				<div className="sub-title">The Companies I've Worked with</div>
				<div className="title">Experience</div>
				<div className="job-subSection">
					<div className="job-company">Decagon</div>
					<div className="job-position">FullStack Software Engineer</div>
					<div className="job-date">2019-present</div>
					<div className="job-details">
						<p>
							Building Restful APis with Node,MongoDB ,Postgres etc.
						</p>
						<p>
							Building User Interfaces (Web Pages)
						</p>
						<p>
							Consuming APis 
						</p>
						<p>
							Meeting Software Business Requirements
						</p>
						<div className="view">
							<a href="#">View my interview about this role </a>
							<a href="https://decagonhq.com">Visit Decagon's</a>
						</div>
					</div>
				</div>
			 
				<div className="job-subSection">
					<div className="job-company">SFS NIGERIA</div>
					<div className="job-position">Frontend Engineer</div>
					<div className="job-date">2020-present</div>
					<div className="job-details">
						<p>
							Providing Investment solution through Compex Africa,An investment solution
								platform for investors and business Owners.
						</p>
						<p>
							building reusable components with react 
						</p>
						
					
						<div className="view">
							<a href="#">View my interview about this role </a>
							<a href="https://compexafrica.com">Visit Compex Africa</a>
						</div>
					</div>
				</div>
				<div className="job-subSection">
					<div className="job-company">BANK OF AGRICULTURE</div>
					<div className="job-position">IT SUPPORT</div>
					<div className="job-date">2017-2018</div>
					<div className="job-details">
						<p>
							Managing Banking Application
						</p>
						<p> 
							Training staff to use banking Application
						</p>
						<p> 
							Banking Transactions 
						</p>
						<p> 
							Account Creation 
						</p>
						<p> 
							Loan Management 
							-- Loan Recovery 
							-- Preparation of Monthly Loan Repayment Report 
						</p>
						<p> 
							Business Survey -- Site Inspection 
						</p>
					
						
						<div className="view">
							<a href="#">View my interview about this role </a>
							<a href="#">Visit Decagon's</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ExperienceSection
