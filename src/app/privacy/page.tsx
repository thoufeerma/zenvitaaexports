import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${company.name} handles the information you share with us.`,
};

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="How we handle the information you share when you contact us."
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you submit an enquiry or appointment request, we collect the name, phone number, email address and any details you choose to include in your message.",
            "We also collect basic technical information such as browser type and pages visited, which helps us understand how the site is used.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details to respond to your enquiry, prepare quotations and specifications, and manage the supply relationship that follows.",
            "We do not sell your information, and we do not use it for unrelated marketing without your consent.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "Your details may be shared with our manufacturing and logistics partners where that is necessary to fulfil your order, and with authorities where the law requires it. Everyone we share information with is expected to keep it confidential.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "Enquiry records are retained for as long as needed to serve you and to meet our commercial and statutory obligations, after which they are deleted or anonymised.",
          ],
        },
        {
          heading: "Your choices",
          body: [
            `You can ask us to correct or delete the information we hold about you by writing to ${company.email}. We will respond within a reasonable period.`,
          ],
        },
        {
          heading: "Security",
          body: [
            "We take reasonable technical and organisational measures to protect the information we hold. No method of transmission over the internet is completely secure, so please avoid sending sensitive details by email.",
          ],
        },
      ]}
    />
  );
}
