import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


import { Box } from "@mui/material";
import LandscapeImages from "./Images/LandscapeImages";

// import required modules
import { Autoplay, Navigation } from "swiper";


function ImageGroup(props) {
  if (props.fullScreen) {
    return (
      <Box >
        <ImageCarousel fullScreen={true}/>
    </Box>
    );
  }

  return (
    <Box sx={{width: '90%', maxWidth: '600px'}}>
        <ImageCarousel />
    </Box>
  );


}
function ImageCarousel(props) {
  if (props.fullScreen) {
    return (
      <>
        <Swiper
          spaceBetween={30}
          slidesPerView={1.75}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
          loop={true}
          className="mySwiper"
          // effect="fade"
        >
          {
              LandscapeImages.map( (image) => <SwiperSlide><Im key={image} src={image} borderRadius={false} /></SwiperSlide>)
          }
        </Swiper>
      </>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        loop={true}
        className="mySwiper"
        effect="fade"
      >
        {
            LandscapeImages.map( (image) => <SwiperSlide><Im key={image} src={image} borderRadius={true} /></SwiperSlide>)
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
            borderRadius={props.borderRadius ? 10 : 0}
        >
        </Box>
    )
}

export default ImageGroup;