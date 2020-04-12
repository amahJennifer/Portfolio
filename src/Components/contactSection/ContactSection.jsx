import React from 'react'
import "./contact.css"
const ContactSection = () => {
  return (
		<div className="contact-section">
			<div className="contact-container">
				<div className="sub-title">Get in touch</div>
				<div className="title">Contact Me </div>
				<div className="text">
          If you'd like to work with me, would like more information, or if
          you'd just like to chat then email me to get in touch.
				</div>
        <div className="email-btn">
          <a href="mailto:jennifer000@rocketmail.com" className="mail-btn">Email Me</a>
        </div>
			</div>
		</div>
	);
}

export default ContactSection
