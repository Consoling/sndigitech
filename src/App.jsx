import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// Pages
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Portfolio from '../pages/Portfolio'
import Industries from '../pages/Industries'
import ContactUs from '../pages/ContactUs' 

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services/:pathId" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
