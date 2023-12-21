import React from 'react'
import TeamCards from '../teamCards/TeamCards'
import './sidebar.css'

const Sidebar = () => {
  return (
<div className="parent_s">
    <div className="sidebar">
   <h1>Domains</h1>
   <a href="">WEB DEV</a>
   <a href="">CP/DSA</a>
   <a href="">AI/ML</a>
   <a href="">APP/DEV</a>
   <a href="">MANAGEMENT</a>
   <a href="">MARKETING</a>
   <a href="">DEVTALKS</a>
</div>
<div className="dom-details"><TeamCards/></div>
</div>

  )
}

export default Sidebar