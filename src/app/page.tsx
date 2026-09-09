import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import AboutSection from "@/components/AboutSection";
import ProductGrid from "@/components/ProductGrid";
import ServicesSection from "@/components/ServicesSection";
import AppointmentSection from "@/components/AppointmentSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <AboutSection />
      <ProductGrid />
      <ServicesSection />
      <AppointmentSection />
      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
