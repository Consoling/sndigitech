import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import GetStarted from "@/components/GetStarted";
const Layout = () => {
  return (
    <div>
      <Advertisement />
      <Navbar />
      <hr className="h-[5px]" />
      <Outlet />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Layout;
