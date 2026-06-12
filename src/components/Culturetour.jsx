import React from 'react'
import "./culture.css"
import bg from "../assets/culture.jpg"
import { Link } from 'react-router-dom'

const Culturetour = () => {
  return (
    <section className='culture'>
        <div className='culture-tour'>
            <h2>cultural immersion</h2>
            <p>personal experience with residents or individuals native </p>

        </div>
        <div className="container">
      <div className="image-column">
        <img src={bg} alt="Your Image Alt Text" />
      </div>
      <div className="text-column">
        <h2>Connect With The Locals</h2>
        <p>
        Embark on a captivating cultural immersion in Tanzania, where ancient traditions and vibrant customs come to life. Engage with local communities, savoring the rich tapestry of Tanzanian heritage through traditional dances, authentic cuisine, and storytelling. From the rhythmic beats of Swahili music to the warm hospitality of the Maasai people, our cultural experience invites you to embrace the diversity and depth of Tanzania's cultural mosaic. Immerse yourself in this unique journey, forging connections that transcend borders and leave a lasting appreciation for the beauty of Tanzanian traditions.
        </p>
        <Link className='button' to={'/contact'}><a>Meet The Native</a></Link>
        
      </div>
    </div>
    </section>
  )
}

export default Culturetour