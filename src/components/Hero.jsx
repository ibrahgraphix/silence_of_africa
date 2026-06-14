import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = (props) => {
  return (
    <section>
    <article className={props.cname}>
        <img  src={props.heroImg} alt={props.title || "Safari adventure destination"} />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <div className="show">
              <Link to="/contact#contact" className={props.btnClass}>{props.buttonText}</Link>
            </div>
            
        </div>
          
        
    </article>
    </section>
    
  )
}

export default Hero