import React from 'react'
import Hero from '../components/Hero'
import bg from "../assets/abouthero.jpg"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import AboutComp from '../components/AboutComp'
import WhyUs from '../components/WhyUs'
import SEO from '../components/SEO'
import { seoMetadata } from '../utils/seoMetadata'




const About = () => {
  return (
    <>
    <SEO 
      title={seoMetadata.about.title}
      description={seoMetadata.about.description}
      keywords={seoMetadata.about.keywords}
      ogImage={seoMetadata.about.ogImage}
      ogType={seoMetadata.about.ogType}
      canonicalUrl="/about"
    />
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
    </>
  )
}

export default About
