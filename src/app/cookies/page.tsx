import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${company.name} uses cookies on this website.`,
};

export default function CookiesPage() {
  return (
    <PolicyPage
      title="Cookie Policy"
      intro="What cookies this site uses and how you can control them."
      sections={[
        {
          heading: "What cookies are",
          body: [
            "Cookies are small text files a website stores in your browser. They let the site remember your preferences and help us understand how visitors move through the pages.",
          ],
        },
        {
          heading: "Cookies we use",
          body: [
            "Essential cookies keep the site working — they handle things like page navigation and basic security. The site cannot function properly without them.",
            "Analytics cookies, where enabled, tell us which pages are visited and how long people stay. The data is aggregated and does not identify you personally.",
          ],
        },
        {
          heading: "Third-party content",
          body: [
            "Our contact page embeds a map from Google Maps, and that provider may set its own cookies. Their use of those cookies is governed by their own policies.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "Every major browser lets you view, block or delete cookies from its settings. Blocking essential cookies may stop parts of this site from working as intended.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            `We may update this policy as the site changes. Questions can go to ${company.email}.`,
          ],
        },
      ]}
    />
  );
}
