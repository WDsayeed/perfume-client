// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner1 from '../../assets/banner1.webp'
import banner2 from '../../assets/banner2.webp'

import './Banner.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useState } from 'react';

const Banner = () => {
  const [zoomedSlideIndex, setZoomedSlideIndex] = useState(null);

  const handleSlideChange = (swiper) => {
    setZoomedSlideIndex(swiper.activeIndex);
  };

        return (
                <div className='pt-16'>
                <Swiper
                  spaceBetween={30}
                  effect={'fade'}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[EffectFade, Navigation, Pagination]}
              className="mySwiper"
              onSlideChange={handleSlideChange}
                >
                  <SwiperSlide>
                    <img  src={banner1} />
                    <div>dfdsf</div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img  src={banner2} />
                  </SwiperSlide>
                </Swiper>
              </div>
        );
};

export default Banner;