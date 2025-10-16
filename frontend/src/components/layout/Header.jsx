import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // This will be handled by App.css
import {
  FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram,
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes
} from 'react-icons/fa';
import logo from '../../assets/images/NPS-Kudlu-logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="school-header">
        {/* Top Bar */}
        <div className="top-bar">
          <div className="container">
            <p className="moto"></p> {/* Text is handled by CSS animation */}
            <div className="social-icons">
              <a href="#!" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="#!" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="#!" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="#!" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="#!" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Middle Bar */}
        <div className="middle-bar">
          <div className="container">
            <Link to="/" className="logo-container">
              <img src={logo} alt="Kunskapsskolan School Logo" className="logo" />
            </Link>
            <div className="contact-details">
              <div className="contact-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <span>For Admission Related Queries</span>
                  <span>Call 9731226002/ WhatsApp 9731226002</span>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="icon" />
                <div>
                  <span>Email</span>
                  <span>info@npskudlu.com</span>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <span>148, Silver County Rd, Kudlu, Singasandra, Bengaluru</span>
                  <span>Karnataka – 560068 India</span>
                </div>
              </div>
            </div>
             {/* Hamburger Menu Toggle */}
             <button className="mobile-menu-toggle" onClick={handleMenuToggle}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Main Navigation (Desktop) */}
        <nav className="main-nav">
          <div className="container">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/introduction" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Introduction</NavLink></li>
                <li><NavLink to="/ked-program" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>KED Program</NavLink></li>
                <li><NavLink to="/our-schools" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Our Schools</NavLink></li>
                <li><NavLink to="/admission" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Admission</NavLink></li>
                <li><NavLink to="/careers" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Careers</NavLink></li>
                <li><NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>FAQ</NavLink></li>
                <li><NavLink to="/beyond-academics" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Beyond Academics</NavLink></li>
                <li><NavLink to="/learning-portal" className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>Learning Portal</NavLink></li>
            </ul>
            <Link to="/contact" className="get-in-touch-btn" onClick={closeMenu}>Get In Touch</Link>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Panel */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/introduction" onClick={closeMenu}>Introduction</NavLink>
        <NavLink to="/ked-program" onClick={closeMenu}>KED Program</NavLink>
        <NavLink to="/our-schools" onClick={closeMenu}>Our Schools</NavLink>
        <NavLink to="/admission" onClick={closeMenu}>Admission</NavLink>
        <NavLink to="/careers" onClick={closeMenu}>Careers</NavLink>
        <NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink>
        <NavLink to="/beyond-academics" onClick={closeMenu}>Beyond Academics</NavLink>
        <NavLink to="/learning-portal" onClick={closeMenu}>Learning Portal</NavLink>
        <Link to="/contact" className="get-in-touch-btn-mobile" onClick={closeMenu}>Get In Touch</Link>
      </div>
    </>
  );
};

export default Header;

