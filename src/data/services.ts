export type PackageTier = "Basic" | "Premium" | "Gold";

export interface Package {
  name: PackageTier;
  price: number;
  delivery_days: number;
  revisions: number;
  features: string[];
  ideal_for: string;
  stripe_price_id: string;
  popular?: boolean;
}

export interface Addon {
  id: string;
  title: string;
  price: number;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  category: "web" | "branding" | "growth";
  name: string;
  short_name: string;
  icon: string;
  outcome_statement: string;
  description: string;
  packages: Package[];
  addons: Addon[];
  faq: FAQ[];
  delivery_process: string[];
  cross_sell: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export const categories: Category[] = [
  {
    id: "web",
    name: "Web Services",
    description: "Custom websites & redesigns that convert visitors into customers",
    icon: "🌐",
    services: ["website-development", "website-redesign"],
  },
  {
    id: "branding",
    name: "Branding & Design",
    description: "Visual identity that makes your brand unforgettable",
    icon: "🎨",
    services: ["logo-design", "graphic-design"],
  },
  {
    id: "growth",
    name: "Growth & Marketing",
    description: "Strategies that drive traffic, leads, and revenue",
    icon: "📈",
    services: ["seo-search-boost", "social-media-management"],
  },
];

export const services: Service[] = [
  {
    id: "1",
    slug: "website-development",
    category: "web",
    name: "Website Development",
    short_name: "Web Dev",
    icon: "💻",
    outcome_statement: "Launch a stunning, conversion-optimized website in days — not months",
    description:
      "Get a professionally designed, mobile-responsive website built on modern technology. We handle everything from design to deployment so you can focus on growing your business.",
    packages: [
      {
        name: "Basic",
        price: 1499,
        delivery_days: 7,
        revisions: 2,
        features: [
          "Up to 5 pages",
          "Mobile responsive design",
          "Contact form",
          "Basic SEO setup",
          "SSL certificate",
          "1 month free hosting",
        ],
        ideal_for: "Startups & personal brands needing a professional online presence",
        stripe_price_id: "price_web_basic",
      },
      {
        name: "Premium",
        price: 2999,
        delivery_days: 14,
        revisions: 5,
        features: [
          "Up to 10 pages",
          "Mobile responsive design",
          "Advanced contact forms",
          "Blog/CMS integration",
          "SEO optimization",
          "Google Analytics setup",
          "SSL certificate",
          "3 months free hosting",
          "Social media integration",
        ],
        ideal_for: "Growing businesses ready to scale their online presence",
        stripe_price_id: "price_web_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 5999,
        delivery_days: 21,
        revisions: 10,
        features: [
          "Up to 20 pages",
          "Custom animations & interactions",
          "E-commerce ready (up to 50 products)",
          "Advanced CMS",
          "Full SEO suite",
          "Analytics dashboard",
          "Performance optimization",
          "SSL certificate",
          "6 months free hosting",
          "Priority support",
          "A/B testing setup",
        ],
        ideal_for: "Established businesses needing a high-performance, feature-rich website",
        stripe_price_id: "price_web_gold",
      },
    ],
    addons: [
      { id: "a1", title: "Extra Page", price: 150, description: "Add an additional custom page" },
      { id: "a2", title: "Copywriting", price: 299, description: "Professional copy for all pages" },
      { id: "a3", title: "Stock Photography", price: 99, description: "Licensed premium stock images" },
      { id: "a4", title: "Rush Delivery (50% faster)", price: 499, description: "Get your site delivered in half the time" },
    ],
    faq: [
      { question: "What platform do you build on?", answer: "We primarily build with Next.js and modern frameworks, but can work with WordPress, Shopify, or Webflow based on your needs." },
      { question: "Do I need to provide content?", answer: "You can provide your own content or add our Copywriting add-on. We'll guide you through what's needed during the intake process." },
      { question: "What about hosting?", answer: "We include free hosting for the period specified in your package. After that, hosting is available from $29/month." },
      { question: "Can I make changes after delivery?", answer: "You get the number of revisions specified in your package. Additional revisions are available at $75/hour." },
    ],
    delivery_process: [
      "Purchase your package & complete the intake form",
      "We create wireframes & design mockups for your approval",
      "Development & build phase begins",
      "Review, revisions & final approval",
      "Launch & handover with training session",
    ],
    cross_sell: ["seo-search-boost", "social-media-management"],
  },
  {
    id: "2",
    slug: "website-redesign",
    category: "web",
    name: "Website Redesign",
    short_name: "Redesign",
    icon: "🔄",
    outcome_statement: "Transform your outdated website into a modern conversion machine",
    description:
      "Breathe new life into your existing website with a complete visual and technical overhaul. We modernize your design, improve performance, and boost conversions.",
    packages: [
      {
        name: "Basic",
        price: 999,
        delivery_days: 5,
        revisions: 2,
        features: [
          "Visual refresh (up to 5 pages)",
          "Modern design update",
          "Mobile responsiveness fix",
          "Basic speed optimization",
          "Updated contact forms",
        ],
        ideal_for: "Sites that just need a fresh coat of paint",
        stripe_price_id: "price_redesign_basic",
      },
      {
        name: "Premium",
        price: 2499,
        delivery_days: 10,
        revisions: 5,
        features: [
          "Full redesign (up to 10 pages)",
          "UX/UI overhaul",
          "Content restructuring",
          "SEO migration",
          "Speed optimization",
          "New CMS setup",
          "Analytics migration",
        ],
        ideal_for: "Businesses ready for a complete digital transformation",
        stripe_price_id: "price_redesign_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 4999,
        delivery_days: 18,
        revisions: 10,
        features: [
          "Complete rebuild (up to 20 pages)",
          "Custom UX research & strategy",
          "New design system",
          "Advanced animations",
          "Full SEO migration & boost",
          "E-commerce migration",
          "Performance audit & optimization",
          "6 months support",
        ],
        ideal_for: "Enterprise sites needing ground-up reconstruction",
        stripe_price_id: "price_redesign_gold",
      },
    ],
    addons: [
      { id: "a5", title: "UX Audit Report", price: 399, description: "Comprehensive UX analysis before redesign" },
      { id: "a6", title: "Content Migration", price: 199, description: "Transfer all existing content seamlessly" },
      { id: "a7", title: "Rush Delivery", price: 399, description: "50% faster delivery" },
    ],
    faq: [
      { question: "Will my SEO rankings be affected?", answer: "We implement proper 301 redirects and SEO migration to preserve your existing rankings." },
      { question: "Can you work with my current platform?", answer: "Yes, we can redesign on your existing platform or migrate to a better one." },
      { question: "How long will my site be down?", answer: "Zero downtime. We build the new site in parallel and switch over seamlessly." },
    ],
    delivery_process: [
      "Purchase & complete intake form with your current site URL",
      "We audit your current site & create a redesign plan",
      "Design mockups for your approval",
      "Build, migrate & test",
      "Launch & verify everything works perfectly",
    ],
    cross_sell: ["seo-search-boost", "logo-design"],
  },
  {
    id: "3",
    slug: "logo-design",
    category: "branding",
    name: "Logo Design",
    short_name: "Logo",
    icon: "✦",
    outcome_statement: "Get a memorable logo that captures your brand essence",
    description:
      "A professionally designed logo that tells your brand story at a glance. Receive multiple concepts, unlimited revisions within your package, and all source files.",
    packages: [
      {
        name: "Basic",
        price: 299,
        delivery_days: 3,
        revisions: 2,
        features: [
          "2 initial concepts",
          "Source files (SVG, PNG, PDF)",
          "Color & B/W versions",
          "Basic brand guide",
        ],
        ideal_for: "New businesses needing a professional logo fast",
        stripe_price_id: "price_logo_basic",
      },
      {
        name: "Premium",
        price: 599,
        delivery_days: 5,
        revisions: 5,
        features: [
          "4 initial concepts",
          "All source files + editable formats",
          "Color palette definition",
          "Typography selection",
          "Brand guidelines document",
          "Social media profile versions",
          "Favicon & app icon",
        ],
        ideal_for: "Businesses wanting a complete brand identity starter kit",
        stripe_price_id: "price_logo_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 1299,
        delivery_days: 10,
        revisions: 15,
        features: [
          "6 initial concepts",
          "Full brand identity system",
          "Logo variations (horizontal, stacked, icon)",
          "Complete color system",
          "Typography system",
          "Comprehensive brand guidelines (20+ pages)",
          "Business card design",
          "Letterhead & envelope",
          "Social media kit",
          "Brand presentation template",
        ],
        ideal_for: "Brands needing a complete, professional identity system",
        stripe_price_id: "price_logo_gold",
      },
    ],
    addons: [
      { id: "a8", title: "Business Card Design", price: 99, description: "Matching business card layout" },
      { id: "a9", title: "Brand Pattern", price: 149, description: "Custom pattern for packaging & backgrounds" },
      { id: "a10", title: "Animated Logo", price: 249, description: "Motion version for video & web" },
    ],
    faq: [
      { question: "What if I don't like any concepts?", answer: "We'll create new concepts based on your feedback, within your revision limit." },
      { question: "Do I own the logo?", answer: "Yes, full copyright transfer is included with every package." },
      { question: "What files do I receive?", answer: "All packages include SVG, PNG (various sizes), and PDF. Premium+ includes editable source files." },
    ],
    delivery_process: [
      "Purchase & complete brand questionnaire",
      "We research your industry & create concepts",
      "Present initial concepts for your selection",
      "Refine chosen concept through revisions",
      "Deliver final files & brand assets",
    ],
    cross_sell: ["graphic-design", "website-development"],
  },
  {
    id: "4",
    slug: "graphic-design",
    category: "branding",
    name: "Graphic Design",
    short_name: "Graphics",
    icon: "🎯",
    outcome_statement: "Professional designs that make your brand stand out everywhere",
    description:
      "From social media graphics to marketing materials, get professionally designed assets that maintain brand consistency and drive engagement.",
    packages: [
      {
        name: "Basic",
        price: 199,
        delivery_days: 2,
        revisions: 2,
        features: [
          "3 custom designs",
          "Social media or print",
          "Source files included",
          "2 size variations",
        ],
        ideal_for: "Quick design needs for social media or marketing",
        stripe_price_id: "price_graphic_basic",
      },
      {
        name: "Premium",
        price: 499,
        delivery_days: 5,
        revisions: 5,
        features: [
          "8 custom designs",
          "Multi-platform formats",
          "Source files + templates",
          "Brand consistency check",
          "Print-ready files",
          "Social media templates (reusable)",
        ],
        ideal_for: "Businesses needing a batch of on-brand marketing materials",
        stripe_price_id: "price_graphic_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 999,
        delivery_days: 10,
        revisions: 10,
        features: [
          "20 custom designs",
          "Full marketing collateral set",
          "Editable Canva/Figma templates",
          "Print & digital formats",
          "Brand style enforcement",
          "Infographic design",
          "Presentation templates",
          "Email header designs",
        ],
        ideal_for: "Full marketing design overhaul with reusable templates",
        stripe_price_id: "price_graphic_gold",
      },
    ],
    addons: [
      { id: "a11", title: "Rush Delivery", price: 149, description: "50% faster turnaround" },
      { id: "a12", title: "Animated Version", price: 79, description: "Animated GIF/MP4 per design" },
      { id: "a13", title: "Extra Design", price: 59, description: "One additional custom design" },
    ],
    faq: [
      { question: "What types of designs can you create?", answer: "Social media posts, banners, flyers, brochures, business cards, presentations, infographics, email headers, and more." },
      { question: "Can you match my existing brand?", answer: "Absolutely. Share your brand guidelines or existing materials and we'll maintain consistency." },
      { question: "What formats do you deliver?", answer: "PNG, JPG, PDF, SVG, and source files. Print-ready versions include bleed and crop marks." },
    ],
    delivery_process: [
      "Purchase & share your design brief",
      "We create initial designs matching your brand",
      "Review & provide feedback",
      "Revisions until you're happy",
      "Receive all files & templates",
    ],
    cross_sell: ["logo-design", "social-media-management"],
  },
  {
    id: "5",
    slug: "seo-search-boost",
    category: "growth",
    name: "SEO / Search Boost",
    short_name: "SEO",
    icon: "🔍",
    outcome_statement: "Climb search rankings and get found by your ideal customers",
    description:
      "Data-driven SEO that moves the needle. We optimize your site technically and strategically to increase organic traffic and search visibility.",
    packages: [
      {
        name: "Basic",
        price: 499,
        delivery_days: 7,
        revisions: 1,
        features: [
          "SEO audit report",
          "Keyword research (20 keywords)",
          "On-page optimization (5 pages)",
          "Meta tags & descriptions",
          "Google Search Console setup",
          "XML sitemap creation",
        ],
        ideal_for: "New sites or businesses starting their SEO journey",
        stripe_price_id: "price_seo_basic",
      },
      {
        name: "Premium",
        price: 999,
        delivery_days: 14,
        revisions: 3,
        features: [
          "Comprehensive SEO audit",
          "Keyword strategy (50 keywords)",
          "On-page optimization (15 pages)",
          "Technical SEO fixes",
          "Content optimization",
          "Local SEO setup",
          "Competitor analysis",
          "Google Business Profile optimization",
          "Monthly performance report (1 month)",
        ],
        ideal_for: "Businesses serious about growing organic traffic",
        stripe_price_id: "price_seo_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 2499,
        delivery_days: 30,
        revisions: 5,
        features: [
          "Full SEO strategy & roadmap",
          "Keyword strategy (100+ keywords)",
          "Complete site optimization",
          "Technical SEO overhaul",
          "Content strategy & briefs (10 articles)",
          "Link building (10 quality backlinks)",
          "Local SEO (multi-location)",
          "Schema markup implementation",
          "3 months of monitoring & reports",
          "Monthly strategy calls",
        ],
        ideal_for: "Businesses wanting to dominate their search market",
        stripe_price_id: "price_seo_gold",
      },
    ],
    addons: [
      { id: "a14", title: "Blog Post (SEO-optimized)", price: 149, description: "1,500+ word article targeting a keyword" },
      { id: "a15", title: "Additional Backlinks (5)", price: 399, description: "Quality link building from relevant sites" },
      { id: "a16", title: "Monthly SEO Retainer", price: 799, description: "Ongoing optimization & reporting" },
    ],
    faq: [
      { question: "How long before I see results?", answer: "SEO is a long-term investment. You'll typically see improvements in 3-6 months, with significant results in 6-12 months." },
      { question: "Do you guarantee rankings?", answer: "We don't guarantee specific rankings (no one honestly can), but we guarantee implementing best practices that improve your visibility." },
      { question: "Do I need a website first?", answer: "Yes, you need an existing website. If you don't have one, check out our Website Development service." },
    ],
    delivery_process: [
      "Purchase & share your website URL and goals",
      "We conduct a comprehensive audit",
      "Implement technical & on-page optimizations",
      "Deliver strategy documents & recommendations",
      "Review results & provide next-steps guidance",
    ],
    cross_sell: ["website-development", "social-media-management"],
  },
  {
    id: "6",
    slug: "social-media-management",
    category: "growth",
    name: "Social Media Management",
    short_name: "Social",
    icon: "📱",
    outcome_statement: "Build a thriving social presence that drives real business results",
    description:
      "Strategic social media management that grows your audience, builds engagement, and converts followers into customers. Content creation, scheduling, and analytics included.",
    packages: [
      {
        name: "Basic",
        price: 399,
        delivery_days: 7,
        revisions: 2,
        features: [
          "2 platforms managed",
          "12 posts/month",
          "Content calendar",
          "Basic graphics",
          "Hashtag research",
          "Monthly analytics report",
        ],
        ideal_for: "Small businesses starting on social media",
        stripe_price_id: "price_social_basic",
      },
      {
        name: "Premium",
        price: 799,
        delivery_days: 7,
        revisions: 5,
        features: [
          "3 platforms managed",
          "20 posts/month",
          "Content strategy",
          "Custom graphics & templates",
          "Stories/Reels (4/month)",
          "Community management",
          "Hashtag strategy",
          "Bi-weekly analytics reports",
          "Competitor monitoring",
        ],
        ideal_for: "Growing brands wanting consistent, strategic content",
        stripe_price_id: "price_social_premium",
        popular: true,
      },
      {
        name: "Gold",
        price: 1599,
        delivery_days: 7,
        revisions: 10,
        features: [
          "5 platforms managed",
          "30 posts/month",
          "Full content strategy",
          "Premium graphics & video",
          "Stories/Reels (12/month)",
          "Full community management",
          "Influencer outreach",
          "Ad campaign management",
          "Weekly analytics & insights",
          "Monthly strategy call",
          "Crisis management plan",
        ],
        ideal_for: "Brands ready to dominate social media with a full-service approach",
        stripe_price_id: "price_social_gold",
      },
    ],
    addons: [
      { id: "a17", title: "Additional Platform", price: 199, description: "Add another social platform" },
      { id: "a18", title: "Video Production (1 video)", price: 299, description: "Professional short-form video" },
      { id: "a19", title: "Paid Ads Management", price: 399, description: "Social media advertising management" },
    ],
    faq: [
      { question: "Which platforms do you manage?", answer: "Instagram, Facebook, LinkedIn, Twitter/X, TikTok, Pinterest, and YouTube." },
      { question: "Do I need to approve every post?", answer: "You'll receive a monthly content calendar for approval before anything is published." },
      { question: "How do I know it's working?", answer: "You receive regular analytics reports showing follower growth, engagement, reach, and website traffic from social." },
    ],
    delivery_process: [
      "Purchase & complete brand & audience questionnaire",
      "We develop your content strategy & calendar",
      "You approve the first month's content",
      "We publish, engage & manage daily",
      "Monthly review of results & strategy adjustments",
    ],
    cross_sell: ["graphic-design", "seo-search-boost"],
  },
];

export const bundles = [
  {
    id: "starter-bundle",
    name: "Starter Bundle",
    tagline: "Everything you need to launch",
    services: ["website-development", "logo-design", "social-media-management"],
    discount: 15,
    price: 2549,
    original_price: 2997,
  },
  {
    id: "growth-bundle",
    name: "Growth Bundle",
    tagline: "Scale your online presence",
    services: ["website-development", "seo-search-boost", "social-media-management"],
    discount: 15,
    price: 2799,
    original_price: 3297,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(categoryId: string): Service[] {
  return services.filter((s) => s.category === categoryId);
}

export function getCrossSellServices(slugs: string[]): Service[] {
  return slugs.map((slug) => getServiceBySlug(slug)).filter(Boolean) as Service[];
}
