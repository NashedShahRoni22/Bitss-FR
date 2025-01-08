import { Link } from "react-router";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Hero() {
  return (
    <SectionContainer>
      <div className="w-full">
        <h3 className="mb-2.5 text-center text-xl font-medium text-primary">
          WordPress Version
        </h3>
        <HeroTitle>
          Bitss WAP Database & <br /> Website Cyber Security Plugin
        </HeroTitle>
        <HeroSubTitle>
          An Enforced Protection to Login access to Lock out Hackers, Pirates,
          Intrusion & Prevention Database Theft
        </HeroSubTitle>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit">
            Download User Manual
          </button>
          <Link
            to="/products/anti-spam-contact-form"
            className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
          >
            Buy & Secure Website
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
