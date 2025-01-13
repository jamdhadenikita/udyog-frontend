import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import HardwareVendor from "./pages/HardwareVendor";
import JobPortal from "./pages/JobPortal";
import EquipmentVendor from "./pages/EquipmentVendor";
import MarketingVendor from "./pages/MarketingVendor";
import LegalServicesVendor from "./pages/LegalServicesVendor";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/vendors/hardware&electronics",
    element: (
      <div>
        <Navbar></Navbar>
        <HardwareVendor />
      </div>
    ),
  },
  {
    path: "/vendors/jobportal",
    element: (
      <div>
        <Navbar></Navbar>
        <JobPortal />,
      </div>
    ),
  },
  {
    path: "/vendors/equipment",
    element: (
      <div>
        <Navbar></Navbar>
        <EquipmentVendor />,
      </div>
    ),
  },
  {
    path: "/vendors/legalservices",
    element: (
      <div>
        <Navbar></Navbar>
        <LegalServicesVendor />,
      </div>
    ),
  },
  {
    path: "/vendors/marketing",
    element: (
      <div>
        <Navbar></Navbar>
        <MarketingVendor />,
      </div>
    ),
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
