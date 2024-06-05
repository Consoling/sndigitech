import React from "react";

const Awards = () => {
  return (
    <div className="mx-5 flex flex-row max-[1024px]:flex-col max-[1024px]:items-center justify-around my-10 lg:py-5 py-14   bg-[#f8f8f8]">
      <div className="flex lg:w-[36%] max-[1024px]:h-[50%] lg:pl-20 max-[1024px]:justify-center ">
        <img
          src="/designrush.png"
          alt=""
          className="w-full object-contain h-full"
        />
      </div>

      <div className="flex flex-row lg:w-[64%] max-[1024px]:h-[50%] max-[1024px]:w-full flex-wrap lg:pr-20 max-[768px]:mt-8  lg:py-14 py-5 max-[1024px]:gap-10 gap-5">
        <h1 className="text-[40px] font-raleway text-[#151515] font-bold lg:leading-normal px-20 pb-0 pt-10 tracking-wide max-[550px]:leading-snug max-[550px]:font-semibold max-[550px]:text-[32px] max-[550px]:px-5 ">
          SN Digitech Pvt. Ltd. Ranked as Top 30 Digital Marketing Agency in New
          York in 2021
        </h1>
        <p className="font-raleway text-[18px] px-20 pb-5 tracking-wide leading-normal max-[550px]:px-5">
          SN Digitech has been recognized as one of the top 30 Digital Marketing
          Agencies in New York in 2021 by DesignRush.
        </p>
        <div className="flex justify-start items-center  px-20  relative">
          <button
            className="py-2.5 px-5 border-[1px]  hover:border-none  w-[144px] h-[50px]  font-semibold before:absolute before:left-0  border-black uppercase text-black font-raleway
          bg-transparent transition-colors before:top-0 before:-z-10 before:h-full before:w-[144px] before:origin-top-left before:scale-x-0 before:bg-[#e1e507] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100
          "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
