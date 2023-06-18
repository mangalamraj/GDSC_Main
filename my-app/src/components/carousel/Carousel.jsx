import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { motion } from "framer-motion";


import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import { useMediaQuery } from "@material-ui/core";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";





const Carousel = () => {
  
  
  

 
  
 
  const isMobileViewport = window.innerWidth <= 1024;

  const isTablet = useMediaQuery("(max-width: 1024px)");


  const shouldDisplayPagination = isTablet;
  return (
    <div className="parent" 
    >
      <Swiper
       className="custom_swiper"
      
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={!isMobileViewport}
        draggable={true}
        mousewheel={true} 
        pagination={shouldDisplayPagination ? { clickable: true } : false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
      
          <div className="main_imgsld">

          
          <div className="description_hd">
            <h1>Tech Con</h1>
            </div>
            <div className="description_para">
            <p>
            Get ready to take your web development skills to the next level! Join us for an exciting workshop hosted by GDSC IIITN and gain hands-on experience
            </p>
            </div>
            </div>
       
          
        </SwiperSlide>
        
        <SwiperSlide >
      
          <div className="main_imgsld2">

          
          <div className="description_hd">
            <h1>HACK  DROID</h1>
            </div>
            <div className="description_para">
            <p>
            GDSC-IIIT Nagpur brings you Hack-Droid, an Android based hackathon where you get a chance to show off your knowledge by making a project on one of the two problem statements. The problem statements are very engaging and beginner friendl
            </p>
            </div>
            </div>
       
          
        </SwiperSlide>
        {shouldDisplayPagination && <div className="swiper-pagination"></div>}
      </Swiper>


  
    </div>
  );
};

export default Carousel;