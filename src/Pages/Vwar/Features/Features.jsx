import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Features({ isWpVersion }) {
  const features = [
    {
      title: "Automatic Directory Scanner",
      description:
        "Bitss Vwar automatically scans your WordPress website directories for potential threats, ensuring proactive virus detection and protection.",
    },
    {
      title: "Manual Directory Scanner",
      description:
        "Manually initiate directory scans at any time to identify and neutralize threats, giving you full control over your website's security.",
    },
    {
      title: "Detection Timestamp",
      description:
        "Each detected threat is timestamped, providing you with a clear log of when potential issues were identified for easier tracking and resolution.",
    },
    {
      title: "Modification Duration",
      description:
        "Monitor the duration of file modifications on your WordPress site to detect suspicious activity and prevent unauthorized changes.",
    },
    {
      title: "Suspicious Code Detection",
      description:
        "Bitss Vwar scans your site for suspicious or malicious code, instantly identifying and alerting you to potential security breaches.",
    },
    {
      title: "Real-Time Email Notifications",
      description:
        "Stay informed with real-time email notifications about potential threats, allowing you to act quickly and protect your WordPress website.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>
        Key Features of Bitss VWAR Frontline Protection
      </SectionTitle>
      <SectionSubTitle>
        Advanced Tools for Real-Time Virus Detection and Protection for Your
        {isWpVersion ? " WordPress" : " JavaScript"} Website
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
