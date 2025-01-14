import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import { useParams } from "react-router";
import VideoSection from "../../components/VideoSection";
import { vwarFaq } from "../../data/faq/vwarFaq";

const Vwar = () => {
  const { version } = useParams();

  const pricingData = {
    js: "29.50",
    wp: "29.50",
    software: "49.50",
    server: "69.50",
  };

  const validVersions = ["js", "wp", "software", "server"];
  const currentVersion = validVersions.includes(version) ? version : "wp";
  const pricing = pricingData[currentVersion] || "29.50";

  return (
    <main>
      <Hero currentVersion={currentVersion} pricing={pricing} />
      <Features currentVersion={currentVersion} />
      <Pricing currentVersion={currentVersion} pricing={pricing} />
      <VideoSection
        productName="Bitss VWAR Frontline Protection"
        videoUrl="https://bitss.fr/wp-content/uploads/2024/08/Copy-of-WordPress-sites-are-facing-more-cyber-attacks-these-days.mp4"
      />
      <Faq faqData={vwarFaq} />
    </main>
  );
};

export default Vwar;
