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
    <nav className="bg-secondary">
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
                className={`hover:text-accent text-sm capitalize transition-all duration-200 ease-in-out ${
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
                <div className="bg-light-accent absolute left-0 top-full z-10 hidden min-w-[42rem] grid-cols-2 rounded-lg text-white shadow-custom-1 group-hover:grid">
                  {link.categories.map((category, j) => (
                    <div
                      key={j}
                      className={`${j % 2 === 0 && j < 4 && "border-r"} border-dark-accent border-b p-6`}
                    >
                      <h3 className="mb-3 flex items-center gap-1.5 font-bold text-white">
                        <img
                          src={category.icon}
                          alt=""
                          className="size-7 object-cover"
                        />
                        {category.title}
                      </h3>
                      <div className="text-muted-text space-y-2">
                        {category.items.map((product, k) => (
                          <Link
                            key={k}
                            to={product.path}
                            className="hover:text-accent flex max-w-fit items-center gap-1 text-sm capitalize transition-all duration-200 ease-in-out"
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
                <div className="text-background absolute left-0 top-full hidden min-w-max grid-cols-1 gap-4 rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-custom-1 group-hover:grid">
                  {link.children.map((subLink, j) => (
                    <Link
                      key={j}
                      to={subLink.path || subLink.link}
                      className="hover:text-accent block text-sm capitalize transition-all duration-200 ease-in-out"
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
          className="hover:text-accent hidden items-center gap-1.5 text-sm md:flex"
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
        {menuOpen && <MobileNav />}
      </div>
    </nav>
  );
}
