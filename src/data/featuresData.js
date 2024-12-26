import webSecureIcon from "../assets/icons/web-shield.png";
import virusProtectIcon from "../assets/icons/virus-shield.png";
import webProtect from "../assets/home/website-protection.avif";
import virusProtect from "../assets/home/virus-protection.avif";

export const featuresData = [
  {
    image: webProtect,
    icon: webSecureIcon,
    name: "Bitss WAP Website Protection",
    title: "Powerful Anti-Spam Plugins for Every Platform",
    overview:
      "Protect your contact forms, websites, and customer data with cutting-edge anti-spam tools compatible with WordPress, React.js and other platforms.",
    features: [
      "Anti-spam contact message blocking system",
      "Real-time threat detection",
      "Image Captcha and Math Captcha options",
      "Compatibility with all major web platforms",
      "User-friendly dashboard for monitoring spam threats",
    ],
    url: "/",
  },
  {
    image: virusProtect,
    icon: virusProtectIcon,
    name: "Bitss Vwar Frontline Virus Protection (Software Version)",
    title: "Defend Your Systems with Bitss Vwar Virus Protection",
    overview:
      "Safeguard your software and directories with real-time virus detection, suspicious code neutralization, and automatic scanning, ensuring advanced protection against evolving cyber threats.",
    url: "/",
  },
];
