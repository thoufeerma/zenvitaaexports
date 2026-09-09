import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesIntro from "@/components/ServicesIntro";
import ServicesSection from "@/components/ServicesSection";
import ServicesCta from "@/components/ServicesCta";
import TropicalProducts from "@/components/TropicalProducts";
import RequestInfo from "@/components/RequestInfo";
import { servicesImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Global export services for food ingredient supply — sourcing, shipping coordination, distribution support and export documentation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        body="Global Export Services for Food Ingredient Supply"
        image={servicesImages.hero}
        align="left"
        showCrumb={false}
        overlay="light"
      />

      <ServicesIntro />
      <ServicesSection variant="light" />
      <ServicesCta />
      <TropicalProducts />
      <RequestInfo />
    </>
  );
}
