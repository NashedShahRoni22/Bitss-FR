import webSecureIcon from "../assets/icons/web-shield.png";
import antispamContactIcon from "../assets/icons/antispam-contact.png";
import preselectFormIcon from "../assets/icons/pre-select-form.png";
import webProtect from "../assets/home/website-protection.png";
import antispamContact from "../assets/home/antispam-cotanct.png";
import preselectForm from "../assets/home/pre-select-form.png";

export const featuresData = [
  {
    image: webProtect,
    icon: webSecureIcon,
    name: "Bitss WAP Website Protection",
    title: "Comprehensive Protection for Your Website",
    overview:
      "Secure your website, prevent data theft, and protect your online assets with real-time threat detection and advanced security measures.",
    features: [
      "Prevents data theft and intrusion",
      "Blocks hacking, spamming, and ransomware",
      "Real-time spam protection for contact pages",
      "Ensures secure FTP and routine entry",
      "Protects revenue and client data",
    ],
    url: "/products/wap-website-protection",
  },
  {
    image: antispamContact,
    icon: antispamContactIcon,
    name: "Bitss C Anti-Spam Contact Form",
    title: "Stop Spam & Manage Your Contacts",
    overview:
      "Improve your contact form's security with anti-spam features, customizable settings, and real-time threat monitoring.",
    features: [
      "Stops website contact spamming",
      "Prevents virus infiltration",
      "Advanced anti-spam functions",
      "Real-time threat monitoring",
      "Supports WordPress and other platforms",
    ],
    url: "/products/anti-spam-contact-form",
  },
  {
    image: preselectForm,
    icon: preselectFormIcon,
    name: "Bitss C Preselect Form",
    title: "Customizable Forms with Enhanced Security",
    overview:
      "Protect your client relationships with customizable forms, advanced validation, and built-in anti-spam features.",
    features: [
      "Customizable form inputs with validation",
      "Real-time submission protection",
      "Advanced anti-spam and security features",
      "Improves contact management",
      "Continued support and upgrades",
    ],
    url: "products/c-preselect-form",
  },
];
