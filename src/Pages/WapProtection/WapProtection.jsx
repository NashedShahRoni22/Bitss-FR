import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import VideoSection from "../../components/VideoSection";
import { wapWordpressFaq } from "../../data/faq/wapWordpressFaq";
import { wapJsFaq } from "../../data/faq/wapJsFaq";
import useIsWpVersion from "../../hooks/useIsWpVersion";
import { useParams } from "react-router";
import useProductDetails from "../../hooks/useProductDetails";
import useCart from "../../hooks/useCart";

const WapProtection = () => {
  const { addToCart } = useCart();
  const { productId } = useParams();
  const isWpVersion = useIsWpVersion();
  const faqData = isWpVersion ? wapWordpressFaq : wapJsFaq;
  const { productDetails } = useProductDetails(productId);

  const productInfo = {
    name: "Bitss WAP Protection",
    version: isWpVersion ? "WordPress" : "JavaScript",
    price: 19.5,
    currency: "EUR",
    packageType: "vwap",
    isAvailable: {
      wp: true,
      js: true,
    },
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
      <Hero productInfo={productInfo} handleAddToCart={handleAddToCart} />
      <Features isWpVersion={isWpVersion} productInfo={productInfo} />
      <Pricing
        isWpVersion={isWpVersion}
        productInfo={productInfo}
        productDetails={productDetails}
        handleAddToCart={handleAddToCart}
      />
      <VideoSection
        productName="Bitss WAP Website Admin Panel Protection"
        videoUrl="https://youtu.be/u4nNoY91IvM?si=BmpeCKw5gPAQv4ro"
      />
      <Faq faqData={faqData} />
    </main>
  );
};

export default WapProtection;
