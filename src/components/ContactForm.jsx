import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { data } from './data';
import './contact.css';

const ContactForm = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialTour = searchParams.get('tour') || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('');
  const [tour, setTour] = useState(initialTour);
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  useEffect(() => {
    if (initialTour) {
      setTour(initialTour);
    }
  }, [initialTour]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !guests || !tour || !date || !phone) {
      alert('Please fill out all required fields before sending.');
      return;
    }

    const message = [
      'Hello Silence of Africa 👋',
      'I would like to book this tour:',
      `Full name: ${fullName}`,
      `Email: ${email}`,
      `Number of guests: ${guests}`,
      `Trip: ${tour}`,
      `Date: ${date}`,
      `Phone number: ${phone}`,
      `Special request: ${specialRequest || 'None'}`,
    ].join('\n');

    const whatsappNumber = '255753711123';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <section id="contact">
        <article className="contact-box">
          <div className="contact-links">
            <h3>We Are Social</h3>
            <div className="links">
              <div className="link">
                <a><i className="inst fa-brands fa-square-facebook"></i></a>
              </div>
              <div className="link">
                <a><i className="fb fa-brands fa-square-instagram"></i></a>
              </div>
              <div className="link">
                <a href="https://wa.me/+255753711123" target="_blank" rel="noreferrer"><i className="wa fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <label htmlFor="fullName">Full name:</label>
                <input id="fullName" type="text" name="fullName" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="form-item">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-item">
                <label htmlFor="guests">Number of guests:</label>
                <input id="guests" type="number" min="1" name="guests" placeholder="Enter number of guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />
              </div>
              <div className="form-item">
                <label htmlFor="tour">Trip (tour name):</label>
                <select id="tour" name="tour" value={tour} onChange={(e) => setTour(e.target.value)} required>
                  <option value="" disabled>Select a tour</option>
                  {data.map((item) => (
                    <option key={item.id} value={item.title}>{item.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-item">
                <label htmlFor="date">Date:</label>
                <input id="date" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <div className="form-item">
                <label htmlFor="phone">Phone number:</label>
                <input id="phone" type="tel" name="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div className="form-item">
                <label htmlFor="specialRequest">Special request (optional):</label>
                <textarea id="specialRequest" name="specialRequest" placeholder="Add any special requests" value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
              </div>
              <button type="submit" className="submit-btn"><i className="fa-regular fa-envelope"></i> Send</button>
            </form>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ContactForm;