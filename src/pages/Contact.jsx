import React from 'react'

import Navbar from '../components/Navbar'

import Hero from '../components/Hero'
import bg from "../assets/contacthero.jpg"
import Footer from "../components/Footer"
import ContactForm from '../components/ContactForm'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import SEO from '../components/SEO'
import { seoMetadata } from '../utils/seoMetadata'


const Contact = () => {
  return (
<>
<SEO 
  title={seoMetadata.contact.title}
  description={seoMetadata.contact.description}
  keywords={seoMetadata.contact.keywords}
  ogImage={seoMetadata.contact.ogImage}
  ogType={seoMetadata.contact.ogType}
  canonicalUrl="/contact"
/>
<main>
    <Navbar />
    <Hero 
        cname="hero-mid"
        heroImg={bg}
        title="Contact"
        text="Ready to start your African adventure? Contact us today to begin planning your personalized safari experience with Silence of Africa Safari."
    />
    <ContactForm />
  <WhatsAppIcon />
    
    <Footer />
</main>
</>
  )
}

export default Contact
