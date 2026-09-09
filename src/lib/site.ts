export type IllustrationKind =
  | "coconut"
  | "powder"
  | "milk"
  | "mango"
  | "taro"
  | "potato"
  | "oil"
  | "mat"
  | "rubber"
  | "geotextile";

export const company = {
  name: "Zenvitaa Exports",
  legalName: "Zenvitaa Exports Private Limited",
  tagline: "Premium Food Ingredients",
  intro:
    "Coconut-based products and premium food powders, supplied from Kerala to food and beverage manufacturers worldwide.",
  gstin: "32AACCZ9010A1ZW",
  email: "customersupport@zenvitaaexports.com",
  phones: ["+91 9747788767", "+91 7510853207"],
  /** Destination for every enquiry form. Digits only, with country code. */
  whatsapp: "919747788767",
  address: {
    lines: [
      "No. 4D, Tower 2",
      "Asten Viveria, Thengode",
      "Kakkanad, Ernakulam – 682030",
      "Kerala, India",
    ],
  },
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/share/1FYuhcqRqk/" },
    { label: "Instagram", href: "https://www.instagram.com/zenvitaaexports/" },
    { label: "YouTube", href: "https://www.youtube.com/" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/zenvitaa-exports-private-limited/",
    },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Coir Mats", href: "/coir-mats" },
  { label: "Contact Us", href: "/contact-us" },
];

/**
 * Client-supplied homepage photography. Files keep the names and folders they
 * arrived in, so new drops into "public/images/home page images" only need a
 * path added here.
 */
const HOME = "/images/home page images";

export const homeImages = {
  hero: `${HOME}/hero home page.webp`,
  about: `${HOME}/Who we are.webp`,
  appointment: `${HOME}/Get an Appointment.webp`,
  /** Processing-line shot; only 626x373, so it is used small rather than full-bleed */
  processing: `${HOME}/hero home page 3.avif`,
};

export const contactImages = {
  hero: "/images/contact us hero.jpg",
};

/** Client-supplied About-page photography */
const ABOUT = "/images/About us";

export const aboutImages = {
  hero: `${ABOUT}/tabita-princesia-iftiVQFH0Po-unsplash-scaled.webp`,
  whoWeAre: `${ABOUT}/nisha-ramesh-IiiTDxnHDzg-unsplash-scaled.webp`,
};

export const aboutHeroIntro =
  "Zenvitaa Exports Private Limited supplies premium coconut-based products and spray dried food powders to international markets. Our range includes spray dried coconut milk powder, desiccated coconut powder, virgin coconut oil, spray dried mango powder, taro powder, and sweet potato powder.";

/** Cut-out product cards under "The Future of Food" on /about-us */
export const futureOfFood = [
  {
    name: "Semi-husked coconut",
    body: "Semi-husked coconut with natural freshness and rich flavor, ideal for cooking, oil extraction, and food processing.",
    image: `${ABOUT}/isaac-n-c-hL9pRezOKwc-unsplash-removebg-preview.webp`,
  },
  {
    name: "Coconut Milk Powder",
    body: "Rich and creamy coconut milk powder ideal for beverages, desserts, and food applications.",
    image: `${ABOUT}/coconut-powder-nobg-rkmu1et9erij3pjcptmrlkijzczsokbvq5ek4sv0g0.webp`,
  },
  {
    name: "Dessicated coconut powder",
    body: "Made from freshly harvested coconuts, our desiccated coconut powder delivers natural taste, aroma, and high oil content for superior performance in food applications.",
    image: `${ABOUT}/images-removebg-preview.webp`,
  },
  {
    name: "Virgin coconut oil",
    body: "Extracted from fresh coconuts using cold-pressed methods, our virgin coconut oil preserves its natural nutrients, aroma, and purity.",
    image: `${ABOUT}/ChatGPT_Image_Mar_25__2026__11_16_16_AM-removebg-preview-rl0jfpboj6r4fctfeo6c6bfap4x1q5ebtbzh3kj85c.webp`,
  },
];

/** Elanora brand block, shown after the certificates on /about-us */
export const elanora = {
  wordmark: `${ABOUT}/ChatGPT_Image_Apr_6__2026__11_06_38_AM-removebg-preview-e1775454173842.webp`,
  logo: `${ABOUT}/elanora_tm.webp`,
  paragraphs: [
    "Elanora is a premium food brand focused on delivering high-quality coconut-based products, fruit and vegetable powders, and innovative beverage premixes. Sourced from trusted farms and processed with care, our products are designed to meet international quality standards while preserving natural taste and nutrition.",
    "Our diverse portfolio includes coconut milk powder, desiccated powder, fruit and vegetable powders, as well as specialty tea premixes such as taro. We cater to global markets with a commitment to consistency, hygiene, and excellence.",
    "At Elanora, we combine authentic sourcing with modern processing to create reliable, export-grade food solutions for businesses and consumers worldwide.",
  ],
};

/** Body copy for the "Who we are" section, on both home and /about-us */
export const aboutParagraphs = [
  "Zenvitaa Exports Private Limited is a Kerala-based export company dedicated to supplying high-quality coconut-based products and premium food powders to global markets.",
  "Our core product portfolio includes semi-husked coconuts, coconut milk powder, desiccated coconut powder, virgin coconut oil, mango powder, bubble tea taro powder, and sweet potato powder—carefully sourced and processed to meet the evolving demands of the international food and beverage industry.",
  "Our products are widely used across food manufacturing, beverage applications, bakery, confectionery, and specialty ingredient segments, delivering consistency, functionality, and superior quality.",
  "With a strong focus on product integrity, quality assurance, and dependable supply, we work closely with certified manufacturing partners to ensure compliance with international standards. Zenvitaa Exports is committed to providing efficient export operations, consistent quality, and long-term value to our global clients.",
];

export const highlights = [
  {
    title: "Premium Quality Ingredients",
    body: "Spray-dried powders and coconut products held to consistent specifications for purity, solubility and shelf life.",
    icon: "leaf" as const,
  },
  {
    title: "Global Export Supply",
    body: "Dependable shipments to international markets, coordinated end to end so your production schedule holds.",
    icon: "ship" as const,
  },
  {
    title: "Trusted Manufacturing Standards",
    body: "Produced with certified partners under quality systems suited to demanding food industry requirements.",
    icon: "shield" as const,
  },
];

export const products: {
  name: string;
  body: string;
  kind: IllustrationKind;
  image?: string;
}[] = [
  {
    name: "Semi-husked Coconut",
    body: "Fresh semi-husked coconuts selected for firm kernel and high yield — suited to culinary use, oil extraction and traditional food processing.",
    kind: "coconut",
    image: `${HOME}/Our Premium Food Ingredients/Semi-husked coconut.webp`,
  },
  {
    name: "Coconut Milk Powder",
    body: "Creamy, readily dispersible coconut milk powder for beverages, desserts, sauces and ready-to-cook applications.",
    kind: "milk",
    image: `${HOME}/Our Premium Food Ingredients/Coconut Milk Powder.webp`,
  },
  {
    name: "Desiccated Coconut Powder",
    body: "Milled from freshly harvested kernel, retaining natural aroma and oil content for bakery, confectionery and snack production.",
    kind: "powder",
    image: `${HOME}/Our Premium Food Ingredients/Dessicated coconut powder.webp`,
  },
  {
    name: "Premium Dried Coconut Milk Powder",
    body: "Spray-dried from premium coconuts for a richer mouthfeel and authentic tropical character in export-grade formulations.",
    kind: "milk",
    image: `${HOME}/Our Premium Food Ingredients/Premium Dried Coconut Milk Powder.webp`,
  },
  {
    name: "Premium Dried Mango Powder",
    body: "Fine mango powder with clean solubility, vivid natural colour and stability across beverage and bakery systems.",
    kind: "mango",
    image: `${HOME}/Our Premium Food Ingredients/Premium Dried Mango Powder.webp`,
  },
  {
    name: "Bubble Tea Taro Powder",
    body: "Smooth-textured taro powder with an appealing colour and quick preparation, built for high-volume beverage counters.",
    kind: "taro",
    image: `${HOME}/Our Premium Food Ingredients/Bubble Tea Taro Powder.webp`,
  },
];

/** Client-supplied Services-page photography */
const SERVICES = "/images/Services";

export const servicesImages = {
  hero: `${SERVICES}/hero.webp`,
  intro: `${SERVICES}/Reliable Export Solutions for Global Food Businesses.webp`,
  cta: `${SERVICES}/Trusted Source for Quality Coconuts & Tropical Products.webp`,
  request: `${SERVICES}/Request Product Information.webp`,
};

export const services: { title: string; body: string; icon?: string }[] = [
  {
    title: "Shipping Coordination",
    body: "Efficient logistics and shipping coordination ensuring timely and secure delivery worldwide.",
    // No icon file supplied — the source site's Green.png 404s.
  },
  {
    title: "Product Sourcing",
    body: "Sourcing high-quality fruit and food ingredient powders tailored to the requirements of international buyers.",
    icon: `${SERVICES}/Vegan.webp`,
  },
  {
    title: "Global Distribution Support",
    body: "Helping global partners access premium ingredients through reliable distribution and export networks.",
    icon: `${SERVICES}/Vegan-Restaurant.webp`,
  },
  {
    title: "Coconut products and food ingredient powders",
    body: "Premium coconut products and food ingredient powders, ideal for bulk supply, food manufacturing, and global export markets.",
    icon: `${SERVICES}/Handmade-1.webp`,
  },
  {
    title: "Export Documentation Assistance",
    body: "Complete support with export documentation and compliance to ensure smooth international trade.",
    icon: `${SERVICES}/Vegan-Friendly.webp`,
  },
];

/** Left column of the "Our Services" block */
export const servicesIntro = {
  lead: "Zenvitaa Exports Private Limited specializes in the global supply of premium coconut and coconut-based products, delivering high-quality ingredients with reliable bulk export and seamless logistics for international partners.",
  points: [
    {
      icon: "leaf" as const,
      title: "Premium Quality Ingredients",
      body: "We supply a carefully curated range of spray dried coconut milk powder, desiccated coconut powder, virgin coconut oil, spray dried mango powder, taro powder, and sweet potato powder—designed to meet the quality and performance standards of the food, beverage, bakery, and ingredient industries",
    },
    {
      icon: "check" as const,
      title: "Reliable Global Supply",
      body: "Zenvitaa Exports Private Limited delivers end-to-end export solutions for premium coconut-based products and spray dried food powders. We support global partners with efficient sourcing, streamlined logistics, and dependable supply to ensure seamless international trade operations.",
    },
    {
      icon: "handshake" as const,
      title: "Consistent & Reliable Global Supply",
      body: "With a strong sourcing network and export expertise, we ensure consistent product availability, timely shipments, and reliable delivery schedules for our international clients. Our focus is on building long-term partnerships through trust, quality, and operational excellence.",
    },
  ],
};

/** Mid-page call to action on /services */
export const servicesCta = {
  title: "Trusted Source for Quality Coconuts & Tropical Products",
  body: "With a focus on quality, reliability, and efficient export logistics, Zenvitaa Exports supports businesses worldwide with premium spray dried food powders and ingredient solutions.",
};

/** "Our Products" cards on /services */
export const tropicalProducts = [
  {
    name: "Fruit Powders",
    body: "Premium tropical fruit powders produced from carefully selected fruits for use in beverages, desserts, and food products.",
    image: `${SERVICES}/Fruit Powders.avif`,
  },
  {
    name: "Coconut Powder",
    body: "Natural coconut powder with rich flavor and long shelf life, perfect for bakery, beverages, and culinary applications.",
    image: `${SERVICES}/Coconut Powder.webp`,
  },
  {
    name: "Beverage Mixes",
    body: "High-quality beverage ingredients and mixes designed for food and beverage manufacturers worldwide.",
    image: `${SERVICES}/Beverage Mixes.webp`,
  },
];

export const whyChooseUs = [
  {
    title: "Premium Quality Products",
    body: "Advanced spray-drying and careful sourcing deliver consistent, specification-grade output.",
  },
  {
    title: "Reliable Supply Chain",
    body: "A steady production and shipping pipeline that keeps product available when you need it.",
  },
  {
    title: "Trusted Global Exporter",
    body: "A dependable partner for food ingredient supply across international markets.",
  },
];

/** Client-supplied Coir Mats photography */
const COIR = "/images/Coir Mats";

export const coirImages = {
  /** Pre-composed banner with its own typography baked in */
  hero: `${COIR}/hero .jpg`,
  whoWeAre: `${COIR}/Who we are.webp`,
};

export const coirPillars = [
  {
    title: "Premium Quality Materials",
    body: "Crafted using high-grade coir, polypropylene, and rubber to ensure superior durability, performance, and long-lasting reliability.",
  },
  {
    title: "Custom Manufacturing",
    body: "Available in multiple sizes, designs, printed patterns, and customized solutions to meet residential and commercial requirements.",
  },
  {
    title: "Global Export Standards",
    body: "Manufactured with strict quality control, export-grade packaging, and dependable delivery for international markets.",
  },
];

export const coirAbout = {
  title: "Premium Coir & Floor Mats Crafted for Every Entrance",
  paragraphs: [
    "We are a trusted manufacturer and exporter of premium floor mats, delivering high-quality solutions for homes, offices, hotels, commercial spaces, and industrial applications. Our product range includes PVC tufted coir mats, polypropylene mats, rubber mats, and eco-friendly coir geotextiles—designed to combine durability, functionality, and aesthetic appeal.",
    "With a commitment to superior craftsmanship, international quality standards, and timely delivery, we provide reliable flooring solutions tailored to the needs of customers across global markets.",
  ],
};

export const coirCollection = {
  title: "Crafted to Welcome Every Space",
  intro:
    "Discover our premium range of floor mat solutions designed for residential, commercial, industrial, and landscaping applications. From elegant coir entrance mats to durable rubber mats, polypropylene mats, and eco-friendly coir geotextiles, every product is crafted to deliver lasting performance, superior protection, and exceptional quality.",
};

/** Detailed specification block below the collection on /coir-mats */
export const coirCatalogue = {
  title: "Premium Coir & Floor Mat Collection",
  subtitle:
    "High Quality Export Floor Mats for Residential, Commercial & Industrial Applications",
  aboutHeading: "About Us",
  about:
    "We are a trusted exporter of premium-quality floor mats designed for homes, offices, hotels, commercial buildings, industrial facilities, and outdoor applications. Our products combine durability, functionality, and attractive designs to provide superior dirt removal, moisture absorption, and floor protection. Manufactured using high-quality materials and international export standards, our products are supplied worldwide with consistent quality and timely delivery.",
};

export type CoirSpec = {
  name: string;
  description: string;
  groups: { heading: string; items: string[] }[];
  callout?: { title: string; items: string[] };
};

export const coirSpecs: CoirSpec[] = [
  {
    name: "PVC Tufted Coir Mats",
    description:
      "PVC Tufted Coir Mats combine natural coconut coir fibers with a durable PVC backing, offering excellent dirt scraping performance, superior grip, and long-lasting durability. These mats provide an attractive appearance while effectively protecting indoor spaces from dirt and moisture.",
    groups: [
      {
        heading: "Features",
        items: [
          "Natural Coir Surface",
          "Strong PVC Backing",
          "Anti-Slip Design",
          "High Durability",
          "Moisture Resistant",
        ],
      },
      {
        heading: "Applications",
        items: ["Home Entrances", "Hotels", "Resorts", "Offices", "Retail Stores"],
      },
      {
        heading: "Available Options",
        items: ["Plain Mats", "Printed Mats", "Custom Designs"],
      },
      {
        heading: "Available Sizes",
        items: [
          "40 × 60 cm",
          "40 × 70 cm",
          "45 × 75 cm (30 × 18)",
          "60 × 90 cm (3 × 2)",
        ],
      },
    ],
    callout: {
      title: "Why Choose Our Products?",
      items: [
        "Premium Quality Materials",
        "Competitive Export Pricing",
        "Custom Sizes & Designs",
        "Timely Delivery",
        "Bulk Order Capability",
        "International Export Standards",
      ],
    },
  },
  {
    name: "PP Mats (Polypropylene Mats)",
    description:
      "Polypropylene Mats are lightweight, durable, and easy to maintain. Designed for both indoor and outdoor use, these mats offer excellent resistance to water, UV rays, and daily wear while enhancing the appearance of any space.",
    groups: [
      {
        heading: "Features",
        items: [
          "Water Resistant",
          "Easy to Clean",
          "UV Resistant",
          "Lightweight",
          "Long Lasting",
          "Available in Attractive Colors",
        ],
      },
      {
        heading: "Applications",
        items: [
          "Homes",
          "Balconies",
          "Gardens",
          "Offices",
          "Commercial Buildings",
        ],
      },
      {
        heading: "Available Sizes",
        items: [
          "40 × 60 cm",
          "45 × 75 cm",
          "50 × 80 cm",
          "60 × 90 cm",
          "80 × 120 cm",
          "5 × 3 ft",
          "6 × 4 ft",
        ],
      },
    ],
  },
  {
    name: "Full Rubber Mats – Hollow Type",
    description:
      "Hollow Rubber Mats feature an open-hole drainage design that allows water, mud, dust, and debris to pass through easily. These mats are ideal for outdoor entrances, industrial environments, and wet areas where safety and cleanliness are essential.",
    groups: [
      {
        heading: "Features",
        items: [
          "Heavy Duty Construction",
          "Anti-Slip Surface",
          "Excellent Drainage",
          "Weather Resistant",
          "Long Service Life",
        ],
      },
      {
        heading: "Applications",
        items: [
          "Entrances",
          "Industrial Areas",
          "Kitchens",
          "Wet Zones",
          "Outdoor Walkways",
        ],
      },
      {
        heading: "Available Sizes",
        items: [
          "40 × 60 cm",
          "50 × 80 cm",
          "50 × 100 cm",
          "80 × 120 cm",
          "100 × 150 cm",
        ],
      },
    ],
  },
  {
    name: "Full Rubber Mats – Pin Type",
    description:
      "Pin Rubber Mats feature flexible rubber pins that efficiently remove dirt, dust, and moisture from footwear while providing excellent grip and slip resistance. Suitable for heavy foot traffic in commercial environments.",
    groups: [
      {
        heading: "Features",
        items: [
          "Superior Dirt Scraping",
          "Non-Slip Backing",
          "Natural Rubber Construction",
          "Easy Maintenance",
          "Heavy Duty Performance",
        ],
      },
      {
        heading: "Applications",
        items: [
          "Commercial Buildings",
          "Shopping Malls",
          "Hotels",
          "Hospitals",
          "Office Entrances",
        ],
      },
      {
        heading: "Available Sizes",
        items: ["40 × 60 cm", "45 × 75 cm"],
      },
    ],
  },
  {
    name: "Coir Geotextiles",
    description:
      "Coir Geotextiles are eco-friendly erosion control mats manufactured from 100% natural coconut fibers. These biodegradable products help prevent soil erosion, stabilize slopes, improve vegetation growth, and provide sustainable solutions for landscaping and civil engineering projects.",
    groups: [
      {
        heading: "Features",
        items: [
          "100% Natural Coconut Fiber",
          "Eco-Friendly & Biodegradable",
          "Prevents Soil Erosion",
          "Supports Plant Growth",
          "Durable & Easy to Install",
        ],
      },
      {
        heading: "Applications",
        items: [
          "Riverbanks",
          "Road Embankments",
          "Hill Slopes",
          "Landscaping Projects",
          "Coastal Protection",
          "Environmental Restoration",
        ],
      },
      {
        heading: "Available Specifications",
        items: ["400 GSM", "500 GSM", "700 GSM", "900 GSM"],
      },
      {
        heading: "Packaging",
        items: ["Roll Form", "Export Quality Packing"],
      },
    ],
    callout: {
      title: "Why Choose Our Coir Geotextiles?",
      items: [
        "Sustainable & Eco-Friendly Solution",
        "Premium Quality Materials",
        "Competitive Export Pricing",
        "Suitable for Global Export Markets",
      ],
    },
  },
];

export const coirProducts: { name: string; body: string; image: string }[] = [
  {
    name: "PVC Tufted Coir Mats",
    body: "Premium natural coir mats with a durable PVC backing, designed for superior dirt removal, slip resistance, and long-lasting performance.",
    image: `${COIR}/PVC Tufted Coir Mats.webp`,
  },
  {
    name: "PP (Polypropylene) Mats",
    body: "Lightweight, water-resistant mats available in attractive colors, ideal for homes, offices, balconies, gardens, and commercial spaces.",
    image: `${COIR}/PP (Polypropylene) Mats.webp`,
  },
  {
    name: "Rubber Mats",
    body: "Heavy-duty rubber mats with anti-slip surfaces and excellent drainage, engineered for industrial, commercial, and high-traffic environments.",
    image: `${COIR}/rubber mat.jpg`,
  },
];

/** Gallery page tiles. Reorder freely — the grid follows this order. */
const GALLERY = "/images/Gallery";

export const gallery: { src: string; alt: string }[] = [
  { src: `${GALLERY}/coconut-milk-powder-1-1-300x200.webp`, alt: "Coconut milk powder in a wooden bowl" },
  { src: `${GALLERY}/beverage-5-300x220.webp`, alt: "Powder being mixed into a beverage" },
  { src: `${GALLERY}/coconut-milk-powder-2-300x300.webp`, alt: "Coconut milk powder with fresh coconut" },
  { src: `${GALLERY}/mangopowder-2-300x300.webp`, alt: "Mango powder with fresh mango" },
  { src: `${GALLERY}/mangopowder-1-300x200.webp`, alt: "Mango powder on a wooden board" },
  { src: `${GALLERY}/food-ingredient-powder-1-1-300x300.webp`, alt: "Food ingredient powder" },
  { src: `${GALLERY}/coconut-powder-3-1-300x200.webp`, alt: "Coconut powder with coconut halves" },
  { src: `${GALLERY}/food-ingredient-powder-3-300x200.webp`, alt: "Spiced food ingredient powder" },
  { src: `${GALLERY}/beverage-1-300x200.webp`, alt: "Beverage application" },
  { src: `${GALLERY}/beverage-6-300x169.webp`, alt: "Beverage application" },
  { src: `${GALLERY}/food-ingredient-powder-5-300x150.webp`, alt: "Food ingredient powder" },
  { src: `${GALLERY}/ChatGPT-Image-Mar-25-2026-02_24_09-PM-300x200.webp`, alt: "Coconut product range" },
  { src: `${GALLERY}/ChatGPT-Image-Mar-25-2026-02_24_11-PM-300x200.webp`, alt: "Coconut product range" },
  { src: `${GALLERY}/ChatGPT-Image-Mar-25-2026-02_24_14-PM-300x200.webp`, alt: "Coconut product range" },
  { src: `${GALLERY}/ChatGPT-Image-Mar-25-2026-02_25_03-PM-300x200.webp`, alt: "Coconut product range" },
  { src: `${GALLERY}/ChatGPT-Image-Mar-25-2026-02_27_38-PM-300x200.webp`, alt: "Coconut product range" },
];

/** Certificates shown on the About page */
export const certificates = [
  { src: `${ABOUT}/FSSAI-License_page-0001.webp`, label: "FSSAI Licence" },
  {
    src: `${ABOUT}/ZENVITAA-UDYAM-CERTIFICATE_page-0001.webp`,
    label: "Udyam Registration",
  },
];

export const stats = [
  { value: "8+", label: "Ingredient lines" },
  { value: "100%", label: "Kerala sourced" },
  { value: "24/7", label: "Export support" },
  { value: "ISO", label: "Aligned partners" },
];
