import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function AudienceCards() {
  const solutions = [
    {
      title: "Real-Time Threat Detection",
      overview:
        "Continuously monitor and block threats before they impact your website or devices.",
      icon: "🛡️",
    },
    {
      title: "Secure Database Protection",
      overview:
        "Shield sensitive data with encryption and advanced malware neutralization tools.",
      icon: "📩",
    },
    {
      title: "Spam-Free Communication",
      overview:
        "Prevent spam and ensure safe communication through secure contact forms.",
      icon: "🗄️",
    },
    {
      title: "Multi-Device Protection",
      overview:
        "Safeguard desktops, servers, and laptops with cross-platform security solutions.",
      icon: "🗄️",
    },
    {
      title: "User-Friendly Tools",
      overview: "Easy integration with WordPress and JavaScript environments.",
      icon: "🗄️",
    },
    {
      title: "24/7 Expert Support",
      overview:
        "Get round-the-clock assistance to resolve issues quickly and effectively.",
      icon: "🗄️",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>
        <p className="mx-auto max-w-3xl leading-tight">
          Discover Advanced Security Features
        </p>
      </SectionTitle>
      <SectionSubTitle>
        End-to-End Protection against spam, hacking and ransomware across your
        WordPress & JavaScript Sites, Laptop & Servers
      </SectionSubTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {solutions.map((solution, i) => (
          <div
            key={i}
            className="flex flex-col rounded-lg p-6 text-center shadow transition-shadow duration-200 ease-linear hover:shadow-custom-2"
          >
            {/* <div className="mb-4 text-center text-4xl">{solution.icon}</div> */}
            <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
            <p className="font-light">{solution.overview}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
