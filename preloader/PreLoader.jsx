import React from "react";
import { BallTriangle, ProgressBar } from "react-loader-spinner";
import '../src/globals.css'
const PreLoader = () => {
  return (
    <div className="loader__outer__container">
      
        <div className="loader__inner__container">
          <img
            src="snDigitech_logo120x47.png"
            alt="snDTLogo"
            className="w-32 object-cover"
          />
        <ProgressBar
          visible={true}
          height="80"
          width= '80'
          barColor='#e1e507'
          
          wrapperClass="progress-bar-loading"
        />
        </div>
      
    </div>
  );
};

export default PreLoader;
