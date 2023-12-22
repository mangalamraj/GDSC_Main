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
         <img src="images/gdsclead.jpg" alt=""/>
         </div>
         <div className="card_name">
            <h3>Khushal Kumawat <small>/ GDSC - Lead</small></h3>
         </div>
         <div className="card_para">
          <p>Lorem ipsum dolor sit amet, consectetur adi elit. Iusto, optio, dolorum provident </p>
         </div>
        </div>
        <div className="main_card">
         <div className="personal_image">
         <img src="images/gdsc_colead.jpeg" alt=""/>
         </div>
         <div className="card_name">
            <h3>Gaurav Bajpai <small>/ GDSC - Colead</small></h3>
         </div>
         <div className="card_para">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
         </div>
        </div>
        <div className="main_card2">
        <div className="card_para2">
          <p>" Engage with our diverse domain-specific teams, each equipped with specialized capabilities and expertise, serving as invaluable sources of guidance to provide advanced technical insights.Collaborate with these domain experts, unlocking a wealth of technical acumen to enrich your project's depth and precision. "</p>
       
         </div>
         <div className="t_det"><button className="team_btn"><Link className="link_team" to='team'>VIEW ALL DOMAIN TEAMS →</Link> </button> </div>
         
         <div className="card_name">
           
         </div>
     
        </div>


    </div>
</div>
  )
}

export default Team