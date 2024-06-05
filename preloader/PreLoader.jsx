import React from "react";
import { BallTriangle, ProgressBar } from "react-loader-spinner";

const PreLoader = () => {
  return (
    <>
      <div className="flex-col h-screen w-screen justify-center items-center">
        <div className="flex flex-col gap-10 px-10 items-center justify-center h-full">
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
          
          
        />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
