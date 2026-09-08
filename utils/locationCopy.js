/**
 * locationCopy.js
 * ---------------------------------------------------------------------------
 * Every user-visible string for the Tamil Nadu location pages.
 *
 * These are templates, but they are templates that take real inputs: the
 * town's own note, its district's economy list, its neighbouring towns. Two
 * town pages built from this file do not read the same, because Sivakasi's
 * fireworks trade and Ooty's hotel trade produce different sentences out of
 * the same function.
 *
 * The FAQ builders matter twice over: the arrays they return are rendered in
 * the page AND used to build the FAQPage schema, so the two can never drift.
 * Google requires FAQ schema content to be visible on the page.
 * ---------------------------------------------------------------------------
 */

/** "a, b and c" — used to fold an economy list into a sentence. */
function list(items = [], joiner = "and") {
  const clean = items.filter(Boolean);
  if (clean.length === 0) return "";
  if (clean.length === 1) return clean[0];
  return `${clean.slice(0, -1).join(", ")} ${joiner} ${clean[clean.length - 1]}`;
}

/** Trim to a length Google will actually display, breaking on a word. */
function clamp(text, max) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

// ===========================================================================
// TOWN PAGES
// ===========================================================================

export function buildTownMeta(town, district) {
  const title = `Website Design Company in ${town.name} | Web Designer in ${town.name}, ${district.name}`;

  const description = clamp(
    `Website design company in ${town.name}, ${district.name}. ${town.note} We build fast, mobile-first sites with local SEO, Google Business Profile setup and WhatsApp enquiry routing. Free quote.`,
    250,
  );

  const keywords = [
    `website design company in ${town.name}`,
    `web development company ${town.name}`,
    `website designer ${town.name}`,
    `web design ${town.name} ${district.name}`,
    `digital marketing agency ${town.name}`,
    `google business profile ${town.name}`,
    `ecommerce website ${town.name}`,
    `app developers ${district.name}`,
  ];

  return { title, description, keywords };
}

export function buildTownHeroCopy(town, district) {
  return `${town.note} We build websites for businesses here that load fast on a mobile connection, rank for ${town.name} searches, and turn enquiries into WhatsApp conversations instead of unread emails.`;
}

export function buildTownFaq(town, district, siblings = []) {
  const nearby = siblings.slice(0, 3).map((t) => t.name);
  const economy = list(district.economy.slice(0, 3));

  return [
    {
      q: `Do you build websites for businesses in ${town.name}?`,
      a: `Yes. We work with businesses across ${district.name} district, ${town.name} included. ${town.note} We build the site around how customers there actually find and compare you, rather than shipping a template.`,
    },
    {
      q: `How much does a website cost for a ${town.name} business?`,
      a: `Pricing is fixed and quoted upfront, so you know the full cost before work starts. A focused site for a single-location business in ${town.name} costs considerably less than a multi-page platform with custom dashboards — we scope it to what your business actually needs.`,
    },
    {
      q: `How long will my ${town.name} website take to build?`,
      a: `Core Next.js sites are built and deployed in 7 to 14 working days. Larger e-commerce builds with custom dashboards run 21 to 45 days depending on the operational logic involved.`,
    },
    {
      q: `Will my website rank for "${town.name}" searches on Google?`,
      a: `That is what the local SEO work is for. Every build ships with Google Business Profile setup, schema markup naming ${town.name} and ${district.name}, clean URLs and an XML sitemap — so you compete for local searches from launch rather than waiting on a separate SEO project.`,
    },
    {
      q: `Do you work with ${economy} businesses?`,
      a: `Yes — those are among the main trades across ${district.name}, and the sites we build for them are structured around what their buyers compare first. For a business selling to wholesalers or distributors that means specifications and availability upfront, not hidden behind a contact form.`,
    },
    nearby.length
      ? {
          q: `Do you serve other towns near ${town.name}?`,
          a: `Yes. We build for businesses across ${district.name} district, including ${list(nearby)}. Each location gets its own page and its own Google Business Profile work rather than one generic district-wide page.`,
        }
      : {
          q: `Do you serve the rest of ${district.name} district?`,
          a: `Yes, we build for businesses across the whole of ${district.name} district, with local SEO tuned to the specific town you operate from.`,
        },
    {
      q: `Can you handle everything remotely, or do we need to meet in ${town.name}?`,
      a: `Almost everything runs over WhatsApp and calls — content, revisions and approvals — which is how most of our clients outside the major cities prefer to work. Nothing about the process requires you to travel.`,
    },
  ];
}

// ===========================================================================
// DISTRICT HUBS
// ===========================================================================

export function buildDistrictMeta(district) {
  const townCount = district.towns.length;
  const sample = list(district.towns.slice(0, 3).map((t) => t.name));

  const title = `Website Design Company in ${district.name} District | Web Designers Across ${district.name}`;

  const description = clamp(
    `Website design and development across ${district.name} district — ${sample} and ${townCount - 3 > 0 ? `${townCount - 3} more towns` : "more"}. Local SEO, mobile-first builds and WhatsApp enquiry routing for ${list(district.economy.slice(0, 2))} businesses.`,
    250,
  );

  const keywords = [
    `website design company in ${district.name}`,
    `web development company ${district.name}`,
    `website designer ${district.name} district`,
    `local seo ${district.name}`,
    `digital marketing agency ${district.name}`,
    ...district.towns.slice(0, 6).map((t) => `website design ${t.name}`),
  ];

  return { title, description, keywords };
}

export function buildDistrictFaq(district) {
  const townNames = list(district.towns.slice(0, 4).map((t) => t.name));

  return [
    {
      q: `Which towns in ${district.name} district do you cover?`,
      a: `We build websites across the whole district — ${district.towns.length} towns and localities including ${townNames}. Each has its own page and its own local SEO setup rather than sharing one district-wide page.`,
    },
    {
      q: `What kind of businesses do you work with in ${district.name}?`,
      a: `${district.profile} We build for the businesses inside that economy — the site is shaped by who your buyers are and what they compare before contacting you.`,
    },
    {
      q: `Do you charge more for businesses outside the district headquarters?`,
      a: `No. Pricing depends on what the site needs to do, not where you are. A business in a smaller town in ${district.name} pays the same as one in the district centre for the same scope of work.`,
    },
    {
      q: `How do I get started with a website for my ${district.name} business?`,
      a: `Message us on WhatsApp with what your business does and who buys from you. We come back with a fixed quote and a timeline — usually 7 to 14 working days for a core build.`,
    },
    {
      q: `Do you provide Google Business Profile setup in ${district.name}?`,
      a: `Yes, it is part of every build. Local SEO for a business here means being found for your own town's name, not just the district — so the profile, the schema and the on-page content all name the town you actually operate from.`,
    },
  ];
}

// ===========================================================================
// STATE HUB
// ===========================================================================

export function buildStateMeta(counts) {
  const title = `Website Design Company in Tamil Nadu | Web Designers in All ${counts.districts} Districts`;

  const description = clamp(
    `Website design and development across all ${counts.districts} districts of Tamil Nadu and ${counts.towns} towns. Fast, mobile-first sites with local SEO, Google Business Profile setup and WhatsApp enquiry routing. Free quote.`,
    250,
  );

  const keywords = [
    "website design company in Tamil Nadu",
    "web development company Tamil Nadu",
    "website designer Tamil Nadu",
    "local seo company Tamil Nadu",
    "digital marketing agency Tamil Nadu",
    "app development company Tamil Nadu",
  ];

  return { title, description, keywords };
}

export function buildStateFaq(counts) {
  return [
    {
      q: "Which parts of Tamil Nadu do you cover?",
      a: `All ${counts.districts} districts, and ${counts.towns} towns and localities within them — from Chennai and Coimbatore down to smaller taluk towns. Each location has its own page with local SEO built for that specific place.`,
    },
    {
      q: "Do you work with businesses outside the major cities?",
      a: "Most of our clients are outside the metros. A business in a taluk town often has less local competition online, which means a well-built site can rank quickly for searches that a competitor never targeted.",
    },
    {
      q: "What does a website cost?",
      a: "Pricing is fixed and quoted upfront based on scope, not location. A focused single-location site costs considerably less than a multi-page e-commerce platform, and you know the full figure before any work starts.",
    },
    {
      q: "Do you build sites in Tamil as well as English?",
      a: "We can add Tamil for key pages — contact, services, footer — and quote full bilingual builds separately based on content volume. Which makes sense depends on whether your buyers are local or from outside the state.",
    },
    {
      q: "How long does a website take?",
      a: "Seven to fourteen working days for a core Next.js build. Larger e-commerce systems with custom dashboards take 21 to 45 days depending on the operational logic involved.",
    },
  ];
}
