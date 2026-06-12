import React from 'react'

const Tripdata = (props) => {
  return (
    
    
    <article className="tripCard">
      <div className="trip-img">
          <img src={props.bg} alt="img" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>

      <div className='cardTail'>
        <div><i className="fa-solid fa-money-bill"></i>{props.price}</div>
        <div><i className="fa-regular fa-calendar-days"></i>{props.duration}</div>
        
      </div>
    </article>

      
  
  )
}

export default Tripdata