import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuShoppingCart, LuUser } from "react-icons/lu";
import { Link } from "react-router";

export default function UserProfileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Mock authInfo - replace with your actual auth context
  const authInfo = {
    access_token: "mock_token",
    name: "John Doe",
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, []);

  // Extract initials from name
  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative hidden md:block" ref={dropdownRef}>
      <div className="relative">
        {/* User Button */}
        <button
          onClick={handleDropdownToggle}
          className="flex items-center space-x-2 rounded-lg p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-100"
        >
          {/* User Initials Circle */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
            {getInitials(authInfo.name)}
          </div>

          {/* Welcome text and chevron */}
          <span className="hidden text-sm font-medium md:block">
            Welcome, {authInfo.name?.split(" ")[0] || "User"}
          </span>
          <LuChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="py-1">
              {/* Profile Link */}
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                <LuUser className="mr-3 h-4 w-4" />
                Profile
              </Link>

              {/* Cart Link */}
              <Link
                to="/cart"
                className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                <LuShoppingCart className="mr-3 h-4 w-4" />
                Cart
              </Link>

              {/* Divider */}
              <div className="my-1 border-t border-gray-100"></div>

              {/* Logout */}
              <button
                className="flex w-full items-center px-4 py-2 text-sm text-red-600 transition-colors duration-150 hover:bg-red-50"
                onClick={() => {
                  setIsDropdownOpen(false);
                  // Add your logout logic here
                  console.log("Logout clicked");
                }}
              >
                <svg
                  className="mr-3 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
