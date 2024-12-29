import { Link } from "react-router";
import { hostingProducts } from "../../../data/hostingProducts";
import { products } from "../../../data/products";
import { pages } from "../../../data/pages";
import logo from "../../../assets/logo/logo.png";
import { bitssProducts } from "../../../data/bitssProducts";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-[#0B2545] py-10 text-custom-gray md:mt-20">
      <div className="grid grid-cols-1 gap-8 border-b border-custom-gray px-5 pb-12 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to={"/"}>
            <img className="w-32" src={logo} alt="bitss logo" />
          </Link>
          <p className="mt-3 text-2xl text-custom-white">
            By BFINIT Cosmopolitan
          </p>
          <p className="mt-3 text-custom-gray">
            Securely connecting you with seamless email and chat for personal
            and business communication.
          </p>
          <div className="my-6">
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-l border-none px-4 py-1.5 outline-none"
            />
            <button className="rounded-r bg-[#d32f2f] px-4 py-1.5 text-custom-white">
              Subscribe
            </button>
          </div>
          <a
            className="underline transition-all duration-200 ease-in-out hover:text-custom-white"
            href="mailto:support@bobosohomail.com"
            target="_blanck"
          >
            support@bobosohomail.com
          </a>
        </div>
        {/* bitss products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold text-custom-white">Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {bitssProducts.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:text-custom-white hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* hosting products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold text-custom-white">Hosting Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {hostingProducts.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:text-custom-white hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* other products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold text-custom-white">Other Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {products.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:text-custom-white hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* pages */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold text-custom-white">
            Quick Links to BFINIT
          </h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {pages.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:text-custom-white hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 px-5 py-6 md:container md:mx-auto md:flex-row md:items-center md:px-0">
        <p className="flex gap-2 md:items-center">
          <AiOutlineCopyright className="mt-0.5 min-w-fit text-2xl md:mt-0" />
          2024 BFIN Company All rights Reserved | 8 rue de Dublin, 34200, Sète,
          France.
        </p>
        <div className="flex items-center justify-center gap-7 md:justify-normal">
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-custom-white"
          >
            <BsFacebook />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-custom-white"
          >
            <BsInstagram />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-custom-white"
          >
            <BsTwitterX />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-custom-white"
          >
            <BsYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
