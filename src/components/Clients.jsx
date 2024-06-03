import React, { useEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../globals.css";

const clientsDetails = [
  {
    id: 1,
    img: "/clients/client1.jpeg",
    name: "Keshav Kumar Khatri",
    designation: "CEO “Harry Group”",
    quote:
      "I want to thank SN Digitech content team for writing content to our website and blogs and we are getting a good response to our website. The content provided by SN Digitech team are excellent.",
  },
  {
    id: 2,
    img: "/clients/client2.png",
    name: "Raj Grover",
    designation: "CEO “High Tide Inc.”",
    quote:
      "SN Digitech was a great strategic partner and provided valuable insights to support our turnaround. Their understanding of our business and the marketplace resulted in recommendations to help fuel our success.",
  },
  {
    id: 3,
    img: "/clients/client3.png",
    name: "Sahil Pasrija",
    designation: "MD “Rajindra Industries”",
    quote:
      "We approached SN Digitech to design our e-commerce website and we are happy with the job done by SN Digitech team. As a young team ourselves, we loved them! Their ideas are fun, practical and worth adopting. Look them up people if you want to launch your website!",
  },
];

const isLargeScreen = () => {
  return window.innerWidth >= 1024;
};

const Clients = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [isLarge, setIsLarge] = useState(isLargeScreen());

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(isLargeScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <section className="bg-white  ">
      <div className="flex pt-10 pb-5 mt-16 px-20 justify-center flex-row max-[660px]:px-5 max-[660px]:py-5 border-b-2">
        <h2 className="text-[48px] font-raleway text-[#222] font-semibold  max-[660px]:text-[30px] tracking-wide ">
          Clients
        </h2>
      </div>
      <div className="flex py-4 lg:flex-row flex-col-reverse ">
        <div
          className="lg:w-[50%]  grid grid-cols-2 max-[600px]:grid-cols-1 "
          style={{ alignItems: "stretch" }}
        >
          <div className="bg-[#f0f0f0] w-full   flex h-full justify-center items-center max-[1024px]:py-7">
            <div className="duration-300 flex items-center justify-center min-[600px]:h-full  min-[600px]:w-full  max-[600px]:py-4transition-all hover:scale-90 hover:shadow-xl  cursor-pointer">
              <img src="/clients/hars.png" alt="" className="object-contain" />
            </div>
          </div>
          <div className="bg-[#f8f8f8] w-full   flex h-full justify-center items-center max-[1024px]:py-7">
            <div className="duration-300 flex items-center justify-center min-[600px]:h-full min-[600px]:w-full max-[600px]:py-4 transition-all hover:scale-90 hover:shadow-xl  cursor-pointer">
              <img
                src="/clients/grasscity.png"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-[#f8f8f8] w-full   flex h-full justify-center items-center max-[1024px]:py-7">
            <div className="duration-300 flex items-center justify-center min-[600px]:h-full min-[600px]:w-full max-[600px]:py-4 transition-all hover:scale-90 hover:shadow-xl  cursor-pointer">
              <img
                src="/clients/hightide.png"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <div className="bg-[#f0f0f0] w-full   flex h-full justify-center items-center max-[1024px]:py-7">
            <div className="duration-300 flex items-center justify-center min-[600px]:h-full min-[600px]:w-full max-[600px]:py-4 transition-all hover:scale-90 hover:shadow-xl  cursor-pointer">
              <img src="/clients/hpl.png" alt="" className="object-contain" />
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]  flex   h-[490px]   relative">
          <div className="w-full h-full">
            <img
              src="/parallax-5.jpg"
              alt=""
              className="object-cover w-full  h-[490px]"
            />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            parallax={true}
            navigation={isLarge}
            style={{
              "--swiper-pagination-color": "#e1e507",
              "--swiper-navigation-color": "#e1e507",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
            }}
            modules={[Pagination, Autoplay, Navigation]}
            onPlay={onAutoplayTimeLeft}
            className="mySwiper absolute top-0 w-full h-full flex "
          >
            {clientsDetails.map((client) => {
              return (
                <SwiperSlide
                  className="flex flex-col md:px-28 py-10 lg:gap-5   h-full w-full"
                  key={client.id}
                >
                  <div className="flex w-full items-center justify-center">
                    <span className="w-32 h-32 rounded-full  flex items-center justify-center">
                      <img
                        src={client.img}
                        className="rounded-full h-full w-full object-cover border-8 border-[#939393]"
                      />
                    </span>
                  </div>
                  <div className="flex text-center sm:mt-5 mt-3">
                    <span className="font-raleway leading-normal px-10 text-[#fff] text-sm max-[768px]:px-10">
                      {client.quote}
                    </span>
                  </div>
                  <div className="flex w-full mt-2 justify-center items-center flex-wrap px-5 text-center">
                    <span className="font-raleway text-lg font-semibold tracking-wide text-white gap-2">-{client.name} | <span className="text-[#e1e507] font-raleway">{client.designation}</span></span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
