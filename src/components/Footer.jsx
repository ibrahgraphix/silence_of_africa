import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <article className="top">
            <div>
                <h1>Silence Of Africa Safari</h1>
                <h4>Discover the Untamed Beauty of Africa.</h4>
            </div>
            <div>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
                <a href='https://wa.me/+255753711123' target='blank'><i className=" wa fa-brands fa-whatsapp"></i></a>
              
            </div>
        </article>
        <article className="bottom">
            <div>
                <h4>Address Tanzania</h4>
                <h4>Plot. 470 Philips</h4>
                <h4>Arusha, Tanzania</h4>
                <h4>+255 753 711 123</h4>
                <h4>+255 627 185 625</h4>
                <h4>silenceofafricasafaris8@gmail.com</h4>
            </div>
            <div>
                <p><span><Link to="/terms" className="footer-link" href="">Terms and Condition</Link></span></p>
            </div>
            
        </article>
        <p className='crafted'>crafted by <a href='https://wa.me/+255627185625'>BrainCore</a></p>
    </footer>
  )
}

export default Footer
