import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/Rotuer";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import "./styles/global.css"; // Keep your global styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
