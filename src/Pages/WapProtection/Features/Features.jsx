import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Features({ isWpVersion }) {
  const features = [
    {
      title: "Blacklist IP Management",
      description:
        "Bitss WAP & Bitss C provide robust protection for websites in the cloud.",
    },
    {
      title: "Secure Entry and FTP",
      description:
        "Ensures secure routine access and FTP entry, safeguarding sensitive data.",
    },
    {
      title: "Virus and Intrusion Defense",
      description:
        "Effectively blocks virus attacks and prevents hacking, intrusion, and database piracy.",
    },
    {
      title: "Comprehensive Threat Protection",
      description:
        "Protects against threats via all entry ports, securing multiple access points.",
    },
    {
      title: "Enhanced Website Security",
      description:
        "Installing Bitss software enhances overall website security and strengthens procedures.",
    },
    {
      title: "Safeguard Online Assets",
      description:
        "Protects your online assets and ensures the integrity of your digital property.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Key Features of Bitss WAP Cyber Security</SectionTitle>
      <SectionSubTitle>
        {isWpVersion
          ? " Discover how Bitss WAP enhances your WordPress site with cutting-edge protection against data theft, hacking & online threats."
          : "Protect your JavaScript websites and custom projects from hacking, intrusion and data theft with Bitss WAP."}
      </SectionSubTitle>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feat, i) => (
          <div key={i} className="rounded-lg bg-[#fff1e5] p-5">
            <h4 className="mb-2.5 text-xl font-semibold">{feat.title}</h4>
            <p className="font-light">{feat.description}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
