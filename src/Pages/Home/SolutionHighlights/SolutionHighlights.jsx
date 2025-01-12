import { Link } from "react-router";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import dotShapes from "../../../assets/shapes/dot-grid.svg";
import { highlitedSolutions } from "../../../data/highlightedSolutions";

export default function SolutionHighlights() {
  return (
    <section className="overflow-hidden px-5 py-10 md:container md:mx-auto md:rounded-[2.5rem] md:px-10 md:py-20">
      <h2 className="text-balance text-3xl font-bold leading-[3.15rem] md:text-[2.5rem]">
        Comprehensive Security Solutions
      </h2>
      <p className="my-4">
        Explore tailored security solutions for WordPress, JavaScript websites,
        networks <br /> and devices. Protect your digital assets with
        cutting-edge technology <br /> for businesses, individuals, and
        enterprises alike.
      </p>
      <Link
        to="/products"
        className={
          "group mb-10 inline-flex w-fit items-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 font-medium text-custom-white transition-all duration-200 ease-in-out"
        }
      >
        <span className="flex items-center px-3">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            Explore All Products
          </span>
        </span>
        <HiOutlineArrowLongRight className="-ml-3 min-w-fit scale-0 opacity-0 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
      </Link>

      {/* Solution Cards Container */}
      <div className="relative">
        <img
          src={dotShapes}
          alt="dot grid shapes"
          className="absolute -right-6 -top-11 size-28 opacity-0 md:opacity-50"
        />
        <div className="relative grid grid-cols-1 gap-4 py-6 md:grid-cols-3">
          {highlitedSolutions.map((solution, i) => (
            <div
              key={i}
              className="rounded-xl border border-primary/20 bg-custom-white p-5"
            >
              <img
                src={solution.icon}
                alt={solution.title}
                className="mb-3 size-8 md:size-10"
              />
              <h4 className="text-[1.375rem] font-medium">{solution.title}</h4>
              <p className="mb-12 mt-2 text-lg font-light">
                {solution.overview}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
