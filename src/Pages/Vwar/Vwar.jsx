import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import { useParams } from "react-router";
import VideoSection from "../../components/VideoSection";
import { vwarFaq } from "../../data/faq/vwarFaq";
import MalwareTable from "./MalwareTable/MalwareTable";

const Vwar = () => {
  const { version } = useParams();

  const validVersions = ["js", "wp", "software", "server"];
  const currentVersion = validVersions.includes(version) ? version : "wp";

  const versionPriceInfo = {
    wp: { name: "WordPress", price: 29.5 },
    js: { name: "JavaScript", price: 29.5 },
    software: { name: "Windows Software", price: 49.5 },
    server: { name: "Server", price: 69.5 },
  };

  const productInfo = {
    name: "Bitss VWAR Frontline Protection",
    version: versionPriceInfo[currentVersion]?.name,
    price: versionPriceInfo[currentVersion]?.price,
    currency: "EUR",
    packageType: "vwar",
  };

  return (
    <main>
      <Hero currentVersion={currentVersion} productInfo={productInfo} />
      <Features currentVersion={currentVersion} />
      <Pricing currentVersion={currentVersion} productInfo={productInfo} />
      <MalwareTable />
      <VideoSection
        productName="Bitss VWAR Frontline Protection"
        videoUrl="https://www.youtube.com/shorts/h-89lgUWCRI"
      />
      <Faq faqData={vwarFaq} />
    </main>
  );
};

export default Vwar;
