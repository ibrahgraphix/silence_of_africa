import React from 'react'
import "./culture.css"
import bg from "../assets/about.jpg"

const AboutComp = () => {
  return (
    <section className='culture'>
        <div className='culture-tour'>
           

        </div>
        <div className="container">
      <div className="image-column">
        <img src={bg} alt="Your Image Alt Text" />
      </div>
      <div className="text-column">
        
        <p>
        Dear Madam/Sir, We are very excited to introduce you to our company, SILENCE OF AFRICA SAFARI. Our established tour operator in the Tanzania, South Africa, Uganda  has been in the tourism industry for over two 2 years. We are experts in organizing Safari and mountains tours and have been recognized by many adventurers over the years.23 Jan 2023 Our team is made up of passionate travelers who have a wealth of knowledge and experience in the travel industry. From our expert travel advisors to our friendly customer service team, we are all committed to making your travel experience unforgettable
        </p>
        
      </div>
    </div>
    </section>
  )
}

export default AboutComp