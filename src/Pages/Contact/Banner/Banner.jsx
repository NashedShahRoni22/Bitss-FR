import Lottie from "react-lottie";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import contactAnim from "../../../assets/lotties/contact-anim.json";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Banner() {
  // lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SectionContainer>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Contact Info Container */}
        <div className="md:mt-6 md:w-1/2">
          <h1 className="mb-6 text-center text-4xl font-bold md:text-left md:text-5xl">
            Contact Us
          </h1>
          <p className="text-muted-text mb-8 text-center text-lg font-light md:text-left md:text-xl">
            To make requests for further information, contact us via our social
            channels.
          </p>

          <div className="text-muted-text flex items-center gap-4 md:gap-5">
            <div className="bg-light-accent rounded-lg p-3 md:p-5">
              <FaHome className="text-primary text-2xl" />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h5 className="text-light-background text-xl font-semibold">
                Address
              </h5>
              <p>8 rue de Dublin, 34200, Sète, France</p>
            </div>
          </div>

          <div className="text-muted-text my-5 flex items-center gap-4 md:gap-5">
            <div className="bg-light-accent rounded-lg p-3 md:p-5">
              <FaPhone className="text-primary text-2xl" />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h5 className="text-light-background text-xl font-semibold">
                Phone
              </h5>
              <p>+0033666100010</p>
            </div>
          </div>

          <div className="text-muted-text flex items-center gap-4 md:gap-5">
            <div className="bg-light-accent rounded-lg p-3 md:p-5">
              <MdMarkEmailRead className="text-primary text-2xl" />
            </div>
            <div className="flex flex-col gap-1 md:gap-2">
              <h5 className="text-light-background text-xl font-semibold">
                Email
              </h5>
              <p>support@bobosohomail.com</p>
              <p>bfin@bobosohomail.com</p>
            </div>
          </div>
        </div>

        {/* Lottie Animation Container */}
        <div className="md:w-1/2">
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
        </div>
      </div>
    </SectionContainer>
  );
}
