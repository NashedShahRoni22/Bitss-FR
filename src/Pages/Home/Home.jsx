import Hero from "./Hero/Hero";
import Solutions from "./Solutions/Solutions";
import Featured from "./Featured/Featured";
import SolutionHighlights from "./SolutionHighlights/SolutionHighlights";
import AudienceCards from "./AudienceCards/AudienceCards";
import Contact from "./Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AudienceCards />
      <Featured />
      <Solutions />
      <SolutionHighlights />
      <Contact />
    </main>
  );
}
