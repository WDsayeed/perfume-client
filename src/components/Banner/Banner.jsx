import { Swiper, SwiperSlide } from "swiper/react";

import banner1 from "../../assets/banner1.webp";
import banner2 from "../../assets/banner2.webp";
import banner3 from "../../assets/banner3.webp";
import banner4 from "../../assets/banner4.webp";
import banner5 from "../../assets/banner5.webp";
import banner6 from "../../assets/banner6.webp";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {


  return (
    <div className="pt-16">

      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
         className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div>
            <img src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={banner6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
