import { portfolioSvcs } from "../../constants/constant";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import '../globals.css'
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioDetails = () => {
  const { link } = useParams();
  const [item, setItem] = useState({});
  const [background, setBackground] = useState("");
  const [slide, setSlide] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function getPageDetails() {
    const selectedItem = portfolioSvcs.find(
      (portfolioItem) => portfolioItem.id === link
    );
    if (selectedItem) {
      setItem(selectedItem);
      setBackground(selectedItem.bg);
      setSlide(selectedItem.slide);
      setName(selectedItem.name);
      setDescription(selectedItem.description);
    } else {
      console.log(error);
    }
  }
  async function setPageDetails() {
    await getPageDetails();
  }
  useEffect(() => {
    setPageDetails();
  }, [link, portfolioSvcs]);
  

 
  return (
    <div className="w-full">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className="">{name} | SN Digitech</title>
      </Helmet>
      <div className="w-full flex relative h-full">
        <div className="w-full lg:h-[550px] h-[1024px]">
          <img src={background} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute flex lg:flex-row flex-col max-[1023px]:py-20  w-full h-full">
          <div className="flex justify-center items-center lg:w-[50%] ">
            <div className="flex flex-col px-20">
              <h1 className={`font-semibold text-4xl ${item.id === 'kashi-creation' || item.id === 'christopher-twele'? 'text-[#1f1f1f] font-medium': 'text-[#fff]'}`} >{name}</h1>
              <span className={`text-sm  leading-relaxed pt-5 font-raleway ${item.id === 'kashi-creation' || item.id === 'christopher-twele' ? 'text-[#1f1f1f] font-medium': 'text-[#fff]'}`}>
                {description}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:w-[50%] justify-center items-center">
          <div className="flex flex-col items-center justify-center px-20 py-5 w-full h-full">
          <Swiper
              slidesPerView={1}

              loop={true}
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
              className="serviceSwiper flex justify-center w-full py-5"
            >
              {slide.map((item) => {
                return (
                  <SwiperSlide className="h-[85%] flex justify-center">
                    <img src={item.img} alt={item.id} className="object-contain h-full" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
