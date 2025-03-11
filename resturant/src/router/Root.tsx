import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the current route's page */}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
