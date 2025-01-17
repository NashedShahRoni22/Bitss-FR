import { Link } from "react-router";
import heroImg from "../../../assets/home/hero.png";
import bitssLogo from "../../../assets/icons/bitss.png";

export default function Hero() {
  return (
    <section className="">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-5 py-10 md:container md:mx-auto md:flex-row md:py-20">
        {/* Text Container */}
        <div className="w-full md:w-1/2">
          <img
            src={bitssLogo}
            alt="bitss logo"
            loading="lazy"
            className="size-16 rounded-lg"
          />
          <h1 className="my-6 text-balance text-center text-4xl font-bold md:text-left md:text-5xl">
            VWAR Advance Frontline database protection for Websites, Servers &
            Laptops
          </h1>
          <p className="mb-8 text-center text-lg font-light md:text-left md:text-xl">
            VWAR Software provides database security filtering, cleaning and
            blocking device codes, that are inplanted in your database to
            destroy your business.
          </p>

          <div className="text-center md:text-left">
            <Link
              to="/products"
              className="inline-block rounded-full bg-primary px-8 py-3 text-center text-lg font-medium text-custom-white transition-all duration-200 ease-linear hover:bg-primary-hover hover:shadow-custom-red"
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
            loading="lazy"
            className="mx-auto h-fit w-full max-w-md rounded-xl md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
