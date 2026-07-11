/**
 * districtsData.js
 * ------------------------------------------------------------------
 * Single source of truth for every "website-design-company-in-{district}"
 * page. Each entry is DELIBERATELY hand-written and different, not a
 * template with {district} swapped in. Google's helpful-content /
 * spam systems specifically target "doorway pages" that only differ
 * by a city name — same six sentences, five hundred times. If you add
 * more districts, follow this pattern: pull in something real and
 * local (an industry, an area name, a business type) so the sentence
 * could not be copy-pasted onto a different city and still make sense.
 *
 * Replace YOUR_DOMAIN, phone numbers, addresses and testimonial names
 * with your real details before deploying. Do NOT invent star ratings
 * or review counts in the JSON-LD — fabricated AggregateRating data is
 * one of the fastest ways to get a manual action from Google.
 * ------------------------------------------------------------------
 */

const COMPANY_NAME = 'Wepzite'; // TODO: replace with real brand name
const DOMAIN = 'https://www.wepzite.in'; // TODO: replace with real domain
const PHONE = '+91-96026850192'; // TODO
const EMAIL = 'wepzitedev@gmail.com.com'; // TODO

export const districts = [
  {
    slug: 'chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    region: 'North-East Tamil Nadu',
    economyFocus: ['IT & software services', 'automobile manufacturing', 'healthcare', 'ports & logistics'],
    landmarks: ['the OMR IT corridor', 'Guindy Industrial Estate', 'T. Nagar', 'Ambattur Industrial Estate'],
    nearbyAreas: ['Tambaram', 'Anna Nagar', 'Velachery', 'Porur', 'Ambattur', 'Sholinganallur'],
    seo: {
      title: 'Website Design Company in Chennai | Custom Web Design for IT & Auto Businesses',
      description:
        'Website design company in Chennai serving OMR IT-corridor startups, Guindy manufacturers, and T. Nagar retailers. Custom-built, mobile-first sites with local SEO. Get a free quote.',
      keywords: [
        'website design company in Chennai',
        'web development Chennai',
        'website designer OMR',
        'ecommerce website design Chennai',
        'local SEO Chennai',
      ],
      ogImage: '/og/og-image.png',
    },
    hero: {
      headline: 'Website Design Company in Chennai',
      subheadline:
        "Built for how Chennai actually does business — IT services firms on OMR, auto-ancillary units near Ambattur, and retail brands in T. Nagar all need different things from a website. We start by asking what yours needs.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Chennai's business landscape is split fairly cleanly: software and IT-enabled services concentrated along the OMR corridor, heavy manufacturing and auto-ancillary units around Ambattur and Guindy, and a dense retail and wholesale economy centred on T. Nagar and Parry's Corner. A website that works for a SaaS startup rarely works for a textile wholesaler — the buying journey, the trust signals, and the page speed expectations are all different.",
      "We design for that difference. A manufacturing client near Guindy usually needs a catalogue-style site with clear specifications and RFQ forms; an OMR-based IT company usually needs a fast, credibility-first site with case studies and a clean careers page for hiring. Both need to load fast on a mid-range Android phone on a 4G connection during Chennai's frequent power-cut hours, which is why every build we ship is tested offline-first.",
    ],
    services: [
      { title: 'Corporate & IT Company Websites', description: 'For OMR and Sholinganallur-based IT/ITES firms that need a credibility-first site with case studies, careers pages, and client logos.' },
      { title: 'Manufacturing & B2B Catalogue Sites', description: 'For Ambattur and Guindy industrial units — product catalogues, spec sheets, and RFQ/quote request forms instead of shopping carts.' },
      { title: 'E-commerce for Retail Brands', description: 'Built for T. Nagar and Purasaiwalkam retailers moving offline inventory online, with COD and UPI checkout.' },
      { title: 'Local SEO for Chennai Search', description: 'Google Business Profile setup, area-wise landing pages (Velachery, Porur, Anna Nagar), and local schema markup.' },
      { title: 'Website Maintenance & Hosting', description: 'Uptime monitoring, security patches, and backups — with support hours that account for Chennai\'s power outages.' },
      { title: 'Website Redesign & Migration', description: 'For businesses moving off an old WordPress or Wix site without losing existing search rankings.' },
    ],
    portfolio: [
      { clientType: 'B2B SaaS company, Sholinganallur', industry: 'Software / IT services', result: 'Rebuilt marketing site; organic demo requests up within 4 months of launch.' },
      { clientType: 'Auto-ancillary manufacturer, Ambattur', industry: 'Manufacturing', result: 'Replaced a PDF catalogue with a searchable product database and RFQ form.' },
      { clientType: 'Textile wholesaler, T. Nagar', industry: 'Retail / wholesale', result: 'Launched a WhatsApp-integrated catalogue site for bulk buyers.' },
      { clientType: 'Diagnostics chain, multiple Chennai locations', industry: 'Healthcare', result: 'Built a location-finder and online appointment booking flow.' },
    ],
    whyUs: [
      'We test every build on a throttled connection, because a large share of Chennai mobile traffic still runs on 3G/4G outside the IT corridor.',
      'Our forms and checkout flows support UPI and COD by default — not every Chennai customer trusts card payments on a new site.',
      'We write Google Business Profile and local schema for the specific Chennai neighbourhood you serve, not just "Chennai" as a whole.',
      'Every site ships with basic Tamil-language support in the footer/contact section if your customer base needs it.',
      'We keep hosting and support documentation simple enough that your in-house team can hand off maintenance later if needed.',
      'No lock-in: you get full source code and CMS access, not a platform you can never leave.',
    ],
    testimonials: [
      { name: 'R. Karthikeyan', business: 'Auto components supplier', area: 'Ambattur', quote: 'Our RFQ form now brings in more qualified leads than our old sales-agent network did in the same period.' },
      { name: 'Divya Suresh', business: 'Boutique retail chain', area: 'T. Nagar', quote: 'They understood that our customers order in bulk over WhatsApp, so the site was built around that, not a generic cart.' },
      { name: 'Anand M.', business: 'IT services startup', area: 'OMR', quote: 'Page load times dropped enough that our bounce rate on mobile visibly improved within the first month.' },
    ],
    faq: [
      { q: 'Do you build websites for businesses outside central Chennai, like Tambaram or Porur?', a: 'Yes — most of our Chennai clients are in the suburbs, not the city centre. We build local-SEO pages for the specific area you operate from.' },
      { q: 'Can you integrate WhatsApp ordering for a Chennai retail business?', a: 'Yes, this is one of our most-requested features for T. Nagar and Purasaiwalkam retail clients — click-to-WhatsApp catalogue browsing with order forms.' },
      { q: 'How do you handle Chennai\'s frequent power cuts affecting site edits?', a: 'Your site is hosted on cloud infrastructure independent of your local power supply, so uptime is unaffected by outages at your office.' },
      { q: 'Do you support Tamil-language content?', a: 'We can add Tamil for key pages (contact, footer, service names) — full bilingual builds are quoted separately based on content volume.' },
      { q: 'What is the typical timeline for a business website in Chennai?', a: 'A standard 5-8 page business site takes 3-4 weeks from content finalisation; catalogue/e-commerce builds typically take 5-7 weeks.' },
      { q: 'Do you work with manufacturing companies near Guindy or Ambattur Industrial Estate?', a: 'Yes, several of our clients are B2B manufacturers in these zones — we build spec-sheet-heavy catalogue sites rather than generic templates.' },
    ],
  },

  {
    slug: 'coimbatore',
    district: 'Coimbatore',
    state: 'Tamil Nadu',
    region: 'Western Tamil Nadu',
    economyFocus: ['textile manufacturing', 'engineering & pump industries', 'auto components', 'education'],
    landmarks: ['Tidel Park Coimbatore', 'Peelamedu industrial belt', 'RS Puram', 'Gandhipuram'],
    nearbyAreas: ['Peelamedu', 'Saibaba Colony', 'RS Puram', 'Singanallur', 'Ganapathy'],
    seo: {
      title: 'Website Design Company in Coimbatore | Built for Textile & Engineering Businesses',
      description:
        'Website design company in Coimbatore for textile mills, pump & engineering manufacturers, and RS Puram retailers. Fast, mobile-first sites with local SEO. Free quote.',
      keywords: [
        'website design company in Coimbatore',
        'web design Coimbatore',
        'website designer Peelamedu',
        'ecommerce website Coimbatore',
        'textile company website design',
      ],
      ogImage: '/og/coimbatore.jpg',
    },
    hero: {
      headline: 'Website Design Company in Coimbatore',
      subheadline:
        "Coimbatore runs on textiles, pumps, and engineering exports as much as it does on IT. We build sites that speak to B2B buyers doing due diligence, not just consumers scrolling Instagram.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Coimbatore is one of the few Tier-2 Indian cities where B2B manufacturing still outweighs IT in terms of local business density — the city is home to a huge concentration of textile mills, pump manufacturers, and precision engineering exporters, alongside a growing IT presence around Tidel Park and Peelamedu. That mix means a large share of local website enquiries come from international buyers doing supplier due diligence, not walk-in retail customers.",
      "For manufacturers, that changes what a website needs to do: certifications (ISO, export licenses), plant photographs, and a clear product range matter more than flashy animation. For Coimbatore's textile and garment exporters specifically, we've found that a simple, fast-loading catalogue with downloadable spec sheets converts better with overseas buyers than an image-heavy design that's slow on a hotel wifi connection in another country.",
    ],
    services: [
      { title: 'Manufacturer & Export Websites', description: 'Built for Coimbatore\'s pump, textile, and engineering exporters — certifications, plant galleries, and downloadable spec sheets.' },
      { title: 'Corporate & IT Company Websites', description: 'For Peelamedu and Tidel Park-based IT/engineering-software firms needing a credibility-first, case-study driven site.' },
      { title: 'E-commerce for Textile & Retail Brands', description: 'For RS Puram and Gandhipuram retailers selling textiles and garments online, with bulk-order support.' },
      { title: 'Local SEO for Coimbatore Search', description: 'Google Business Profile, area-specific landing pages, and schema markup tuned for "near me" manufacturing searches.' },
      { title: 'Website Maintenance & Hosting', description: 'Ongoing updates, security, and backups with response times suited to export-business working hours across time zones.' },
      { title: 'Website Redesign & Migration', description: 'For established Coimbatore businesses moving off outdated sites without losing existing Google rankings.' },
    ],
    portfolio: [
      { clientType: 'Textile export mill, Peelamedu', industry: 'Textile manufacturing', result: 'Rebuilt catalogue site with downloadable tech specs; increased overseas RFQ submissions.' },
      { clientType: 'Water pump manufacturer, Singanallur', industry: 'Engineering / industrial', result: 'Added ISO certification pages and plant photo galleries requested by international buyers.' },
      { clientType: 'Garment retail chain, RS Puram', industry: 'Retail', result: 'Launched an e-commerce site with bulk-order pricing tiers for wholesale customers.' },
      { clientType: 'Auto components supplier, Ganapathy', industry: 'Auto components', result: 'Built an English-first, spec-sheet-driven B2B site aimed at export buyers.' },
    ],
    whyUs: [
      'We build certification and compliance pages properly (ISO, export licenses) because Coimbatore\'s manufacturing buyers actively check for them.',
      'Product photography and plant galleries are optimised for fast load even on slow international connections, since many enquiries come from overseas.',
      'We\'ve worked with textile and pump-industry clients before, so we don\'t need a crash course in your product terminology.',
      'Local SEO is built around Coimbatore-specific industrial hubs — Peelamedu, Singanallur, Ganapathy — not a generic "Coimbatore" keyword.',
      'Bulk/wholesale pricing logic for retail clients is built in from the start, not bolted on later.',
      'Full source code and CMS ownership — no dependency on us to make basic content edits later.',
    ],
    testimonials: [
      { name: 'S. Muthuraman', business: 'Textile export mill', area: 'Peelamedu', quote: 'Overseas buyers now find our spec sheets directly instead of asking us to email PDFs — it\'s cut our response time significantly.' },
      { name: 'Kavitha R.', business: 'Garment retail chain', area: 'RS Puram', quote: 'The bulk-order pricing tiers meant we didn\'t need a separate system for wholesale customers.' },
      { name: 'Prabhu S.', business: 'Pump manufacturer', area: 'Singanallur', quote: 'They actually understood what an ISO certification page needed to show — most agencies just wanted to put a logo.' },
    ],
    faq: [
      { q: 'Do you design websites specifically for textile exporters?', a: 'Yes — we\'ve built catalogue and spec-sheet sites for several Coimbatore textile mills targeting international buyers.' },
      { q: 'Can you add ISO and export certification pages?', a: 'Yes, this is standard for our Coimbatore manufacturing clients — we design certification pages that buyers actually trust.' },
      { q: 'Do you build sites for businesses near Peelamedu or Singanallur specifically?', a: 'Yes, most of our Coimbatore manufacturing clients are based in these industrial belts, and we build local SEO pages accordingly.' },
      { q: 'Can the website handle wholesale/bulk pricing for retail clients?', a: 'Yes, we build tiered pricing logic for RS Puram and Gandhipuram retail clients selling in bulk.' },
      { q: 'How long does an export-focused manufacturer website take?', a: 'Typically 4-6 weeks including certification pages, product catalogue structuring, and spec sheet uploads.' },
      { q: 'Do you support English-first content for international buyers?', a: 'Yes, manufacturing and export sites are built English-first by default, with Tamil available for local-facing pages.' },
    ],
  },

  {
    slug: 'madurai',
    district: 'Madurai',
    state: 'Tamil Nadu',
    region: 'South Tamil Nadu',
    economyFocus: ['tourism & pilgrimage', 'agriculture trade', 'textiles', 'education'],
    landmarks: ['Meenakshi Amman Temple area', 'Anna Nagar Madurai', 'Simmakkal market', 'Tallakulam'],
    nearbyAreas: ['Anna Nagar', 'Simmakkal', 'Tallakulam', 'K.K. Nagar', 'Villapuram'],
    seo: {
      title: 'Website Design Company in Madurai | Web Design for Tourism, Trade & Retail',
      description:
        'Website design company in Madurai for hotels near Meenakshi Temple, agri-trade businesses, and Simmakkal retailers. Fast, mobile-first sites with local SEO. Free quote.',
      keywords: [
        'website design company in Madurai',
        'web design Madurai',
        'hotel website design Madurai',
        'ecommerce website Madurai',
        'website designer Anna Nagar Madurai',
      ],
      ogImage: '/og/madurai.jpg',
    },
    hero: {
      headline: 'Website Design Company in Madurai',
      subheadline:
        "Madurai's economy runs on pilgrimage tourism, agri-trade, and a dense retail market around Simmakkal. Each needs a genuinely different kind of website — we build for the one you actually run.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Madurai is unusual among Tamil Nadu districts in how much its local economy depends on visitor traffic to the Meenakshi Amman Temple — hotels, restaurants, and travel businesses near the temple area see search demand that spikes around specific festival dates, not evenly through the year. That\'s a very different website problem from, say, an agri-trade business in Villapuram sourcing and selling produce to buyers across the district.",
      "For tourism and hospitality clients, we build sites that can handle seasonal traffic spikes without falling over during Chithirai festival or Meenakshi Thirukalyanam, with booking systems that work well on the mobile phones most pilgrims actually search from. For trade and retail clients around Simmakkal, the priority is usually simpler: fast product listings, clear contact and location information, and enough local SEO to show up before out-of-town competitors.",
    ],
    services: [
      { title: 'Hotel & Hospitality Websites', description: 'For properties near the Meenakshi Temple area — built to handle seasonal traffic spikes and mobile booking flows.' },
      { title: 'Tourism & Travel Agency Sites', description: 'Itinerary pages, temple-visit guides, and enquiry forms for Madurai-based travel operators.' },
      { title: 'Agri-Trade & Wholesale Business Sites', description: 'For Villapuram-area agri-trade and produce businesses needing clear listings and buyer contact flows.' },
      { title: 'Retail & E-commerce for Simmakkal Businesses', description: 'Fast, simple product catalogues built for Madurai\'s dense retail market around Simmakkal and Tallakulam.' },
      { title: 'Local SEO for Madurai Search', description: 'Google Business Profile and local schema tuned to seasonal pilgrimage search patterns.' },
      { title: 'Website Maintenance & Hosting', description: 'Uptime monitoring built to handle traffic spikes during major temple festival periods.' },
    ],
    portfolio: [
      { clientType: 'Heritage hotel, near Meenakshi Temple', industry: 'Hospitality', result: 'Rebuilt booking flow to handle Chithirai festival traffic spikes without downtime.' },
      { clientType: 'Agri-produce trading firm, Villapuram', industry: 'Agriculture trade', result: 'Simplified listings site with direct buyer enquiry forms, replacing phone-only sales.' },
      { clientType: 'Textile retailer, Simmakkal', industry: 'Retail', result: 'Launched a mobile-first catalogue site optimised for local "near me" searches.' },
      { clientType: 'Travel agency, Tallakulam', industry: 'Tourism', result: 'Built temple-visit itinerary pages that now rank for several pilgrimage-related search terms.' },
    ],
    whyUs: [
      'We build hospitality sites that stay up during festival traffic spikes, not just average-day load.',
      'Booking and enquiry forms are tested on the kind of budget Android phones most pilgrim visitors actually use.',
      'Local SEO accounts for Madurai\'s seasonal search patterns around temple festival dates.',
      'For trade and retail clients, we keep sites simple and fast rather than over-designed — speed matters more than animation here.',
      'We understand the difference between a Madurai hotel\'s needs and a Madurai wholesaler\'s needs, and don\'t force both into the same template.',
      'Full ownership of your site and content — no recurring platform lock-in fees.',
    ],
    testimonials: [
      { name: 'V. Chandran', business: 'Heritage hotel', area: 'Near Meenakshi Temple', quote: 'Our booking page didn\'t crash during Chithirai this year for the first time in three years.' },
      { name: 'Latha S.', business: 'Agri-produce trading firm', area: 'Villapuram', quote: 'Buyers now find us online instead of calling around — the enquiry form alone changed how we get leads.' },
      { name: 'Ramesh Iyer', business: 'Textile retailer', area: 'Simmakkal', quote: 'Simple was the right call — the site loads instantly even on customers\' older phones.' },
    ],
    faq: [
      { q: 'Can you build a hotel booking website near the Meenakshi Temple?', a: 'Yes, we\'ve built booking-enabled hospitality sites specifically designed to handle festival-season traffic spikes.' },
      { q: 'Do you design sites for agri-trade or wholesale businesses in Madurai?', a: 'Yes, we\'ve built listing and enquiry-based sites for agri-trade businesses around Villapuram.' },
      { q: 'Will my site handle the traffic spike during temple festivals?', a: 'Yes, hospitality and tourism sites are built and load-tested specifically for seasonal spikes like Chithirai.' },
      { q: 'Do you build simple retail catalogue sites for Simmakkal-area shops?', a: 'Yes, this is one of our most common Madurai projects — fast, mobile-first catalogues without unnecessary complexity.' },
      { q: 'How long does a hotel or tourism website take to build?', a: 'Typically 4-5 weeks including booking flow setup and itinerary/temple-guide content.' },
      { q: 'Can you help my Madurai business rank above out-of-town competitors locally?', a: 'Yes, local SEO and Google Business Profile optimisation are core to every Madurai project we take on.' },
    ],
  },

  {
    slug: 'tiruchirappalli',
    district: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    region: 'Central Tamil Nadu',
    economyFocus: ['heavy engineering (BHEL)', 'education', 'manufacturing', 'agriculture trade'],
    landmarks: ['BHEL Township', 'Srirangam', 'Thillai Nagar', 'Cantonment area'],
    nearbyAreas: ['Thillai Nagar', 'Srirangam', 'Cantonment', 'K.K. Nagar Trichy', 'Woraiyur'],
    seo: {
      title: 'Website Design Company in Tiruchirappalli (Trichy) | Web Design for Industry & Education',
      description:
        'Website design company in Trichy for BHEL-linked manufacturers, educational institutions, and Thillai Nagar retailers. Fast, mobile-first sites with local SEO. Free quote.',
      keywords: [
        'website design company in Trichy',
        'website design company in Tiruchirappalli',
        'web design Thillai Nagar',
        'college website design Trichy',
        'manufacturing website design Trichy',
      ],
      ogImage: '/og/trichy.jpg',
    },
    hero: {
      headline: 'Website Design Company in Tiruchirappalli',
      subheadline:
        "Trichy's economy is anchored by heavy engineering around BHEL and a large education sector. We build sites for both — admission-heavy college sites and spec-heavy industrial supplier sites are not the same job.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Tiruchirappalli's local economy has a distinct backbone: BHEL and the ancillary manufacturing units that supply it, alongside one of Tamil Nadu's larger concentrations of engineering colleges and schools. These two sectors drive very different kinds of website enquiries — ancillary manufacturers need supplier-facing catalogue sites, while educational institutions need admission-cycle-heavy sites that see enormous traffic spikes in April-June and go quiet the rest of the year.",
      "For BHEL-linked ancillary suppliers, we focus on getting technical specifications and vendor registration details in front of procurement teams quickly — these buyers are usually working through a checklist, not browsing casually. For colleges and schools, the admission portal, prospectus downloads, and fee-structure pages need to survive a huge concentrated traffic spike without the site slowing down right when parents are trying to apply.",
    ],
    services: [
      { title: 'Industrial Supplier & Ancillary Manufacturer Sites', description: 'Built for BHEL-linked ancillary units — spec sheets, vendor registration info, and procurement-friendly navigation.' },
      { title: 'College & School Websites', description: 'Admission portals, prospectus downloads, and fee-structure pages built to survive April-June traffic spikes.' },
      { title: 'Corporate & Small Business Websites', description: 'For Thillai Nagar and Cantonment-area businesses needing a professional, fast-loading online presence.' },
      { title: 'E-commerce for Local Retail', description: 'For Srirangam and Woraiyur retailers moving into online sales alongside their physical stores.' },
      { title: 'Local SEO for Trichy Search', description: 'Google Business Profile and area-specific SEO for Thillai Nagar, Srirangam, and Cantonment search terms.' },
      { title: 'Website Maintenance & Hosting', description: 'Scaled hosting for institutions with seasonal traffic spikes and steady support for year-round businesses.' },
    ],
    portfolio: [
      { clientType: 'Ancillary manufacturing supplier, BHEL vicinity', industry: 'Heavy engineering', result: 'Built a vendor-facing catalogue site with spec sheets and registration forms for procurement teams.' },
      { clientType: 'Engineering college, Thillai Nagar', industry: 'Education', result: 'Rebuilt admission portal to handle a large concentrated traffic spike without slowdown.' },
      { clientType: 'Retail chain, Srirangam', industry: 'Retail', result: 'Launched an e-commerce extension of an existing physical store.' },
      { clientType: 'Small manufacturing unit, Woraiyur', industry: 'Manufacturing', result: 'Replaced a static brochure site with a searchable product catalogue.' },
    ],
    whyUs: [
      'We build for the traffic pattern your sector actually has — a steady-load industrial supplier site and a spiky-load admission portal are architected differently.',
      'Vendor/procurement-facing pages are structured the way BHEL-linked ancillary buyers expect to navigate them.',
      'Admission portals are load-tested for concentrated seasonal spikes, not average daily traffic.',
      'Local SEO is built for Trichy\'s specific neighbourhoods — Thillai Nagar, Srirangam, Cantonment — not a single generic "Trichy" keyword.',
      'We\'ve worked with educational institutions before, so prospectus/fee-structure page structures aren\'t new territory for us.',
      'Full source code ownership and straightforward handoff documentation for your internal IT or admin staff.',
    ],
    testimonials: [
      { name: 'K. Sundaram', business: 'Ancillary manufacturing supplier', area: 'BHEL vicinity', quote: 'Procurement teams now find our spec sheets in two clicks instead of emailing us for a PDF.' },
      { name: 'Dr. Meena Rajan', business: 'Engineering college', area: 'Thillai Nagar', quote: 'The admission portal held up during our busiest application week for the first time in years.' },
      { name: 'Suresh Babu', business: 'Retail chain owner', area: 'Srirangam', quote: 'Moving online was less painful than we expected because they understood how our physical store already ran.' },
    ],
    faq: [
      { q: 'Do you build vendor/procurement-facing sites for BHEL ancillary suppliers?', a: 'Yes, several of our Trichy clients are ancillary manufacturers, and we structure sites around procurement team workflows.' },
      { q: 'Can the website handle admission-season traffic spikes for colleges?', a: 'Yes, admission portals are load-tested specifically for concentrated April-June traffic spikes.' },
      { q: 'Do you design websites for schools as well as colleges?', a: 'Yes, we build sites for both, with appropriately scaled admission and prospectus sections.' },
      { q: 'Do you serve businesses in Srirangam and Woraiyur specifically?', a: 'Yes, we build local SEO pages tuned to these specific Trichy neighbourhoods rather than a generic city-wide approach.' },
      { q: 'How long does a college admission portal take to build?', a: 'Typically 5-7 weeks depending on integration with existing student information systems.' },
      { q: 'Can you add vendor registration forms for industrial clients?', a: 'Yes, this is a standard requirement for our BHEL-linked ancillary manufacturing clients.' },
    ],
  },

  {
    slug: 'salem',
    district: 'Salem',
    state: 'Tamil Nadu',
    region: 'North-West Tamil Nadu',
    economyFocus: ['steel manufacturing', 'textiles & powerloom', 'mango & agri-trade', 'engineering'],
    landmarks: ['Salem Steel Plant vicinity', 'Fairlands', 'Hasthampatti', 'Ammapet powerloom belt'],
    nearbyAreas: ['Fairlands', 'Hasthampatti', 'Ammapet', 'Suramangalam', 'Shevapet'],
    seo: {
      title: 'Website Design Company in Salem | Web Design for Steel, Textile & Agri-Trade Businesses',
      description:
        'Website design company in Salem for steel & engineering suppliers, Ammapet powerloom textile units, and agri-trade businesses. Fast, mobile-first sites with local SEO. Free quote.',
      keywords: [
        'website design company in Salem',
        'web design Salem Tamil Nadu',
        'steel supplier website design',
        'powerloom textile website Salem',
        'website designer Fairlands',
      ],
      ogImage: '/og/salem.jpg',
    },
    hero: {
      headline: 'Website Design Company in Salem',
      subheadline:
        "Salem runs on steel, powerloom textiles, and agri-trade in mango and other produce. We've built sites for all three, and each needed a genuinely different structure.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Salem's economy is often summarised as \"steel city,\" but that undersells how much of the local business base is actually in powerloom textiles around Ammapet and agri-trade — Salem is one of India's larger mango-producing districts, and produce trading businesses here have very different website needs from a steel or engineering supplier near the Steel Plant vicinity.",
      "For steel and engineering suppliers, procurement-facing detail — grades, specifications, capacity — has to be easy to find, because buyers are usually comparing multiple suppliers against a technical checklist. For Ammapet's powerloom and textile units, the priority is usually a simple, photograph-heavy catalogue that loads fast, since many buyers browse on mobile data rather than broadband. For agri-trade businesses, seasonal availability (mango season runs roughly April-June) needs to be easy to update without calling a developer every time.",
    ],
    services: [
      { title: 'Steel & Engineering Supplier Websites', description: 'Grade specifications, capacity details, and procurement-friendly navigation for Salem Steel Plant-area suppliers.' },
      { title: 'Powerloom & Textile Business Sites', description: 'Fast, photo-led catalogue sites for Ammapet-area powerloom and textile units.' },
      { title: 'Agri-Trade & Seasonal Produce Sites', description: 'Easy-to-update seasonal availability pages for Salem\'s mango and agri-trade businesses.' },
      { title: 'Corporate & Small Business Websites', description: 'For Fairlands and Hasthampatti-based businesses needing a professional online presence.' },
      { title: 'Local SEO for Salem Search', description: 'Google Business Profile and schema tuned for Salem\'s specific industrial and trade neighbourhoods.' },
      { title: 'Website Maintenance & Hosting', description: 'Ongoing support with simple self-service updates for seasonal or catalogue-heavy sites.' },
    ],
    portfolio: [
      { clientType: 'Steel supplier, near Salem Steel Plant', industry: 'Steel manufacturing', result: 'Built a specification-led site that shortened supplier shortlisting time for procurement teams.' },
      { clientType: 'Powerloom textile unit, Ammapet', industry: 'Textile manufacturing', result: 'Launched a photo-led catalogue site optimised for mobile data browsing.' },
      { clientType: 'Mango & produce trading business, Salem', industry: 'Agri-trade', result: 'Built a self-updatable seasonal availability page ahead of mango season.' },
      { clientType: 'Engineering components supplier, Suramangalam', industry: 'Engineering', result: 'Replaced a static brochure PDF with a searchable, spec-driven product site.' },
    ],
    whyUs: [
      'We structure steel and engineering supplier sites around what procurement teams actually check first — grade, spec, capacity.',
      'Powerloom and textile catalogue sites are built photo-first but still load fast on mobile data, which is how most Ammapet-area buyers browse.',
      'Agri-trade clients get a simple self-service way to update seasonal availability without needing us for every change.',
      'Local SEO covers Salem\'s specific trade neighbourhoods — Ammapet, Fairlands, Suramangalam — not just the district name.',
      'We\'ve built for steel, textile, and agri-trade clients before, so basic industry terminology isn\'t a learning curve.',
      'Full ownership of source code and content — you\'re never locked into needing us for routine changes.',
    ],
    testimonials: [
      { name: 'M. Palanivel', business: 'Steel supplier', area: 'Near Salem Steel Plant', quote: 'Procurement teams tell us they shortlisted us faster because the specs were easy to find and compare.' },
      { name: 'Selvi K.', business: 'Powerloom textile unit', area: 'Ammapet', quote: 'The site loads fast even for buyers browsing on ordinary mobile data, which is most of them.' },
      { name: 'Ravi Shankar', business: 'Mango trading business', area: 'Salem', quote: 'I can update our seasonal availability myself now instead of calling someone every few weeks.' },
    ],
    faq: [
      { q: 'Do you build specification-heavy websites for steel suppliers?', a: 'Yes, we\'ve built procurement-friendly sites for several Salem-area steel and engineering suppliers.' },
      { q: 'Can you design a catalogue site for a powerloom or textile business in Ammapet?', a: 'Yes, photo-led catalogue sites for Ammapet-area textile units are one of our common Salem projects.' },
      { q: 'Can I update seasonal product availability myself without a developer?', a: 'Yes, we build a simple content management setup so you can update seasonal listings like mango availability yourself.' },
      { q: 'Do you serve businesses outside Salem city, like Suramangalam or Shevapet?', a: 'Yes, we build local SEO pages tuned to these specific neighbourhoods, not just a generic Salem-wide page.' },
      { q: 'How long does a specification-driven supplier website take?', a: 'Typically 4-5 weeks including grade/spec data structuring and procurement-page setup.' },
      { q: 'Do you support mobile-data-friendly, fast-loading catalogue sites?', a: 'Yes, this is a core requirement we build around for Salem\'s textile and trade clients specifically.' },
    ],
  },
  {
    slug: 'theni',
    district: 'Theni',
    state: 'Tamil Nadu',
    region: 'Southern Tamil Nadu, Western Ghats border',
    economyFocus: ['cardamom & spice plantations', 'grape & banana farming', 'sugar mills', 'agro-tourism'],
    landmarks: ['Cumbum Valley', 'Bodinayakanur', 'Megamalai (Highwavys)', 'Suruli Falls', 'Periyakulam'],
    nearbyAreas: ['Bodinayakanur', 'Cumbum', 'Periyakulam', 'Uthamapalayam', 'Andipatti'],
    seo: {
      title: 'Website Design Company in Theni | Web Design for Plantation & Agro Businesses',
      description:
        'Website design company in Theni for cardamom/spice plantation businesses, Cumbum Valley grape growers, and Bodinayakanur sugar-mill suppliers. Fast, mobile-first sites with local SEO. Free quote.',
      keywords: [
        'website design company in Theni',
        'web design Theni Tamil Nadu',
        'website designer Bodinayakanur',
        'agro business website Theni',
        'plantation company website design',
      ],
      ogImage: '/og/theni.jpg',
    },
    hero: {
      headline: 'Website Design Company in Theni',
      subheadline:
        "Theni's economy runs on cardamom and spice estates, Cumbum Valley grape farms, and sugar mills around Bodinayakanur — not retail footfall. We build sites for buyers who are comparing suppliers, not browsing.",
      cta: 'Get a Free Website Audit',
    },
    intro: [
      "Theni is one of the few Tamil Nadu districts where the local economy is genuinely agricultural at commercial scale — cardamom and spice estates around the Western Ghats border, the grape and banana farms of Cumbum Valley (often called Tamil Nadu's grape belt), and a cluster of sugar mills around Bodinayakanur. Growing agro-tourism around Megamalai and Suruli Falls adds a smaller but distinct hospitality segment on top of that.",
      "For plantation and spice-trading businesses, buyers are usually wholesalers or exporters comparing multiple suppliers on quality grade, harvest season, and pricing — a website needs to make that comparison easy, not hide it behind a phone-call-only enquiry form. For Cumbum Valley grape and banana growers, seasonal harvest timing matters as much as the product photos. For the smaller agro-tourism operators near Megamalai, we build simpler booking-and-enquiry sites rather than heavy hotel-booking systems, since most of these are homestays and estate-stay operators, not large hotels.",
    ],
    services: [
      { title: 'Plantation & Spice Trading Websites', description: 'Grade, harvest-season, and pricing information laid out for wholesale/export buyers comparing suppliers.' },
      { title: 'Grape & Agro-Produce Business Sites', description: 'For Cumbum Valley growers — seasonal availability pages and direct buyer enquiry forms.' },
      { title: 'Sugar Mill & Agro-Processing Sites', description: 'For Bodinayakanur-area agro-processing suppliers needing a straightforward B2B presence.' },
      { title: 'Agro-Tourism & Homestay Websites', description: 'Simple booking/enquiry sites for Megamalai and Suruli Falls-area homestays and estate stays.' },
      { title: 'Local SEO for Theni Search', description: 'Google Business Profile and schema tuned to Theni\'s specific towns — Bodinayakanur, Cumbum, Periyakulam.' },
      { title: 'Website Maintenance & Hosting', description: 'Simple self-service updates for seasonal listings, with ongoing security and backup support.' },
    ],
    portfolio: [
      { clientType: 'Cardamom estate & trading business, near Western Ghats', industry: 'Spice plantation', result: 'Built a grade/harvest-led site aimed at wholesale and export buyers.' },
      { clientType: 'Grape grower, Cumbum Valley', industry: 'Agriculture', result: 'Launched a seasonal-availability site with a direct buyer enquiry form.' },
      { clientType: 'Sugar mill supplier, Bodinayakanur', industry: 'Agro-processing', result: 'Replaced a phone-only enquiry process with a simple B2B contact and product page.' },
      { clientType: 'Estate homestay, Megamalai', industry: 'Agro-tourism', result: 'Built a lightweight booking-enquiry site optimised for mobile searches.' },
    ],
    whyUs: [
      'We build plantation and spice-trading sites around what export/wholesale buyers actually compare first — grade and harvest timing, not decoration.',
      'Seasonal availability pages for grape and produce growers are simple enough to self-update without calling a developer each harvest.',
      'Agro-tourism sites are kept lightweight and booking-simple, sized correctly for homestays and estate stays rather than over-built for a large hotel chain.',
      'Local SEO covers Theni\'s actual towns — Bodinayakanur, Cumbum, Periyakulam — not just the district name alone.',
      'We keep language and layout accessible for buyers who may be reaching your site from a basic mobile connection near the Ghats.',
      'Full ownership of source code and content — no ongoing platform lock-in.',
    ],
    testimonials: [
      { name: 'A. Muthukumar', business: 'Cardamom estate owner', area: 'Near Western Ghats border', quote: 'Export buyers can now see our grading and harvest calendar upfront instead of asking the same questions on every call.' },
      { name: 'Selvakumari R.', business: 'Grape grower', area: 'Cumbum Valley', quote: 'I update the availability page myself before each harvest — no waiting on anyone.' },
      { name: 'Joseph P.', business: 'Homestay owner', area: 'Megamalai', quote: 'Booking enquiries come in through the site now instead of only through word of mouth.' },
    ],
    faq: [
      { q: 'Do you build websites for cardamom or spice plantation businesses?', a: 'Yes — we\'ve built grade and harvest-led sites for Theni-area spice estates aimed at wholesale and export buyers.' },
      { q: 'Can Cumbum Valley grape or banana growers update seasonal listings themselves?', a: 'Yes, we build a simple self-service setup so you can update availability each season without needing a developer.' },
      { q: 'Do you design websites for agro-tourism homestays near Megamalai or Suruli Falls?', a: 'Yes, we build lightweight booking-enquiry sites sized appropriately for homestays and estate stays, not oversized hotel systems.' },
      { q: 'Do you serve businesses in Bodinayakanur and Periyakulam specifically?', a: 'Yes, our local SEO work is built around Theni\'s actual towns, not just the district name.' },
      { q: 'How long does a plantation or agro-business website take?', a: 'Typically 3-5 weeks depending on how much product/grade data needs structuring.' },
      { q: 'Can you add export buyer-facing pricing and grading pages?', a: 'Yes, this is a standard requirement for our Theni plantation and spice-trading clients.' },
    ],
  },
];

export function getDistrictBySlug(slug) {
  return districts.find((d) => d.slug === slug) || null;
}

export function getAllDistrictSlugs() {
  return districts.map((d) => d.slug);
}

export const siteConfig = {
  companyName: COMPANY_NAME,
  domain: DOMAIN,
  phone: PHONE,
  email: EMAIL,
};