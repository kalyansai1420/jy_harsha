import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div className='Footer'>
        <div className='footer_logo'>
            <h1>Jy Academy</h1>
            <p>B1, 3rd Floor, IA Colony,Off Sardar Patel Road,
Begumpet, Hyderabad,Telangana 500003, India.</p>
        </div>


        <div className='footer_links'>
            <p>On Campus Programs</p>
            <p>Online Programs</p>
            <p>Crash Courses</p>
        </div>


        <div className='footer_contact'>
            <h1>Contact Us</h1>
            <p>| info@jyacademy.com</p>
        </div>
    </div>
  )
}

export default Footer