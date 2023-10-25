import UnderLine from "../UnderLine/UnderLine";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

import behind1 from "../../assets/behind1.webp";
import behind2 from "../../assets/behinde2.webp";
import behind3 from "../../assets/behind3.jpg";
import behind4 from "../../assets/behinde4.webp";
import behind5 from "../../assets/behind5.webp";
import behind6 from "../../assets/behind6.webp";
import "./Brand.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Brands = () => {
  return (
    <section className="max-w-[1520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 md:mt-28 md:mb-20">
      <div className="text-center mb-5">
        <h1 className="font-semibold text-5xl mb-6">Behind The Brands</h1>
        <p>
          We are a female-founded, 100% woman-led team of collaborative dreamers
          who value innovation, curiosity and free-thinking fearlessness in
          everything that we do. We take immeasurable pride in our work,
          intentionally stitching love into the very fiber and fabric of our
          designs. We are small, but we are a mighty group of talented
          individuals dedicated to bringing you otherworldly designs with
          imagery to match.
        </p>
      </div>

      <div className="brand-subtitle"></div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay]} // Include the Autoplay module
          className="mySwiper"
          autoplay={{
            // Configure the autoplay settings
            delay: 3000, // Delay between slides in milliseconds (3 seconds in this example)
            disableOnInteraction: false, // Prevent autoplay from stopping when the user interacts with the slider
          }}
          loop={true} // Enable looping
        >
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind1} alt="" />
              </div>
              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Adrian stor</h1>
              <p className="font-medium text-slate-600">Designer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind2} alt="" />
              </div>

              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Saga neron</h1>
              <p className="font-medium text-slate-600">Ceo</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind3} alt="" />
              </div>
              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Ashton Agar</h1>
              <p className="font-medium text-slate-600">Developer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind4} alt="" />
              </div>
              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Asha Mago</h1>
              <p className="font-medium text-slate-600">Designer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind5} alt="" />
              </div>
              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Ferguson</h1>
              <p className="font-medium text-slate-600">Developer</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="overflow-hidden relative transition  transform md:w-3/4 mx-auto main-div">
              <div className="md:w-[350px] w-full h-[350px]">
                <img className="w-full h-full" src={behind6} alt="" />
              </div>
              <div className="brand text-center w-full text-white absolute inset-0">
                <div className="brand-overlay"></div>

                <div className="brand-icon flex justify-center items-center w-full h-full gap-5 ">
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaFacebookF></FaFacebookF>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaTwitter></FaTwitter>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaInstagram></FaInstagram>
                  </button>
                  <button className="w-10 h-10 bg-white text-slate-500 flex justify-center items-center hover:bg-[#53b4dd] hover:text-white">
                    <FaLinkedin></FaLinkedin>
                  </button>
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center items-center mt-3">
              <h1 className="font-semibold text-2xl">Williams</h1>
              <p className="font-medium text-slate-600">Designer</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
