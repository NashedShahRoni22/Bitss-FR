import { Link } from "react-router";
import heroImg from "../../../assets/home/hero.png";

export default function Hero() {
  return (
    <section className="bg-[#010a2b]">
      <div className="flex w-full flex-col items-center justify-center px-5 py-10 md:container md:mx-auto md:flex-row md:py-20">
        {/* Text Container */}
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-balance text-center text-4xl font-bold md:text-left md:text-5xl">
            Advanced Contact Form Security for WordPress & JavaScript
          </h1>
          <p className="mb-8 text-center text-lg font-light text-custom-gray md:text-left md:text-[1.375rem]">
            Defend your website with advanced anti-spam solutions, real-time
            threat monitoring, image captchas & seamless integration for
            WordPress plugins & modern JavaScript frameworks.
          </p>

          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <Link
              to="/"
              className="rounded-full bg-[#d91f2e] px-8 py-3 text-center text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#af0707] hover:shadow-[0_10px_13px_rgba(211,47,47,0.16)]"
            >
              Explore Anti-Spam Tools
            </Link>
            <Link
              to="/free-tools"
              className="rounded-full border border-custom-gray px-8 py-3 text-center text-lg font-medium text-custom-gray transition-all duration-200 ease-linear hover:border-white hover:bg-white hover:text-black hover:shadow-[0_10px_13px_rgba(71,84,103,0.16)]"
            >
              Download Free Plugin
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
      </div>
    </section>
  );
}
