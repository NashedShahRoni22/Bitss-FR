import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import FreeTools from "../Pages/FreeTools/FreeTools";
import Contact from "../Pages/Home/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/free-tools",
        element: <FreeTools />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
