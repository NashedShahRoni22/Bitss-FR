import { MdCheck } from "react-icons/md";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
import { Link } from "react-router";

export default function Pricing({ isWpVersion }) {
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
            {isWpVersion ? (
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
            to="https://www.bobosohomail.com/email_ins/signUp_email.php?registration_from=1&user=1&package=business&price=19.50"
            target="_blanck"
            className="mt-8 block w-full rounded-md bg-accent py-3.5 text-center text-custom-white transition-all duration-200 ease-linear hover:bg-[#0d2535] hover:shadow-custom-2"
          >
            Buy & Activate Protection
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
