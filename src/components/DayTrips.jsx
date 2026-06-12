import React from 'react';
import './daytrip.css'; // Make sure to import your CSS file
import bg8 from "../assets/chemka.jpg"
import bg9 from "../assets/ArushaNP.jpg"
import bg10 from "../assets/safari-tarangire.jpg"
import bg11 from "../assets/manyaraNP.jpg"
import { Link } from 'react-router-dom';
const DayTrips = () => {
  return (
    <section className='dayTrips'>
        <div className='day-trip'>
            <h2>Tanzania Day Trips</h2>
            <p>Explore Tanzania's beauty in a day trip: Tarangire,lake Manyara, and wildlife-rich destinations await your discovery</p>

        </div>
        <div className="container">
      <div className="image-column">
        <img src={bg8} alt="Your Image Alt Text" />
      </div>
      <div className="text-column">
        <h2>Kikuletwa Hot Springs</h2>
        <p>
        Kikuletwa Hot Springs, also known as Chemka Hot Spring, offers a serene retreat and stands out as one of the top relaxation spots in both Arusha and Moshi. Renowned for its rejuvenating ambiance, the hot spring provides an ideal escape for those seeking tranquility and is considered a must-visit Day Trip attraction in the region.
        </p>
        <Link className='button'  to={'/contact'}>
        <a>$130 per person</a>
        </Link>
       
      </div>
    </div>
    <div className="container">
    <div className="text-column">
        <h2>Arusha National Park</h2>
        <p>
        Embark on a unique Tanzanian Safari starting at Arusha National Park, nestled by Mount Meru. Known for lush landscapes, serene lakes, and black and white colobus monkeys, it offers an intimate walking safari. Get up-close with wildlife, a rare experience found in select national parks.
        </p>
        <Link className='button'  to={'/contact'}>
        <a>$600 per person</a>
        </Link>
        
       
      </div>
      <div className="image-column">
        <img src={bg9} alt="Your Image Alt Text" />
        
      </div>
      
    </div>
    <div className="container">
      <div className="image-column">
        <img src={bg10} alt="Your Image Alt Text" />
      </div>
      <div className="text-column">
        <h2>A day Trip To Tarangire</h2>
        <p>
        Explore the untamed beauty of Tarangire National Park with our exclusive day trip package. Immerse yourself in the diverse landscapes and witness the iconic African wildlife, including majestic elephants and a variety of bird species. Our expert guides ensure an enriching experience as you traverse the park's vast savannas and lush riverine ecosystems. Enjoy a day filled with thrilling game drives and unforgettable moments in the heart of Tanzania's wilderness.
        </p>
        <Link className='button'  to={'/contact'}>
        <a>$650 per person</a>
        </Link>
        
      </div>
    </div>
    <div className="container">
    <div className="text-column">
        <h2>Manyara National Park</h2>
        <p>
        Embark on an enchanting day trip to Lake Manyara National Park with our curated package. Witness the park's diverse ecosystems, from the scenic lake to the dense woodlands, home to flamingos, elephants, and tree-climbing lions. Our experienced guides ensure an immersive safari experience, combining breathtaking landscapes with unparalleled wildlife encounters. Indulge in a day of adventure and discovery within the unique wonders of Lake Manyara.
        </p>
        <Link className='button' to={'/contact'}>
        <a>$650 per person</a>
        </Link>
       
       
      </div>
      <div className="image-column">
        <img src={bg11} alt="Your Image Alt Text" />
        
      </div>
      
    </div>
    </section>
    
  );
};

export default DayTrips;
