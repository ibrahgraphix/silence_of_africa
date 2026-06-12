import React from "react";
import "./include.css"

const ExcludedList = () => {
  const items = [
    "International Flights",
    "Alcoholic and soft drinks not included",
    "Visa fees",
    "Tips",
    "Personal spending money for souvenirs etc",
    "Travel insurance",
    
  ];

  return (
    <ul className="IncludedList">
      <h2>EXCLUDED IN THE PRICE</h2>
      {items.map((item) => (
        <li key={item}>-{item}<br /></li>
      ))}
    </ul>
  );
};

export default ExcludedList;
