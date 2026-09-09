import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms governing the use of the ${company.name} website.`,
};

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Use"
      intro="The terms that apply when you use this website and get in touch with us."
      sections={[
        {
          heading: "Using this website",
          body: [
            `This website is operated by ${company.legalName}. By browsing it or sending us an enquiry, you agree to the terms set out on this page.`,
            "You may use the site to learn about our products and services and to contact us about supply. Please do not use it in any way that disrupts the site or interferes with other visitors.",
          ],
        },
        {
          heading: "Product information",
          body: [
            "Product descriptions, specifications and images on this site are provided for general guidance. Actual specifications are confirmed in writing on a per-order basis, and agreed specification sheets take precedence over anything published here.",
            "Availability, grades and pricing may change without notice.",
          ],
        },
        {
          heading: "Enquiries and quotations",
          body: [
            "An enquiry submitted through this website is not an order. A binding agreement is formed only once we issue a written quotation or proforma invoice and you confirm it.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            `The content, branding and design of this site belong to ${company.legalName} unless stated otherwise. Please ask before reproducing any of it.`,
          ],
        },
        {
          heading: "Liability",
          body: [
            "We take care to keep the information here accurate and current, but we do not warrant that it is complete or error-free. To the extent permitted by law, we are not liable for loss arising from reliance on the content of this website.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of India, and the courts of Kerala have jurisdiction over any dispute arising from them.",
          ],
        },
      ]}
    />
  );
}
