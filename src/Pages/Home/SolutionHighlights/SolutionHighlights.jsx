import { Link } from "react-router";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import dotShapes from "../../../assets/shapes/dot-grid.svg";
import { highlitedSolutions } from "../../../data/highlightedSolutions";

export default function SolutionHighlights() {
  return (
    <section className="overflow-hidden bg-[#0c2636] px-5 py-10 md:container md:mx-auto md:rounded-[2.5rem] md:px-10 md:py-20">
      <h2 className="text-balance text-3xl font-bold leading-[3.15rem] md:text-[2.5rem]">
        Comprehensive Security Solutions
      </h2>
      <p className="text-custom-gray mb-10 mt-4">
        Explore tailored security solutions to protect your websites, networks,
        and devices. <br /> Safeguard your digital assets with cutting-edge
        technology designed <br /> for Businesses, Individuals and Enterprises
        alike.
      </p>

      {/* Solution Cards Container */}
      <div className="relative">
        <img
          src={dotShapes}
          alt="dot grid shapes"
          className="absolute -right-6 -top-11 size-28 opacity-0 md:opacity-50"
        />
        <div className="relative grid grid-cols-1 gap-4 divide-y-2 divide-[#0077B6] rounded-xl bg-[#143347] py-6 md:grid-cols-3 md:divide-x-2 md:divide-y-0">
          {highlitedSolutions.map((solution, i) => (
            <div key={i} className="flex flex-col px-6 py-6 md:py-0">
              <div className="flex-1">
                <img
                  src={solution.icon}
                  alt={solution.title}
                  className="mb-3 size-8 md:size-10"
                />
                <h4 className="text-[1.375rem] font-medium">
                  {solution.title}
                </h4>
                <p className="text-custom-gray mb-12 mt-2 text-lg font-light">
                  {solution.overview}
                </p>
              </div>
              <Link
                to={solution.url}
                className={`group inline-flex w-fit items-center rounded-xl border-2 border-[#0077B6] px-4 py-2.5 font-medium transition-all duration-200 ease-in-out hover:bg-[#0077B6]`}
              >
                <span className="flex items-center px-3">
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    {solution.cta}
                  </span>
                </span>
                <HiOutlineArrowLongRight className="-ml-3 min-w-fit scale-0 opacity-0 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
