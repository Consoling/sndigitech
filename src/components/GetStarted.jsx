import { CircleHelp, Mail, Phone } from "lucide-react";
import React from "react";

const GetStarted = () => {
  return (
    <section className="mt-10 w-full h-[480px] relative group">
      <div className="w-full h-full ">
        <img
          src="/bg-image-2.jpg"
          alt="get-started"
          className="h-full object-cover w-full "
        />
      </div>
      <div className="flex absolute top-0 h-full w-full justify-center items-center">
        <div className="flex flex-col py-10">
          <span className="text-[#f5f5f5] font-raleway tracking-wide text-[42px] font-bold text-center my-10">
            Let's get Started
          </span>
          <div className="flex gap-10 w-full flex-wrap justify-between px-20 items-center">
            <button className="bg-snyellow text-[#f5f5f5] text-lg uppercase  font-semibold px-10 py-4 border-[1px] border-white flex gap-2 items-center">
              <Phone />
              Call Us
            </button>
            <button className="bg-snyellow text-[#f5f5f5] text-lg uppercase  font-semibold px-10 py-4 border-[1px] border-white flex gap-2 items-center">
              <Mail />
              Email Us
            </button>
            <button className="bg-snyellow text-[#f5f5f5] text-lg uppercase  font-semibold px-10 py-4 border-[1px] border-white flex gap-2 items-center">
              <CircleHelp />
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
