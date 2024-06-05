import React from "react";
import VideoPlayer from "./VideoPlayer";

const PressRelease = () => {
  return (
    <section className="py-0 bg-[#f8f8f8]">
      <div className="flex pt-10 pb-5 mt-16 px-20 justify-center flex-row max-[660px]:px-5 max-[660px]:py-5 border-b-2">
        <h2 className="text-[48px] font-raleway text-[#222] font-semibold  max-[660px]:text-[30px] tracking-wide ">
          Press Release
        </h2>
      </div>
      <div className="flex flex-col  px-5">
        {/* 1st part */}
        <div className="flex w-full lg:flex-row flex-col">
          <div className="lg:w-[50%] px-5 md:py-10 flex justify-center">
            <VideoPlayer />
          </div>
          <div className="lg:w-[50%] flex flex-col flex-wrap px-10">
            <h2 className="text-black font-raleway text-[40px] font-bold  pt-8 max-[768px]:text-[20px]">
              “Media Champions” with Shubham Saraswat from SN Digitech Pvt. Ltd.
            </h2>

            <span className="text-[18px] tracking-normal  mt-5 max-[768px]:text-[20px]">
              On “Media Champions,” our host speaks with experts within the
              marketing community. This week our host speaks with Shubham
              Saraswat from SN Digitech Pvt. Ltd.
            </span>
            <div className="flex flex-row justify-start  py-5 items-center my-5 relative">
              <button
                className="px-5 py-1.5 border-2 z-10 border-[#222] uppercase tracking-wider font-raleway text-sm font-bold text-[#222] relative overflow-hidden 
    hover:animate-color-change hover:drop-shadow-2xl"
              >
                <span className="uppercase">Watch the interview</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2nd part */}
        <div className="flex w-full lg:flex-row flex-col items-center">
          <div className="lg:w-[50%] flex flex-col flex-wrap px-10 items-center h-full">
            <h2 className="text-black font-raleway text-[40px] font-bold  pt-8 max-[768px]:text-[20px]">
              Meet Shubham Saraswat Founder & CEO of SN Digitech Pvt. Ltd.
              (India & USA) – Think Digital, Live Digital
            </h2>

            <span className="text-[18px] tracking-normal  mt-5 max-[768px]:text-[20px]">
              Today we have selected Mr. Shubham Saraswat to take his Interview.
              He is the CEO of SN Digitech Pvt. Ltd.
            </span>
            <div className="flex flex-row justify-start w-full py-5 items-center my-5 relative">
              <button
                className="px-5 py-1.5 border-2 z-10 border-[#222] uppercase tracking-wider font-raleway text-sm font-bold text-[#222] relative overflow-hidden 
    hover:animate-color-change hover:drop-shadow-2xl"
              >
                <span className="uppercase">Read Full interview</span>
              </button>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <img
              src="/Shubham-Saraswat.jpg"
              alt="shubham-ceo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressRelease;
