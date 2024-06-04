import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

import { motion } from "framer-motion";

import { service1, service2, service3 } from "../../constants/constant";

const MobileLeftBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="flex items-center justify-center text-[#222] min-[1200px]:hidden">
            <Menu size={25} className="" />
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-white overflow-y-scroll max-h-full"
        >
          <div className="flex flex-col my-10 overflow-y-scroll">
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
              <li
                onClick={toggleMenu}
                className="flex items-center justify-center group  hover:border-2 border-gray-400 transition-all ease-in-out duration-100 px-2 py-1 w-[130px]"
              >
                <a className="flex gap-2 items-center justify-end ">
                  Services{" "}
                  <ChevronDown
                    size={15}
                    className="group-hover:rotate-180 transition-all ease duration-300"
                  />{" "}
                </a>{" "}
                {/* <MobileDropDown /> */}
              </li>
              {isOpen && (
                <motion.div
                  className="menu"
                  initial={{ opacity: 0, y: "-100%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "-100%" }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <div className="flex  flex-col py-5 gap-10 overflow-y-scroll">
                    <div className="flex-1 my-4">
                      <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                        Services We Provide
                      </div>
                      {service1.map((item) => (
                        <div
                          className="flex flex-col gap-3 leading-loose font-semibold text-sm"
                          key={item.id}
                        >
                          <motion.a
                            className="py-3"
                            whileHover={{
                              rotateX: 360,
                              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                              transition: { duration: 0.5, ease: "easeInOut" },
                              paddingLeft: 5,
                            }}
                            initial={{ rotateX: 0 }}
                            animate={{ rotateX: 360 }}
                            href={`/services/${item.pathId}`}
                          >
                            <motion.span className="font-raleway tracking-wide cursor-pointer">
                              {item.name}
                            </motion.span>
                          </motion.a>
                        </div>
                      ))}
                    </div>
                    <div className="flex-1 my-4">
                      <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                        Digital Marketing
                      </div>
                      {service2.map((item) => {
                        return (
                          <div
                            className="flex flex-col gap-3 leading-loose font-semibold text-sm"
                            key={item.id}
                          >
                            <motion.a
                              className="py-3"
                              whileHover={{
                                rotateX: 360,
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                                transition: {
                                  duration: 0.5,
                                  ease: "easeInOut",
                                },
                                paddingLeft: 5,
                              }}
                              initial={{ rotateX: 0 }}
                              animate={{ rotateX: 360 }}
                              href={`/services/${item.pathId}`}
                            >
                              <motion.span className="font-raleway tracking-wide cursor-pointer">
                                {item.name}
                              </motion.span>
                            </motion.a>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex-1 my-4">
                      <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                        Website/Software
                      </div>
                      {service3.map((item) => {
                        return (
                          <div
                            className="flex flex-col gap-3 leading-loose font-semibold text-sm"
                            key={item.id}
                          >
                            <motion.a
                              className="py-3"
                              whileHover={{
                                rotateX: 360,
                                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                                transition: {
                                  duration: 0.5,
                                  ease: "easeInOut",
                                },
                                paddingLeft: 5,
                              }}
                              initial={{ rotateX: 0 }}
                              animate={{ rotateX: 360 }}
                              href={`/services/${item.pathId}`}
                            >
                              <motion.span className="font-raleway tracking-wide cursor-pointer">
                                {item.name}
                              </motion.span>
                            </motion.a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
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
