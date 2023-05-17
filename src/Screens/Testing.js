import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


import { Box } from "@mui/material";
import LandscapeImages from "../Components/ImageGroup/Images/LandscapeImages";

// import required modules
import { Autoplay, Navigation } from "swiper";


function Testing() {
  return (
    <Box sx={{width: '100%'}}>
        <ImageCarousel />
    </Box>
    
);

}
function ImageCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.75}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        loop={true}
        className="mySwiper"
        // effect="fade"
      >
        {
            LandscapeImages.map( (image) => <SwiperSlide><Im key={image} src={image} /></SwiperSlide>)
        }
      </Swiper>
    </>
  );
}



function Im(props) {
    return (
        <Box
            component="img"
            alt="IMP image"
            src={props.src}
            //maxWidth={{xs: 'none', md: '700px'}}
            width='100%'
            // borderRadius={10}
        >
        </Box>
    )
}

export default Testing;