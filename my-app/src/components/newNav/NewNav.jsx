import React from 'react'
import './newNav.css'
import {Link} from 'react-scroll';

const NewNav = () => {
  return (
    <>
    <header class="header">
    <div className="nav_main">
    <div className="navhead">
    <a href="" class="logo">
    <img src="images/Logo/color/left/name.svg"></img>
    </a>
    </div>
    <div className="nav_subhead">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
   
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
   
    <ul class="menu">
    <li >
    <Link  to='events' className='nav-links' spy={true} smooth={true} offset={40} duration={500} >EVENTS</Link>
    <Link to='crew' className='nav-links'  spy={true} smooth={true} offset={40} duration={500}>OUR TEAM</Link>
    <Link to='hello' className='nav-links'  spy={true} smooth={true} offset={40} duration={500}>CONTACT US</Link>
    <Link to='footer' className='nav-links'  spy={true} smooth={true} offset={40} duration={500}>CREDITS</Link>
    
    </li>
     
      <button className='btn'><i class="fas fa-light fa-magnifying-glass"></i></button>
    </ul>
    </div>
    </div>
  </header> 
  </>
  
  )
}

export default NewNav