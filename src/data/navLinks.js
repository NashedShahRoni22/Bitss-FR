import bitssIcon from "../assets/icons/bitss.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    categories: [
      {
        title: "Bitss WAP",
        subTitle: "Website Login Protection",
        icon: bitssIcon,
        items: [
          {
            name: "Bitss WAP Protection (WordPress)",
            path: "/products/wap-website-protection-wp",
          },
          {
            name: "Bitss WAP Protection (JavaScript)",
            path: "/products/wap-website-protection-js",
          },
        ],
      },
      {
        title: "Bitss C Contact Form",
        subTitle: "Anti spam & Virus Protection",
        icon: bitssIcon,
        items: [
          {
            name: "Bitss C Contact Form (WordPress)",
            path: "/products/anti-spam-contact-form-wp",
          },
          {
            name: "Bitss C Contact Form (JavaScript)",
            path: "/products/anti-spam-contact-form-js",
          },
        ],
      },
      {
        title: "Bitss VWAR",
        subTitle:
          "Provides Database Security, Filtering to Clean & Block Device Codes that are implemented in your database to destroy you business",
        icon: bitssIcon,
        items: [
          {
            name: "Bitss VWAR frontline virus protection (WordPress)",
            path: "/products/virus-protection-wp",
          },
          {
            name: "Bitss VWAR frontline virus protection (JavaScript)",
            path: "/products/virus-protection-js",
          },
        ],
      },
    ],
  },
  {
    name: "Hosting",
    children: [
      {
        name: "Fully Managed Dedicated Server",
        link: "https://bfinit.com/fully-managed-dedicated-server",
      },
      {
        name: "Fully Managed Virtual Dedicated Server",
        link: "https://bfinit.com/fully-managed-virtual-dedicated-server",
      },
      {
        name: "Self Managed Dedicated Server",
        link: "https://bfinit.com/self-managed-dedicated-server",
      },
      {
        name: "Fully Managed Pure Website Hosting",
        link: "https://bfinit.com/fully-managed-pure-web-hosting",
      },
      {
        name: "Self Managed Pure Website Hosting",
        link: "https://bfinit.com/self-managed-pure-web-hosting",
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
    name: "Contact Us",
    path: "/contact",
  },
];

export default navLinks;
