"use client";
import ScheduleIcon from '@mui/icons-material/Schedule';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useEffect} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwiperCore from 'swiper/core';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
// Import Swiper styles
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useScroll,motion,useTransform } from "framer-motion";
import './events.css'
import AOS from 'aos';
import RunningWithErrors from '@mui/icons-material/RunningWithErrors';
const Brands = () => {
  useEffect(()=>{
    AOS.init(
        {
            duration:1100,
        }
    );
},[])


   
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");

    
   
  return (
    <div className="fd_section">
    <div className="heading_main1">
       <h1>
        Events</h1>
       
 
        </div>
       
        <div className="main_pagination" >
   
    <Swiper style={{ width: '100%'}}
    className="custom_swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={isMobile ? 15 : 30}
      slidesPerView={isMobile ? 1.25 : 2.15}
        speed={1500}
        navigation={!isMobile}
      >


                         
 
             <SwiperSlide ><div className="imageparent1"><motion.div  className="sliderimages" >
             <div className="box">
    <div className="imgBx">
      <img src="https://media.istockphoto.com/id/974238866/photo/audience-listens-to-the-lecturer-at-the-conference.jpg?s=612x612&w=0&k=20&c=p_BQCJWRQQtZYnQlOtZMzTjeB_csic8OofTCAKLwT0M=" loading="lazy"/>
    </div>
    <div className="content">
      <h2>Dev Fest</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing </p>
        <p><span><ScheduleIcon className="icn1"/></span>Schedule - 30th Dec 10.00am</p>
        <p className="last_p"><span><PriorityHighIcon className="icn2"/></span>Register By - 22nd Dec</p>
      <a href="#">Know More→</a>
    </div>
  </div>

        </motion.div></div></SwiperSlide>
        
        
        <SwiperSlide><div className="imageparent1"><motion.div  >

        <div className="box">
    <div className="imgBx">
      <img src="https://images.inc.com/uploaded_files/image/1920x1080/getty_493958679_970647970450057_65459.jpg" loading="lazy"/>
    </div>
    <div className="content">
      <h2>Coda-thon</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing </p>
        <p><span><ScheduleIcon className="icn1"/></span>Schedule - 30th Dec 10.00am</p>
        <p className="last_p"><span><PriorityHighIcon className="icn2"/></span>Register By - 22nd Dec</p>
      <a href="#">Know More→</a>
    </div>
  </div>
        </motion.div></div></SwiperSlide>

        <SwiperSlide ><div className="imageparent1"><motion.div  className="sliderimages" >

        <div className="box">
    <div className="imgBx">
      <img src="https://cdn.autonomous.ai/static/upload/images/common/upload/20211222/5-Types-of-Office-Meeting-Room-Design-for-Different-Events_32b9b97a311.jpg" loading="lazy"/>
    </div>
    <div className="content">
      <h2>Techa-thon</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing </p>
        <p><span><ScheduleIcon className="icn1"/></span>Schedule - 30th Dec 10.00am</p>
        <p className="last_p"><span><PriorityHighIcon className="icn2"/></span>Register By - 22nd Dec</p>
      <a href="#">Know More→</a>
    </div>
  </div>

        </motion.div></div></SwiperSlide>

      </Swiper>

    </div>



      </div>
  )
}

export default Brands