import IndustriesContent from "@/components/IndustriesContent";
import React from "react";
import { Helmet } from "react-helmet";

const Industries = () => {
  return (
    <div>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title className="">Industries We Serve | SN Digitech</title>
      </Helmet>
      <IndustriesContent />
    </div>
  );
};

export default Industries;
