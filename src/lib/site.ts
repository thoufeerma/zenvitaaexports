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
    { label: "Instagram", href: "https://www.instagram.com/zenvitaa.1002" },
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
  { label: "Contact Us", href: "/contact-us" },
  { label: "Coir Mats", href: "/coir-mats" },
];

export const highlights = [
  {
    title: "Premium Quality Ingredients",
    body: "Spray-dried powders and coconut products held to consistent specifications for purity, solubility and shelf life.",
    icon: "/images/icon-leaf.png",
  },
  {
    title: "Global Export Supply",
    body: "Dependable shipments to international markets, coordinated end to end so your production schedule holds.",
    icon: "/images/icon-shipping.png",
  },
  {
    title: "Trusted Manufacturing Standards",
    body: "Produced with certified partners under quality systems suited to demanding food industry requirements.",
    icon: "/images/icon-shield.jpg",
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
    image: "/images/semi-husked-coconut.png",
  },
  {
    name: "Coconut Milk Powder",
    body: "Creamy, readily dispersible coconut milk powder for beverages, desserts, sauces and ready-to-cook applications.",
    kind: "milk",
    image: "/images/coconut-milk-powder.png",
  },
  {
    name: "Desiccated Coconut Powder",
    body: "Milled from freshly harvested kernel, retaining natural aroma and oil content for bakery, confectionery and snack production.",
    kind: "powder",
    image: "/images/desiccated-coconut.png",
  },
  {
    name: "Premium Dried Coconut Milk Powder",
    body: "Spray-dried from premium coconuts for a richer mouthfeel and authentic tropical character in export-grade formulations.",
    kind: "milk",
    image: "/images/premium-coconut-milk.webp",
  },
  {
    name: "Premium Dried Mango Powder",
    body: "Fine mango powder with clean solubility, vivid natural colour and stability across beverage and bakery systems.",
    kind: "mango",
    image: "/images/mango-powder.jpg",
  },
  {
    name: "Bubble Tea Taro Powder",
    body: "Smooth-textured taro powder with an appealing colour and quick preparation, built for high-volume beverage counters.",
    kind: "taro",
    image: "/images/taro-powder.webp",
  },
  {
    name: "Sweet Potato Powder",
    body: "Naturally sweet, evenly milled powder for bakery, beverage and specialty ingredient blends.",
    kind: "potato",
    image: "/images/g-food-powder-1.jpg",
  },
  {
    name: "Virgin Coconut Oil",
    body: "Cold-processed virgin coconut oil with a clean profile for food, nutraceutical and personal care applications.",
    kind: "oil",
    image: "/images/g-coconut-powder-3.jpg",
  },
];

export const services = [
  {
    title: "Shipping Coordination",
    body: "Logistics planned and tracked end to end, so consignments leave and arrive on schedule and in condition.",
  },
  {
    title: "Product Sourcing",
    body: "Fruit and food ingredient powders sourced to the specification, grade and volume international buyers ask for.",
  },
  {
    title: "Global Distribution Support",
    body: "Access to premium ingredients through established export routes and distribution partners.",
  },
  {
    title: "Coconut Products & Food Powders",
    body: "Bulk supply of coconut products and ingredient powders for food manufacturing and export markets.",
  },
  {
    title: "Export Documentation Assistance",
    body: "Complete documentation and compliance support, keeping international trade moving without hold-ups.",
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

/** Applications shown on the Services page */
export const applications = [
  {
    title: "Beverage Applications",
    body: "Powders that disperse cleanly into ready-to-drink, bubble tea and instant beverage systems.",
    image: "/images/svc-beverage.webp",
  },
  {
    title: "Coconut Ingredient Range",
    body: "Milk powder, desiccated coconut and virgin oil supplied to food manufacturing at bulk volumes.",
    image: "/images/svc-coconut-powder.webp",
  },
  {
    title: "Fruit & Specialty Powders",
    body: "Mango, taro and sweet potato powders for bakery, confectionery and specialty formulations.",
    image: "/images/svc-mango.webp",
  },
];

export const coirProducts: {
  name: string;
  body: string;
  kind: IllustrationKind;
  points: string[];
  image?: string;
}[] = [
  {
    name: "PVC Tufted Coir Mats",
    body: "Natural coconut fibre tufted onto a durable PVC backing for strong dirt-scraping performance and long service life.",
    kind: "mat",
    points: ["Anti-slip backing", "Moisture resistant", "Heavy-duty scraping"],
    image: "/images/coir-2.jpeg",
  },
  {
    name: "PP Mats (Polypropylene)",
    body: "Lightweight, hard-wearing and simple to maintain — suited to both indoor and covered outdoor entrances.",
    kind: "mat",
    points: ["Water resistant", "UV stable", "Easy to clean"],
    image: "/images/coir-4.jpeg",
  },
  {
    name: "Full Rubber Mats – Hollow Type",
    body: "An open-hole drainage pattern that lets water, mud and grit fall straight through, ideal for wet zones.",
    kind: "rubber",
    points: ["Free draining", "Wet-area ready", "Hard-wearing"],
  },
  {
    name: "Full Rubber Mats – Pin Type",
    body: "Flexible rubber pins lift dirt off footwear while holding grip underfoot in high-traffic entrances.",
    kind: "rubber",
    points: ["Slip resistant", "High traffic", "Deep dirt removal"],
  },
  {
    name: "Coir Geotextiles",
    body: "Made from 100% natural coconut fibre — biodegradable matting for erosion control, slope stabilisation and landscaping.",
    kind: "geotextile",
    points: ["100% natural fibre", "Biodegradable", "Erosion control"],
    image: "/images/coir-hero.jpeg",
  },
];

/** Gallery page tiles */
export const gallery: { src: string; alt: string; group: string }[] = [
  { src: "/images/g-prod-1.png", alt: "Coconut product range", group: "Products" },
  { src: "/images/g-prod-2.png", alt: "Coconut product range", group: "Products" },
  { src: "/images/g-prod-3.png", alt: "Coconut product range", group: "Products" },
  { src: "/images/g-prod-4.png", alt: "Coconut product range", group: "Products" },
  { src: "/images/g-prod-5.png", alt: "Coconut product range", group: "Products" },
  {
    src: "/images/g-coconut-milk-1.webp",
    alt: "Coconut milk powder",
    group: "Coconut",
  },
  {
    src: "/images/g-coconut-milk-2.webp",
    alt: "Coconut milk powder",
    group: "Coconut",
  },
  {
    src: "/images/g-coconut-powder-3.jpg",
    alt: "Coconut powder",
    group: "Coconut",
  },
  { src: "/images/g-mango-2.jpg", alt: "Mango powder", group: "Fruit powders" },
  {
    src: "/images/g-food-powder-1.jpg",
    alt: "Food ingredient powder",
    group: "Food powders",
  },
  {
    src: "/images/g-food-powder-3.webp",
    alt: "Food ingredient powder",
    group: "Food powders",
  },
  {
    src: "/images/g-food-powder-5.jpg",
    alt: "Food ingredient powder",
    group: "Food powders",
  },
  { src: "/images/g-beverage-1.jpg", alt: "Beverage application", group: "Beverage" },
  { src: "/images/g-beverage-6.jpg", alt: "Beverage application", group: "Beverage" },
  { src: "/images/svc-beverage.webp", alt: "Beverage application", group: "Beverage" },
  {
    src: "/images/about-manufacturing.jpg",
    alt: "Coconut processing line",
    group: "Facility",
  },
  { src: "/images/coir-2.jpeg", alt: "Coir door mat", group: "Coir & Mats" },
  { src: "/images/coir-3.jpeg", alt: "Coir door mat", group: "Coir & Mats" },
  { src: "/images/coir-4.jpeg", alt: "Polypropylene mats", group: "Coir & Mats" },
  { src: "/images/coir-hero.jpeg", alt: "Coir geotextile rolls", group: "Coir & Mats" },
];

/** Certificates shown on the About page */
export const certificates = [
  { src: "/images/cert-fssai.jpg", label: "FSSAI Licence" },
  { src: "/images/cert-udyam.jpg", label: "Udyam Registration" },
];

export const stats = [
  { value: "8+", label: "Ingredient lines" },
  { value: "100%", label: "Kerala sourced" },
  { value: "24/7", label: "Export support" },
  { value: "ISO", label: "Aligned partners" },
];
