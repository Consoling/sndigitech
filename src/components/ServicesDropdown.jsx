import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { motion } from "framer-motion";
import * as React from "react";
import { service1, service2, service3 } from "../../constants/constant";

const ServicesDropdown = () => {
 

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <a className="flex gap-2 items-center justify-end text-[#222] font-bold text-base tracking-loose leading-relaxed max-[1200px]:hidden ">
                Services{" "}
              </a>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#f5f5f5] border-t-[1px] border-snyellow rounded-lg bg-opacity-100">
              <div className="flex w-[980px] px-14 py-5 gap-10">
                <div className="flex-1 my-4">
                  <div className="flex py-2 border-b-2 mb-4 text-snyellow">
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
                  <div className="flex py-2 border-b-2 mb-4 text-snyellow">
                    Digital Marketing
                  </div>
                 {service2.map((item) => {
                  return (
                    <div className="flex flex-col gap-3 leading-loose font-semibold text-sm" key={item.id}>
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
                    <motion.span
                      className="font-raleway tracking-wide cursor-pointer"
                     
                    >
                      {item.name}
                    </motion.span>
                    </motion.a>

                    
                  </div>
                  )
                 })}
                </div>
                <div className="flex-1 my-4">
                  <div className="flex py-2 border-b-2 mb-4 text-snyellow">
                    Website/Software
                  </div>
                {service3.map((item) => {
                  return (
                    <div className="flex flex-col gap-3 leading-loose font-semibold text-sm" key={item.id}>
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
                    <motion.span
                      className="font-raleway tracking-wide cursor-pointer"
                     
                    >
                      {item.name}
                    </motion.span>
                    </motion.a>

                    
                  </div>
                  )
                })}
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
