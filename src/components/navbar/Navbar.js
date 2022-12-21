import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo2.png';
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="#">
          <img src={logo} alt="logo" className="titleImg" />
          ANIMAL SHELTER
        </Link>
        <div className="t">
          <Link className="t1" to="home" smooth duration={500}>
            Home
          </Link>
          <Link className="t1" to="contact" smooth duration={500}>
            Contact Us
          </Link>
        </div>
        <div className="icons">
          <Link className="icons1" to="#">
            <AiFillLinkedin size={25} />
          </Link>
          <Link className="icons1" to="#">
            <AiOutlineTwitter size={25} />
          </Link>
          <Link className="icons1" to="#">
            <FaInstagramSquare size={25} />
          </Link>
        </div>
        <div className="toggle">
          <GoThreeBars size={25} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
