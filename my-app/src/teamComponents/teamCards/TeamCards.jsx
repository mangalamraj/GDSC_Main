import React from 'react'
import './teamcards.css';

const TeamCards = () => {
  return (
    <div className="main_t">
            <div className="heading_team1">
            WEB DEVELOPMENT
        </div>
        <div  className="hr1_team"></div>
       <div className="team_section1">

        <div className="team_main_section">
            <div className="main_card">
             <div className="personal_image">
             <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/3-Hover.jpg" alt=""/>
             </div>
             <div className="card_name">
                <h3> Daniel Mark  <small>/ Architect</small></h3>
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
                <h3> Matthew Clark  <small>/ Architect</small></h3>
             </div>
             <div className="card_para">
              <p>Urban design draws together the many strands of place-making, environmental stewardship.</p>
             </div>
            </div>

 
 
        </div>
    </div>
    </div>
  )
}

export default TeamCards