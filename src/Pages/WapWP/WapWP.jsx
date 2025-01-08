import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Faq from "../../components/Faq";
import VideoSection from "../../components/VideoSection";
import { wapWordpressFaq } from "../../data/faq/wapWordpressFaq";
import Pricing from "./Pricing/Pricing";

const WapWP = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <VideoSection
        productName="Bitss WAP Website Admin Panel Protection"
        videoUrl="https://bitss.fr/wp-content/uploads/2024/07/bitts.fr_.mp4"
      />
      <Faq faqData={wapWordpressFaq} />
    </main>
  );
};

export default WapWP;
