import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import { useParams } from "react-router";
import VideoSection from "../../components/VideoSection";

const faqData = [
  {
    id: 1,
    que: "What is Bitss Vwar Frontline Virus Defender?",
    ans: "Bitss Vwar is a powerful virus protection tool designed to safeguard WordPress websites (plugin version) or other systems (software version) against malicious code and security vulnerabilities.",
  },
  {
    id: 2,
    que: "What are the pricing options for Bitss Vwar?",
    ans: "The WordPress plugin version is available at €75 per year (€6.25/month), while the software version is priced at €145 per year (€12/month).",
  },
  {
    id: 3,
    que: "Are there additional installation fees?",
    ans: "Yes, the installation service by the Bitss team costs €25 for the plugin version and €75 for the software version.",
  },
  {
    id: 4,
    que: "What features are included with Bitss Vwar?",
    ans: "Both versions include features such as automatic and manual directory scanners, detection timestamp, modification duration, risk level assessment, suspicious code detection, file modification overview, suspicious code neutralization, and real-time email notifications.",
  },
  {
    id: 5,
    que: "How does Bitss Vwar detect and neutralize threats?",
    ans: "Bitss Vwar scans directories for suspicious code, assesses the risk level, timestamps the detection, and provides tools to neutralize threats effectively.",
  },
  {
    id: 6,
    que: "What is the difference between the plugin and software versions?",
    ans: "The plugin version is specifically designed for WordPress websites, while the software version offers broader compatibility for other systems.",
  },
  {
    id: 7,
    que: "Is real-time email notification included?",
    ans: "Yes, Bitss Vwar provides real-time email notifications to alert users about potential threats and modifications.",
  },
  {
    id: 8,
    que: "Can I install Bitss Vwar myself?",
    ans: "Yes, users can install the plugin or software themselves, but professional installation by the Bitss team is available for a one-time fee.",
  },
  {
    id: 9,
    que: "Does Bitss Vwar provide support for updates and maintenance?",
    ans: "Yes, Bitss Vwar offers ongoing support to ensure the product stays up to date and functions smoothly.",
  },
  {
    id: 10,
    que: "Is there a trial version available for Bitss Vwar?",
    ans: "Currently, there is no trial version available, but you can contact the Bitss team for more information or demos.",
  },
];

const Vwar = () => {
  const { version } = useParams();

  const validVersions = ["js", "wp", "software", "server"];
  const currentVersion = validVersions.includes(version) ? version : "wp";
  return (
    <main>
      <Hero currentVersion={currentVersion} />
      <Features currentVersion={currentVersion} />
      <Pricing currentVersion={currentVersion} />
      <VideoSection
        productName="Bitss VWAR Frontline Protection"
        videoUrl="https://bitss.fr/wp-content/uploads/2024/08/Copy-of-WordPress-sites-are-facing-more-cyber-attacks-these-days.mp4"
      />
      <Faq faqData={faqData} />
    </main>
  );
};

export default Vwar;
