import {
  Box,
  LayoutPanelTop,
  MonitorCheck,
  MonitorDot,
  Smartphone,
  Link,
} from "lucide-react";
import { GrAnnounce } from "react-icons/gr";
import React from "react";
import "../globals.css";

const serviceList = [
  {
    id: 1,
    icon: <Smartphone size={40} className="text-snyellow" />,
    name: "Mobile App Development",
    description:
      "Being a mobile app development company, we understand the complexities of the industry and mobile application development. Let SN Digitech become your partner in creating a beautiful mobile experience.",
  },
  {
    id: 2,
    icon: <MonitorDot size={40} className="text-snyellow" />,
    name: "Website Design and Development",
    description:
      "Allow SN Digitech to create a memorable first impression for your online audience. Our team delivers cutting-edge websites that are beautiful to look at and perform equally well.",
  },
  {
    id: 3,
    icon: <MonitorCheck size={40} className="text-snyellow" />,
    name: "Saas Development",
    description:
      "Being a mobile app development company, we understand the complexities of the industry and mobile application development. Let SN Digitech become your partner in creating a beautiful mobile experience.",
  },
  {
    id: 4,
    icon: <Box size={40} className="text-snyellow" />,
    name: "AR/VR Development",
    description:
      "Augmented Reality (AR) and Virtual Reality (VR) Development involves creating immersive digital experiences that blend the virtual world with the real one.",
  },
  {
    id: 5,
    icon: <Link size={40} className="text-snyellow" />,
    name: "Blockchain Development",
    description:
      "At SN Digitech, We develop comprehend enterprise needs and build web solutions conforming to the end-customers experience in Blockchain Development.",
  },
  {
    id: 6,
    icon: <GrAnnounce size={40} className="text-snyellow" />,
    name: "Digital Marketing",
    description:
      "Digital marketing is an obvious activity to attract your desired/targeted audience to promote your brand, product or services.",
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-white lg:pt-[0px] ">
        <div className="flex py-10 px-20 justify-center flex-row max-[660px]:px-5 max-[660px]:py-5 border-b-2">
          <h2 className="text-[48px] font-raleway text-[#222] font-semibold  max-[660px]:text-[30px] ">
            Services We Provide
          </h2>
        </div>
        <div className="flex flex-wrap  px-24 max-[1024px]:px-10 max-[580px]:px-2 my-5 gap-3 justify-center">
          {serviceList.map((item) => {
            return (
              <div
                className="flex flex-col w-[480px] max-[1174px]:w-[390px] h-[480px] border lg:shadow-none shadow-md"
                key={item.id}
              >
                <div className="flex flex-row pt-10 justify-center">
                  {item.icon}
                </div>
                <div className="flex justify-center flex-row font-bold font-raleway  pt-5 text-[#222]">
                  <span className="font-raleway text-[20px] leading-loose tracking-wide ">
                    {item.name}
                  </span>
                </div>
                <div className="flex w-full justify-center mt-4">
                  <div className="w-10 h-1.5 rounded-md bg-[#e1e507]"></div>
                </div>
                <div className="flex flex-row justify-center pt-3 px-10 h-[180px] max-[1174px]:h-[200px]">
                  <span className="font-raleway leading-loose max-[580px]:leading-relaxed max-[580px]:text-sm">
                    {item.description}
                  </span>
                </div>
                <div className="flex flex-row justify-center items-center my-5 relative">
                  <button
                    className="px-5 py-1.5 border-2 z-10 border-[#222] uppercase tracking-wider font-raleway text-sm font-bold text-[#222] relative overflow-hidden 
    hover:animate-color-change hover:drop-shadow-2xl"
                  >
                    <span className="">Know More</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#f8f8f8] flex lg:flex-row flex-col-reverse">
        <div className="lg:w-[50%] flex justify-center">
          <img src="/home1.jpg" alt="" className="object-cover" />
        </div>
        <div className="lg:w-[50%] flex justify-start px-20 max-[580px]:px-10 py-16 flex-col">
          <h1 className="font-raleway text-[50px] max-[580px]:text-[30px] tracking-wider font-bold text-[#222]">
            SN Digitech Pvt. Ltd.
          </h1>
          <span className="py-10 text-base leading-relaxed font-raleway tracking-widest font-medium">
            SN Digitech Pvt. Ltd. is a leading digital marketing, web design &
            development company, serving our clients globally.
          </span>
          <span className="py-2 text-base leading-relaxed font-raleway tracking-widest font-medium">
            As a full-service agency, our staff offers a wide variety of
            services including Digital Marketing (Search Engine Optimization,
            Social Media Marketing, PPC Marketing, E-mail Marketing, and
            Video/App/Content Marketing), Digital Strategy & Planning,
            Performance Marketing, Creative UI/UX Designing, E-Commerce
            Services, Website Design & Development, Web Application Development,
            Software Development, and Mobile App Development.
          </span>
          <div className="flex flex-row justify-start items-center my-5 relative">
            <button
              className="px-8 py-2.5 mt-3 border-[3px] z-10 border-[#222] uppercase tracking-wider font-raleway text-sm font-bold text-[#222] relative overflow-hidden 
    hover:animate-color-change hover:drop-shadow-2xl"
            >
              <span className="uppercase">More about sn digitech</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
