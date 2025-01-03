import { Link } from "react-router";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { featuresData } from "../../../data/featuresData";
import { FaCheck } from "react-icons/fa6";

export default function Featured() {
  return (
    <>
      {featuresData.map((feat, i) => (
        <section
          key={i}
          className={`flex flex-col justify-between gap-8 px-5 py-10 md:container md:mx-auto md:items-center md:gap-16 md:py-20 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="w-full md:w-1/2 md:text-left">
            <div className="mb-3 flex items-center gap-2.5 md:hidden md:justify-center">
              <img src={feat.icon} alt={feat.name} className="size-6" />
              <p className="font-medium">{feat.name}</p>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:hidden md:text-[2.5rem]">
              {feat.title}
            </h2>
            <img
              src={feat.image}
              alt={feat.name}
              className="h-fit w-full max-w-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:text-left">
            <div className="mb-4 hidden items-center gap-2.5 md:flex">
              <img src={feat.icon} alt={feat.name} className="size-8" />
              <p className="text-lg font-bold">{feat.name}</p>
            </div>
            <h2 className="hidden text-balance text-3xl font-bold leading-[3.15rem] md:block md:text-[2.5rem]">
              {feat.title}
            </h2>
            <p className="text-muted-text mt-4 text-balance text-lg font-light leading-7">
              {feat.overview}
            </p>

            <Link
              to={feat.url}
              className="hover:bg-primary-hover bg-primary hover:shadow-custom-red my-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-center text-lg font-medium text-white transition-all duration-200 ease-linear hover:scale-105"
            >
              Get protected
              <HiOutlineArrowLongRight className="min-w-fit scale-125 text-2xl" />
            </Link>

            {feat.features && (
              <ul className="text-muted-text space-y-2 font-light">
                {feat.features.map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <FaCheck className="text-primary mt-1.5 min-w-fit" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
