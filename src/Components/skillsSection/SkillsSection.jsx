import React from 'react'
import "./skills.css"
const SkillsSection = () => {
  return (
		<div className="skills-section">
			<div className="skills-container">
				<div className="sub-title">What I have to Offer</div>
				<div className="title">Skills</div>
				<div className="skill-details">
					<div className="language-column">
						<div className="language-header">Language</div>
						<div className="language">JavaScript</div>
						<div className="language">Python</div>
						<div className="language">Html</div>
						<div className="language">Css</div>
						<div className="language">SQL</div>
					</div>
					<div className="language-column">
						<div className="language-header">Tools</div>
						<div className="language">Git</div>
						<div className="language">Visual Studio</div>
						<div className="language">Trello</div>
						<div className="language">Jira</div>
						<div className="language">Windows OS</div>
					</div>
					<div className="language-column">
						<div className="language-header">Frameworks</div>
						<div className="language">ReactJS</div>
						<div className="language">ReactNative</div>
						<div className="language">NodeJS</div>
						<div className="language">Django</div>
						<div className="language">Bootstrap</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsSection
