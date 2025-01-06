import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

export default function MainLayout() {
  return (
    <main className="text-dark bg-custom-white font-roboto">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
