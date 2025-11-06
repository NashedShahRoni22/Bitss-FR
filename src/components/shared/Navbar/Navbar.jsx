import { useEffect, useState } from "react";
import { Link } from "react-router";
import { BsDot } from "react-icons/bs";
import {
  HiOutlineBars3,
  HiOutlineChevronDown,
  HiOutlineXMark,
} from "react-icons/hi2";
import MobileNav from "./MobileNav";
import { transformApiToNavStructure } from "../../../data/navLinks";
import logo from "../../../assets/logo/logo.png";
import useAuth from "../../../hooks/useAuth";
import UserProfileDropdown from "./UserProfileDropdown";
import staticNavLinks from "../../../data/navLinks";

export default function Navbar() {
  const { authInfo } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  // get dynamic nav links
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);

  //       const response = await fetch(
  //         `${import.meta.env.VITE_Base_Url}/products/product/category-wise/products`,
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       if (result?.success) {
  //         const dynamicNavLinks = transformApiToNavStructure(result?.data);
  //         setNavLinks(dynamicNavLinks);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching categories:", err?.message);
  //       setNavLinks(staticNavLinks);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // manage translate

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
      },
      "google_translate_element",
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const handleScroll = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="border-b border-[#C5D6E0] sticky top-0 z-50 bg-white">
      <div
        id="google_translate_element"
        className="mx-auto hidden w-fit lg:block"
      ></div>

      <div className="relative flex w-full items-center justify-between px-5 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="bitss logo" loading="lazy" className="w-20" />
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden items-center md:flex">
          {staticNavLinks.map((link, i) => (
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
                <div className="absolute left-0 top-full z-10 hidden min-w-[42rem] grid-cols-2 rounded-lg bg-custom-white shadow-custom-1 group-hover:grid">
                  {link.categories.map((category, j) => (
                    <div
                      key={j}
                      className={`${j % 2 === 0 && j < 2 && "border-r"} ${j < 2 && "border-b"} border-accent p-6 ${j > 1 ? "col-span-2" : "col-span-1"}`}
                    >
                      <div className="mb-3 flex gap-1.5">
                        <img
                          src={category.icon}
                          alt={category.title}
                          loading="lazy"
                          className="size-10 object-cover"
                        />
                        <div>
                          <h3 className="font-bold">{category.title}</h3>
                          <p className="text-xs">({category.subTitle})</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {category.items.map((product, k) => (
                          <Link
                            key={k}
                            to={product.path}
                            className="flex max-w-fit flex-wrap gap-1 text-sm capitalize transition-all duration-200 ease-in-out hover:text-primary"
                          >
                            <BsDot className="min-w-fit text-lg" />
                            {product.name}{" "}
                            {product?.isAvailable ? (
                              <span className="text-green-600">
                                (Available)
                              </span>
                            ) : (
                              <span className="text-primary">(Upgrading)</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Dropdown for Children */}
              {link.children && (
                <div className="absolute left-0 top-full z-10 hidden min-w-max grid-cols-1 gap-4 rounded-lg bg-custom-white px-6 py-4 shadow-custom-1 group-hover:grid">
                  {link.children.map((subLink, j) => (
                    <Link
                      key={j}
                      to={subLink.link}
                      // target="_blank"
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
        {/* <Link
          to="https://bitss.fr/my-account"
          className="hidden items-center gap-1.5 text-sm hover:text-primary md:flex"
        >
          <HiOutlineUserCircle className="text-xl" /> My Account
        </Link> */}

        {/* login button */}
        {authInfo?.access_token ? (
          <UserProfileDropdown />
        ) : (
          <Link
            to="/login"
            className="hidden rounded bg-primary p-2 px-4 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-primary-hover md:block"
          >
            Login
          </Link>
        )}

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
        {menuOpen && (
          <MobileNav setMenuOpen={setMenuOpen} updatedMenuItems={staticNavLinks} />
        )}
      </div>
    </nav>
  );
}
