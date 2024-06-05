import React from "react";
import {
  Sheet,
 
  SheetContent,
 
  SheetTrigger,
} from "@/components/ui/sheet";

import { EllipsisVertical, Mail, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const MobileRightBar = () => {
  return (
    <>
      <Sheet className="w-[400px] sm:w-[540px] bg-white">
        <SheetTrigger asChild>
          <div className="flex items-center justify-center text-[#222] min-[1200px]:hidden">
            <EllipsisVertical size={25} className="" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[540px] bg-white top-[80px]">
          <div className="flex px-2 gap-2 h-full my-3 py-3 w-full">
            <div className="flex flex-col w-[40%] justify-evenly item-center h-full">
              <span className="flex flex-row w-full text-center gap-2 text-sm text-[#e1e507]">
                <Smartphone size={18} />
                India:
              </span>
              <span className="flex flex-row w-full text-center gap-2 text-sm text-[#e1e507]">
                <Smartphone size={18} />
                US:{" "}
              </span>
              <span className="flex flex-row w-full text-center gap-2 text-sm text-[#e1e507]">
                <Mail size={18} />
                Email:
              </span>
              <span className="flex flex-row w-full text-center gap-2 text-sm text-[#e1e507]">
                <FaWhatsapp size={18} />
                WhatsApp:
              </span>
            </div>
            <div className="flex flex-col w-[60%] justify-evenly items-center h-full">
              <span className="flex flex-row w-full text-xs  text-center duration-300 transition-colors ease-linear hover:text-[#e1e507] text-[#222]">+91 8607317191</span>
              <span className="flex flex-row w-full text-xs  text-center duration-300 transition-colors ease-linear hover:text-[#e1e507] text-[#222]">+1 (917) 720-3848</span>
              <span className="flex flex-row w-full text-xs  text-center duration-300 transition-colors ease-linear hover:text-[#e1e507] text-[#222]">admin@sndigitech.com</span>
              <span className="flex flex-row w-full text-xs  text-center duration-300 transition-colors ease-linear hover:text-[#e1e507] text-[#222]">+91 8607317191</span>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileRightBar;
