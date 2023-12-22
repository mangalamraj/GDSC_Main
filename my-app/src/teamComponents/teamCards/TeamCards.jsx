import React from 'react'
import Steps from '../steps/Steps';
import './teamcards.css';

const TeamCards = () => {
  return (
    <div className="main_t">
            <div className="heading_team1">
            WEB DEVELOPMENT
        </div>
        <div  className="hr1_team"></div>
       <div className="team_section1">

        <div className="team_main_section1">
            <div className="main_card">
             <div className="personal_image">
             <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/3-Hover.jpg" alt=""/>
             </div>
             <div className="card_name">
                <h3> Mangalam Raj  <small>/ Lead</small></h3>
             </div>
             <div className="card_para">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
             </div>
            </div>
            <div className="main_card">
             <div className="personal_image">
             <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Rectangle.jpg" alt=""/>
             </div>
             <div className="card_name">
                <h3> Kashyap Rishi<small>/ Co-Lead</small></h3>
             </div>
             <div className="card_para">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
             </div>
            </div>

 
 
        </div>
    </div>
    <div className="head_time"> How to Start ? Craft Your Odyssey </div>
    <Steps/>
    <div className="delivers"> Our Deliverables </div>
    <div className="opts">
    <p className="inc">INCLUDES : </p>
    <p className="sub_incs"><span className="dt">•</span>RESOURCE SHARING</p>
    <p className="sub_incs"><span className="dt">•</span>CONSTANT SUPPORT</p>
    <p className="sub_incs"><span className="dt">•</span>REASONS TO BELIEVE</p>
    <p className="sub_incs"><span className="dt">•</span>MISSION STATEMENT</p>
    <p className="sub_incs"><span className="dt">•</span>MENTORSHIP</p>
    <p className="sub_incs"><span className="dt">•</span>HACKATHONS</p>
    <p className="sub_incs"><span className="dt">•</span>LATEST TECH STACKS</p>
    </div>


    <div className="end_sec">
        <div className="sec1"></div>
        <div className="sec2"><div><p>Have any queries in your mind?</p><p>Reach out to us on</p></div>
        <div className="p_icon">
        <div className= "icons">
    <a href="/contact"><i class="fab fa-facebook-f"></i></a>
    </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-twitter"></i></a>
  </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-linkedin-in"></i></a>
  </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-google-plus-g"></i></a>
  </div>
        </div></div>
        <div className="sec3"></div>
    </div>
 
    </div>
  )
}

export default TeamCards