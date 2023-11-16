import React from "react";
// import Carousel from "./components/carousel";
import "./fluidApp.css";
// import Header from "./components/header";
// import Table from "./components/table";
// import Lable from "./components/chip";
import ExperimentPage from "./pages/experiment";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewExperiment from "./pages/newExperiment";
import RactTable from "./components/table";
import PrintTable from "./pages/experiment/tables/printTable";
import TissueId from "./pages/tissue/tissueId";
import LoginForm from "./pages/login/login";
const FluidApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/add-new-experiment" element={<NewExperiment />} />
        <Route exact path="/experiment">
        
        <Route exact path="/experiment/:id" element={<ExperimentPage />}/>
        <Route
            path="table-view"
            exact
            element={<PrintTable isHidable={true}/>}
          />
          </Route>
          <Route exact path="/tissue" element={<TissueId />} />
      </Routes>
    </BrowserRouter>
  );
};

export default FluidApp;
