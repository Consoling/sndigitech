import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowBigLeft,
  ArrowBigRight,
  Focus,
  Headset,
  Lightbulb,
  Recycle,
  Slash,
} from "lucide-react";

const whychsUs = [
  {
    icon: <Focus size={40} className="text-[#e1e507]" />,
    id: 1,
    name: "Customer Focused",
    description:
    "At SN Digitech, we always provide best-in-class solutions while fostering a profitable, disciplined culture of safety, service, and trust.",
  },
  {
    id: 2,
    icon: <Lightbulb size={40} className="text-[#e1e507]" />,
    name: "Innovative & Passionate",
    description:
      "SN Digitech's team of talented SEO analysts, highly experienced digital marketers, innovative web designers and developers, who are always passionate about their work",
  },
  {
    icon: <Recycle size={40} className="text-[#e1e507]" />,
    id: 3,
    name: "Focus on ROI",
    description:
      "Digital Marketing can only be successful when it delivers a good return on your investment. Since the beginning, we are dedicated to focusing on achieving the maximum return on your investment.",
  },
  {
    icon: <Headset size={40} className="text-[#e1e507]" />,
    id: 4,
    name: "24/7 Support",
    description:
      "We establish strong bonds with our clients. Our support team is always on call to handle our client's requests, 24/7. You can feel free to call or email us anytime.",
  },
];

const AboutContent = () => {
  return (
    <div className="">
      {/* Banner part */}

      <div className="flex w-full relative bg-white">
        <div className="bg-black flex w-full lg:h-[320px] md:h-[280px] h-[170px] ">
          <img
            src="/about/bg-about.png"
            alt="bg-about"
            className="w-full object-cover h-full bg-blend-darken"
          />
        </div>
        <div className="flex absolute top-0 h-full w-full justify-center items-center">
          <div className="w-full flex-col flex items-center">
            <span className="text-white font-raleway text-[50px] font-semibold">
              About Us
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
                    <BreadcrumbLink href="/about-us" className="text-white">
                      About
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          </div>
        </div>
      </div>

      {/* Content Part */}

      <section className="lg:px-44 md:px-32 px-5 py-10 lg:flex-row flex-col flex lg:justify-center lg:gap-5 bg-white">
        <div className="flex flex-col lg:w-[60%] text-sm">
          <h1 className="font-bold text-[#1f1f1f] tracking-wider font-raleway text-[45px] pt-4 pb-8">
            Who We Are ?
          </h1>
          <span className="font-raleway tracking-widest leading-relaxed py-4">
            SN Digitech Pvt. Ltd. is a leading digital marketing, web design &
            development company, serving our clients globally.
          </span>
          <span className="font-raleway tracking-widest leading-relaxed py-4">
            As a full-service agency, our staff offers a wide variety of
            services including Digital Marketing (Search Engine Optimization,
            Social Media Marketing, PPC Marketing, E-mail Marketing, and
            Video/App/Content Marketing), Digital Strategy & Planning,
            Performance Marketing, Creative UI/UX Designing, E-Commerce
            Services, Website Design & Development, Web Application Development,
            Web 3.0 Development, Blockchain Development, Software Development,
            and Mobile App Development.
          </span>
          <span className="font-raleway tracking-widest leading-relaxed py-4">
            Our dedication toward your success is valued by startups as well as
            Fortune 1000 companies. We firmly believe that it’s not the Hard
            Work that pays-off, but the Smart Work that makes the magic happen.
          </span>
          <span className="font-raleway tracking-widest leading-relaxed py-4">
            SN Digitech's team consists of talented SEO analysts, highly
            experienced digital marketers, creative graphic designers,
            innovative web designers & developers. Our mission is to understand
            your requirements and find the best possible solutions. Our
            customized services will introduce new ways for your business to use
            the internet for driving profits.
          </span>
          <span className="font-raleway tracking-widest leading-relaxed py-4">
            We bring our diverse background in advertising, design, branding,
            public relations, research, and strategic planning to work for your
            company. Not only will your materials look great – they will get
            results. We don’t create concepts in a vacuum – they fit into the
            standards of your industry. And once we have a total picture of your
            company, its target audience and goals, we will create a detailed
            plan including a commitment to stay on budget.
          </span>
        </div>
        <div className="flex flex-col justify-evenly lg:gap-3 md:gap-10 lg:mt-0 md:mt-8 lg:w-[40%]">
          <div className="h-[50%]">
            <img
              className="object-contain h-full w-full py-5 px-2"
              src="/about/about.png"
            />
          </div>
          <div className="h-[30%] py-5 px-2">
            <img
              className="object-contain h-full w-full"
              src="/about/about1.png"
            />
          </div>
        </div>
      </section>

      {/* Parallax Part */}

      <section className="w-full pt-4 mb-20 bg-transparent h-full">
        <div className="flex flex-col justify-center items-center   bg-fixed bg-parallax bg-cover">
          <h1 className="text-white md:text-5xl text-3xl mt-7  font-raleway font-semibold">
            Why Choose Us ?
          </h1>
          <div className="flex flex-wrap lg:flex-row flex-col gap-3">
            {whychsUs.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-row   my-10 w-[280px] flex-wrap"
                >
                  <div className=" justify-center w-full  py-3 flex gap-2 flex-col items-center">
                    <span>{item.icon}</span>
                    <span className="text-white text-center font-semibold font-raleway text-base pb-3">
                      {item.name}
                    </span>
                    <div className="flex w-full justify-center">
                      <div className="w-8 h-1.5 bg-[#e1e507]"></div>
                    </div>
                    <div className="w-full flex">
                      <span className="font-raleway text-white leading-relaxed text-center text-sm">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Conclusion Section */}
      <section className="md:px-44   py-5 lg:flex-row flex-col flex lg:justify-center lg:gap-5 bg-white">
        <div className="flex flex-col px-5 py-2 gap-5">
          <h1 className="text-black font-semibold font-raleway text-2xl">
            Our Mission
          </h1>
          <span className="font-raleway leading-relaxed">
            To deliver digital, e-commerce, design and development service for
            the Start Ups and Industry Giants to meet their consumer's needs and
            develop world-class skills & abilities.
          </span>
        </div>
        <div className="flex flex-col px-5 py-2 gap-5 lg:my-0 my-10">
          <h1 className="text-black font-semibold font-raleway text-2xl">
            Our Vision
          </h1>
          <span className="font-raleway leading-relaxed">
            Our vision is focused on helping clients improve their operational
            performance, deliver their products and services more effectively &
            efficiently and grow their businesses in existing & new markets.
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
