const staticNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Security Pack",
    path: "/web-protection-pack",
  },
  {
    name: "Hosting",
    children: [
      {
        icon: "https://img.icons8.com/ios/50/domain.png",
        name: "Web Hosting",
        link: "https://bfinit.com/web-hosting",
        description: "Reliable and affordable web hosting solutions.",
      },
      {
        icon: "https://img.icons8.com/ios/50/database--v1.png",
        name: "VPS Hosting",
        link: "https://bfinit.com/vps-hosting",
        description: "Scalable and secure virtual private servers.",
      },
      {
        icon: "https://img.icons8.com/badges/50/server.png",
        name: "Dedicated Server",
        link: "https://bfinit.com/dedicated-server",
        description: "High-performance servers for demanding applications.",
      },
      {
        icon: "https://img.icons8.com/windows/50/maintenance.png",
        name: "Custom VPS",
        link: "https://bfinit.com/build-your-own-vps",
        description: "Customize resources for your exact needs.",
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

// Path mapping for products
const productPathMapping = {
  "Bitss C Contact Form": {
    wordpress: "/products/c-contact-form/wp",
    javascript: "/products/c-contact-form/js",
  },
  "Bitss WAP": {
    wordpress: "/products/wap-website-protection/wp",
    "windows device": "/products/wap-website-protection/software",
  },
  "Bitss VWAR": {
    wordpress: "/products/vwar-frontline/wp",
    javascript: "/products/vwar-frontline/js",
    "windows device": "/products/vwar-frontline/software",
    server: "/products/vwar-frontline/server",
  },
};

// Function to transform API response to nav structure
export const transformApiToNavStructure = (apiCategories) => {
  const productsCategory = {
    name: "Products",
    categories: apiCategories.map((category) => ({
      title: category.categoryName,
      subTitle: category.sort_description.replace(/^\(|\)$/g, ""), // Remove outer parentheses
      icon: category.image, // Use icon directly from API
      items: category.products.map((product) => {
        const productKey = product.name.toLowerCase();
        const categoryPaths = productPathMapping[category.categoryName] || {};
        const basePath = categoryPaths[productKey];

        // Append product ID to the path for details page fetching
        const productPath = basePath
          ? `${basePath}/${product._id}`
          : `/products/${category.categoryName.toLowerCase().replace(/\s+/g, "-")}/${productKey}/${product._id}`;

        return {
          name: `${category.categoryName}: ${product.name}`,
          path: productPath,
          productId: product._id, // Include product ID for easy access
          isAvailable: product.status === "available",
          price: product.price,
          productDetails: product.product_details,
        };
      }),
    })),
  };

  // Insert products category at index 1 (after Home)
  return [
    staticNavLinks[0], // Home
    productsCategory, // Products (dynamic)
    ...staticNavLinks.slice(1), // Rest of static links
  ];
};

export default staticNavLinks;
