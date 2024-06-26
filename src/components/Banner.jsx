import React, { useRef } from "react";
import '../globals.css'
//Slider Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="flex w-full h-[80vh] max-[500px]:h-[90vh]">
      <div className="w-full h-full relative">
      <video className="h-full w-full object-cover" autoPlay loop muted>
    <source src="/home1.mp4" type="video/mp4" />
 
  </video>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        parallax={true}
        style={{
          "--swiper-pagination-color": "#e1e507",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        modules={[Pagination, Autoplay]}
        onPlay={onAutoplayTimeLeft}
        className="mySwiper font-raleway absolute flex w-full h-[80vh] max-[500px]:h-[90vh] justify-center items-center flex-wrap"
      >
        <SwiperSlide className="h-[70vh] max-[500px]:h-[90vh]  flex justify-center w-full">
          <div className="w-full h-full flex justify-start xl:justify-center items-center mx-14 max-[1024px]:mx-10 max-[500px]:mx-4  ">
            <div className="flex flex-col flex-wrap w-[80%] xl:w-[60%] pr-0 leading-snug tracking-wide gap-10 max-[500px]:gap-5  max-[768px]:px-4 max-[1024px]:px-10 max-[1024px]:w-full">
              <h1 className="text-[40px] font-bold text-white font-raleway max-[500px]:font-semibold leading-normal max-[500px]:leading-snug">
                Introducing the Digital Transformers Empowering Global
                Disruptors.
              </h1>
              <span className="text-[17px]  font-medium text-white/80 font-raleway leading-normal">
                We accelerate business expansion by reinventing digital
                interactions that overcome intricate obstacles through
                innovative solutions and adaptability.
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[70vh] max-[500px]:h-[90vh]  flex justify-center w-full">
          <div className="w-full h-full flex justify-start xl:justify-center items-center mx-14  max-[500px]:mx-4 max-[1024px]:mx-10">
            <div className="flex flex-col flex-wrap w-[80%] xl:w-[60%]  leading-snug tracking-wide gap-10 max-[500px]:gap-5 max-[768px]:px-4 max-[1024px]:px-10 max-[1024px]:w-full  ">
              <h1 className="text-[40px] font-bold text-white font-raleway max-[500px]:font-semibold leading-normal max-[500px]:leading-snug">
                Driving Business Transformation with Innovative Software
                Solutions and Technologies.
              </h1>
              <span className="text-[17px]  font-medium text-white/80 font-raleway leading-normal">
                Elevate your business with our legacy application modernization
                services, enhancing design, functionality, architecture, and
                technology stack.
              </span>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Banner;
