import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
