import SectionSubTitle from "./SectionSubTitle";
import SectionTitle from "./SectionTitle";
import SectionContainer from "./shared/SectionContainer";

export default function KeyFeatures({ title, subTitle, featsData }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionSubTitle>{subTitle}</SectionSubTitle>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featsData.map((feat, i) => (
          <div key={i} className="rounded-lg bg-[#fff1e5] p-5">
            <h4 className="mb-2.5 text-xl font-semibold">{feat.title}</h4>
            <p className="font-light">{feat.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
