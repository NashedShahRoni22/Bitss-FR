import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Solutions from "./Solutions/Solutions";
import SolutionHighlights from "./SolutionHighlights/SolutionHighlights";
import Contact from "./Contact/Contact";
import Faq from "../../components/Faq";
import { homeFaq } from "../../data/faq/homeFaq";
import ProductsSection from "../../components/ProductsSection";
import ProductsPage from "../../components/ProductsPage";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductsPage/>
      {/* <ProductsSection /> */}
      <Featured />
      <Solutions />
      <SolutionHighlights />
      <Contact />
      <Faq faqData={homeFaq} />
    </main>
  );
}
