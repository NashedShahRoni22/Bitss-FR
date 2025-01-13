import { Link } from "react-router";
import { MdCheck } from "react-icons/md";
import SectionContainer from "../../../components/shared/SectionContainer";
import HeroSubTitle from "../../../components/HeroSubTitle";
import HeroTitle from "../../../components/HeroTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionSubTitle from "../../../components/SectionSubTitle";
import contactFormImg from "../../../assets/free-tools/bitss-c-free-contact-form.webp";

export default function Hero() {
  return (
    <SectionContainer>
      <HeroTitle>Bitss Free Tools: Empower Your Security for Free!</HeroTitle>
      <HeroSubTitle>
        Explore our free tools to enhance your website security. Upgrade anytime
        for even more features!
      </HeroSubTitle>

      <div className="mt-20 flex flex-col items-center gap-8 md:flex-row md:gap-16">
        <div className="w-full md:w-1/2">
          <SectionTitle mdTextLeft={true}>
            Free Bitss C Secure Contact Form
          </SectionTitle>
          <SectionSubTitle customStyle={true}>
            The ultimate solution to secure your WordPress website from spam and
            ensure secure communication with your visitors.
          </SectionSubTitle>

          <ul className="space-y-2 font-light">
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Basic Contact Form without Anti-Spam Security
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              Easy to integrate into WordPress websites
            </li>
            <li className="flex items-center gap-2">
              <MdCheck className="min-w-fit rounded bg-[#0073e6] text-custom-white" />
              100% Free for Basic Needs
            </li>
          </ul>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button className="w-full rounded-md border border-accent px-6 py-3 text-center shadow transition-all duration-200 ease-in-out hover:bg-accent hover:text-custom-white hover:shadow-custom-2 md:w-fit">
              Download Free Version
            </button>
            <Link
              to="/products/c-contact-form/wp"
              className="w-full rounded-md border border-primary bg-primary px-6 py-3 text-center text-custom-white shadow transition-all duration-200 ease-in-out hover:border-primary-hover hover:bg-primary-hover hover:shadow-custom-red md:w-fit"
            >
              Buy Premium Version
            </Link>
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
