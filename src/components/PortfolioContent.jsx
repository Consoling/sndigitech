import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const ptflData = [
    {
        id: 1,
        img: '/portfolio/1.png',
        link: '/e-bhuktan'
    },
    {
        id: 2,
        img: '/portfolio/2.png',
        link: '/app-presta'
    },
    {
        id: 3,
        img: '/portfolio/3.png',
        link: '/penguin-express'
    },
    {
        id: 4,
        img: '/portfolio/4.png',
        link: '/cme-move'
    },
    {
        id: 5,
        img: '/portfolio/5.png',
        link: '/bigwin'
    },
    {
        id: 6,
        img: '/portfolio/6.png',
        link: '/cbrs'
    },
    {
        id: 7,
        img: '/portfolio/7.png',
        link: '/biryani-buffet'
    },
    {
        id: 8,
        img: '/portfolio/8.png',
        link: '/one-of-kind'
    },
    {
        id: 9,
        img: '/portfolio/9.png',
        link: '/ndl-details'
    },
    {
        id: 10,
        img: '/portfolio/10.png',
        link: '/j3a-accountant'
    },
    {
        id: 11,
        img: '/portfolio/11.png',
        link: '/laurent-vista'
    },
    {
        id: 12,
        img: '/portfolio/12.png',
        link: '/keepSafe-911'
    },
    {
        id: 13,
        img: '/portfolio/13.png',
        link: '/all-free-chips'
    },
    {
        id: 14,
        img: '/portfolio/14.png',
        link: '/kashi-creation'
    },
    {
        id: 15,
        img: '/portfolio/15.png',
        link: '/christopher-twele'
    },
    {
        id: 16,
        img: '/portfolio/16.png',
        link: '/investor-link'
    },
    {
        id: 17,
        img: '/portfolio/17.png',
        link: '/msp-realty'
    },
    {
        id: 18,
        img: '/portfolio/18.png',
        link: '/agroenergia'
    }
];


const PortfolioContent = () => {
  return (
    <div>
      {/* Banner Part */}
      <div className="flex w-full relative bg-white">
        <div className="bg-black flex w-full lg:h-[320px] md:h-[280px] h-[170px] ">
          <img
            src="/about/bg-about.png"
            alt="bg-about"
            className="w-full object-cover h-full bg-blend-darken"
          />
        </div>
        <div className="flex absolute top-0 h-full w-full justify-center items-center">
          <div className="w-full flex-col flex items-center">
            <span className="text-white font-raleway text-[50px] font-semibold">
              Portfolio
            </span>
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-[#e1e507]" href="/">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ArrowBigRight className="text-white" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/portfolio" className="text-white">
                      Portfolio
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          </div>
        </div>
      </div>

      {/* Heading Part */}
      <section className="w-full pt-16 pb-14">
        <div className="md:text-5xl text-3xl font-semibold flex-col flex md:px-20 px-10 justify-center items-center max-[660px]:text-center ">
          <h1 className=" text-snyellow tracking-wider max-[660px]:py-4 max-[660px]:text-center font-raleway font-bold">
            Our Portfolio
          </h1>
          <span className="text-[#1f1f1f] flex items-center flex-wrap py-5 tracking-wider max-[820px]:leading-relaxed max-[820px]:justify-center font-raleway font-bold">
            See 100% <p className="text-snyellow px-3 font-raleway font-bold">of our</p> Portfolio
          </span>
        </div>
      </section>

      <section className="w-full ">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  ">
          {ptflData.map((item) => (
            <div key={item.id} className="h-[340px] md:px-0 px-2">
                <Link to={`/portfolio${item.link}`}>
                <img src={item.img} alt={`Portfolio ${item.id}`} className={`flex lg:flex-row flex-col w-full h-full object-top max-[767px]:object-top hover:scale-90 transition-all duration-300 ${item.id % 2 === 0 ? 'order-1' : '-order-1'}`} />

                </Link> 
                
                
            </div>
          ))}
        </div>
      </section>

      {/* Content Part */}
    </div>
  );
};

export default PortfolioContent;
