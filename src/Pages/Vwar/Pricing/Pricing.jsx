import { Link } from "react-router";
import { MdCheck } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { saveProductInfo } from "../../../utils/saveProductInfo";
const features = [
  "Automatic Directory Scanner",
  "Manual Directory Scanner",
  "Detection Timestamp",
  "Modification Duration",
  "Risk Level Assessment",
  "Suspicious Code Detection",
  "File Modification Overview",
  "Suspicious Code Neutralization",
  "Real-Time Email Notifications",
];

export default function Pricing({ currentVersion, productInfo }) {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Section: Title */}
        <div className="w-full md:w-1/2">
          <h3 className="mb-2.5 text-center text-xl font-medium text-primary md:text-left">
            Affordable Pricing
          </h3>
          <SectionTitle mdTextLeft={true}>
            Bitss VWAR: Frontline <br /> Protection
          </SectionTitle>
          <div className="flex flex-col gap-2.5 md:flex-row">
            <h3 className="mb-2.5 min-w-fit text-center text-xl font-medium md:text-left">
              Also available in:{" "}
            </h3>
            <div className="mt-0.5 space-x-1.5 text-center md:text-left">
              {currentVersion !== "wp" && (
                <Link
                  to="/products/vwar-frontline/wp"
                  className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
                >
                  WordPress Plugin,
                </Link>
              )}
              {currentVersion !== "js" && (
                <Link
                  to="/products/vwar-frontline/js"
                  className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
                >
                  JavaScript version,
                </Link>
              )}
              {currentVersion !== "software" && (
                <Link
                  to="/products/vwar-frontline/software"
                  className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
                >
                  Software version,
                </Link>
              )}
              {currentVersion !== "server" && (
                <Link
                  to="/products/vwar-frontline/server"
                  className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
                >
                  Server version
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Pricing and Features */}
        <div className="w-full md:w-1/2">
          {/* Pricing */}
          <p className="mb-2.5 text-3xl font-semibold">
            Yearly: €{productInfo.price.toFixed(2)}
          </p>
          <p className="mt-4">One-time installation by Bitss team: €25</p>

          {/* Features List */}
          <p className="mt-4 font-bold">What&apos;s included:</p>
          <ul className="mt-2.5 space-y-2 font-light">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
                {feat}
              </li>
            ))}
          </ul>

          {/* Call-to-Action Button */}
          <Link
            onClick={() => saveProductInfo(productInfo)}
            to="/payment"
            className="mt-8 block w-full rounded-md bg-accent py-3.5 text-center text-custom-white transition-all duration-200 ease-linear hover:bg-[#0d2535] hover:shadow-custom-2"
          >
            Buy & Activate Protection
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
