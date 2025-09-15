import Hero from "./Hero/Hero";
import KeyFeatures from "../../components/KeyFeatures";
import Pricing from "./Pricing/Pricing";
import Faq from "../../components/Faq";
import useIsWpVersion from "../../hooks/useIsWpVersion";
import { cContactFormWp } from "../../data/faq/cContactFormWp";
import { cContactFormFeats } from "../../data/cContactFormFeats";
import { useParams } from "react-router";
import useProductDetails from "../../hooks/useProductDetails";

export default function CContactFormWp() {
  const { productId } = useParams();
  const isWpVersion = useIsWpVersion();

  const { productDetails } = useProductDetails(productId);

  const productInfo = {
    name: "Bitss C Contact Form",
    version: isWpVersion ? "WordPress" : "JavaScript",
    price: 7.5,
    currency: "EUR",
    packageType: isWpVersion ? "contact-form" : "contact-form-js",
    isAvailable: {
      wp: true,
      js: true,
    },
  };

  return (
    <main>
      <Hero productInfo={productInfo} />
      <KeyFeatures
        title="Key Features of Bitss C Contact Form"
        subTitle={`Secure your contact form with Bitss C Antispam – advanced protection against spam and malicious submissions for ${isWpVersion ? "WordPress" : "JavaScript"}`}
        featsData={cContactFormFeats}
      />
      <Pricing productInfo={productInfo} productDetails={productDetails} />
      <Faq faqData={cContactFormWp} />
    </main>
  );
}
