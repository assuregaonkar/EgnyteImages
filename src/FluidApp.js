import React from "react";
// import Carousel from "./components/carousel";
import "./fluidApp.css";
// import Header from "./components/header";
// import Table from "./components/table";
// import Lable from "./components/chip";
import ExperimentPage from "./pages/experiment";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const FluidApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/experiment/:userId" element={<ExperimentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default FluidApp;
