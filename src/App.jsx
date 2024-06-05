import React, { useEffect, useState } from "react";
import { Route, RouterProvider, Routes, useLocation } from "react-router-dom";




import PreLoader from "../preloader/PreLoader";
import { router } from "../routes/routes";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    
    async function closeLoader() {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    }

    closeLoader();
  }, [loading]);
  return loading && location === '/' ? (
    
     <PreLoader />
    
  ) : (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;
