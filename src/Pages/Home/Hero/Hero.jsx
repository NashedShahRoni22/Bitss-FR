import { Link } from "react-router";
import bitssLogo from "../../../assets/logo/bitss-logo.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-primary blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center px-5 py-20 md:container md:mx-auto md:py-32">
        <div className="w-full max-w-4xl">
          {/* Logo with glow effect */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-primary blur-xl opacity-50"></div>
              <img
                src={bitssLogo}
                alt="bitss logo"
                loading="lazy"
                className="relative size-20 rounded-xl shadow-2xl transition-transform hover:scale-110 duration-300"
              />
            </div>
          </div>

          {/* Heading with gradient text */}
          <h1 className="mb-6 text-balance text-center text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
              Advance Frontline
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
              Malware Protection
            </span>
          </h1>

          {/* Subtitle with glass morphism effect */}
          <div className="mb-10 rounded-2xl bg-gray-50 border border-gray-200 p-8 shadow-lg">
            <p className="text-center text-lg font-light text-gray-700 md:text-xl leading-relaxed">
              VWAR Software provides database security filtering of malware:
              Identifies, neutralises, and removes malware implanted in your
              device database to destroy your business. Efficient for websites,
              servers & laptops.
            </p>
          </div>

          {/* CTA Button with modern styling */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-red-600 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
            >
              <span className="relative z-10">Explore Our Products</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-10 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-primary hover:bg-gray-50 hover:text-primary"
            >
              Get a Demo
            </Link>
          </div>

          {/* Feature badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700 border border-gray-200 shadow-sm">
              🛡️ Real-time Protection
            </div>
            <div className="rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700 border border-gray-200 shadow-sm">
              ⚡ Lightning Fast
            </div>
            <div className="rounded-full bg-gray-100 px-6 py-2 text-sm text-gray-700 border border-gray-200 shadow-sm">
              🔒 Military-grade Security
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}