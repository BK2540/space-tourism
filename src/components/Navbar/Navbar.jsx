import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'
import logo from '../../assets/logo.svg';
import tab from '../../assets/icon-hamburger.svg';
import close from '../../assets/icon-close.svg';

const Navbar = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [ menuOpened, setMenuOpened] = useState(false);

  return (
    <nav>
      <div className="navbar-logo">
          <img src={logo} alt='logo' />
      </div>

      
          
      <div className='navbar-line'/>

      <div className="navbar-menu">
        <img src={close} alt='close' className='close-menu'/>
              <Link 
                to="/" 
                className='link'
                >
                <span>00</span> Home
              </Link>

              <Link 
                to="/destination" 
                className='link'
                >
                <span>01</span> Destination
              </Link>

              <Link 
                to="/crew" 
                className='link'
                >
                <span>02</span> crew
              </Link>

              <Link 
                to="/technology" 
                className='link'
              >
                <span>03</span> technology
              </Link>

            </div>

          
    </nav>
  )
}

export default Navbar