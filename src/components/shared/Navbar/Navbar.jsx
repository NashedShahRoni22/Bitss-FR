import { useState } from "react";
import { Link } from "react-router";
import { BsDot } from "react-icons/bs";
import {
  HiOutlineBars3,
  HiOutlineChevronDown,
  HiOutlineUserCircle,
  HiOutlineXMark,
} from "react-icons/hi2";
import MobileNav from "./MobileNav";
import navLinks from "../../../data/navLinks";
import logo from "../../../assets/logo/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-[#C5D6E0]">
      <div className="relative flex w-full items-center justify-between px-5 md:container md:mx-auto">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="bitss logo" className="w-20" />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center md:flex">
          {navLinks.map((link, i) => (
            <div key={i} className="group relative p-3">
              {/* Main Nav Link */}
              <Link
                to={link.path}
                className={`text-sm capitalize transition-all duration-200 ease-in-out hover:text-primary ${
                  (link.categories || link.children) &&
                  "flex items-center gap-1"
                }`}
              >
                {link.name}
                {(link.categories || link.children) && (
                  <HiOutlineChevronDown className="text-base transition-transform duration-200 ease-linear group-hover:-rotate-180" />
                )}
              </Link>

              {/* Dropdown for Products */}
              {link.categories && (
                <div className="bg-custom-white absolute left-0 top-full z-10 hidden min-w-[42rem] grid-cols-2 rounded-lg shadow-custom-1 group-hover:grid">
                  {link.categories.map((category, j) => (
                    <div
                      key={j}
                      className={`${j % 2 === 0 && j < 4 && "border-r"} ${j < 4 && "border-b"} border-accent p-6`}
                    >
                      <h3 className="mb-3 flex items-center gap-1.5 font-bold">
                        <img
                          src={category.icon}
                          alt=""
                          className="size-7 object-cover"
                        />
                        {category.title}
                      </h3>
                      <div className="space-y-2">
                        {category.items.map((product, k) => (
                          <Link
                            key={k}
                            to={product.path}
                            className="flex max-w-fit items-center gap-1 text-sm capitalize transition-all duration-200 ease-in-out hover:text-primary"
                          >
                            <BsDot className="min-w-fit text-lg" />
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Dropdown for Children */}
              {link.children && (
                <div className="bg-custom-white absolute left-0 top-full z-10 hidden min-w-max grid-cols-1 gap-4 rounded-lg px-6 py-4 shadow-custom-1 group-hover:grid">
                  {link.children.map((subLink, j) => (
                    <Link
                      key={j}
                      to={subLink.path || subLink.link}
                      className="block text-sm capitalize transition-all duration-200 ease-in-out hover:text-primary"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Login Button */}
        <Link
          to="/login"
          className="hidden items-center gap-1.5 text-sm hover:text-primary md:flex"
        >
          <HiOutlineUserCircle className="text-xl" /> My Account
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden">
          {menuOpen ? (
            <HiOutlineXMark
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl"
            />
          ) : (
            <HiOutlineBars3
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            />
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && <MobileNav setMenuOpen={setMenuOpen} />}
      </div>
    </nav>
  );
}
