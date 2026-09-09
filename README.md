# Zenvitaa Exports — Next.js + Tailwind

A rebuild of the Zenvitaa Exports site (coconut products and food ingredient powders) on Next.js 15 App Router with Tailwind CSS v4 and TypeScript.

## Running it

```bash
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build && npm start   # production
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, highlights, about, products, services, appointment, why-choose-us, contact |
| `/about-us` | About + quality standards |
| `/services` | Services + how-we-work steps |
| `/gallery` | Ingredients and coir range |
| `/contact-us` | Contact details, enquiry form, embedded map |
| `/coir-mats` | Coir & floor mat collection |
| `/terms`, `/privacy`, `/cookies` | Policy pages |

## Editing content

Nearly all copy, product data and contact details live in one file: **`src/lib/site.ts`**. Company name, phone numbers, email, address, GSTIN, social links, products, services and the coir range are all there — edit that file rather than hunting through components.

## Images

All photography in `public/images/` comes from the live Zenvitaa site and is placed in the same role it held there — product shots on their matching product cards, the processing-line photo in the About section, the coir and PP mat photos on their matching mat entries, and both logo variants in the header and footer.

Cards fall back to a brand-matched SVG illustration when a product has no `image`. Two mat entries (rubber hollow and pin type) use that fallback, because the source site has no photo for them. To add one:

```ts
{
  name: "Full Rubber Mats – Pin Type",
  body: "…",
  kind: "rubber",
  image: "/images/rubber-pin.jpg", // ← renders instead of the illustration
}
```

Three downloaded photos are unused and kept as spares: `about-team.jpeg`, `about-elanora.jpg`, `svc-hero.jpg`.

Three icons referenced by the live site (`Green.png`, `100-Organic.png`, `Farm-Fresh.png`) return 404 there, so the services and why-choose-us sections use the built-in icon set and numbered markers instead. For images served from a CDN, add the host to `remotePatterns` in `next.config.ts`.

## Design system

Brand tokens are defined in `src/app/globals.css` under `@theme`:

- Gold `#c8a06a` (`gold-500`) with a full 50–900 ramp
- Ink `#1f1f1f`, cream `#f5f1e8`
- Jost for headings (`font-display`), Inter for body (`font-sans`)

Useful classes: `.container-x` (page gutter), `.eyebrow` (small-caps section label), `.reveal` (scroll-in animation).

## Animation

- `<FadeUp>` — pure CSS, paints on first frame. Used above the fold so the hero never waits on JavaScript.
- `<Reveal>` — IntersectionObserver fade-up for below-the-fold sections. A `<noscript>` rule in the layout forces content visible when scripting is off, and the component falls back to visible if `IntersectionObserver` is unavailable.

Both respect `prefers-reduced-motion`.

## The enquiry form

`AppointmentForm` composes submissions into a `mailto:` to `customersupport@zenvitaaexports.com` — there is no backend yet. To wire up real delivery, replace `handleSubmit` in `src/components/AppointmentForm.tsx` with a POST to an API route or form service.

## Notes

- Copy is written fresh for this build rather than lifted from the live site; product names, contact details and GSTIN are the real business facts.
- Policy pages are plain-language starting points and should be reviewed by a legal advisor before launch.
- The About page publishes the FSSAI and Udyam certificate scans, as the live site does. Remove `certificates` from `src/lib/site.ts` if they should not be shown.
