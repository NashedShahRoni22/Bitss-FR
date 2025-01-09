import { Link } from "react-router";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import ProductVersion from "../../../components/ProductVersion";

export default function Hero({ isWpVersion }) {
  return (
    <SectionContainer>
      <div className="w-full">
        <ProductVersion />
        <HeroTitle>Bitss VWAR Frontline Protection</HeroTitle>
        <HeroSubTitle>
          Protect Your {isWpVersion ? "WordPress" : "JavaScript"} Website –
          Detect, Block and Eliminate Viruses with Advanced Scanning and
          Real-Time Protection
        </HeroSubTitle>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          {isWpVersion ? (
            <>
              <button className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit">
                Download User Manual
              </button>
              <Link
                to="/products/anti-spam-contact-form"
                className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
              >
                Buy & Secure Website
              </Link>
            </>
          ) : (
            <Link
              to="/products/anti-spam-contact-form"
              className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
            >
              Buy & Secure Website Now
            </Link>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
