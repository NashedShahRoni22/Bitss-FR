import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export default function MainLayout() {
  return (
    <main className="bg-custom-white font-roboto text-dark">
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
