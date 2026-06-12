import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/abouthero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import AboutComp from '../components/AboutComp'
import WhyUs from '../components/WhyUs'




const About = () => {
  return (
    <main>
        <Navbar />
        <Hero 
    cname="hero-mid"
    heroImg={bg}
    title="About Us"
    text=""
     
    />
    <AboutComp/>
    <WhyUs/>
   
      <WhatsAppIcon />
      
    
    <Footer />
  

    </main>
  )
}

export default About
