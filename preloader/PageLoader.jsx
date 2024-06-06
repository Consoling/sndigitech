import React from "react";
import "../src/globals.css";
import { MutatingDots } from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div className="loader__outer__container">
      <div className="loader__inner__container">
        <MutatingDots
          visible={true}
          height="100"
          width="100"
          color="#ffe500"
          secondaryColor="#4fa94d"
          radius="12.5"
          
        />
      </div>
    </div>
  );
};

export default PageLoader;
