// ============================================================
// site-config.ts — single source of truth for all copy + brand
// Brand: Ocean Crown · Luxury Yacht Charter / Travel
//
// Generation manifest (Step 2.5 — all axes rolled; locked fields honored):
//   archetype: A                 style: S16 (travel/coastal-luxury, ocean-mint override)
//   color_variant: ocean-mint (LOCKED)   voice_family: V1 (premium-locked)
//   typography: playfair-lato (LOCKED — Playfair Display + Lato)
//   cta_variant: CTA4            card_variant: CV6
//   header_variant: pill-floating (dark frosted)   footer_variant: FT9 (dark-block-tagline)
//   hero_overlay: HO3            hero_text: H2        hero_entrance: E2
//   scene_variant: SC3           motion_variant: A.M1 (forward dolly, 3 scenes)
//   g_render_mode: n/a (archetype A)
//   services_variant: SV6        showcase_variant: PV2
//   hero_composition: HC5        manifesto_variant: MV5
//   value_prop_variant: VV1      process_variant: PRV1
//   booking_pattern: n/a (engine = request-a-quote / contact)
//   hero_treatment: scrubbed-frames    glass_material: liquid-glass-port-dots
//   motion_vocabulary: frame-scrub + ease-cinematic
//   background_treatment: layered-photography-parallax
//   card_material_variant: image-reveal-mask
//   motion_bg_pattern: wave-fluid      motion_bg_density: subtle
//   narrative_shape: place-portrait    camera_vocabulary: forward-dolly
//   composition_pattern: negative-space-dominant   subject_position: mid
//   lighting_temperature: golden-hour  industry_video_tone: aviation-vast-free
//   industry: professional (quote-based)  bookingVariant: n/a  cartVariant: n/a
//   auth_strategy: none   customer_management_enabled: false   subscribers_enabled: true
//   about_variant: AB2   contact_variant: CT2   work_variant: WK2
//   stats_variant: n/a (no fabricated numbers)   testimonials_variant: TS1 (placeholder)
// ============================================================

export const siteConfig = {
  company: {
    name: "Ocean Crown",
    tagline: "Private Yacht Charters, Crowned by the Sea",
    description:
      "Ocean Crown curates fully crewed private yacht charters across the Mediterranean, the Caribbean and Dubai — bespoke voyages aboard the world's most exceptional motor yachts, sailing yachts and superyachts.",
    email: "charter@oceancrown.com",
    phone: "+377 99 00 12 34",
    location: "Monaco · Mediterranean · Caribbean · Dubai",
  },

  brand: {
    primary: "#2E7F8C",
    accent: "#2E7F8C",
    bg: "#EAF7F5",
  },

  typography: {
    display: "Playfair Display",
    body: "Lato",
    mono: "ui-monospace",
  },

  seo: {
    siteUrl: "https://oceancrown.com",
    locale: "en_US",
    htmlLang: "en",
    defaultTitle: "Ocean Crown — Private Yacht Charters, Crowned by the Sea",
    defaultDescription:
      "Fully crewed private yacht charters across the Mediterranean, Caribbean and Dubai. Bespoke voyages aboard exceptional motor yachts, sailing yachts and superyachts.",
    defaultOgImage: "https://oceancrown.com/og-default.png",
    twitterHandle: "@oceancrown",
    noindexPaths: ["/account", "/admin", "/auth", "/api"],
  },

  socials: {
    instagram: "https://instagram.com/oceancrown",
    linkedin: "https://linkedin.com/company/oceancrown",
    youtube: "https://youtube.com/@oceancrown",
    facebook: "https://facebook.com/oceancrown",
  },

  // -- Hero (scrub story) — fed to HeroScrollText (>=3 chapters) --------------
  heroChapters: [
    {
      at: 0,
      eyebrow: "Mediterranean · Caribbean · Dubai",
      headlineLines: ["The sea,", "made private"],
      subline:
        "Fully crewed charters aboard the world's most exceptional yachts — designed entirely around you.",
    },
    {
      at: 0.4,
      eyebrow: "Every horizon, considered",
      headlineLines: ["Itineraries", "without limits"],
      subline:
        "Hidden coves at dawn, harbour cities at dusk. Your captain charts the course you imagine.",
    },
    {
      at: 0.75,
      eyebrow: "From enquiry to anchor",
      headlineLines: ["A voyage", "worth its crown"],
      subline:
        "Tell us your dates and your dream. We return a curated charter, quietly perfect.",
    },
  ],

  hero: {
    h1: [
      { text: "The sea,", accent: false },
      { text: "made private", accent: true },
    ],
  },

  tagline: "Private Yacht Charters, Crowned by the Sea",

  // -- Services -------------------------------------------------------------
  servicesHeading: "Charters & Bespoke Voyages",

  services: [
    {
      name: "Motor Yacht Charters",
      slug: "motor-yacht",
      description:
        "Effortless cruising aboard fully crewed motor yachts — covering more coastline in a day with the comfort of a private floating residence.",
      highlights: [
        "Fully crewed with captain, chef and stewardess",
        "Stabilised hulls for serene passages",
        "Day-charter to multi-week voyages",
      ],
    },
    {
      name: "Sailing Yacht Charters",
      slug: "sailing-yacht",
      description:
        "The romance of the wind with the polish of a private crew — classic and performance sailing yachts for those who want to feel the sea.",
      highlights: [
        "Catamarans and monohull sailing yachts",
        "Hands-on or fully serviced sailing",
        "Quiet anchorages beyond the crowds",
      ],
    },
    {
      name: "Superyacht Charters",
      slug: "superyacht",
      description:
        "The pinnacle of life on the water — superyachts with sundecks, spas, tenders and toys, and a crew devoted to a single guest list: yours.",
      highlights: [
        "40m to 100m+ superyachts",
        "Beach clubs, jacuzzis and water-toy fleets",
        "Private chef and dedicated concierge",
      ],
    },
    {
      name: "Corporate & Event Charters",
      slug: "corporate-events",
      description:
        "Board meetings at sea, product launches, brand activations and celebrations — a private yacht is the most memorable venue you will ever book.",
      highlights: [
        "Group entertaining and hospitality",
        "Grand Prix, regatta and festival charters",
        "Full event production and catering",
      ],
    },
    {
      name: "Bespoke Itineraries",
      slug: "bespoke-itineraries",
      description:
        "Tell us the experience you are chasing and we design the route around it — anchorages, restaurants, dive sites and shoreside reservations.",
      highlights: [
        "Tailored route and timing planning",
        "Restaurant, villa and excursion bookings",
        "Local guides and private transfers",
      ],
    },
    {
      name: "Concierge & Yacht Management",
      slug: "concierge",
      description:
        "Before, during and after the voyage — a single point of contact handling provisioning, transfers, special requests and every quiet detail.",
      highlights: [
        "24/7 onboard and shoreside concierge",
        "Provisioning and special requests",
        "Owner and guest yacht management",
      ],
    },
  ] as Array<{ name: string; slug: string; description: string; highlights?: string[] }>,

  rooms: [] as Array<unknown>,
  locations: [] as Array<unknown>,
  gallery: [] as Array<{ src: string; alt: string; caption?: string }>,

  serviceAreas: [
    {
      region: "The Mediterranean",
      detail:
        "The French and Italian Riviera, the Amalfi Coast, Sardinia, Corsica, the Balearics and the Greek isles.",
    },
    {
      region: "The Caribbean",
      detail:
        "St. Barths, the British Virgin Islands, Antigua, the Grenadines and the turquoise shallows between them.",
    },
    {
      region: "Dubai & The Gulf",
      detail:
        "The Arabian Gulf skyline, the Palm, the World Islands and warm-water cruising through the winter season.",
    },
  ],

  // -- Why us ----------------------------------------------------------------
  whyUs: {
    heading: "Why Ocean Crown",
    items: [
      {
        title: "An unrestricted fleet",
        description:
          "We are independent, so we recommend the right yacht for your voyage — never the one we are obliged to sell.",
      },
      {
        title: "Crews who anticipate",
        description:
          "Hand-picked captains, chefs and stewardesses who read a moment before you have to ask.",
      },
      {
        title: "Itineraries that surprise",
        description:
          "Beyond the obvious harbours — the cove, the table, the sunset that most guests never find.",
      },
      {
        title: "One quiet point of contact",
        description:
          "From first enquiry to the final tender ashore, a single charter manager owns every detail.",
      },
    ],
  },

  // -- Process (PRV1) --------------------------------------------------------
  process: [
    {
      step: 1,
      title: "Enquire",
      description:
        "Share your dates, your guests and the experience you have in mind. No obligation, no pressure.",
    },
    {
      step: 2,
      title: "Curate",
      description:
        "We return a shortlist of yachts and a draft itinerary, tuned to your taste and budget.",
    },
    {
      step: 3,
      title: "Refine",
      description:
        "We fine-tune the route, the menus and the details until the charter feels unmistakably yours.",
    },
    {
      step: 4,
      title: "Set Sail",
      description:
        "Step aboard. Your crew and concierge take it from here, ashore and at sea.",
    },
  ],

  // -- About -----------------------------------------------------------------
  aboutHeading: "A house built on the water",
  aboutStory:
    "Ocean Crown began with a simple conviction: that time on the water should feel effortless, personal and quietly extraordinary. Founded by charter specialists who have crewed, brokered and travelled the world's great cruising grounds, we curate fully crewed voyages across the Mediterranean, the Caribbean and Dubai. We are independent by design — free to match each guest to the right yacht and the right crew, and to chase the kind of itinerary that turns a holiday into a memory you return to for the rest of your life.",
  manifesto:
    "The horizon is not a destination. It is an invitation — and the finest way to answer it is privately, with a crew who know your name.",
  values: [
    {
      title: "Discretion",
      description:
        "Privacy is the luxury beneath every other luxury. What happens aboard stays aboard.",
    },
    {
      title: "Craft",
      description:
        "From the trim of the sails to the plating at dinner, we believe in details done beautifully.",
    },
    {
      title: "Independence",
      description:
        "We answer to our guests, never to a fleet. The recommendation is always the right one.",
    },
  ],

  // -- Work / featured voyages (placeholder copy + names per intake) ---------
  work: [
    {
      title: "Seven days, Amalfi to Capri",
      client: "Private family charter",
      service: "Motor Yacht Charters",
      result: "A 42m motor yacht, a private chef, and a different cove every morning.",
    },
    {
      title: "Regatta week in Antigua",
      client: "The Hartley party",
      service: "Sailing Yacht Charters",
      result: "Race by day, anchor by night — a performance sailing yacht and full crew.",
    },
    {
      title: "Product launch at sea, Monaco",
      client: "A European fashion house",
      service: "Corporate & Event Charters",
      result: "A superyacht venue for 60 guests during Grand Prix weekend.",
    },
    {
      title: "Island-hopping the Grenadines",
      client: "The Okafor honeymoon",
      service: "Bespoke Itineraries",
      result: "A two-week catamaran voyage with private dives and beach dinners.",
    },
    {
      title: "Winter on the Arabian Gulf",
      client: "Private charter, Dubai",
      service: "Superyacht Charters",
      result: "Warm-water cruising past the Palm with a full water-toy fleet.",
    },
    {
      title: "A milestone birthday, Ibiza",
      client: "The Russo celebration",
      service: "Corporate & Event Charters",
      result: "A weekend charter with event production, DJ and floating dance floor.",
    },
  ],

  // -- Testimonials (placeholder copy & client names, per intake) ------------
  testimonials: [
    {
      quote:
        "Every detail was handled before we thought to ask. The most relaxed week of our year — and the most spoiled.",
      name: "Eleanor & James W.",
      detail: "Family charter, Amalfi Coast",
    },
    {
      quote:
        "Ocean Crown found us a yacht and crew that felt like our own. We have already booked next summer.",
      name: "Daniel R.",
      detail: "Superyacht charter, Sardinia",
    },
    {
      quote:
        "They turned a corporate event into the launch everyone is still talking about. Flawless from quote to disembark.",
      name: "Priya N.",
      detail: "Corporate charter, Monaco",
    },
  ],

  stats: [] as Array<{ value: string; label: string }>,
  features: [] as Array<{ title: string; description: string }>,
  sectionThemeWord: "Voyage",
  narrative: [] as Array<{ speaker: string; text: string }>,

  mixedMedia: {
    skipSecondaryVideo: true,
    accentEyebrow: "",
    accentLine: "",
  },

  cta: {
    primary: "Request a quote",
    secondary: "Explore charters",
  },

  ctaBlock: {
    heading: "Tell us where the horizon should take you",
    description:
      "Share your dates and your dream voyage. Your charter manager will return a curated proposal — discreetly and without obligation.",
  },

  trustBar: ["Mediterranean", "Caribbean", "Dubai", "Fully Crewed", "24/7 Concierge"] as string[],

  scrollHero: {
    archetype: "A" as const,
    styleId: "S16",
    assetMode: "live-generate" as const,
    imageUrl: "",
    frameCount: 0,
    scrollDistance: 6,
  },

  headerVariant: "pill-floating" as const,

  motion: {
    scrollProgress: true,
    cursorFollower: false,
    intensity: "medium" as const,
  },
} as const;

export type SiteConfig = typeof siteConfig;
