import Hero from "./Hero/Hero";
import Solutions from "./Solutions/Solutions";
import Featured from "./Featured/Featured";
import SolutionHighlights from "./SolutionHighlights/SolutionHighlights";
import AudienceCards from "./AudienceCards/AudienceCards";

export default function Home() {
  return (
    <main>
      <Hero />
      <AudienceCards />
      <Featured />
      <Solutions />
      <SolutionHighlights />
    </main>
  );
}
