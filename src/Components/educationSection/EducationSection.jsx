import React from 'react'
import "./edu.css"
const EducationSection = () => {
  return (
		<div className="animated fadeInUp delay-4s edu-section">
			<div className="edu-container">
				<div className="sub-title-edu">Things I've Learnt</div>
				<div className="title-edu">Education</div>
				<div className="job-subSection">
					<div className="job-company">
						Wisconsin International University College
					</div>
					<div className="job-position-edu">
						Bachelor of Arts with First Class Honours
					</div>
					<div className="job-position-edu">
						Computer Science and Management
					</div>
					<div className="job-date">Sept 2012 - Nov 2016</div>
					<div className="job-details-edu">
						<p>
							Intoduction to Programming
						</p>
						<p>
							Database Management System
						</p>
						<p>
							Java Application Development
						</p>
						<p>
							Visual Basics 
						</p>
						<p>
							Programming in C and C++
						</p>
					</div>
						
				</div>
				<div className="job-subSection">
					<div className="job-company">Decagon Learning Institute</div>
					<div className="job-position-edu">Software Enginnering</div>
					<div className="job-position-edu">Javascript(Node.js,React.js)</div>
					<div className="job-date">Sept 2019 - Feb 2020</div>
					<div className="job-details-edu">
						<p>
							Product Life cycle 
						</p>
						<p>
							Building World Class Softwares
						</p>
				
					</div>
				</div>
				<div className="requestBtn">
					<a href="mailto:jennifer000@rocketmail.com" className="requestLink">
						Request My Full Resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default EducationSection
