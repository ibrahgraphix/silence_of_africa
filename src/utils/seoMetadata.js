// SEO Metadata for all pages
export const seoMetadata = {
  home: {
    title: "Arusha Safari Tours & Packages | Silence Of Africa Safari",
    description: "Discover the untamed beauty of Africa with authentic safari experiences. Premium tours in Arusha, Maasai Mara, and national parks. Book your adventure today!",
    keywords: "safari tours, Arusha safari, Maasai Mara, African safari packages, wildlife tours",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  about: {
    title: "About Silence Of Africa Safari | Expert Guides & Experiences",
    description: "Learn about our passion for African safaris, expert guides, and commitment to authentic wildlife experiences and conservation.",
    keywords: "about safari, safari guides, safari company, Africa safari experts",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  safaris: {
    title: "Safari Packages & Tours | Silence Of Africa Safari",
    description: "Explore our curated safari packages including Maasai Mara safaris, national park tours, and customized wildlife experiences.",
    keywords: "safari packages, safari tours, Maasai Mara tours, wildlife safaris, Africa tours",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  beach: {
    title: "Beach Getaways & Coastal Tours | Silence Of Africa Safari",
    description: "Relax and explore Africa's stunning beaches and coastal destinations. Perfect beach retreats combined with safari experiences.",
    keywords: "beach tours, coastal Africa, beach getaway, beach safari combination",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  hiking: {
    title: "Mountain Hiking & Trekking Tours | Silence Of Africa Safari",
    description: "Experience thrilling mountain hiking and trekking adventures in Africa. Explore scenic trails and summit peaks with expert guides.",
    keywords: "hiking tours, mountain trekking, Africa hiking, trekking adventures, mountain expeditions",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  contact: {
    title: "Contact Us | Silence Of Africa Safari",
    description: "Get in touch with us to plan your perfect African safari adventure. Contact our expert team for inquiries and bookings.",
    keywords: "contact safari, safari booking, safari inquiry, contact information",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  terms: {
    title: "Terms & Conditions | Silence Of Africa Safari",
    description: "Read our terms and conditions for safari bookings, cancellations, and policies.",
    keywords: "terms, conditions, safari policies, booking terms",
    ogImage: "/logo.jpg",
    ogType: "website",
  },
  singlePackage: (packageName) => ({
    title: `${packageName} | Safari Package | Silence Of Africa Safari`,
    description: `Discover the ${packageName} safari package. Book your African wildlife adventure with expert guides and authentic experiences.`,
    keywords: `${packageName}, safari package, Africa safari, wildlife tour`,
    ogImage: "/logo.jpg",
    ogType: "product",
  }),
};

// Base URL for canonical URLs
export const baseUrl = "https://silenceofafricasafaris.com";
