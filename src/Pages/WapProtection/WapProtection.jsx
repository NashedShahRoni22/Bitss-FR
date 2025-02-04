import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import VideoSection from "../../components/VideoSection";
import { wapWordpressFaq } from "../../data/faq/wapWordpressFaq";
import { wapJsFaq } from "../../data/faq/wapJsFaq";
import useIsWpVersion from "../../hooks/useIsWpVersion";

const WapProtection = () => {
  const isWpVersion = useIsWpVersion();
  const faqData = isWpVersion ? wapWordpressFaq : wapJsFaq;

  const productInfo = {
    name: "Bitss WAP Protection",
    version: isWpVersion ? "Wordpress" : "JavaScript",
    price: 19.5,
    currency: "EUR",
  };

  return (
    <main>
      <Hero productInfo={productInfo} />
      <Features isWpVersion={isWpVersion} productInfo={productInfo} />
      <Pricing isWpVersion={isWpVersion} productInfo={productInfo} />
      <VideoSection
        productName="Bitss WAP Website Admin Panel Protection"
        videoUrl="https://bitss.fr/wp-content/uploads/2024/07/bitts.fr_.mp4"
      />
      <Faq faqData={faqData} />
    </main>
  );
};

export default WapProtection;
