import bitssVwar from "../assets/logo/bitss-vwar.png";
import bitssC from "../assets/logo/bitss-c.png";
import wapIcon from "../assets/icons/bitss-wap.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    categories: [
      {
        title: "Bitss C Contact Form",
        subTitle: "Anti spam & Virus Protection",
        icon: bitssC,
        items: [
          {
            name: "Bitss C Contact Form: WordPress",
            path: "/products/c-contact-form/wp",
            isAvailable: true,
          },
          {
            name: "Bitss C Contact Form: JavaScript",
            path: "/products/c-contact-form/js",
            isAvailable: true,
          },
        ],
      },
      {
        title: "Bitss WAP",
        subTitle: "Website Login Protection",
        icon: wapIcon,
        items: [
          {
            name: "Bitss WAP Protection: WordPress",
            path: "/products/wap-website-protection/wp",
            isAvailable: true,
          },
          {
            name: "Bitss WAP Protection: JavaScript",
            path: "/products/wap-website-protection/js",
          },
        ],
      },
      {
        title: "Bitss VWAR",
        subTitle:
          "Provides Database Security, Filtering to Clean & Block Device Codes that are implemented in your database to destroy you business",
        icon: bitssVwar,
        items: [
          {
            name: "Bitss VWAR frontline protection: WordPress",
            path: "/products/vwar-frontline/wp",
            isAvailable: true,
          },
          {
            name: "Bitss VWAR frontline protection: JavaScript",
            path: "/products/vwar-frontline/js",
          },
          {
            name: "Bitss VWAR frontline protection: Windows Device",
            path: "/products/vwar-frontline/software",
          },
          {
            name: "Bitss VWAR frontline protection: Server",
            path: "/products/vwar-frontline/server",
          },
        ],
      },
    ],
  },
  {
    name: "Hosting",
    children: [],
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
