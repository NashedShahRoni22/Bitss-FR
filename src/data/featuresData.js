import bitssC from "../assets/logo/bitss-c.png";
import wapIcon from "../assets/icons/bitss-wap.png";
import vwarIcon from "../assets/logo/bitss-vwar.png";
import retailPackIcon from "../assets/logo/bitss-retail-pack-icon.png";
import webProtect from "../assets/home/website-protection.png";
import antispamContact from "../assets/home/antispam-cotanct.png";
import preselectForm from "../assets/home/pre-select-form.png";
import bitssRetailPack from "../assets/home/bitss retail pack.png";

export const featuresData = [
  {
    image: webProtect,
    icon: wapIcon,
    name: "Bitss WAP Website Protection",
    title: "Comprehensive Login Protection for your Website",
    overview:
      "Secure your website, prevent data theft & protect your online assets with real-time threat detection & advanced security measures.",
    features: [
      "Prevents data theft and unauthorized intrusion",
      "Blocks hacking, spamming, and ransomware",
      "Effectively blocks virus attacks",
      "Ensures secure FTP and routine entry",
      "Protects revenue and client data",
    ],
    url: "/products/wap-website-protection/wp",
  },
  {
    image: antispamContact,
    icon: bitssC,
    name: "Bitss C Contact Form",
    title: "Stop Spam & Manage your Contacts",
    overview:
      "Improve your contact form's security with anti-spam features, customizable settings, and real-time threat monitoring.",
    features: [
      "Stops website contact spamming",
      "Prevents virus infiltration",
      "Real-time threat monitoring",
      "Safeguards Your Client Relationships",
      "Protects Your Online Revenue and Data Assets",
      "Supports WordPress and other platforms",
    ],
    url: "/products/c-contact-form/wp",
  },
  {
    image: preselectForm,
    icon: vwarIcon,
    name: "Bitss VWAR Frontline Protection",
    title: "Complete Security Across Platforms",
    overview:
      "Protect WordPress, JavaScript, Laptop & Servers with advanced tools and real-time scanning.",
    features: [
      "Realtime Auto-Scanning: Customizable scan intervals for constant monitoring",
      "Malware Neutralization: Instantly block and neutralize detected threats",
      "Directory Scanning: Automatic and manual scans for secure directories",
      "Modified Files Tracker: Monitor and review recent file changes",
      "Real-Time Notifications: Email alerts for detected threats and updates",
    ],
    url: "/products/vwar-frontline/wp",
  },
  {
    image: bitssRetailPack,
    icon: vwarIcon,
    name: "Bitss Retail Pack",
    title: "BITSS VWAR - Windows Device Protection ( Desinged for Microsoft Wndows )",
    overview:
      "Realtime protection against Malware (inck. Done Attacks) Ransomewear and Viruses - Trojans to spywear.",
    features: [
      "Scan-Vault Security Core",
      "Realtime Threat Defense",
      "NextGen SIgnature Engine",
      "Auto Backup & Quarentine ",
      "High Reliabe Protection Core ",
    ],
    url: "/products/vwar-frontline/wp",
  },
];
