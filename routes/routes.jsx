import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";

import PageLoader from "../preloader/PageLoader";
import Home from "../pages/Home";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component {...props} />
    </Suspense>
  );
};


const About = Loadable(lazy(() => import("../pages/About.jsx")));
const ContactUs = Loadable(lazy(() => import("../pages/ContactUs.jsx")));
const Industries = Loadable(lazy(() => import("../pages/Industries.jsx")));
const Services = Loadable(lazy(() => import("../pages/Services.jsx")));
const Quote = Loadable(lazy(() => import("../pages/Quote.jsx")));
const Portfolio = Loadable(lazy(() => import("../pages/Portfolio.jsx")));
const PortfolioDetails = Loadable(lazy(() => import("../src/components/PortfolioDetails")));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
 
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
      { path: "/get-quote", element: <Quote /> },
    ],
  },
]);
