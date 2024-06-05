import { ChevronDown, EllipsisVertical, Menu } from "lucide-react";
import React from "react";
import MobileRightBar from "./MobileRightBar";
import MobileLeftBar from "./MobileLeftBar";
import ServicesDropdown from "./ServicesDropdown";

const Navbar = () => {
  return (
    <div className="flex py-6 justify-center items-center max-[1200px]:py-2 ">
      <div className="flex flex-row min-[1200px]:mx-14 mx-3 w-full py-2 justify-between flex-wrap">
        
        <div className="flex cursor-pointer  duration-300 transition-all max-[1200px]:gap-10 max-[500px]:gap-5">
        <MobileLeftBar />
          <a href="/">
            <img
              src="/snDigitech_logo120x47.png"
              alt="logo"
              className="w-full object-contain"
            />
          </a>
        </div>

        <ul className="flex flex-row gap-4 text-[#222] font-semibold tracking-loose leading-relaxed max-[1200px]:hidden">
          <li className="flex items-center justify-center hover:border-2 border-gray-400 transition-all ease-in-out duration-100  px-2 py-1 w-[130px]">
            <a href="/">Home</a>
          </li>
          <li className="flex items-center justify-center  hover:border-2 border-gray-400 transition-all ease-in-out duration-100  px-2 py-1 w-[130px]">
            <a href="/about-us">About Us</a>
          </li>
          <li className="flex items-center justify-center group  hover:border-2 h-[55px] border-gray-400 transition-all ease-in-out duration-100 px-2 py-1 w-[130px]">
          <ServicesDropdown />
          </li>
          <li className="flex items-center justify-center  hover:border-2 border-gray-400 transition-all ease-in-out duration-100  px-2 py-1 w-[130px]">
            <a href="/portfolio">Portfolio</a>
          </li>
          <li className="flex items-center justify-center   hover:border-2 border-gray-400 transition-all ease-in-out duration-100 px-2 py-1 w-[130px]">
            <a href="/industries">Industries</a>
          </li>
          <li className="flex items-center justify-center  hover:border-2 border-gray-400 transition-all ease-in-out duration-100 px-2 py-1 w-[130px] ">
            <a href="/contact-us">Contact Us</a>
          </li>
        </ul>
        <div className="flex items-center justify-center max-[1200px]:hidden">
          <button className="bg-[#e1e507] uppercase text-[#222] text-sm font-semibold px-3 py-2.5 rounded-md hover:shadow-xl duration-300 transition-all ease-in-out">
            <a href="">Get a quote</a>
          </button>
        </div>

        <MobileRightBar />
      </div>
    </div>
  );
};

export default Navbar;
