import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export default function Main() {
  const location = useLocation();

  useEffect(() => {
    const allowedRoutes = ["/payment", "/invoice"];

    if (!allowedRoutes.includes(location.pathname)) {
      localStorage.removeItem("productInfo");
    }
  }, [location.pathname]);

  return (
    <main className="bg-custom-white font-roboto text-dark">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
