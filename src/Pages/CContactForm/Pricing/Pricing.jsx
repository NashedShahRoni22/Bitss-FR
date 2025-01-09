import { MdCheck } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { Link } from "react-router";

export default function Pricing() {
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
        </div>

        {/* Right Section: Pricing and Features */}
        <div className="w-full md:w-1/2">
          {/* Pricing */}
          <p className="mb-2.5 text-3xl font-semibold">Yearly: €7.50</p>

          {/* Features List */}
          <p className="mt-4 font-bold">What&apos;s included:</p>
          <ul className="mt-2.5 space-y-2 font-light">
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Bitss C Anti-Spam Contact Form
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Training & Support
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Licence Upgrade
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Bitss WAP Installation by Bitss Engineers (€75 one-time fee)
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Yearly Backups (10 total) with 1 copy per month
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
