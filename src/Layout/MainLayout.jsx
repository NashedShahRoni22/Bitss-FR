import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export default function MainLayout() {
  return (
    <main className="bg-[#071D2B] font-roboto text-custom-white">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
