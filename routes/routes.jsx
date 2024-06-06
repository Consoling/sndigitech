import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../pages/Home";
import PreLoader from "../preloader/PreLoader";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import PortfolioDetails from "../src/components/PortfolioDetails";
import Industries from "../pages/Industries";
import ContactUs from "../pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // loader: <PreLoader />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about-us", element: <About /> },
      { path: "/services/:pathId", element: <Services /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/portfolio/:link", element: <PortfolioDetails /> },
      { path: "/industries", element: <Industries /> },
      { path: "/contact-us", element: <ContactUs /> },

    ],
  },
]);
