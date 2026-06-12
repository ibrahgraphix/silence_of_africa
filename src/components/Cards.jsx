import React from 'react';
import "./fourcards.css"

const Card = ({ imageUrl, heading, paragraph}) => {
  return (
    <div className="your-component">
    <img src={imageUrl} alt="Your Image" className="component-image" />
    <div className="text-container">
      <h2>{heading}</h2>
      <p>{paragraph}</p>

    </div>
  </div>
  );
}



export default Card;
