import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#151515] py-20">
      {/* Part 1 */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 w-full justify-evenly px-20 max-[768px]:px-28 max-[500px]:px-10">
        <div className="flex flex-col ">
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="w-8 -rotate-45 h-1.5 bg-[#e1e507]"></div>
            <span className="font-raleway text-[#e1e507] font-semibold text-[20px]">
              About SN Digitech Pvt. Ltd.
            </span>
          </div>
          <div className="flex items-center justify-center text-start flex-wrap  py-7">
            <span className="text-white font-raleway text-sm">
              We bring our diverse background of advertising, design, branding,
              public relations, research and strategic planning to work for your
              company. Not only will your materials look great – they will get
              results. We don’t create concepts in a vacuum – they fit into the
              standards of your industry.
            </span>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="w-8 -rotate-45 h-1.5 bg-[#e1e507]"></div>
            <span className="font-raleway text-[#e1e507] font-semibold text-[20px]">
              USA Office
            </span>
          </div>
          <div className="flex flex-wrap font-raleway text-white py-7 justify-center items-center w-full text-center">
            <span className="font-raleway">
              208 N Townsend St, Syracuse, New York 13203, USA
            </span>
          </div>
          <div className="flex flex-wrap flex-col py-4 ">
            <span className="font-raleway flex flex-row items-center justify-start gap-4">
              <p className="text-[#e1e507]">Weekdays:</p>9:00 AM - 5:00 PM
            </span>
            <span className="font-raleway flex flex-row items-center justify-start gap-4">
              <p className="text-[#e1e507]">Weekends:</p>
              Closed
            </span>
          </div>
          <div className="flex flex-wrap flex-col py-4 ">
            <span className="font-raleway flex flex-row items-center justify-start gap-4">
            <p className="text-[#e1e507]">Email:</p><a href="mailto:admin@sndigitech.com" className="hover:underline">admin@sndigitech.com</a>
            </span>
          </div>{" "}
          <div className="flex flex-wrap flex-col py-4 ">
            <span className="font-raleway flex flex-row items-center justify-start gap-4">
            <p className="text-[#e1e507]">Phone:</p><a href="tel:+1 (917) 740 8964" className="hover:underline">+1 (917) 740 8964</a>
            </span>
          </div>{" "}
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="w-8 -rotate-45 h-1.5 bg-[#e1e507]"></div>
            <span className="font-raleway text-[#e1e507] font-semibold text-[20px]">
              Canada Office
            </span>
          </div>
        </div>

        <div className="flex flex-col ">
          <div className="flex flex-row gap-3 justify-center items-center">
            <div className="w-8 -rotate-45 h-1.5 bg-[#e1e507]"></div>
            <span className="font-raleway text-[#e1e507] font-semibold text-[20px]">
              India Office
            </span>
          </div>
        </div>
      </div>

      {/* Part 2 */}

      <div className="flex w-full">
        <div className="flex md:flex-row flex-col max-[768px]:gap-10 bg-[#222] py-10 my-10 px-20  max-[768px]:px-5  max-[768px]:text-center w-full justify-between ">
          <span className="font-raleway text-sm leading-relaxed">
            Copyright © 2024{" "}
            <a href="https://sndigitech.com" className="text-[#e1e507]">
              SN Digitech Pvt. Ltd.,
            </a>{" "}
            All Right Reserved.
          </span>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <span className="cursor-pointer hover:text-white transition-all hover:scale-110   duration-300 ease-out">
              <a href="https://www.facebook.com/sndigitech">
                {" "}
                <Facebook size={22} />{" "}
              </a>
            </span>
            <span className="cursor-pointer hover:text-white transition-all hover:scale-110   duration-300 ease-out">
              <a href="https://www.instagram.com/sndigitech/">
                {" "}
                <Instagram size={22} />{" "}
              </a>
            </span>
            <span className="cursor-pointer hover:text-white transition-all hover:scale-110   duration-300 ease-out">
              <a href="https://twitter.com/sndigitech">
                <Twitter size={22} />{" "}
              </a>
            </span>
            <span className="cursor-pointer hover:text-white transition-all hover:scale-110   duration-300 ease-out">
              <a href="https://www.linkedin.com/company/sndigitech">
                <Linkedin size={22} />{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
