import SectionSubTitle from "../../../components/SectionSubTitle";
import SectionTitle from "../../../components/SectionTitle";
import SectionContainer from "../../../components/shared/SectionContainer";

export default function Features({ isWpVersion }) {
  const features = [
    {
      title: "Intelligent Spam Detection",
      description:
        "Advanced algorithms detect and filter spam messages in real-time, preventing unwanted submissions on your contact page.",
    },
    {
      title: "Real-Time Reporting",
      description:
        "Monitor spam activity with real-time reports and gain insights into blocked messages and potential security threats.",
    },
    {
      title: "User-Friendly CAPTCHA",
      description:
        "A simple CAPTCHA system ensures that only legitimate users can submit messages, blocking automated bots effectively.",
    },
    {
      title: "Seamless User Experience",
      description:
        "Bitss C Antispam works smoothly with your contact form, providing spam protection without disrupting user interaction.",
    },
    {
      title: "Continuous Support and Upgrades",
      description:
        "Receive ongoing support, training, and regular upgrades to keep your contact form secure from evolving threats.",
    },
    {
      title: "Real-Time Submission Protection",
      description:
        "Stop spam submissions instantly with real-time protection, ensuring only legitimate messages are processed.",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Key Features of Bitss C Contact Form</SectionTitle>
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
