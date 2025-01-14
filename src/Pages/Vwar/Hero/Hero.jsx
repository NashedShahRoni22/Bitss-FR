import { Link } from "react-router";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Hero({ currentVersion, pricing }) {
  const versionTitles = {
    js: "JavaScript",
    wp: "WordPress",
    software: "Windows Software",
    server: "Server",
  };

  const versionDescriptions = {
    js: "JavaScript Website",
    wp: "WordPress Website",
    software: "Windows Devices",
    server: "Server",
  };

  const versionTitle = versionTitles[currentVersion] || "WordPress";
  const versionDescription = versionDescriptions[currentVersion] || "Website";

  return (
    <SectionContainer>
      <div className="w-full">
        <h3 className="mb-2.5 text-center text-xl font-medium text-primary">
          {versionTitle} Version
        </h3>
        <HeroTitle>Bitss VWAR Frontline Protection</HeroTitle>
        <HeroSubTitle>
          Protect Your {versionDescription} – Detect, Block and Eliminate
          Viruses <br /> with Advanced Scanning and Real-Time Protection
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
              <Link
                to={`https://www.bobosohomail.com/email_ins/signUp_email.php?registration_from=1&user=1&package=business&price=${pricing}`}
                target="_blanck"
                className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
              >
                Buy & Secure Website
              </Link>
            </>
          ) : (
            <Link
              to={`https://www.bobosohomail.com/email_ins/signUp_email.php?registration_from=1&user=1&package=business&price=${pricing}`}
              target="_blanck"
              className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
            >
              Buy & Secure Now
            </Link>
          )}
        </div>
      </div>
    </SectionContainer>
  );
}
