
import React from 'react'
import './carditems.css'


const CardItems = (props) => {



  return (
    <div className="card" >
    <div className="card_body">

        
        <div className="cardimage">
        <img src={props.img} class="post_img" alt="" />
        </div>
        <div className="card_info">
         
       
        <div className="card_time">
       <span>{props.time} ago</span>
        </div>
        <div className="card_title">
        {props.title}
   
        </div>
        <div className="card_desc">
        {props.desc}

        </div>
        <div className="more_in">
            Read more →
        </div>
        </div>        
    </div>
    </div>
  )
}

export default CardItems