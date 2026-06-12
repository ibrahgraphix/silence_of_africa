import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../Context';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './single.css';
import IncludedList from '../components/Included';
import ExcludedList from '../components/Exclude';
import { WhatsAppIcon } from '../components/WhatsAppIcon';



const Singlepackage = () => {
  const { detailId } = useParams();
  const { packages } = useGlobalContext();

  const detailIdNumber = parseInt(detailId);
  const item = packages.find((item) => item.id === detailIdNumber);

  if (item) {
    const { title, days, img } = item;

    return (
      <section>
        <Navbar />
        <Hero cname="hero-mid" heroImg={img[0]} title={title} />

        <div className="responsive-list">
          <div className="list">
             <ul className="list-style">
            {days.map((day) => (
              <li key={day.title}>
                <h3>{day.title}</h3>
                <p>{day.desc}</p>
                <p className='distance'>Distance:{day.distance}</p>
                <p className='time'>Time:{day.time}</p>
              </li>
            ))}
          </ul>
          </div>
          <div className="ex-in">
            <IncludedList />
            <ExcludedList />

            <div className='btnbook-container'>
              <Link className='showbtn' to={`/contact?tour=${encodeURIComponent(title)}`}>
                book this tour
              </Link>
            </div>

            
            
            
          </div>
         
        </div>
        <WhatsAppIcon />
        <Footer />
        
      </section>
    );
  } else {
    return (
      <section>
        <p>Package not found</p>
      </section>
    );
  }
};

export default Singlepackage;
