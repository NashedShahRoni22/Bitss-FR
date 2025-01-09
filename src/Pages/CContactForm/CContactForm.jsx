import Hero from "./Hero/Hero";
import KeyFeatures from "../../components/KeyFeatures";
import Faq from "../../components/Faq";
import { cContactFormWp } from "../../data/faq/cContactFormWp";
import useIsWpVersion from "../../hooks/useIsWpVersion";
import Pricing from "./Pricing/Pricing";

export default function CContactFormWp() {
  const isWpVersion = useIsWpVersion();

  const features = [
    {
      title: "Intelligent Spam Detection",
      description:
        "Advanced algorithms detect and filter spam messages in real-time, preventing unwanted submissions on your contact page.",
    },
    {
      title: "Real-Time Reporting",
      description:
        "Monitor spam activity with real-time reports and gain insights into blocked messages and potential security threats.",
    },
    {
      title: "User-Friendly CAPTCHA",
      description:
        "A simple CAPTCHA system ensures that only legitimate users can submit messages, blocking automated bots effectively.",
    },
    {
      title: "Seamless User Experience",
      description:
        "Bitss C Antispam works smoothly with your contact form, providing spam protection without disrupting user interaction.",
    },
    {
      title: "Continuous Support and Upgrades",
      description:
        "Receive ongoing support, training, and regular upgrades to keep your contact form secure from evolving threats.",
    },
    {
      title: "Real-Time Submission Protection",
      description:
        "Stop spam submissions instantly with real-time protection, ensuring only legitimate messages are processed.",
    },
  ];

  return (
    <main>
      <Hero isWpVersion={isWpVersion} />
      <KeyFeatures
        title="Key Features of Bitss C Contact Form"
        subTitle={`Secure your contact form with Bitss C Antispam – advanced protection against spam and malicious submissions for ${isWpVersion ? "WordPress" : "JavaScript"}`}
        featsData={features}
      />
      <Pricing isWpVersion={isWpVersion} />
      <Faq faqData={cContactFormWp} />
    </main>
  );
}
