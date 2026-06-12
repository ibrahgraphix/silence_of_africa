import React from "react";
import "./include.css"

const IncludedList = () => {
  const items = [
    "Professional, experienced, mountain guides",
    "All Park fees",
    "Rescue fees",
    "All meals while on the Mountain",
    "Arrival and Departure transfers",
    "Guides, Porters, cook salaries and park fees",
    "Quality Mess tents with table and chairs",
    "Large portions of fresh, healthy, nutritious food",
    "Clean, purified drinking water",
    "Crisis management and safety procedures",
    "Fair and ethical treatment of porters",
    "Flying Doctors insurance (AMREF) during the trek",
  ];

  return (
    <ul className="IncludedList">
      <h2>INCLUDED IN THE PRICE</h2>
      {items.map((item) => (
        <li key={item}>- {item}<br /></li>
      ))}
    </ul>
  );
};

export default IncludedList;
