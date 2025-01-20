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
      "Detect and neutralize malware instantly with user control options to automate or manually approve actions.",
  },
  {
    title: "Manual Malware Scanning",
    description:
      "Initiate manual scans, view detailed reports of detected malware, and neutralize threats with a single click.",
  },
  {
    title: "Neutralized Files Management",
    description:
      "Store and manage neutralized malware; choose to permanently remove or restore it.",
  },
  {
    title: "Malware-to-JPEG Conversion",
    description:
      "Convert neutralized malware into a JPEG for visual documentation, automatically sent to the admin’s email.",
  },
  {
    title: "Modified Files Tracker",
    description:
      "Continuously monitor directory changes, categorize modifications by time frames, and analyze changes to identify potential threats.",
  },
];

export default function Features({ currentVersion }) {
  const versionDescriptions = {
    js: "JavaScript Website",
    wp: "WordPress Website",
    software: "Windows Devices",
    server: "Server",
  };
  const versionDescription = versionDescriptions[currentVersion] || "Website";

  return (
    <SectionContainer>
      <SectionTitle>
        Key Features of Bitss VWAR Frontline Protection
      </SectionTitle>
      <SectionSubTitle>
        Advanced Tools for Real-Time Virus Detection and Protection for your{" "}
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
