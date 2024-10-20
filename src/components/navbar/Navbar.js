import React from 'react';
import './Navbar.css';
import Logo from '../../images/img location.png';
import Telega from '../../images/telega.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={Logo} alt='Logo' />
      <ul className="navbar-menu">
        <li><a href="#home" style={{color:"#35B8BE"}}>Home</a></li>
        <li><a href="#about_us">Company</a></li>
        <li><a href="#how_works">Order</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#contact">Contact</a></li>
        <li id='li'>
          <a href='#'><img src={Telega} alt='telejka' id='telejka'/></a>
        </li>
        <p id='count'>0</p>
      </ul>
    </nav>
  );
}
