import "./Heroimgstyle.css";
import React from 'react'
import IntroImg  from  "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
          <img className="into-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>I AM A FREELANCER</p>
        <h1>React Developer</h1>
        <div className="btns">
          <Link to="/project" className="btn">PROJECTS</Link>
          <Link to="/contact" className="btn btn-light">CONTACTS</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg