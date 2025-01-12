import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import FreeTools from "../Pages/FreeTools/FreeTools";
import Contact from "../Pages/Contact/Contact";
import WapProtection from "../Pages/WapProtection/WapProtection";
import CContactFormWp from "../Pages/CContactForm/CContactForm";
import Vwar from "../Pages/Vwar/Vwar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
      {
        path: "/products/wap-website-protection/:version",
        element: <WapProtection />,
      },
      {
        path: "/products/c-contact-form/:version",
        element: <CContactFormWp />,
      },
      {
        path: "/products/vwar-frontline/:version",
        element: <Vwar />,
      },
    ],
  },
]);
