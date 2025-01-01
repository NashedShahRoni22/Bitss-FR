import { Link } from "react-router";
import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/sectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { solutionsData } from "../../../data/solutions";

export default function Services() {
  return (
    <SectionContainer>
      <SectionTitle>Our Security Solutions</SectionTitle>
      <SectionSubTitle>
        Enhance website performance and secure your contact forms with Bitss WP
        Protection, offering advanced anti-spam features and robust security
        measures.
      </SectionSubTitle>

      {/* Services Container */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {solutionsData.map((card, index) => (
          <div
            key={index}
            className="hover:shadow-custom-2 flex flex-col justify-between rounded-lg bg-[#143347] p-6 transition-shadow duration-200 ease-in-out"
          >
            <h3 className="mb-3 text-center text-2xl font-semibold">
              {card.title}
            </h3>
            <p className="mb-4 text-custom-gray">{card.description}</p>
            <ul className="mb-6 space-y-2 text-sm text-custom-gray">
              {card.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`group flex items-center justify-center rounded-full bg-blue-500 px-4 py-2.5 font-medium transition-all duration-200 ease-in-out`}
            >
              <span className="flex items-center px-3">
                <span className="transition-transform duration-300 group-hover:-translate-x-2">
                  Contact Us
                </span>
              </span>
              <HiOutlineArrowLongRight className="-ml-3 min-w-fit scale-0 opacity-0 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
            </Link>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
