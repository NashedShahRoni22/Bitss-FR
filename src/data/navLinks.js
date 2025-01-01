import webSecurity from "../assets/icons/web-shield.png";
import dataProtection from "../assets/icons/database-lock.png";
import antivirus from "../assets/icons/security-lock.png";
import idVerify from "../assets/icons/id-verify.png";
import cyberSecurity from "../assets/icons/cyber-security.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    categories: [
      {
        title: "Website Security",
        description:
          "Protect your website from spam, data breaches, and unauthorized access.",
        icon: webSecurity,
        items: [
          {
            name: "Bitss WAP Website Protection",
            path: "/products/wap-website-protection",
          },
          {
            name: "Bitss C Anti-Spam Contact Form",
            path: "/products/anti-spam-contact-form",
          },
          {
            name: "Bitss C Preselect Form",
            path: "/products/c-preselect-form",
          },
        ],
      },
      {
        title: "Network and Database Protection",
        description:
          "Safeguard your servers and databases against intrusions and cyberattacks.",
        icon: dataProtection,
        items: [
          {
            name: "Bitss N Database Network Protection",
            path: "/products/n-database-network-protection",
          },
          {
            name: "Bitss S Server Database Protection",
            path: "/products/s-server-database-protection",
          },
        ],
      },
      {
        title: "Virus and Malware Protection",
        description:
          "Defend your systems against viruses, malware, and other harmful threats.",
        icon: antivirus,
        items: [
          {
            name: "Bitss Vwar frontline virus protection (Plugin Version)",
            path: "/products/virus-protection-plugin",
          },
          {
            name: "Bitss Vwar frontline virus protection (Software Version)",
            path: "/products/virus-protection-software",
          },
        ],
      },
      {
        title: "Identity Protection",
        description:
          "Ensure secure identity verification to protect sensitive user information.",
        icon: idVerify,
        items: [
          {
            name: "Bitss V Verifies IT Identity",
            path: "/products/v-identification-verification",
          },
        ],
      },
      {
        title: "Cybersecurity Solutions",
        description:
          "Comprehensive solutions to secure your digital assets and operations.",
        icon: cyberSecurity,
        items: [
          {
            name: "Bitss Cyber Security",
            path: "/products/cyber-security",
          },
        ],
      },
    ],
  },
  {
    name: "Hosting",
    children: [
      {
        name: "Bitss WAP & Hosting combined",
        path: "/hosting/wap-hosting-combined",
      },
      {
        name: "Fully Managed Dedicated Server",
        link: "/fully-managed-dedicated-server",
      },
      {
        name: "Fully Managed Virtual Dedicated Server",
        link: "/fully-managed-virtual-dedicated-server",
      },
      {
        name: "Self Managed Dedicated Server",
        link: "/self-managed-dedicated-server",
      },
      {
        name: "Fully Managed Pure Website Hosting",
        link: "fully-managed-pure-web-hosting",
      },
      {
        name: "Self Managed Pure Website Hosting",
        link: "/self-managed-pure-web-hosting",
      },
      {
        name: "Vault Cloud Storage",
        path: "/hosting/vault-cloud-storage",
      },
      {
        name: "Cyber Security Education",
        path: "/hosting/cyber-security-education",
      },
    ],
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "Free Tools",
    path: "/free-tools",
  },
  {
    name: "Support",
    children: [
      {
        name: "Contact Us",
        path: "/contact-us",
      },
      {
        name: "FAQs",
        path: "/common-faq",
      },
    ],
  },
];

export default navLinks;
