import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import VideoSection from "../../components/VideoSection";
import { wapWordpressFaq } from "../../data/faq/wapWordpressFaq";
import { wapJsFaq } from "../../data/faq/wapJsFaq";
import useIsWpVersion from "../../hooks/useIsWpVersion";

const Vwar = () => {
  const isWpVersion = useIsWpVersion();
  const faqData = isWpVersion ? wapWordpressFaq : wapJsFaq;

  return (
    <main>
      <Hero isWpVersion={isWpVersion} />
      <Features isWpVersion={isWpVersion} />
      <Pricing isWpVersion={isWpVersion} />
      <VideoSection
        productName="Bitss WAP Website Admin Panel Protection"
        videoUrl="https://bitss.fr/wp-content/uploads/2024/08/Copy-of-WordPress-sites-are-facing-more-cyber-attacks-these-days.mp4"
      />
      <Faq faqData={faqData} />
    </main>
  );
};

export default Vwar;
