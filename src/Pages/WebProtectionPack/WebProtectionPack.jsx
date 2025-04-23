import React from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import Faq from "../../components/Faq";
import { cContactFormWp } from "../../data/faq/cContactFormWp";
import { vwarFaq } from "../../data/faq/vwarFaq";
import { wapWordpressFaq } from "../../data/faq/wapWordpressFaq";
import Hero from "./Hero";
import BundleFeatures from "./BundleFeatures";

export default function WebProtectionPack() {
  return (
    <SectionContainer>
      <Hero/>
      {/* all products features  */}
      <BundleFeatures/>
      {/* all products faq  */}
      <Faq faqData={cContactFormWp} title="Bitss C Contact Form" />
      <Faq faqData={vwarFaq} title="Bitss V War" />
      <Faq faqData={wapWordpressFaq} title="Bitss Wap" />
      {/* <Faq faqData={wapJsFaq} title="Bitss Wap (Javascript)" /> */}
    </SectionContainer>
  );
}
