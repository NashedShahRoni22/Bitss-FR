import { Link } from "react-router";
import { MdCheck } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { saveProductInfo } from "../../../utils/saveProductInfo";

export default function Pricing({ productInfo }) {
  const features = [
    "Automated Updates",
    "Seamless Integration",
    "Customizable Protection Settings",
    "Real-Time Threat Monitoring",
    "Improved Contact Management",
    "Bitss C User Manual",
    "Training, Upgrades and Support",
  ];

  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Section: Title */}
        <div className="w-full md:w-1/2">
          <h3 className="mb-2.5 text-center text-xl font-medium text-primary md:text-left">
            Affordable Pricing
          </h3>
          <SectionTitle mdTextLeft={true}>
            Bitss WAP Website <br /> Admin Panel Protection
          </SectionTitle>
          <h3 className="mb-2.5 text-center text-xl font-medium md:text-left">
            Also available in:{" "}
            {productInfo.version === "WordPress" ? (
              <Link
                to="/products/wap-website-protection/js"
                className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
              >
                JavaScript version
              </Link>
            ) : (
              <Link
                to="/products/wap-website-protection/wp"
                className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
              >
                WordPress Plugin
              </Link>
            )}
          </h3>
        </div>

        {/* Right Section: Pricing and Features */}
        <div className="w-full md:w-1/2">
          {/* Pricing */}
          <p className="mb-2.5 text-3xl font-semibold">Yearly: €19.50</p>
          <p className="mt-4">One-time installation by Bitss team: €7.50</p>

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
            to={
              productInfo.version === "WordPress"
                ? productInfo.isAvailable.wp
                  ? "/payment"
                  : "/contact"
                : productInfo.isAvailable.js
                  ? "/payment"
                  : "/contact"
            }
            className="mt-8 block w-full rounded-md bg-accent py-3.5 text-center text-custom-white transition-all duration-200 ease-linear hover:bg-[#0d2535] hover:shadow-custom-2"
          >
            {productInfo.version === "WordPress"
              ? productInfo.isAvailable.wp
                ? "Buy & Activate Protection"
                : "Contact Us"
              : productInfo.isAvailable.js
                ? "Buy & Activate Protection"
                : "Contact Us"}
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
