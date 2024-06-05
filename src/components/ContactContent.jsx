import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowBigRight } from "lucide-react";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactContent = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="flex w-full relative bg-white">
        <div className="bg-black flex w-full lg:h-[320px] md:h-[280px] h-[170px] ">
          <img
            src="/contact/contact-us.png"
            alt="bg-about"
            className="w-full object-cover h-full bg-blend-darken"
          />
        </div>
        <div className="flex absolute top-0 h-full w-full justify-center items-center">
          <div className="w-full flex-col flex items-center">
            <span className="text-white font-raleway text-[50px] font-semibold">
              Contact Us
            </span>
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-[#e1e507]" href="/">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ArrowBigRight className="text-white" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/contact-us" className="text-white">
                      Contact Us
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          </div>
        </div>
      </div>

      {/* Forms Section */}
      <section className="lg:px-44 md:px-32  px-5 py-10 lg:flex-row flex-col flex lg:justify-center lg:gap-5 bg-white">
        <div className="w-full mt-10 justify-center flex flex-col items-center lg:px-32 md:px-5 xl:px-40">
            <h1 className="text-4xl py-5 font-raelway text-[#1f1f1f] font-bold tracking-wider">
                Get in Touch 
            </h1>
            <span className="w-full md:px-20 text-center">
            We are available 24/7 by e-mail or by phone. You can also use our quick contact form to ask a question about our services and projects.
            </span>
        </div>
    <div className="flex flex-col">

    </div>

      </section>
    </div>
  );
};

export default ContactContent;
