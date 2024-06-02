import { Routes, Route } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../pages/Home";


export const AppRoutes = () => {
    <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
    </Routes>
}