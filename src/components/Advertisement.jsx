import React from "react";
import { Mail, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Advertisement = () => {
  return (
    <nav className="hidden min-[1200px]:block bg-[#151515] py-3">
      <div className="flex flex-row mx-14 py-2 justify-between flex-wrap">
        <ul className="flex flex-row gap-7 mx-4 justify-evenly items-center">
          <li className="flex gap-2 group cursor-pointer">
            <div className="flex item-center justify-center items-center gap-1 text-[#e1e507]">
              <Smartphone size={20} className="" />
              <span className="text-sm leading-relaxed ">India :</span>
            </div>
            <div className="text-sm leading-loose tracking-tight group-hover:text-[#e1e507] transition-all ease-linear duration-500 ">
              <a href="tel:+918607317191">+91 8607317191</a>
            </div>
          </li>
          <li className="flex gap-2  group cursor-pointer">
            <div className="flex item-center justify-center items-center gap-1 text-[#e1e507]">
              <Smartphone size={20} className="" />
              <span className="text-sm leading-relaxed ">US :</span>
            </div>
            <div className="text-sm leading-loose tracking-tight group-hover:text-[#e1e507] transition-all ease-linear duration-500 ">
              <a href="tel:+1 (917) 720-3848">+1 (917) 720-3848</a>
            </div>
          </li>
          <li className="flex gap-2 group cursor-pointer">
            <div className="flex item-center justify-center items-center gap-1 text-[#e1e507]">
              <Mail size={20} className="" />
              <span className="text-sm leading-relaxed ">Email :</span>
            </div>
            <div className="text-sm leading-loose tracking-tight group-hover:text-[#e1e507] transition-all ease-linear duration-500 ">
              <a href="mailto:admin@sndigitech.com">admin@sndigitech.com</a>
            </div>
          </li>
        </ul>
        <div className="flex mx-4 gap-2 group cursor-pointer">
        <div className="flex item-center justify-center items-center gap-1 text-[#e1e507]">
              <FaWhatsapp size={20} className="" />
              <span className="text-sm leading-relaxed ">WhatsApp :</span>
            </div>
            <div className="text-sm leading-loose tracking-tight group-hover:text-[#e1e507] transition-all ease-linear duration-500 ">
              <a href="mailto:admin@sndigitech.com">+91 8607317191</a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Advertisement;
