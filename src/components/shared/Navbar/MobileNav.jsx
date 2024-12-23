import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineChevronDown } from "react-icons/hi2";
import navLinks from "../../../data/navLinks";

export default function MobileNav() {
  const [showSubLinks, setShowSubLinks] = useState("");

  const toggleSubLinks = (i) => {
    setShowSubLinks((prevLink) => (prevLink === i ? "" : i));
  };

  return (
    <div className="absolute left-0 top-full min-h-[calc(100dvh-80px)] w-full space-y-4 border bg-white p-5 text-[#071d2b] md:hidden">
      {navLinks.map((link, index) => (
        <div key={index}>
          {link.children ? (
            <>
              <button
                onClick={() => toggleSubLinks(index)}
                className={`flex w-full cursor-pointer items-center justify-between ${showSubLinks === index && "text-custom-blue"}`}
              >
                {link.name}{" "}
                <HiOutlineChevronDown
                  className={`text-lg transition-transform duration-200 ease-linear ${showSubLinks === index ? "-rotate-180 text-custom-blue" : "rotate-0"}`}
                />
              </button>

              {/* Sub Links Container */}
              <div>
                {link.children.map((subLink, i) => (
                  <Link
                    key={i}
                    to={subLink.path}
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${showSubLinks === index ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="overflow-hidden">{subLink.name}</p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <NavLink to={link.path}>{link.name}</NavLink>
          )}
        </div>
      ))}
    </div>
  );
}
