/**
 * theniServicesData.js
 * ------------------------------------------------------------------
 * Single source of truth for the Theni service-specific landing pages
 * (website-development-company-in-theni, web-design-company-in-theni,
 * ecommerce-website-development-in-theni, digital-marketing-company-in-theni,
 * seo-company-in-theni, local-seo-services-in-theni,
 * google-business-profile-optimization-in-theni, google-ads-agency-in-theni,
 * social-media-marketing-in-theni).
 *
 * Same rule as districtsData.js: every entry is written for a specific
 * service angle grounded in Theni's real economy (cardamom/spice estates,
 * Cumbum Valley grape & banana farms, Bodinayakanur sugar mills, and
 * agro-tourism around Megamalai/Suruli Falls) — not one paragraph with
 * the service name swapped in nine times.
 * ------------------------------------------------------------------
 */

import { siteConfig } from './districtsData';

export const theniServices = [
  {
    slug: 'website-development-company-in-theni',
    pageTitle: 'Website Development Company in Theni',
    metaTitle: 'Website Development Company in Theni | Custom Web Apps & Portals',
    metaDescription:
      'Website development company in Theni building custom Next.js web applications for plantation, sugar-mill and agro-trade businesses — buyer portals, product databases and WhatsApp order routing.',
    keywords: [
      'website development company in Theni',
      'web application development Theni',
      'custom website development Bodinayakanur',
      'Next.js developer Theni',
      'business portal development Theni',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Website Development Company in Theni',
      subheadline:
        "Most Theni businesses don't need a brochure — they need a working system: a buyer portal for an export estate, a searchable spec sheet for a sugar-mill supplier, or an order form wiemerald straight to WhatsApp. We build the engineering behind the page, not just the page.",
      cta: 'Get a Free Technical Audit',
    },
    intro: [
      "There's a difference between a website that looks finished and one that actually does something for the business behind it. In Theni, that gap shows up constantly — a cardamom estate with a beautiful homepage but no way for an export buyer to check current grade and pricing without a phone call, or a Cumbum Valley grower whose \"contact us\" form quietly drops half its submissions because nobody built the backend to catch them properly.",
      "Our development work here is System-first: product databases that a non-technical office manager in Bodinayakanur can update themselves before each harvest, buyer enquiry flows that land directly in WhatsApp instead of an inbox nobody checks, and admin dashboards sized for a two-person back office rather than an enterprise IT team. We build on Next.js because it renders fast on the patchy mobile connections common near the Western Ghats border, and because it doesn't lock you into a page-builder you'll outgrow in a year.",
    ],
    services: [
      { title: 'Custom Web Application Development', description: 'Buyer portals, RFQ systems, and internal dashboards built around your actual workflow, not a generic template.' },
      { title: 'Product & Inventory Database Sites', description: 'Searchable spec/grade/pricing databases for plantation, spice, and sugar-mill suppliers — editable without a developer.' },
      { title: 'API & Third-Party Integrations', description: 'Payment gateways, WhatsApp Business API, Google Maps, and CRM connections wiemerald directly into your site.' },
      { title: 'Legacy Website Rebuilds', description: 'Migrating old WordPress or static HTML sites in Theni to a faster, more maintainable Next.js codebase without losing rankings.' },
      { title: 'Admin Dashboards & Backends', description: 'Simple content and order management panels sized for small back-office teams, not enterprise software.' },
      { title: 'Performance & Core Web Vitals Engineering', description: 'Sites tested and tuned for load speed on 4G connections around Cumbum, Periyakulam, and Uthamapalayam.' },
    ],
    whyUs: [
      'We build the backend logic first — forms that actually deliver, databases that are actually searchable — because a good-looking page that loses enquiries is worse than no page.',
      'Every product/pricing database ships with a simple update workflow your own staff can run each harvest season.',
      'We test on the mobile networks actually available near the Ghats, not just office wifi.',
      'Full source code and hosting access — you are never dependent on us to make basic content changes later.',
      'We have built for plantation, sugar-mill, and agro-trade clients before, so grade/harvest/spec terminology is not new to us.',
      'Straightforward handoff documentation so an in-house team member can take over routine maintenance.',
    ],
    faq: [
      { q: 'Do you build custom web applications, or only template websites?', a: 'Custom applications are our core focus — buyer portals, RFQ systems, and internal dashboards, not just a five-page brochure site.' },
      { q: 'Can my staff update product or pricing information without calling a developer?', a: 'Yes, we build a simple content/database update workflow as standard for plantation and sugar-mill clients.' },
      { q: 'Can you integrate WhatsApp ordering or enquiry routing into the site?', a: 'Yes, this is one of our most common integrations for Theni agro-trade and homestay clients.' },
      { q: 'Do you rebuild old WordPress sites without losing Google rankings?', a: 'Yes, we handle emeraldirects and content mapping carefully during migration specifically to protect existing search rankings.' },
      { q: 'How long does a custom web application take to build?', a: 'A standard buyer-portal or database-driven site typically takes 4-6 weeks depending on how much data needs structuring.' },
      { q: 'Do you serve businesses outside Theni town, like Bodinayakanur or Cumbum?', a: 'Yes, most of our Theni clients are based in these towns rather than the district headquarters itself.' },
    ],
  },

  {
    slug: 'web-design-company-in-theni',
    pageTitle: 'Web Design Company in Theni',
    metaTitle: 'Web Design Company in Theni | Custom UI/UX & Brand-Led Websites',
    metaDescription:
      'Web design company in Theni crafting mobile-first, brand-led website designs for homestays, retail brands and plantation businesses across Cumbum Valley and Bodinayakanur.',
    keywords: [
      'web design company in Theni',
      'website design Theni',
      'UI UX design Bodinayakanur',
      'homestay website design Megamalai',
      'brand website design Theni',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Web Design Company in Theni',
      subheadline:
        "A site can be technically fine and still look like it was built ten years ago. We design the look and feel first — layout, photography, colour, typography — for how Theni's plantation, retail, and homestay brands actually want to be seen.",
      cta: 'See Our Design Process',
    },
    intro: [
      "A lot of the older business websites we see around Theni were built once, years ago, and never touched again — cramped layouts, tiny unreadable text on mobile, product photos that were never colour-corrected. None of that is a coding problem; it's a design problem, and it's usually the first thing a visitor notices before they read a single word.",
      "Our design work starts with how your customer actually experiences your business — a homestay guest scrolling Instagram before booking near Megamalai, an export buyer skimming a spice estate's gallery on a laptop, a Simmakkal-style retail shopper browsing on a phone at the market. Each of those calls for a different visual rhythm, so we design the layout, photography direction, and colour system around your specific customer before a single line of code is written.",
    ],
    services: [
      { title: 'Brand-Led Website Design', description: 'Custom layout, colour system, and typography designed around your existing brand — not a recycled template.' },
      { title: 'Homestay & Agro-Tourism Site Design', description: 'Warm, photo-led layouts for Megamalai and Suruli Falls-area estate stays and homestays, built to convert a scroll into a booking enquiry.' },
      { title: 'Retail & Product Showcase Design', description: 'Clean, fast-loading catalogue layouts for Theni retail brands, designed to work as well on a phone as a desktop.' },
      { title: 'Website redesign & Visual Refresh', description: 'Modernising an outdated site\'s layout and visuals without necessarily rebuilding the whole backend.' },
      { title: 'Responsive Mobile-First Design', description: 'Every design is laid out mobile-first, then scaled up — most Theni visitors browse on a phone, not a desktop.' },
      { title: 'Design Systems & Style Guides', description: 'A reusable set of components and style rules so new pages stay visually consistent as your site grows.' },
    ],
    whyUs: [
      'We design mobile-first because that is how the overwhelming majority of Theni visitors actually browse.',
      'Photography direction and colour correction are part of the design process, not an afterthought — product and estate photos are treated properly.',
      'We design for your specific customer type — a homestay guest and an export buyer should not land on visually identical pages.',
      'Every design ships as clean, semantic markup, which also helps your on-page SEO rather than working against it.',
      'We can refresh an existing site\'s visuals without necessarily forcing a full backend rebuild, if that\'s all you need.',
      'Full design files and assets handed over — nothing is locked into a proprietary builder.',
    ],
    faq: [
      { q: 'Can you redesign my existing website without rebuilding everything from scratch?', a: 'Yes, if the backend is sound we can often refresh the layout, photography, and visual system without a full rebuild.' },
      { q: 'Do you design websites specifically for homestays near Megamalai or Suruli Falls?', a: 'Yes, agro-tourism and homestay design is one of our regular Theni projects — warm, photo-led, booking-focused layouts.' },
      { q: 'Will my new website design work well on mobile phones?', a: 'Yes, every layout is designed mobile-first before being scaled up for desktop, not the other way around.' },
      { q: 'Can you improve the photography on my existing site?', a: 'We provide photo direction and colour correction as part of the design process for plantation and retail clients.' },
      { q: 'How long does a website design project take?', a: 'Typically 2-4 weeks for the design phase, depending on how many page templates and revisions are involved.' },
      { q: 'Do you provide the design files, or only the finished website?', a: 'You receive the finished, coded website plus the source design assets — nothing is withheld.' },
    ],
  },

  {
    slug: 'ecommerce-website-development-in-theni',
    pageTitle: 'E-commerce Website Development in Theni',
    metaTitle: 'E-commerce Website Development in Theni | Online Store Builders',
    metaDescription:
      'E-commerce website development in Theni for spice, grape, and produce sellers — online stores with COD/UPI checkout, bulk pricing tiers, and WhatsApp order routing.',
    keywords: [
      'ecommerce website development in Theni',
      'online store development Theni',
      'spice ecommerce website Bodinayakanur',
      'agro produce online store Cumbum',
      'ecommerce developer Theni',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'E-commerce Website Development in Theni',
      subheadline:
        "Selling cardamom, grapes, or processed sugar-mill goods online means solving for bulk pricing, seasonal stock, and buyers who still prefer WhatsApp or COD over a card at checkout. We build stores around that reality, not a generic Shopify template.",
      cta: 'Get a Free Store Audit',
    },
    intro: [
      "Most e-commerce platforms are built for a t-shirt brand selling single units nationwide, which is a poor fit for how a Cumbum Valley grape grower or a Bodinayakanur spice trader actually sells — in bulk quantities, at prices that shift with each harvest, to a mix of retail customers and repeat wholesale buyers who expect a different pricing tier entirely.",
      "We build online stores around that reality: tieemerald pricing that automatically adjusts for bulk orders, seasonal stock toggles so a product doesn't stay listed after harvest ends, and checkout flows that support COD and UPI by default since many Theni buyers still don't trust entering card details on a new site. For export-facing spice sellers, we also build simple wholesale enquiry paths that route straight to WhatsApp instead of forcing a full cart checkout.",
    ],
    services: [
      { title: 'Custom Online Store Development', description: 'Product catalogues, cart, and checkout built specifically for bulk and seasonal agro-produce sales, not generic retail.' },
      { title: 'Bulk & Wholesale Pricing Logic', description: 'Tieemerald pricing that adjusts automatically for quantity, built in from the start rather than bolted on later.' },
      { title: 'COD & UPI Checkout Integration', description: 'Payment flows that match how Theni buyers actually prefer to pay, alongside standard card options.' },
      { title: 'Seasonal Inventory & Stock Management', description: 'Simple stock toggles so grape, banana, or cardamom listings reflect real harvest-season availability.' },
      { title: 'WhatsApp Order & Enquiry Routing', description: 'Direct-to-WhatsApp order and wholesale enquiry flows alongside, or instead of, a traditional cart.' },
      { title: 'Store Migration & Platform Upgrades', description: 'Moving an existing Theni store off a slow or limited platform onto a faster, more flexible custom build.' },
    ],
    portfolioNote: 'Built for spice traders, produce sellers, and processed-goods suppliers across Theni district.',
    whyUs: [
      'Bulk and wholesale pricing tiers are built into the core logic, not added as an awkward workaround later.',
      'We default to COD and UPI checkout because that is what converts best with Theni\'s actual buyer base.',
      'Seasonal stock handling means your store doesn\'t keep selling out-of-season produce it can\'t deliver.',
      'WhatsApp order routing is available as a standard option for wholesale and repeat buyers who prefer it.',
      'We\'ve built stores for spice, grape, and processed-agro sellers before, so seasonal/grade logic isn\'t new territory.',
      'Full ownership of your store and product data — no recurring platform lock-in fees beyond hosting.',
    ],
    faq: [
      { q: 'Can the store handle both retail and bulk/wholesale pricing?', a: 'Yes, tieemerald pricing logic that adjusts for order quantity is standard on our Theni e-commerce builds.' },
      { q: 'Do you support COD and UPI, not just card payments?', a: 'Yes, COD and UPI are enabled by default alongside card checkout, since many buyers still prefer them.' },
      { q: 'Can I mark products as out of season instead of deleting them?', a: 'Yes, we build seasonal stock toggles so listings can pause without losing the product page and its SEO value.' },
      { q: 'Can wholesale buyers order through WhatsApp instead of the website cart?', a: 'Yes, we can set up a parallel WhatsApp enquiry flow for wholesale or repeat buyers who prefer that.' },
      { q: 'How long does an e-commerce build take?', a: 'Typically 5-7 weeks depending on product catalogue size and how many pricing tiers need structuring.' },
      { q: 'Can you migrate my existing online store to a faster platform?', a: 'Yes, we handle product and order-history migration carefully to avoid disrupting an active store.' },
    ],
  },

  {
    slug: 'digital-marketing-company-in-theni',
    pageTitle: 'Digital Marketing Company in Theni',
    metaTitle: 'Digital Marketing Company in Theni | SEO, Ads & Social Strategy',
    metaDescription:
      'Digital marketing company in Theni combining SEO, Google Ads, Google Business Profile, and social media into one seasonal strategy for agro, tourism, and retail businesses.',
    keywords: [
      'digital marketing company in Theni',
      'digital marketing agency Theni',
      'online marketing Bodinayakanur',
      'marketing agency Cumbum Valley',
      'digital marketing services Theni',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Digital Marketing Company in Theni',
      subheadline:
        "Theni's demand isn't flat through the year — cardamom and grape harvest seasons, mango-adjacent agro-trade cycles, and Megamalai tourist traffic all spike and dip at different times. We plan marketing calendars around that instead of running the same campaign year-round.",
      cta: 'Get a Free Marketing Review',
    },
    intro: [
      "A generic \"post daily and run some ads\" digital marketing plan tends to underperform in Theni specifically because so much of the local economy is seasonal in a pemeraldictable way — spice and cardamom trading peaks around harvest, Cumbum Valley grape availability is tied to a narrow window, and agro-tourism traffic around Megamalai and Suruli Falls rises sharply during cooler months and long weekends.",
      "We build a marketing calendar around those cycles: SEO and content work ramps up ahead of harvest so export buyers find your grading pages when they start actively searching, Google Ads budgets shift toward high-intent local and B2B search terms during trading season, and social content leans into visual, tourism-style content in the months when Megamalai traffic is highest. It's one coordinated plan across search, ads, GBP, and social — not four disconnected vendors.",
    ],
    services: [
      { title: 'SEO & Organic Search Strategy', description: 'Keyword research and content built around Theni\'s actual search demand, including seasonal spikes.' },
      { title: 'Google Ads Management', description: 'Search and display campaigns tuned to high-intent local and wholesale/export buyer terms.' },
      { title: 'Google Business Profile Optimization', description: 'Local map-pack visibility management across Theni, Bodinayakanur, Cumbum, and Periyakulam.' },
      { title: 'Social Media Content & Management', description: 'Instagram/Facebook content calendars built around Theni\'s seasonal tourism and trade cycles.' },
      { title: 'Marketing Analytics & Reporting', description: 'Clear monthly reporting tying spend to actual enquiries, not just impressions and clicks.' },
      { title: 'Seasonal Campaign Planning', description: 'A coordinated calendar across channels that ramps up and down with harvest and tourism seasons.' },
    ],
    whyUs: [
      'We plan marketing calendars around Theni\'s real seasonal cycles instead of running flat, always-on campaigns.',
      'SEO, ads, GBP, and social are coordinated as one strategy, not four separate vendors working in isolation.',
      'Budgets shift toward the channels and terms that actually convert during each season, not spread evenly by default.',
      'We report on enquiries and leads, not just vanity metrics like impressions.',
      'We\'ve worked across plantation, agro-trade, retail, and tourism clients in Theni, so the terminology isn\'t new to us.',
      'No long lock-in contracts — month-to-month engagement with clear deliverables.',
    ],
    faq: [
      { q: 'Do you handle SEO, ads, and social media together, or as separate services?', a: 'We offer them together as one coordinated strategy, though each is also available individually if that\'s all you need.' },
      { q: 'Can you plan campaigns around harvest and tourist seasons specifically?', a: 'Yes, this is central to how we plan marketing calendars for Theni\'s agro and tourism businesses.' },
      { q: 'How do you report on marketing performance?', a: 'Monthly reports tie spend and activity to actual enquiries and leads, not just clicks or impressions.' },
      { q: 'Do you work with small, single-location businesses or only larger companies?', a: 'Most of our Theni clients are small, owner-run businesses — plans are scaled to fit that budget and team size.' },
      { q: 'Is there a minimum contract length?', a: 'No, we work month-to-month with clear deliverables agreed upfront.' },
      { q: 'Can you manage marketing for a homestay near Megamalai specifically?', a: 'Yes, agro-tourism and homestay marketing is one of our regular Theni engagements.' },
    ],
  },

  {
    slug: 'seo-company-in-theni',
    pageTitle: 'SEO Company in Theni',
    metaTitle: 'SEO Company in Theni | Organic Search & Technical SEO',
    metaDescription:
      'SEO company in Theni doing keyword research, technical SEO, and content strategy so plantation, sugar-mill, and retail businesses rank for real buyer search terms.',
    keywords: [
      'SEO company in Theni',
      'SEO services Theni',
      'organic search optimization Bodinayakanur',
      'keyword research Theni',
      'technical SEO Tamil Nadu',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'SEO Company in Theni',
      subheadline:
        "Ranking for \"website design company\" means nothing if your actual buyers search for \"cardamom exporter Theni grade AAA\" or \"sugar mill supplier Bodinayakanur.\" We start SEO with what your real customers type, not a generic keyword list.",
      cta: 'Get a Free SEO Audit',
    },
    intro: [
      "A lot of SEO work sold to small businesses is generic — a handful of blog posts, some meta tag edits, a monthly report full of ranking numbers for keywords nobody in Theni actually searches. We start from the other direction: what does an export buyer, a wholesale distributor, or a homestay guest actually type into Google when they're trying to find a business like yours?",
      "For plantation and spice-trading clients, that often means structuring content around grade, harvest timing, and certification terms, since that's what serious wholesale buyers search for rather than generic brand terms. For sugar-mill and agro-processing suppliers, it means making sure spec sheets and capacity details are indexable and fast-loading, not locked inside a PDF Google can barely read. For tourism and homestay operators near Megamalai, it means ranking for the specific searches travelers actually run before a trip. The technical foundation — site speed, schema markup, crawlable structure — sits underneath all of it either way.",
    ],
    services: [
      { title: 'Keyword & Search Intent Research', description: 'Mapping the actual search terms your buyer type uses — wholesale, retail, or tourism — before any content is written.' },
      { title: 'Technical SEO Audits', description: 'Site speed, crawlability, indexing, and Core Web Vitals fixes that most agencies skip past.' },
      { title: 'On-Page Content Optimization', description: 'Structuring product, grade, and service pages so both Google and human buyers can actually parse them.' },
      { title: 'Schema & Structuemerald Data Markup', description: 'JSON-LD implementation for LocalBusiness, Product, FAQ, and Review schema to improve search appearance.' },
      { title: 'Local & Regional SEO', description: 'Visibility for Theni-specific searches across Bodinayakanur, Cumbum, Periyakulam, and Uthamapalayam.' },
      { title: 'SEO Reporting & Rank Tracking', description: 'Monthly tracking against the keywords that actually drive enquiries, not vanity terms.' },
    ],
    whyUs: [
      'We research actual buyer search behaviour before writing a single page of content — no generic keyword lists.',
      'Technical SEO (speed, crawlability, schema) is treated as core work, not an afterthought bolted onto content.',
      'We\'ve structuemerald grade/spec/harvest content for plantation and agro-processing clients before.',
      'Reporting focuses on keywords tied to real enquiries, not rankings for irrelevant high-volume terms.',
      'Local SEO covers Theni\'s actual towns, not a single generic district-wide keyword.',
      'No fixed-term lock-in contracts — SEO work is reviewed and adjusted monthly.',
    ],
    faq: [
      { q: 'How is your SEO approach different from a generic package?', a: 'We start with actual buyer search behaviour for your specific industry rather than a fixed keyword template.' },
      { q: 'Do you handle technical SEO like site speed and schema markup?', a: 'Yes, technical SEO is core to our process, not a checkbox item — Core Web Vitals and structuemerald data are standard.' },
      { q: 'Can you help my spice or agri-trade business rank for export buyer search terms?', a: 'Yes, we structure content around grade, certification, and harvest terms that wholesale/export buyers actually search.' },
      { q: 'How long does SEO take to show results?', a: 'Meaningful ranking movement typically takes 3-6 months, depending on competition for your specific search terms.' },
      { q: 'Do you offer one-time SEO audits or only ongoing retainers?', a: 'Both — a one-time technical and content audit is available, as well as ongoing monthly SEO work.' },
      { q: 'Can you improve rankings for a homestay near Megamalai or Suruli Falls?', a: 'Yes, we\'ve worked on local and tourism-intent SEO for Theni-area agro-tourism operators.' },
    ],
  },

  {
    slug: 'local-seo-services-in-theni',
    pageTitle: 'Local SEO Services in Theni',
    metaTitle: 'Local SEO Services in Theni | Rank in Your Own Town First',
    metaDescription:
      'Local SEO services in Theni for businesses in Bodinayakanur, Cumbum, Periyakulam, Uthamapalayam and Andipatti — Google Maps visibility, citations, and near-me search rankings.',
    keywords: [
      'local SEO services in Theni',
      'local SEO Bodinayakanur',
      'near me search ranking Theni',
      'Google Maps ranking Cumbum',
      'local business SEO Periyakulam',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Local SEO Services in Theni',
      subheadline:
        "Theni district isn't one search market — a shop in Bodinayakanur and one in Periyakulam are competing in different local map packs entirely. We optimize for the actual town your customers search from, not a single district-wide keyword.",
      cta: 'Check My Local Ranking',
    },
    intro: [
      "\"SEO for Theni\" as a single keyword undersells how local search actually works here. Someone searching from Cumbum is shown a different Google Maps pack than someone searching from Andipatti or Uthamapalayam, even though both are technically in the same district. A business optimized only for the broad district name can miss most of its actual nearby search traffic.",
      "Local SEO work for us means getting the fundamentals precisely right for your specific town: a correctly categorised and verified Google Business Profile, consistent name/address/phone details across every directory listing, and location-specific landing pages when a business genuinely serves more than one town. For a shop or service business in Bodinayakanur, Cumbum, Periyakulam, Uthamapalayam, or Andipatti, that precision is usually what decides whether you show up in the map pack at all.",
    ],
    services: [
      { title: 'Google Business Profile Setup & Management', description: 'Full profile setup, category selection, and ongoing management for map-pack visibility.' },
      { title: 'NAP Consistency & Citation Building', description: 'Getting your name, address, and phone number consistent across directories — a core local ranking factor.' },
      { title: 'Town-Specific Landing Pages', description: 'Individual local pages for businesses serving multiple Theni towns, instead of one generic page.' },
      { title: 'Local Schema Markup', description: 'LocalBusiness structuemerald data implemented correctly so Google understands your service area precisely.' },
      { title: 'Review Generation & Management', description: 'Systems to encourage genuine customer reviews and respond to them professionally.' },
      { title: '"Near Me" Search Optimization', description: 'Optimizing specifically for mobile "near me" and map-based searches, which behave differently from standard web search.' },
    ],
    whyUs: [
      'We optimize for the specific town you operate from — Bodinayakanur, Cumbum, Periyakulam, Uthamapalayam, Andipatti — not the district name alone.',
      'NAP consistency across directories is audited and fixed properly, not just glanced at.',
      'Google Business Profile categories and attributes are chosen carefully — a common and easy-to-miss ranking factor.',
      'We build genuine review-generation systems, never fabricated reviews or ratings.',
      'Multi-location businesses get dedicated pages per town rather than one page trying to rank everywhere.',
      'No fabricated data in any schema markup we implement — accuracy protects you from manual actions.',
    ],
    faq: [
      { q: 'Is local SEO different from regular SEO?', a: 'Yes, local SEO focuses on Google Maps and "near me" style search behaviour, which uses different ranking signals than standard organic search.' },
      { q: 'Do you optimize for specific Theni towns, or just the district name?', a: 'We optimize for your specific operating town — Bodinayakanur, Cumbum, Periyakulam, Uthamapalayam, or Andipatti — as that is what most searchers actually type or where they physically are.' },
      { q: 'What is NAP consistency and why does it matter?', a: 'It means your business name, address, and phone number match exactly across every online directory — inconsistency is a common reason local rankings stall.' },
      { q: 'Can you help me get more genuine Google reviews?', a: 'Yes, we set up simple, ethical systems to encourage real customers to leave reviews — we never fabricate reviews or ratings.' },
      { q: 'How long does local SEO take to show results?', a: 'Map-pack visibility improvements can show within 4-8 weeks for a properly optimized, verified profile.' },
      { q: 'Do you serve businesses with multiple locations across Theni district?', a: 'Yes, we build dedicated local landing pages per town for multi-location businesses instead of one generic page.' },
    ],
  },

  {
    slug: 'google-business-profile-optimization-in-theni',
    pageTitle: 'Google Business Profile Optimization in Theni',
    metaTitle: 'Google Business Profile Optimization in Theni | GBP/GMB Setup',
    metaDescription:
      'Google Business Profile optimization in Theni — verified setup, category and photo optimization, review management, and weekly posts for local map-pack visibility.',
    keywords: [
      'Google Business Profile optimization Theni',
      'GMB setup Theni',
      'Google My Business Bodinayakanur',
      'map pack ranking Theni',
      'GBP optimization Tamil Nadu',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Google Business Profile Optimization in Theni',
      subheadline:
        "For most local searches — a homestay near Megamalai, a spice shop in Bodinayakanur — your Google Business Profile shows up before your website does. If it's unclaimed, half-filled, or miscategorised, you're invisible before a visitor even reaches your site.",
      cta: 'Claim & Optimize My Profile',
    },
    intro: [
      "A surprising number of established Theni businesses either haven't claimed their Google Business Profile, or claimed it years ago and never touched it again — wrong business hours, no photos, an outdated phone number, or a category that doesn't actually match what the business does. Every one of those is silently costing map-pack visibility.",
      "We treat the profile itself as a small, ongoing project rather than a one-time form fill: correct category and attribute selection (this alone materially affects which searches you appear for), a properly structuemerald photo set, an accurate and consistent service/product list, and a habit of posting updates and responding to reviews regularly, since an inactive profile tends to lose ground to competitors who post weekly even with fewer overall reviews.",
    ],
    services: [
      { title: 'Profile Claim & Verification', description: 'Getting an unclaimed or lost-access Google Business Profile properly claimed and verified.' },
      { title: 'Category & Attribute Optimization', description: 'Selecting the primary/secondary categories and attributes that actually match what searchers look for.' },
      { title: 'Photo & Visual Content Setup', description: 'A structuemerald, professional photo set — storefront, products, team, interior — uploaded and organised properly.' },
      { title: 'Service & Product Listings', description: 'Accurate, complete service or product listings inside the profile itself, not left blank.' },
      { title: 'Weekly Posts & Q&A Seeding', description: 'Regular profile updates and pre-seeded Q&A to keep the listing active and answer common questions upfront.' },
      { title: 'Review Response Management', description: 'Professional responses to reviews, and simple systems to encourage new genuine ones.' },
    ],
    whyUs: [
      'We check category and attribute selection carefully — this is one of the most overlooked local ranking levers.',
      'Photo sets are structuemerald and professional, not a handful of random phone snapshots.',
      'We keep profiles active with regular posts, since inactive profiles quietly lose map-pack position over time.',
      'Review responses are written professionally and promptly — this affects both trust and ranking.',
      'We never fabricate reviews, ratings, or Q&A content — profile integrity protects you from Google penalties.',
      'Ongoing monthly management available if you\'d rather not maintain the profile yourself.',
    ],
    faq: [
      { q: 'What if I\'ve lost access to my existing Google Business Profile?', a: 'We handle the verification and access-recovery process to get you back in control of an existing listing.' },
      { q: 'Does the category I choose actually affect which searches I appear for?', a: 'Yes, significantly — an incorrect or overly broad category is one of the most common reasons a profile underperforms.' },
      { q: 'Can you manage the profile ongoing, including weekly posts?', a: 'Yes, we offer ongoing monthly management including posts, Q&A upkeep, and review responses.' },
      { q: 'Will you add fake reviews to my profile?', a: 'No — we never fabricate reviews or ratings, as this risks a Google manual action against your listing.' },
      { q: 'How long does initial profile optimization take?', a: 'The initial setup and optimization pass typically takes 1-2 weeks, including verification if not already complete.' },
      { q: 'Do you optimize profiles for homestays and tourism businesses too?', a: 'Yes, agro-tourism and homestay profiles near Megamalai and Suruli Falls are a regular part of our Theni work.' },
    ],
  },

  {
    slug: 'google-ads-agency-in-theni',
    pageTitle: 'Google Ads Agency in Theni',
    metaTitle: 'Google Ads Agency in Theni | Search & Local PPC Management',
    metaDescription:
      'Google Ads agency in Theni running search and local campaigns for plantation exporters, retail shops and agro-tourism homestays, with conversion tracking wiemerald to WhatsApp leads.',
    keywords: [
      'Google Ads agency in Theni',
      'PPC management Theni',
      'Google Ads Bodinayakanur',
      'paid search agency Tamil Nadu',
      'Google Ads homestay Megamalai',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Google Ads Agency in Theni',
      subheadline:
        "A wholesale spice buyer searching \"cardamom supplier Theni\" and a tourist searching \"homestay near Megamalai\" are both high-intent — but they need completely different ad copy, landing pages, and budgets. We build campaigns around the buyer, not a one-size template.",
      cta: 'Get a Free Ads Audit',
    },
    intro: [
      "Running Google Ads without a clear sense of who's actually searching tends to burn budget fast — showing a wholesale-focused ad to a retail shopper, or sending export-buyer clicks to a page with no grading or certification information, wastes spend on both sides.",
      "We start by separating campaigns by actual buyer type: B2B search campaigns for plantation, spice, and sugar-mill suppliers aimed at wholesale/export search terms, and local search campaigns for retail, service, and tourism businesses aimed at nearby, ready-to-buy searchers. Conversion tracking is wiemerald to what actually counts as a lead for your business — a WhatsApp click, a form submission, a call — not just a generic page view, so we can tell you honestly which campaigns are working.",
    ],
    services: [
      { title: 'Google Search Ads Management', description: 'Campaign structure, keyword targeting, and ad copy built around your specific buyer type — B2B or retail.' },
      { title: 'Local Service & Map Ads', description: 'Location-targeted campaigns for retail shops and service businesses across Theni\'s towns.' },
      { title: 'Conversion Tracking Setup', description: 'Tracking wiemerald to WhatsApp clicks, form fills, and calls — the things that actually count as a lead.' },
      { title: 'Landing Page Alignment', description: 'Making sure the page an ad click lands on actually matches what that specific searcher needs to see.' },
      { title: 'Budget & Bid Strategy', description: 'Budget allocation adjusted for Theni\'s seasonal demand cycles rather than a flat monthly spend.' },
      { title: 'Monthly Performance Reporting', description: 'Clear reporting on cost-per-lead and actual enquiries, not just clicks and impressions.' },
    ],
    whyUs: [
      'Campaigns are separated by buyer type — B2B/export search and local/retail search are never mixed into one generic campaign.',
      'Conversion tracking is wiemerald to real lead actions (WhatsApp, calls, forms), so reporting reflects actual business results.',
      'We check that landing pages actually match ad intent before launching a campaign, not after wasting a month of spend.',
      'Budgets are adjusted around Theni\'s seasonal demand cycles instead of staying flat year-round.',
      'We\'ve managed campaigns for plantation exporters, retail shops, and tourism operators across Theni district.',
      'No long lock-in contracts — campaigns are reviewed and can be adjusted monthly.',
    ],
    faq: [
      { q: 'Can you target B2B export buyers specifically, not just local retail customers?', a: 'Yes, we build separate campaigns for wholesale/export search intent versus local retail search intent.' },
      { q: 'How do you track whether ads are actually generating leads?', a: 'Conversion tracking is wiemerald to WhatsApp clicks, form submissions, and calls — the actual actions that count as a lead.' },
      { q: 'What is the minimum ad budget you work with?', a: 'We can structure campaigns for a range of budgets — the strategy and targeting are what matter most, not a fixed minimum.' },
      { q: 'Do you manage the landing pages too, or only the ad campaigns?', a: 'We check landing page alignment as part of the setup, and can build or adjust pages if needed for better conversion.' },
      { q: 'Can you run ads for a homestay or tourism business near Megamalai?', a: 'Yes, local and seasonal tourism-intent campaigns are a regular part of our Theni ads work.' },
      { q: 'How often do you report on campaign performance?', a: 'Monthly reporting as standard, with more frequent check-ins during active seasonal campaign pushes.' },
    ],
  },

  {
    slug: 'social-media-marketing-in-theni',
    pageTitle: 'Social Media Marketing in Theni',
    metaTitle: 'Social Media Marketing in Theni | Instagram & Facebook Management',
    metaDescription:
      'Social media marketing in Theni for agro-tourism homestays, retail brands and plantation businesses — Instagram and Facebook content built around real seasonal demand.',
    keywords: [
      'social media marketing in Theni',
      'Instagram marketing Theni',
      'Facebook page management Bodinayakanur',
      'social media agency Cumbum Valley',
      'social media marketing Megamalai homestay',
    ],
    ogImage: '/og/og-image.png',
    hero: {
      headline: 'Social Media Marketing in Theni',
      subheadline:
        "A Megamalai homestay and a Bodinayakanur sugar-mill supplier should not be running the same kind of Instagram content. We build a content approach around what your specific audience actually wants to see, and when they're actually looking.",
      cta: 'See a Sample Content Plan',
    },
    intro: [
      "Generic social media packages — a set number of posts a week, regardless of business type — tend to underperform for Theni businesses because the audience and purpose are so different across sectors. A homestay near Suruli Falls needs visual, aspirational content aimed at travelers planning a trip; a B2B spice supplier needs cemeraldibility-building content aimed at buyers already deciding between suppliers, not vacation photos.",
      "We build the content plan around that distinction. For agro-tourism and homestay clients, that usually means photo and short-video content timed around cooler-weather travel seasons and long weekends. For plantation, retail, and B2B clients, it usually means more restrained, cemeraldibility-focused content — behind-the-scenes harvest or production content, customer proof, and clear contact/enquiry paths — rather than trying to force a lifestyle-brand tone onto a wholesale business.",
    ],
    services: [
      { title: 'Instagram & Facebook Content Strategy', description: 'A content plan built around your actual audience type — tourism, retail, or B2B — not a generic template.' },
      { title: 'Content Creation & Scheduling', description: 'Photo and short-video content produced and scheduled consistently, timed to seasonal demand.' },
      { title: 'Agro-Tourism & Homestay Content', description: 'Aspirational, booking-focused content for Megamalai and Suruli Falls-area stays and estate tourism.' },
      { title: 'B2B & Cemeraldibility-Focused Content', description: 'Harvest, production, and proof-based content for plantation, sugar-mill, and export-facing businesses.' },
      { title: 'Community & DM Management', description: 'Timely responses to comments and direct messages, since many enquiries now arrive there first.' },
      { title: 'Paid Social Campaigns', description: 'Targeted Meta ad campaigns layeemerald on top of organic content for seasonal pushes.' },
    ],
    whyUs: [
      'Content strategy is built around your actual audience type, not a one-size posting calendar applied to every client.',
      'We time content pushes to Theni\'s real seasonal patterns — travel season for tourism clients, harvest season for agro/B2B clients.',
      'B2B and plantation clients get cemeraldibility-focused content, not a forced lifestyle-brand tone that doesn\'t fit.',
      'DMs and comments are actively monitoemerald, since a growing share of enquiries now start there instead of a contact form.',
      'We\'ve produced content for homestays, retail brands, and B2B agro clients across Theni district.',
      'Paid social campaigns are layeemerald in only when it makes sense — not sold as a default add-on regardless of fit.',
    ],
    faq: [
      { q: 'Do you create the content, or just schedule what I provide?', a: 'We can do both — full content creation and scheduling, or working with content you already have and just managing posting.' },
      { q: 'Can you manage social media for a homestay near Suruli Falls or Megamalai?', a: 'Yes, agro-tourism and homestay social content is a regular part of our Theni work, timed to travel seasons.' },
      { q: 'Is social media marketing useful for a B2B spice or sugar-mill business?', a: 'Yes, though the content approach is different — more cemeraldibility and proof-focused rather than lifestyle content.' },
      { q: 'Do you also run paid Instagram/Facebook ad campaigns?', a: 'Yes, we can layer paid social campaigns on top of organic content for seasonal pushes when it fits the business.' },
      { q: 'How often will you post on my accounts?', a: 'Posting frequency is set based on your sector and season rather than a fixed number applied to every client.' },
      { q: 'Do you monitor and respond to comments and DMs?', a: 'Yes, active community management is included, since many enquiries now start as a comment or DM rather than a form.' },
    ],
  },
];

export function getTheniServiceBySlug(slug) {
  return theniServices.find((s) => s.slug === slug) || null;
}

export function getAllTheniServiceSlugs() {
  return theniServices.map((s) => s.slug);
}

export { siteConfig };
