import React from 'react';
import './Navbar.css';
import Logo from '../../images/img location.png';
import Telega from '../../images/telega.png';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={Logo} alt='Logo'/>
        <ul>
          <li><a href="#" style={{color:"#35B8BE"}}>Home</a></li>
          <li><a href="#">Order</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          
          <li id='li'>
            <a href='#'><img src={Telega} alt='telejka' style={{width:"23px",height:"17px"}}/></a>
          </li>
          <p id='count'>0</p>
        </ul>
      </nav>
  )
}
