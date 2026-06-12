import React,{useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { menuItems } from './menuItems'
import logo from "../assets/logo.png"
const Navbar = () => {
  const[clicked,setClicked]=useState(true)
  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <nav className='navItems'> 
   <Link to={'/'}><img className='navLogo' src={logo}/></Link> 
     <div className="navIcon">
      <i onClick={handleClick} className={clicked?'fas fa-bars':'fas fa-times'}></i>
      
     </div>
     
     <ul className={clicked?"navMenu ":"navMenu active"}>
        {menuItems.map((item,index)=>{
            return(
                <li key={index} >
            <Link to={item.url} className={item.cname}><i className={item.icon}></i>{item.title}</Link>
        </li>
            )
        })}
        
     </ul>
     

    </nav>
  )
}

export default Navbar