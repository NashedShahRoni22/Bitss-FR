import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Features({ productInfo }) {
  const features = [
    {
      title: "Blacklist IP Management",
      description:
        "Efficiently block IPs flagged for spam or failed logins and customize restriction levels for enhanced security.",
    },
    {
      title: "IP Blocking Levels",
      description:
        "Set thresholds to deny access automatically to malicious users, ensuring secure and seamless user experiences.",
    },
    {
      title: "Effortless IP Unblocking",
      description:
        "Quickly restore access by removing IPs from the blacklist with a simple, user-friendly process.",
    },
    {
      title: "Whitelist IP Management",
      description:
        "Easily manage trusted IPs to ensure uninterrupted admin access while maintaining top-level security.",
    },
    {
      title: "Admin IP Control",
      description:
        "Register admin IPs with custom validation periods for smooth, secure access to administrative functions.",
    },
    {
      title: "Real-Time User Monitoring",
      description:
        "Track logged-in users and remotely log out suspicious sessions directly from the admin panel.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Key Features of Bitss WAP Cyber Security</SectionTitle>
      <SectionSubTitle>
        {productInfo.version === "Wordpress"
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
