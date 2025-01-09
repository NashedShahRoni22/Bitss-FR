import { MdCheck } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { Link } from "react-router";

export default function Pricing({ isWpVersion }) {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Section: Title */}
        <div className="w-full md:w-1/2">
          <h3 className="mb-2.5 text-center text-xl font-medium text-primary md:text-left">
            Affordable Pricing
          </h3>
          <SectionTitle mdTextLeft={true}>
            Bitss C Antispam for <br /> Contact Forms
          </SectionTitle>
          <h3 className="mb-2.5 text-center text-xl font-medium md:text-left">
            Also available in:{" "}
            <Link
              to="/products/c-contact-form/js"
              className="text-base font-normal underline transition-all duration-200 ease-in-out hover:text-primary"
            >
              {isWpVersion ? "JavaScript version" : "WordPress Plugin"}
            </Link>
          </h3>
        </div>

        {/* Right Section: Pricing and Features */}
        <div className="w-full md:w-1/2">
          {/* Pricing */}
          <p className="mb-2.5 text-3xl font-semibold">
            Yearly: €195{" "}
            <span className="text-xl">
              (Only €16.25<span className="text-sm font-medium">/Month</span>)
            </span>
          </p>

          {/* Features List */}
          <p className="mt-4 font-bold">What&apos;s included:</p>
          <ul className="mt-2.5 space-y-2 font-light">
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Automated Updates
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Seamless Integration
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Customizable Protection Settings
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Real-Time Threat Monitoring
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Improved Contact Management
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Bitss C User Manual
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Training, Upgrades and Support
            </li>
          </ul>

          {/* Call-to-Action Button */}
          <Link
            to="/"
            className="mt-8 block w-full rounded-md bg-accent py-3.5 text-center text-custom-white transition-all duration-200 ease-linear hover:bg-[#0d2535] hover:shadow-custom-2"
          >
            Buy & Activate Protection
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}