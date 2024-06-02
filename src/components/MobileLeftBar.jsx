import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

const MobileLeftBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center justify-center text-[#222] min-[1200px]:hidden">
            <Menu size={25} className="" />
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
          <div className="flex flex-col my-10">
            <ul className="flex flex-col h-full gap-7 items-center text-[#222] font-semibold">
              <li className="w-full">
                {" "}
                <button className="bg-[#e1e507] uppercase text-[#222] text-sm font-semibold px-3 py-2.5 rounded-md hover:shadow-xl duration-300 transition-all ease-in-out w-full">
                  <a href="">Get a quote</a>
                </button>
              </li>
              <li className="flex items-center justify-center hover:border-2 border-gray-400 transition-all ease-in-out duration-100  px-2 py-1 w-[130px]">
            <a href="/">Home</a>
          </li>
          <li className="flex items-center justify-center  hover:border-2 border-gray-400 transition-all ease-in-out duration-100  px-2 py-1 w-[130px]">
            <a href="/about-us">About Us</a>
          </li>
          <li className="flex items-center justify-center group  hover:border-2 border-gray-400 transition-all ease-in-out duration-100 px-2 py-1 w-[130px]">
            <a
              href="/services"
              className="flex gap-2 items-center justify-end "
            >
              Services{" "}
              <ChevronDown
                size={15}
                className="group-hover:rotate-180 transition-all ease duration-300"
              />{" "}
            </a>{" "}
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
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileLeftBar;
