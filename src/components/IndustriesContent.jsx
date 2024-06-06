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

const industriesData = [
    {
        id: 1,
        img: '/industries/industry-01.jpg',
        name: 'Game App'
    },
    {
        id: 2,
        img: '/industries/industry-02.jpg',
        name: 'Cyber Security'
    },
    {
        id: 3,
        img: '/industries/industry-03.jpg',
        name: 'Block Chain'
    },
    {
        id: 4,
        img: '/industries/industry-04.jpg',
        name: 'Fintech'
    },
    {
        id: 5,
        img: '/industries/industry-05.jpg',
        name: 'IoT'
    },
    {
        id: 6,
        img: '/industries/industry-06.jpg',
        name: 'Entertainment'
    },
    {
        id: 7,
        img: '/industries/industry-07.jpg',
        name: 'Saas'
    },
    {
        id: 8,
        img: '/industries/industry-08.jpg',
        name: 'Travel'
    },
    {
        id: 9,
        img: '/industries/industry-09.jpg',
        name: 'Events'
    },
    {
        id: 10,
        img: '/industries/industry-10.jpg',
        name: 'Restaurant'
    },
    {
        id: 11,
        img: '/industries/industry-11.jpg',
        name: 'News'
    },
    {
        id: 12,
        img: '/industries/industry-12.jpg',
        name: 'Real Estate'
    },
    {
        id: 13,
        img: '/industries/industry-13.jpg',
        name: 'Ecommerce'
    },
    {
        id: 14,
        img: '/industries/industry-14.jpg',
        name: 'Aviation'
    },
    {
        id: 15,
        img: '/industries/industry-15.jpg',
        name: 'Education'
    }
];

const IndustriesContent = () => {
  return (
    <div>
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
            <span className="text-white font-raleway md:text-[50px] text-[28px] font-semibold">
              Industries We Serve
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
                    <BreadcrumbLink href="/industries" className="text-white">
                    Industries We Serve
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
            Industries We Serve
          </h1>
          <span className="text-[#1f1f1f] flex items-center flex-wrap py-5 tracking-wider max-[820px]:leading-relaxed max-[820px]:justify-center font-raleway font-bold">
            Deserving
            <p className="text-snyellow px-3 font-raleway font-bold">value</p>{" "}
            of Industries
          </span>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-16 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ">
            {industriesData.map(industry => (
                <div key={industry.id} className="h-[390px] relative cursor-pointer group">
                    <div className="w-full h-full">
                    <img src={industry.img} alt={industry.name} className="h-full object-cover mix-blend-darken" />
                    <div className="absolute inset-0 bg-black opacity-45 group-hover:opacity-70 transition-opacity ease-in-out duration-300"></div>

                    </div>
                    <div className="absolute top-[50%] transition-all  duration-300 ease group-hover:-translate-y-32 left-[10%] md:left-[20%]">
                    <p className="text-white text-[36px] md:text-[27px] font-bold tracking-wide">{industry.name}</p>
                    </div>
                </div>
            ))}
        </section>
    </div>
  );
};

export default IndustriesContent;
