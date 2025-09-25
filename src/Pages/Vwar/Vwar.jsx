import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import { useLocation, useNavigate, useParams } from "react-router";
import VideoSection from "../../components/VideoSection";
import { vwarFaq } from "../../data/faq/vwarFaq";
import MalwareTable from "./MalwareTable/MalwareTable";
import useProductDetails from "../../hooks/useProductDetails";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";

const Vwar = () => {
  const { authInfo } = useAuth();
  const { addToCart } = useCart();
  const { version, productId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const validVersions = ["js", "wp", "software", "server"];
  const currentVersion = validVersions.includes(version) ? version : "wp";

  const { productDetails } = useProductDetails(productId);

  const isAvailable = productDetails?.status === "available";

  const versionAvailability = {
    js: isAvailable,
    wp: isAvailable,
    software: isAvailable,
    server: isAvailable,
  };

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
    if (!authInfo?.access_token) {
      return navigate(`/login?redirect=${pathname}`);
    }

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
        isAvailable={versionAvailability}
      />
      <Features currentVersion={currentVersion} />
      <Pricing
        currentVersion={currentVersion}
        productInfo={productInfo}
        productDetails={productDetails}
        handleAddToCart={handleAddToCart}
        isAvailable={versionAvailability}
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
