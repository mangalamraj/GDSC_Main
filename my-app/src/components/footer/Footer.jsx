import React from 'react'
import './footer.css'
{/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
*/}

const Footer = () => {
  return (
    
        <div className="foot" id='footer' style={{marginTop:"100px"}}>
        <div align="right" className="logo">
    <img src="images/Logo/color/left/name.svg"></img>
 </div>
 <div className="head_section">
Let's Build Something Great Together
 </div>
 <div className="mid_section">
 <div className="sub_head">
    
    </div>
    <div className="details">
    <div className="sub_details">
    <div className="details1">
    <p>IIIT Nagpur</p>
    <p> Nagpur, Maharashtra</p>
    </div>
    <div className="details2">
    <p>+91 9430501530</p>
    <p>mango.26june@gmail.com</p>
    </div>
    </div>
    <div className="details3">
    "Empowering students through technology and fostering a collaborative community at GDSC IIIT Nagpur."<br/>
"Exploring innovation, learning, and growth together at GDSC IIIT Nagpur."
    </div>
    </div>
 </div>

 <div className="end_section">
 <div className="contact_box" >

<div className="contact_menu">
{/*  * <div className= "icons">
    <a href="/contact"><FontAwesomeIcon icon={faFacebookF}/></a>
    </div>
  <div className= "icons">
    <a href="/contact"><FontAwesomeIcon icon={faTwitter}/></a>
  </div>
  <div className= "icons">
    <a href="/contact"><FontAwesomeIcon icon={faLinkedinIn}/></a>
  </div>
  <div className= "icons">
    <a href="/contact"><FontAwesomeIcon icon={faGooglePlusG}/></a>
  </div>*/}
  
</div>
</div>

<div align="right" className= "foot_section">
          <div className='foot_item'>

              Company
        
          </div>
          <div
            className='foot_item'
          
          >

              Careers
           
           
          </div>
          <div className='foot_item'>

              Services

          </div>
          <div className='foot_item'>

              Projects
           
          </div>
</div>
</div>


        </div>
    
  )
}

export default Footer