import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../images/logo.png';
import '../App.css';

function Header() {

    const navLinks = [
        { navLinkId: 'Home', scrollToId: 'home' },
        { navLinkId: 'Founder', scrollToId: 'founder' },
        { navLinkId: 'The Academy', scrollToId: 'founder' },
        { navLinkId: 'Classes', scrollToId: 'founder' },
        { navLinkId: 'Testimonials', scrollToId: 'founder' },
        { navLinkId: 'Contact', scrollToId: 'founder' },
    ]

  return (
      <Router>
        <header className='menu-container'>
            <div className='logo-container'>
            <img src={logo} alt="Anneliese Venter School of Ballet logo" />
            </div>
            <nav className='nav-container'>
                {navLinks.map(({navLinkId, scrollToId}) =>
                    <Link className='nav-link' to={scrollToId}>{navLinkId}</Link>
                )}
            </nav>
      </header>
      </Router>
      
  );
}

export default Header;
