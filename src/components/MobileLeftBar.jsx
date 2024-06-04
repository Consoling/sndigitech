import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

import { motion } from "framer-motion";

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
                      <div className="flex flex-col gap-3 leading-loose font-semibold text-sm">
                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Digital Marketing
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Digital Strategy & Planning
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Performance Marketing
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Creative UI/UX Design
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          E-Commerce Services
                        </motion.span>
                      </div>
                    </div>
                    <div className="flex-1 my-4">
                      <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                        Digital Marketing
                      </div>
                      <div className="flex flex-col gap-3 leading-loose font-semibold text-sm">
                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Search Engine Optimization
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Social Media Marketing
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          PPC Marketing
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Email Marketing
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Video/ App/ Content Marketing
                        </motion.span>
                      </div>
                    </div>
                    <div className="flex-1 my-4">
                      <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                        Website/Software
                      </div>
                      <div className="flex flex-col gap-3 leading-loose font-zemibold text-sm">
                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Website Design and Development
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Web Application Development
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Software Development
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Mobile App Development
                        </motion.span>

                        <motion.span
                          className="font-raleway tracking-wide cursor-pointer"
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
                          animate={{ rotateX: 0 }}
                        >
                          Blockchain Development
                        </motion.span>
                      </div>
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
