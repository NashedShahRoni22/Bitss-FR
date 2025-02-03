import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AiOutlineCopyright } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { products } from "../../../data/products";
import { pages } from "../../../data/pages";
import { bitssProducts } from "../../../data/bitssProducts";
import logo from "../../../assets/logo/logo.png";

export default function Footer() {
  const [hostingProducts, setHostingProducts] = useState([]);

  useEffect(() => {
    const fetchHostingProducts = async () => {
      const res = await fetch(
        "https://hpanel.bfinit.com/api/product/categories",
      );
      const data = await res.json();
      setHostingProducts(data.data);
    };

    fetchHostingProducts();
  }, []);

  return (
    <footer className="border-t border-[#C5D6E0] py-10 md:mt-20">
      <div className="grid grid-cols-1 gap-8 border-b border-[#C5D6E0] px-5 pb-12 md:container md:mx-auto md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to={"/"}>
            <img className="w-32" src={logo} alt="bitss logo" loading="lazy" />
          </Link>
          <p className="mt-3 text-2xl">By BFINIT Cosmopolitan</p>
          <p className="mt-3">
            Securely connecting you with seamless email and chat for personal
            and business communication.
          </p>
          <div className="my-6">
            <input
              required
              type="email"
              name="email"
              id="email"
              className="rounded-l border-none bg-[#f2f2f2] px-4 py-1.5 outline-none"
            />
            <button className="rounded-r bg-primary px-4 py-1.5 text-custom-white transition-all duration-200 ease-in-out hover:bg-primary-hover">
              Subscribe
            </button>
          </div>
          <a
            className="underline transition-all duration-200 ease-in-out"
            href="mailto:support@bobosohomail.com"
            target="_blanck"
          >
            support@bobosohomail.com
          </a>
        </div>
        {/* bitss products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold">Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {bitssProducts.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* hosting products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold">Hosting Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {hostingProducts.map((product, i) => (
              <Link
                key={i}
                to={`https://bfinit.com/hosting-products/${product.id}`}
                target="_blanck"
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* other products */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold">Other Products</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {products.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:underline"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        {/* pages */}
        <div className="lg:col-span-2">
          <h6 className="mb-8 font-bold">Quick Links to BFINIT</h6>
          <div className="flex flex-col gap-2 space-y-2.5 text-sm">
            {pages.map((product, i) => (
              <Link
                to={product.link}
                key={i}
                className="flex gap-2.5 transition-all duration-200 ease-in-out hover:underline"
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
          2025 BFIN Company All rights Reserved | 8 rue de Dublin, 34200, Sète,
          France.
        </p>
        <div className="flex items-center justify-center gap-7 md:justify-normal">
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-primary"
          >
            <BsFacebook />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-primary"
          >
            <BsInstagram />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-primary"
          >
            <BsTwitterX />
          </Link>
          <Link
            to="/"
            className="text-2xl transition-all duration-200 ease-in-out hover:text-primary"
          >
            <BsYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
