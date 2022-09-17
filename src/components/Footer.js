import "./Footerstyle.css"

import React from 'react'
import { FaHome,FaPhone,FaMailBulk,FaLinkedin,FaTwitter,FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>123 housing society</p>
                        <p>Bangaladesh</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                6301600194</h4>
                </div>
                <div className="gmail">
                    <h4>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                liferacer1718@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>This is <strong>SHAIK.MUBASHIRA </strong>Student at Sri venkateshwara university I enjoy discussing new projects and design challenges.</p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Footer