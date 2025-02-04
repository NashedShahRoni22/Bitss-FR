import { Link } from "react-router";
import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import contactFormImg from "../../../assets/bitss-c-contact-form/hero.webp";
import ProductVersion from "../../../components/ProductVersion";
import { saveProductInfo } from "../../../utils/saveProductInfo";

export default function Hero({ productInfo }) {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <ProductVersion mdTextLeft={true} />
          <SectionTitle mdTextLeft={true}>
            Bitss C Anti-spam for <br /> Contact Forms
          </SectionTitle>
          <SectionSubTitle customStyle={true}>
            Eliminate Spam on Your{" "}
            {productInfo.version === "Wordpress" ? "WordPress" : "JavaScript"}{" "}
            Website – Secure Your Contact Page, Enhance Communication, and
            Protect Your Online Presence.
          </SectionSubTitle>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            {productInfo.version === "Wordpress" ? (
              <>
                <a
                  href="/bitss-c-user-manual.pdf"
                  download="bitss-c-user-manual.pdf"
                  className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit"
                >
                  Download User Manual
                </a>
                <Link
                  onClick={() => saveProductInfo(productInfo)}
                  to="/payment"
                  className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
                >
                  Buy & Secure Website
                </Link>
              </>
            ) : (
              <Link
                onClick={() => saveProductInfo(productInfo)}
                to="/payment"
                className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
              >
                Buy & Secure Website Now
              </Link>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={contactFormImg}
            alt="bitss-c-free-contact-form"
            loading="lazy"
            className="h-auto w-full rounded-lg border object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
