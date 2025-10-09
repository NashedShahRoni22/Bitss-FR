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
import Payment from "../Pages/Payment/Payment";
import Invoice from "../Pages/Invoice/Invoice";
import CookiePolicy from "../Pages/CookiePolicy/CookiePolicy";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import Success from "../Pages/Success/Success";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import WebProtectionPack from "../Pages/WebProtectionPack/WebProtectionPack";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import MyOrders from "../Pages/MyOrders/MyOrders";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";

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
        path: "/web-protection-pack",
        element: <WebProtectionPack />,
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
        path: "/products/wap-website-protection/:version/:productId",
        element: <WapProtection />,
      },
      {
        path: "/products/c-contact-form/:version/:productId",
        element: <CContactFormWp />,
      },
      {
        path: "/products/bitss-c-contact-form/:version/:productId",
        element: <CContactFormWp />,
      },
      {
        path: "/products/vwar-frontline/:version/:productId",
        element: <Vwar />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/my-orders/:orderId",
        element: <OrderDetails />,
      },
    ],
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
