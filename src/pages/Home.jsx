import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import bg from "../assets/serengeti2.jpg"
import Footer from '../components/Footer'
import Destinations from '../components/Destinations'
import Trip from '../components/Trip'
import Faq from '../components/Faq'
import Magicalsafari from '../components/Magicalsafari'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import FourCards from '../components/FourCards'
import DayTrips from '../components/DayTrips'
import Culturetour from '../components/Culturetour'



const Home = () => {
  return (
    <>
    <main>
        <Navbar />
        <Hero 
        cname="hero"
        heroImg={bg}
        title="Welcome to Silence of Africa: Your Gateway to Serene Adventures."
        text="With Silence of Africa safari, we invite you to embark on a breathtaking journey through the heart of the world's most diverse and awe-inspiring continent. With us, you'll experience the magic of Africa like never before."
        buttonText="plan your trip" 
        btnClass="showbtn"
        />
        <Magicalsafari />
        <Destinations />
        
        <Faq />
        <FourCards />
        <DayTrips />
        <Culturetour />
        
        <WhatsAppIcon />
        
        <Footer />
        
    </main>
    </>
  )
}

export default Home
