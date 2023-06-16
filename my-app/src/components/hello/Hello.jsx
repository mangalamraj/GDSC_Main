import React from 'react'
import styles from  "./hello.module.css"


import { useState } from 'react';
const Hello = () => {
  const[open, setOpen]=useState(false);

  const openDialog=()=>{
    setOpen(true);
  }

  return (
    <div className={styles.contact_sec} >
<div className="background_video" >
        <div className="video_overlay"></div>
        <video
          src="video/video3.mp4"
          autoPlay
          muted
          loop
          style={{display:'flex',alignContent:"center",justifyContent:"center",position:'absolute', width: '100%', height: '100%' ,opacity:"0.7"}}
        />
      </div>
      <div className={styles.parent_mr}>
      <div className={styles.hed_sec}>
        <div className={styles.hed1}>
<span> Wanna Say Hello?</span>
        </div>
        <div className={styles.hed2}>
            <span>Do not hesitate to Contact.</span>
            </div>
            </div>
            <div className={styles.cont}>
           
            
   
    
        <button onClick={() => openDialog()} className={styles.cont_btn}></button>

   
            </div>
      </div>

    </div>
  )
}

export default Hello