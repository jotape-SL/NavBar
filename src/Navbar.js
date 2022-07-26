import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { SideBar, Socials } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showlinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='coding addict' />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showlinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className={`links-container ${showlinks && 'show-container'}`}>
          <ul className='links'>
            <SideBar />
          </ul>
        </div>
        <ul className='social-icons'>
          <Socials />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
