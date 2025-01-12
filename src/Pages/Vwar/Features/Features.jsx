import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";
const features = [
  {
    title: "Realtime Auto-Scanning",
    description:
      "Constant monitoring with customizable scan intervals: Realtime, Hourly, Twice Daily, or Once Daily.",
  },
  {
    title: "Realtime Malware Neutralization",
    description:
      "Automatically neutralizes malware in real-time, with a simple 'Yes' or 'No' interaction.",
  },
  {
    title: "Manual Malware Scanning",
    description:
      "Manually scan for malware with detailed reports, including threat levels and scan duration.",
  },
  {
    title: "Neutralized Files Management",
    description:
      "Store and manage neutralized malware; choose to permanently remove or restore it.",
  },
  {
    title: "Malware-to-JPEG Conversion",
    description:
      "Converts neutralized malware into a JPEG image for better tracking and analysis.",
  },
  {
    title: "Modified Files Tracker",
    description:
      "Track and review file modifications in the last 24 hours, 7 days, or 15 days.",
  },
];

export default function Features({ currentVersion }) {
  const versionDescriptions = {
    js: "JavaScript Website",
    wp: "WordPress Website",
    software: "Device",
    server: "Server",
  };
  const versionDescription = versionDescriptions[currentVersion] || "Website";

  return (
    <SectionContainer>
      <SectionTitle>
        Key Features of Bitss VWAR Frontline Protection
      </SectionTitle>
      <SectionSubTitle>
        Advanced Tools for Real-Time Virus Detection and Protection for Your{" "}
        {versionDescription}
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
