import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./booking.css"

const BookingForm = () => {
  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      fullname,
      message,
      adults,
      children,
      email,
      phone,
      arrivalDate,
    };

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID").then(
      (response) => {
        alert("Your message has been sent successfully!");
      },
      (error) => {
        alert("Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <div className="booking">
        <h1>Book this tour</h1>
    <form onSubmit={handleSubmit}>
                    

      <input
        type="text"
        placeholder="Full name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of adults"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="date"
        placeholder="Arrival date"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default BookingForm;
