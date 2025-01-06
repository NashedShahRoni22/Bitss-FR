import SectionContainer from "../../../components/shared/SectionContainer";
import bitssGif from "../../../assets/about/bitss.gif";
import { Link } from "react-router";

export default function Banner() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        {/* Image Container */}
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 text-4xl font-bold md:hidden md:text-5xl">
            Bitss Cyber Security
          </h1>
          <img
            src={bitssGif}
            alt="bitss cybersecurity"
            className="h-auto w-full rounded-lg object-cover"
          />
        </div>
        {/* Text Conainer */}
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 hidden text-4xl font-bold md:block md:text-5xl">
            Bitss Cyber Security
          </h1>
          <p className="mb-6 text-lg font-light md:text-xl">
            BITSS.fr by BFIN SASU is a French IT research and software
            engineering company. We are a leading entity in cybersecurity,
            anti-hacking, and intrusion research.
          </p>
          <ul className="mb-8 list-disc pl-6 font-light">
            <li>
              Safeguarding your digital infrastructure with cutting-edge
              technology.
            </li>
            <li>Protection for networks, servers, websites, and devices.</li>
            <li>
              Services catered to businesses, enterprises, and individuals.
            </li>
          </ul>
          <Link
            to="/contact"
            className="inline-block rounded-full bg-primary px-8 py-3 text-center text-lg font-medium text-white transition-all duration-200 ease-linear hover:bg-primary-hover hover:shadow-[0_10px_13px_rgba(211,47,47,0.16)]"
          >
            Global Support
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
