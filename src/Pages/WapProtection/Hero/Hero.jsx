import { Link } from "react-router";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import ProductVersion from "../../../components/ProductVersion";
import { saveProductInfo } from "../../../utils/saveProductInfo";

export default function Hero({ productInfo, handleAddToCart }) {
  return (
    <SectionContainer>
      <div className="w-full">
        <ProductVersion />
        <HeroTitle>
          Bitss WAP login enforcement protection for website admin login access
        </HeroTitle>
        <HeroSubTitle>
          {productInfo.version === "WordPress"
            ? "An Enforced Protection to Login access to Lock out Hackers, Pirates, Intrusion & Prevention Database Theft"
            : [
                "Comprehensive Security for JavaScript Websites: Seamless Integration with Frameworks, Static Sites,",
                <br key={36527} />,
                "and Custom JavaScript Projects to Prevent Hacking, Intrusion and Database Theft.",
              ]}
          <br />
          Bitss WAP provides additional protection to databases, client base and
          website.
        </HeroSubTitle>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          {productInfo.version === "WordPress" ? (
            <>
              <a
                href="/bitss-wap-user-manual.pdf"
                download="bitss-wap-user-manual.pdf"
                className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit"
              >
                Download User Manual
              </a>
              <button
                onClick={handleAddToCart}
                className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
              >
                {productInfo.isAvailable.wp
                  ? "Buy & Secure Website"
                  : "Contact Us"}
              </button>
            </>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
            >
              {productInfo.isAvailable.js
                ? "Buy & Secure Website"
                : "Contact Us"}
            </button>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
