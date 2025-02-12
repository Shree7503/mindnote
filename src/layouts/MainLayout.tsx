import Footer from "@/components/homepage/Footer";
import Navbar from "@/components/homepage/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white text-gray-800 font-sans">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
