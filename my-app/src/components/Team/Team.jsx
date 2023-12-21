import React from 'react'
import { Link } from 'react-router-dom';
import './team.css'



const Team = () => {
  return (
    <div className="team_section">
    <div className="heading_team">
       <h1>OUR TEAM</h1> 
    </div>

    <div className="team_main_section">
        <div className="main_card">
         <div className="personal_image">
         <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/3-Hover.jpg" alt=""/>
         </div>
         <div className="card_name">
            <h3>Khushal Kumawat <small>/ GDSC - Lead</small></h3>
         </div>
         <div className="card_para">
          <p>Through a unique combination of engineering, construction and design disciplines.</p>
         </div>
        </div>
        <div className="main_card">
         <div className="personal_image">
         <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Rectangle.jpg" alt=""/>
         </div>
         <div className="card_name">
            <h3>Gaurav Bajpai <small>/ GDSC - Colead</small></h3>
         </div>
         <div className="card_para">
          <p>Urban design draws together the many strands of place-making, environmental stewardship.</p>
         </div>
        </div>
        <div className="main_card2">
        <div className="card_para2">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicingsed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing</p>
       
         </div>
         <div className="t_det"><button className="team_btn"><Link className="link_team" to='/team'>VIEW ALL TEAM MEMBERS  →</Link> </button> </div>
         
         <div className="card_name">
           
         </div>
     
        </div>


    </div>
</div>
  )
}

export default Team