import { useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineChevronDown } from "react-icons/hi2";
import navLinks from "../../../data/navLinks";
import { LuDot } from "react-icons/lu";

export default function MobileNav() {
  const [showSubLinks, setShowSubLinks] = useState("");

  const toggleSubLinks = (i) => {
    setShowSubLinks((prevLink) => (prevLink === i ? "" : i));
  };

  return (
    <div className="text-background absolute left-0 top-full min-h-[calc(100dvh-80px)] w-full space-y-4 border bg-white p-5 md:hidden">
      {navLinks.map((link, index) => (
        <div key={index}>
          {!link.children && !link.categories && (
            <NavLink to={link.path}>{link.name}</NavLink>
          )}

          {/* Products Dropdown Link */}
          {link.categories && (
            <>
              <button
                onClick={() => toggleSubLinks(index)}
                className={`flex w-full cursor-pointer items-center justify-between ${showSubLinks === index && "text-accent"}`}
              >
                {link.name}
                <HiOutlineChevronDown
                  className={`text-lg transition-transform duration-200 ease-linear ${showSubLinks === index ? "text-accent -rotate-180" : "rotate-0"}`}
                />
              </button>

              {link.categories.map((category, i) => (
                <div key={i}>
                  {category.items.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      className={`grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${showSubLinks === index ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <p className="flex items-center gap-0.5 overflow-hidden">
                        <LuDot className="min-w-fit text-2xl" />
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              ))}
            </>
          )}

          {/* Hosting Products & Support Dropdown */}
          {link.children && (
            <>
              <button
                onClick={() => toggleSubLinks(index)}
                className={`flex w-full cursor-pointer items-center justify-between ${showSubLinks === index && "text-accent"}`}
              >
                {link.name}{" "}
                <HiOutlineChevronDown
                  className={`text-lg transition-transform duration-200 ease-linear ${showSubLinks === index ? "text-accent -rotate-180" : "rotate-0"}`}
                />
              </button>

              {/* Sub Links Container */}
              <div>
                {link.children.map((subLink, i) => (
                  <Link
                    key={i}
                    to={subLink.path}
                    className={`grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${showSubLinks === index ? "grid-rows-[1fr] pt-4 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="flex items-center gap-0.5 overflow-hidden">
                      <LuDot className="min-w-fit text-2xl" /> {subLink.name}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
