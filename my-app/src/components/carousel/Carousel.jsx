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
            <h1>OCEAN VILLA.</h1>
            </div>
            <div className="description_para">
            <p>
            Hub embraces holistic development and support for employees the aim of being a first-choice employer our sectors.
            </p>
            </div>
            </div>
       
          
        </SwiperSlide>
        
        <SwiperSlide >
      
          <div className="main_imgsld2">

          
          <div className="description_hd">
            <h1>KITCHEN VII</h1>
            </div>
            <div className="description_para">
            <p>
            Hub embraces holistic development and support for employees the aim of being a first-choice employer our sectors.
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