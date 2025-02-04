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
            <div className="mb-3 flex flex-col gap-2.5 md:hidden md:justify-center">
              <img
                src={feat.icon}
                alt={feat.name}
                loading="lazy"
                className="size-12"
              />
              <p className="font-medium">{feat.name}</p>
            </div>
            <h2 className="mb-6 text-3xl font-bold md:hidden md:text-[2.5rem]">
              {feat.title}
            </h2>
            <img
              src={feat.image}
              alt={feat.name}
              loading="lazy"
              className="h-fit w-full max-w-lg"
            />
          </div>

          <div className="w-full md:w-1/2 md:text-left">
            <div className="mb-4 hidden gap-2.5 md:flex md:flex-col">
              <img
                src={feat.icon}
                alt={feat.name}
                loading="lazy"
                className="h-auto w-24 object-cover"
              />
              <p className="text-lg font-bold">{feat.name}</p>
            </div>
            <h2 className="hidden text-balance text-3xl font-bold leading-[3.15rem] md:block md:text-[2.5rem]">
              {feat.title}
            </h2>
            <p className="mt-4 text-balance text-lg font-light leading-7">
              {feat.overview}
            </p>

            <Link
              to={feat.url}
              className={
                "group my-8 inline-flex items-center justify-center rounded-full bg-primary px-3.5 py-2 text-lg font-medium text-custom-white transition-all duration-200 ease-linear"
              }
            >
              <span className="flex items-center px-3">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Get Protected
                </span>
              </span>
              <HiOutlineArrowLongRight className="-ml-3 min-w-fit scale-0 opacity-0 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
            </Link>

            {feat.features && (
              <ul className="space-y-2 font-light">
                {feat.features.map((li, i) => (
                  <li key={i} className="flex gap-2">
                    <FaCheck className="mt-1.5 min-w-fit text-primary" />
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
