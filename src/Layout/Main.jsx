import { Link, Outlet, ScrollRestoration } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import useCart from "../hooks/useCart";
import { LuShoppingCart } from "react-icons/lu";

export default function Main() {
  const { cartItems } = useCart();

  return (
    <main className="font-roboto">
      <ScrollRestoration />
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
      {cartItems.length > 0 && (
        <Link
          to={"/cart"}
          className="hover:bg-primary-dark fixed bottom-4 right-4 z-50 flex size-12 lg:size-16 items-center justify-center rounded-full bg-primary text-2xl text-white shadow-lg transition-colors duration-200"
        >
          <LuShoppingCart />
          {cartItems.length > 0 ? <span className="size-4 lg:size-6 absolute -top-1 -right-1 bg-white rounded-full text-primary text-xs flex justify-center items-center">{cartItems.length}</span> : ""}
        </Link>
      )}
    </main>
  );
}
