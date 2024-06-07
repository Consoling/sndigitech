import PageLoader from "../../preloader/PageLoader";
import { svcsMain } from "../../constants/constant";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ServiceContent = () => {
  const { pathId } = useParams();
  const [loading, setLoading] = useState(false);
  const [fetchedItem, setFetchedItem] = useState([]);
  async function getPageInfo() {
    let selectedItem = svcsMain.find((serviceType) => serviceType.id == pathId);
    if (selectedItem) {
      setFetchedItem(selectedItem);
    } else {
      console.log("error");
    }
  }

  async function Delay() {
    setLoading(true);
    await getPageInfo();
    await new Promise((resolve) => setTimeout(resolve, 0));

    setLoading(false);
  }
  useEffect(() => {
    Delay();
  }, [pathId, svcsMain]);

  return (
    <div>
      {loading ? <PageLoader /> : <Content fetchedData={fetchedItem} />}
    </div>
  );
};

export default ServiceContent;

const Content = ({ fetchedData }) => {
  const writtenContent = fetchedData.content;
  const cardHeading = fetchedData?.cardsHead;
  const cardsContent = fetchedData?.cards;

  return fetchedData ? (
    <>
      <div className="w-full">
        <div className="flex w-full h-[380px] relative">
          <div className="w-full h-full">
            <img
              src={fetchedData?.bannerBg}
              alt=""
              className="h-full object-cover"
            />
          </div>
          <div className="flex absolute top-0 h-full w-full justify-center items-center">
            <div className="w-full flex-col flex items-center">
              <span className="text-white font-raleway text-[30px] sm:text-[50px] font-semibold">
                {fetchedData?.name}
              </span>
              <>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-snyellow" href="/">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <ArrowBigRight className="text-white" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-snyellow">
                        Services
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <ArrowBigRight className="text-white" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-white">
                        {fetchedData?.name}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </>
            </div>
          </div>
        </div>

        <WrittenContent writtenData={writtenContent} />
        <CardsContent cardHeading={cardHeading} cardsContent={cardsContent} />
      </div>
    </>
  ) : (
    <div className="h-screen w-screen flex items-center justify-center">
      <span className="text-black text-xl font-bold">
        Error fetching data..
      </span>
    </div>
  );
};

const WrittenContent = ({ writtenData, compliQut }) => {
  console.log(compliQut);
  return writtenData
    ? writtenData.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex flex-col  px-5">
              {/* 2nd part */}
              <div
                className={`flex w-full lg:px-20 xl:px-52  flex-col py-10 items-center ${
                  item.id % 2 === 0 ? "lg:flex-row-reverse " : "lg:flex-row"
                }`}
              >
                <div className="lg:w-[70%] flex flex-col flex-wrap md:px-20 px-4  h-full">
                  <h2 className="text-black font-raleway md:text-[40px]  font-bold  pt-8 max-[768px]:text-[20px]">
                    {item?.descriptionHead}
                  </h2>

                  {item.descriptionContent.map((content) => {
                    return (
                      <div key={content.id} className="xl:py-0  lg:py-2 mt-5">
                        <span className="text-base tracking-normal font-raleway  mt-5 ">
                          {content.description}
                        </span>
                      </div>
                    );
                  })}
                  {compliQut ? console.log("gotccha") : null}
                </div>
                <div className="lg:w-[30%]">
                  <img
                    src={item?.img}
                    alt={item?.id}
                    className="w-full h-full object-cover md:px-0 px-10 lg:py-0 mt-14"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })
    : "";
};

const CardsContent = ({ cardHeading, cardsContent }) => {
  console.log(cardHeading, cardsContent);
  if (cardHeading && cardsContent) {
    return (
      <>
        <section className="bg-[#f5f5f5] lg:pt-[0px] ">
          <div className="flex py-20 px-20 justify-center flex-row max-[660px]:px-5 max-[660px]:py-5 text-center">
            <h2 className="text-[40px] font-raleway text-[#222] font-bold  max-[660px]:text-[28px] ">
              {cardHeading}
            </h2>
          </div>
          <div className="grid grid-cols-1 items-center  w-full gap-10 justify-center px-24 max-w-screen-xl mx-auto md:grid-cols-2 lg:grid-cols-3 md:px-10 sm:grid-cols-1 sm:px-2 my-5 py-10">
            {cardsContent?.map((item) => {
              return (
                <div
                  className={`flex flex-col ${
                    item.icon ? "bg-transparent " : "bg-[#ffffff] border"
                  } w-[380px] max-[1174px]:w-[320px] ${
                    item?.link ? "h-[430px]" : "h-[400px]"
                  }  lg:shadow-none shadow-md`}
                  key={item.id}
                >
                  {item?.title ? (
                    <>
                      {" "}
                      <div
                        className={`flex justify-center flex-row font-bold  font-raleway py-4   ${
                          item.id % 2 === 0
                            ? "text-[#fff] bg-[#000]"
                            : "text-[#222] bg-[#ffe500]"
                        }`}
                      >
                        <span className="font-raleway text-[20px] leading-loose tracking-wide ">
                          {item.title}
                        </span>
                      </div>
                    </>
                  ) : null}
                  <div className="flex w-full flex-col items-center justify-center py-5">
                    {item?.icon ? (
                      <>
                        <img src={item.icon} className="w-24 h-24" />
                      </>
                    ) : null}
                    <div className="w-10 h-1.5 rounded-md bg-snyellow"></div>
                    {item?.subheading ? (
                      <>
                        <h2 className="font-raleway text-xl font-semibold text-[#222] text-center pt-3">
                          {item.subheading}
                        </h2>
                      </>
                    ) : null}
                  </div>
                  <div className="flex flex-row justify-center pt-3 px-10 h-[220px] max-[1174px]:h-[240px] ">
                    <span className="font-raleway text-sm tracking-wider lg:leading-relaxed md:leading-normal max-[580px]:leading-normal max-[580px]:text-sm">
                      {item.description}
                    </span>
                  </div>
                  <div className="flex flex-row justify-center items-center my-7  relative">
                    {item?.link ? (
                      <>
                        <button
                          className="px-5 py-1.5 border-2 z-10 border-[#222] uppercase tracking-wider font-raleway text-sm font-bold text-[#222] relative overflow-hidden 
      hover:animate-color-change hover:drop-shadow-2xl"
                        >
                          <a href={item.link}>
                            <span className="">Know More</span>
                          </a>
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  } else {
    return null;
  }
};
