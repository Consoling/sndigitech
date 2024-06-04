import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import * as React from "react";

const ServicesDropdown = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <a
                href="/services"
                className="flex gap-2 items-center justify-end text-[#222] font-bold tracking-loose leading-relaxed max-[1200px]:hidden "
              >
                Services{" "}
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#f5f5f5] border-t-[1px] border-[#e1e507] rounded-lg bg-opacity-100">
              <div className="flex w-[980px] px-14 py-5 gap-10">
                <div className="flex-1 my-4">
                  <div className="flex py-2 border-b-2 mb-4 text-[#e1e507]">
                    Services We Provide
                  </div>
                  <div className="flex flex-col gap-3 leading-loose font-light text-sm">
                    <motion.span
                      className="font-raleway tracking-wide cursor-pointer"
                      whileHover={{
                        rotateX: 360,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                  <div className="flex flex-col gap-3 leading-loose font-light text-sm">
                    <motion.span
                      className="font-raleway tracking-wide cursor-pointer"
                      whileHover={{
                        rotateX: 360,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                  <div className="flex flex-col gap-3 leading-loose font-light text-sm">
                    <motion.span
                      className="font-raleway tracking-wide cursor-pointer"
                      whileHover={{
                        rotateX: 360,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
                        transition: { duration: 0.5, ease: "easeInOut" },
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
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default ServicesDropdown;
