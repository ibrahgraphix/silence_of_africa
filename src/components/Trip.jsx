import React from 'react'
import "./Trip.css"
import Tripdata from './Tripdata'
import bg1 from "../assets/crater.jpg"
import bg2 from "../assets/mikumi.jpg"
import bg3 from "../assets/gombe.jpg"
import bg4 from "../assets/zenji.jpg"



const Trip = () => {
  return (
    <section className='Trip'>
        <h1>Recently Trip</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='trips-card'>

        <Tripdata
        title="2-3 days trip to Ngorongoro crater" 
        text="Lorem adipisicing elit.Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione " 
        bg={bg1}
        price="$1500 per person"
        duration=" 5 days"
        />
        <Tripdata
        title="3-5 days trip to Zanzibar" 
        text="Lorem adipisicing elit.Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione " 
        bg={bg4}
        price="$1500 per person"
        duration=" 5 days"
        />
        <Tripdata
        title="3-6 days trip to Mikumi" 
        text="Lorem adipisicing elit.Quam ex nulla explicabo sunt at ratione ab alias fugiat,voluptas earum.ab alias fugiat,voluptas earum.dolor sit amet consectetur adipisicing elit.Quam ex nulla explicabo sunt at ratione" 
        bg={bg2}
        price="$1500 per person"
        duration=" 5 days"
        />
        <Tripdata
        title="2-4 days trip to Gombe" 
        text="Lorem adipisicing elit. Quam ex nulla explicabo sunt at ratione ab alias fugiat, voluptas earum.ab alias fugiat, voluptas earum.dolor sit amet consectetur adipisicing elit. Quam ex nulla explicabo sunt at ratione " 
        bg={bg3}
        price="$1500 per person"
        duration=" 5 days"
        />
        </div>
        
    </section>
  )
}

export default Trip