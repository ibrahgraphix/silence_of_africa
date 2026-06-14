import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import bg from "../assets/mikumi.jpg"
import Footer from '../components/Footer'
import { useGlobalContext } from '../../Context'
import { Link } from 'react-router-dom'
import { WhatsAppIcon } from '../components/WhatsAppIcon'
import SEO from '../components/SEO'
import { seoMetadata } from '../utils/seoMetadata'


const Safaris = () => {
  const {packages}=useGlobalContext()
  const[category,setCategory]=useState("safari")
  return (
    <>
    <SEO 
      title={seoMetadata.safaris.title}
      description={seoMetadata.safaris.description}
      keywords={seoMetadata.safaris.keywords}
      ogImage={seoMetadata.safaris.ogImage}
      ogType={seoMetadata.safaris.ogType}
      canonicalUrl="/safaris"
    />
    <main>
        <Navbar />
        <Hero 
                cname="hero-mid"
                heroImg={bg}
                title="Wild life safari"
    />
    <section className='hiking-section'>
      <div>
      <div className="hiking-head-title">
          <h1>Wildlife Safari Deals</h1>
          
        </div>
      <div className='trips-card'>
        {packages.map(item=>{
          if (item.category===category) {
            return(
              <article key={item.id} className="tripCard">
              <div className="trip-img">
                  <img src={item.img[0]} alt={`${item.title} - Wildlife safari tour package`} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className='price-duration'>
              <div className='price'><i className="fa-solid fa-money-bill"></i> ${item.price}</div>
                <div className='period'><i className="fa-regular fa-calendar-days"></i> {item.duration}</div>
              </div>
        
              <Link to={`/packages/${item.id}`} className='cardTail'>
              
                See more
                
                </Link>
                
                
              
            </article>
            )

            
          }
          
        })}
        </div>
      </div>
    </section>
      <WhatsAppIcon />
    <Footer />
        
    </main>
    </>
  )
}

export default Safaris
