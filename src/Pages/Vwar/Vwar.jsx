import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import { useParams } from "react-router";
import VideoSection from "../../components/VideoSection";
import { vwarFaq } from "../../data/faq/vwarFaq";
import MalwareTable from "./MalwareTable/MalwareTable";
import useProductDetails from "../../hooks/useProductDetails";
import useCart from "../../hooks/useCart";

const Vwar = () => {
  const { addToCart } = useCart();
  const { version, productId } = useParams();

  const validVersions = ["js", "wp", "software", "server"];
  const currentVersion = validVersions.includes(version) ? version : "wp";

  const { productDetails } = useProductDetails(productId);

  const versionPriceInfo = {
    wp: { name: "WordPress", price: 29.5 },
    js: { name: "JavaScript", price: 29.5 },
    software: { name: "windows_protection", price: 49.5 },
    server: { name: "Server", price: 69.5 },
  };

  const productInfo = {
    name: "Bitss VWAR Frontline Protection",
    version: versionPriceInfo[currentVersion]?.name,
    price: versionPriceInfo[currentVersion]?.price,
    currency: "EUR",
    packageType: "vwar",
  };

  const handleAddToCart = () => {
    const cartProduct = {
      id: productId,
      name: productInfo.name,
      version: productDetails.name,
      price: productDetails.price,
      subscriptions: productDetails.subscription_periods,
    };

    addToCart(cartProduct);
  };

  return (
    <main>
      <Hero
        currentVersion={currentVersion}
        productInfo={productInfo}
        handleAddToCart={handleAddToCart}
      />
      <Features currentVersion={currentVersion} />
      <Pricing
        currentVersion={currentVersion}
        productInfo={productInfo}
        productDetails={productDetails}
        handleAddToCart={handleAddToCart}
      />
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
