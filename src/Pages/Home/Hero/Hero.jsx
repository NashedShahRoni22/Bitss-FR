import { Link } from "react-router";
import heroImg from "../../../assets/home/hero.avif";

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 py-10 md:container md:mx-auto md:flex-row md:py-20">
      {/* Text Container */}
      <div className="w-full md:w-1/2">
        <h1 className="mb-6 text-balance text-center text-4xl font-bold md:text-left md:text-5xl">
          Protect Your Client & Data with Bitss All-In-One Cybersecurity
        </h1>
        <p className="text-custom-gray mb-8 text-center text-lg font-light md:text-left md:text-[1.375rem]">
          Safeguard your Digital Assets with Bitss—Secure your software,
          servers, websites and videos using Advanced Security Solutions.
        </p>

        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <Link
            to="/"
            className="rounded-full bg-[#d91f2e] px-8 py-3 text-center text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#af0707] hover:shadow-[0_10px_13px_rgba(211,47,47,0.16)]"
          >
            See All Products
          </Link>
          <Link
            to="/free-tools"
            className="border-custom-gray text-custom-gray rounded-full border px-8 py-3 text-center text-lg font-medium transition-all duration-200 ease-linear hover:border-white hover:bg-white hover:text-black hover:shadow-[0_10px_13px_rgba(71,84,103,0.16)]"
          >
            Download Free Tools
          </Link>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="w-full md:w-1/2">
        <img
          src={heroImg}
          alt="bitss world wide connection"
          className="mx-auto h-fit w-full max-w-md md:ml-auto"
        />
      </div>
    </section>
  );
}
