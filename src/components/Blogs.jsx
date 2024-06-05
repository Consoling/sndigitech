import { ArrowRight, CalendarClock, CircleHelp, Mail, Phone } from "lucide-react";
import React from "react";

const Blogs = () => {
  return (
    <>
      <section className="py-0 bg-[#f8f8f8] ">
        <div className="flex pt-10 pb-5 mt-16 px-20 justify-between flex-row max-[660px]:px-5 max-[660px]:py-5 border-b-2">
          <h2 className="text-[48px] font-raleway text-[#222] font-semibold  max-[660px]:text-[30px] tracking-wide ">
            Blogs
          </h2>
          <div className="flex justify-center group">
            <span className="flex justify-center gap-1 items-center text-[#222]  group-hover:border-b-2 font-bold group-hover:border-[#e1e507] cursor-pointer">
              Read our Blogs{" "}
              <ArrowRight
                size={19}
                className="text-[#e1e507] group-hover:-rotate-45 cursor-pointer duration-300 transition-all"
              />
            </span>
          </div>
        </div>

        <div className=" sm:px-28 px-2 gap-8 flex lg:flex-row flex-col py-5">
          <div className="flex flex-col lg:w-1/2 border-[1px] pb-7">
            <div className="flex w-full h-[250px]">
              <img
                src="/blog_dms.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex w-full py-8 md:px-8 px-5 font-raleway flex-wrap h-[90px]">
              <span className="hover:border-b-4  hover:border-[#e1e507] cursor-pointer font-semibold text-[#222] text-lg">
                Best Digital Marketing Strategy for your business in 980 words
              </span>
            </div>
            <div className="flex w-full md:px-8 px-5 font-raleway flex-wrap py-5">
              <span className="font-raleway leading-relaxed">
                In the Era of the Internet, Digital marketing is the necessity
                of all industries. It’s is the best way to grow your business in
                the form of brand awareness, brand reputation and the most
                important business revenue. To build this you need the best
                digital marketing strategies.
              </span>
            </div>
            <div className="flex w-full md:px-8 px-5 font-raleway justify-start">
              <div className="flex flex-row gap-2 text-xs justify-center items-center">
                <CalendarClock size={15} className="text-[#e1e507]" /> JUNE 25,{" "}
                <p>2020</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 border-[1px] pb-7">
            <div className="flex w-full h-[250px]">
              <img
                src="/wfh.png"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex w-full py-8 md:px-8 px-5 font-raleway flex-wrap h-[90px]">
              <span className="hover:border-b-4   cursor-pointer hover:border-[#e1e507] font-semibold text-[#222] text-lg">
                Is working from home or remote job the future of work?
              </span>
            </div>
            <div className="flex w-full md:px-8 px-5 font-raleway flex-wrap py-5">
              <span className="font-raleway leading-relaxed">
                Coronavirus Pandemic has been changed the work style of every
                industry worldwide. Most of the employees are working from home
                or switching their jobs to a remote job. That’s why the question
                is: Is working from home or remote job the future of work?
              </span>
            </div>
            <div className="flex w-full md:px-8 px-5 font-raleway justify-start">
              <div className="flex flex-row gap-2 text-xs justify-center items-center">
                <CalendarClock size={15} className="text-[#e1e507]" /> JUNE 25,{" "}
                <p>2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Blogs;
