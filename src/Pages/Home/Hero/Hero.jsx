import { Link } from "react-router";
import heroImg from "../../../assets/home/hero.png";

export default function Hero() {
  return (
    <section className="">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-5 py-10 md:container md:mx-auto md:flex-row md:py-20">
        {/* Text Container */}
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-balance text-center text-4xl font-bold md:text-left md:text-5xl">
            Advanced Protection for Websites, Forms & Data
          </h1>
          <p className="mb-8 text-center text-lg font-light text-custom-gray md:text-left md:text-xl">
            Defend your WordPress and JavaScript-powered sites with cutting-edge
            Anti-Spam Features, Real-Time Threat Detection & Seamless
            Integration.
          </p>

          <div className="text-center md:text-left">
            <Link
              to="/products"
              className="inline-block rounded-full bg-[#d91f2e] px-8 py-3 text-center text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-[#af0707] hover:shadow-[0_10px_13px_rgba(211,47,47,0.16)]"
            >
              Explore Our Products
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
