import { Link } from "react-router";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { saveProductInfo } from "../../../utils/saveProductInfo";

export default function Hero({ currentVersion, productInfo, handleAddToCart }) {
  const versionDescriptions = {
    js: "JavaScript Website",
    wp: "WordPress Website",
    software: "windows_protection",
    server: "Server",
  };

  const isAvailable = {
    js: false,
    wp: true,
    software: true,
    server: false,
  };

  const versionDescription = versionDescriptions[currentVersion] || "Website";

  return (
    <SectionContainer>
      <div className="w-full">
        <h3 className="mb-2.5 text-center text-xl font-medium text-primary">
          {productInfo.version === "windows_protection"
            ? "Windows Devices"
            : productInfo.version}{" "}
          Version
        </h3>
        <HeroTitle>Bitss VWAR Frontline Malware Protection</HeroTitle>
        <HeroSubTitle>
          Protect Your{" "}
          {versionDescription === "windows_protection"
            ? "Windows Devices"
            : versionDescription}{" "}
          – Detect, Block and Eliminate Malware & Viruses <br /> with Advanced
          Scanning and Real-Time Protection
        </HeroSubTitle>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          {currentVersion === "wp" ? (
            <>
              <a
                href="/bitss-vwar-frontline-user-manual.pdf"
                download="bitss-vwar-frontline-user-manual.pdf"
                className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit"
              >
                Download User Manual
              </a>
              <button
                onClick={handleAddToCart}
                className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
              >
                {isAvailable[currentVersion]
                  ? "Buy & Secure Website"
                  : "Contact Us"}
              </button>
            </>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
            >
              {isAvailable[currentVersion] ? "Buy & Secure Now" : "Contact Us"}
            </button>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
