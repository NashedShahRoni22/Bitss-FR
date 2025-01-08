import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function AudienceCards() {
  const solutions = [
    {
      title: "Bitss WAP Website Security",
      overview:
        "Safeguard your website from malicious attacks and vulnerabilities. Ensure reliable performance and data protection for WordPress and JavaScript-based sites.",
      icon: "🛡️",
    },
    {
      title: "Bitss C Contact Form Protection",
      overview:
        "Secure your contact forms against spam and unauthorized submissions. Maintain genuine and seamless communication with your audience.",
      icon: "📩",
    },
    {
      title: "Bitss VWAR Database and Virus Protection",
      overview:
        "Protect your databases from cyber threats with advanced virus detection and real-time monitoring for data integrity.",
      icon: "🗄️",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>
        <p className="mx-auto max-w-3xl leading-tight">
          Advanced Security for Contact Forms, Websites, Servers & Laptops
        </p>
      </SectionTitle>
      <SectionSubTitle>
        End-to-End Protection Against Spam, Hacking and Ransomware Across Your
        WordPress and JavaScript Sites
      </SectionSubTitle>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg p-6 text-center shadow transition-shadow duration-200 ease-linear hover:shadow-custom-2"
          >
            <div className="mb-4 text-center text-4xl">{solution.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
            <p className="font-light">{solution.overview}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
