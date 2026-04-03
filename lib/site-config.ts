/* ==========================================================================
   SITE CONFIG — The ONLY file you edit per client.
   All text, images, colors, and links live here.
   ========================================================================== */

export const siteConfig = {
  name: "Flying Papers",
  tagline: "Your ticket to get there",
  url: "https://www.flyingpapers.com",

  colors: {
    cream: "#F9F5F2",
    purple: "#8584BD",
    purpleDark: "#61609A",
    red: "#C94245",
    yellow: "#F4ED36",
    green: "#375027",
    pink: "#F8C1BA",
    magenta: "#AC4F98",
    blueGrey: "#A7B5CC",
    dark: "#1A1A1A",
    gold: "#F9CC73",
    lightGreen: "#B5C995",
  },

  /* --- AGE GATE (first screen overlay) --- */
  ageGate: {
    enabled: true,
    heading: ["HOW OLD", "ARE YOU?"],
    confirmText: "I'm over 18, let me in",
    denyText: "I'm not over 18 yet",
    denyHref: "https://www.google.com",
    bg: "#61609A",
    textColor: "#F4ED36",
    characterImage: "", // Add character image peeking between text
  },

  /* --- SECTION 1: HERO --- */
  hero: {
    eyebrow: ["I'm", "fly!"],
    heading: [
      ["Let", "me", "show"],
      ["you", "where"],
      ["we", "can", "go"],
    ],
    characterImage: "", // Floating character below heading
    bg: "#F9F5F2",
    textColor: "#1A1A1A",
  },

  /* --- SECTION 2: EXPLORE SLIDER --- */
  explore: {
    heading: [["Let's"], ["explore"], ["your"], ["options"]],
    bg: "#8584BD",
    textColor: "#F4ED36",
    items: [
      {
        label: "Rolls",
        href: "/categories/paper-rolls",
        icon: "/images/icon-rolls.svg",
        bg: "#8584BD",
        textColor: "#F4ED36",
      },
      {
        label: "Grinders",
        href: "/categories/grinders",
        icon: "/images/icon-grinders.svg",
        bg: "#375027",
        textColor: "#B5C995",
      },
      {
        label: "Cones",
        href: "/categories/pre-rolled-cones",
        icon: "/images/icon-cones.svg",
        bg: "#C94245",
        textColor: "#F8C1BA",
      },
      {
        label: "Tips",
        href: "/categories/filter-tips",
        icon: "/images/icon-tips.svg",
        bg: "#AC4F98",
        textColor: "#F9CC73",
      },
      {
        label: "Papers",
        href: "/categories/rolling-papers",
        icon: "/images/icon-papers.svg",
        bg: "#8584BD",
        textColor: "#F4ED36",
      },
    ],
  },

  /* --- SECTIONS 3 & 4: SCROLL REVEAL (sticky parallax) --- */
  scrollSections: [
    {
      previewText: ["Consider", "looking for", "some third eye", "perspective?"],
      heading: [
        ["Consider"],
        ["looking", "for"],
        ["some", "third", "eye"],
        ["perspective?"],
      ],
      bg: "#AC4F98",
      textColor: "#F9F5F2",
      characterImage: "", // Character in background
      products: [
        {
          name: "Paper Rolls",
          icon: "/images/icon-rolls.svg",
          cta: "Shop",
          href: "/categories/paper-rolls",
          bg: "#8584BD",
          textColor: "#F4ED36",
        },
        {
          name: "Pre-rolled cones",
          icon: "/images/icon-cones.svg",
          cta: "Shop",
          href: "/categories/pre-rolled-cones",
          bg: "#375027",
          textColor: "#B5C995",
        },
      ],
      shopAllHref: "/categories/all",
    },
    {
      previewText: ["How about", "transcending", "the power of", "now, right", "now?"],
      heading: [
        ["How", "about"],
        ["transcending"],
        ["the", "power", "of"],
        ["now,", "right"],
        ["now?"],
      ],
      bg: "#375027",
      textColor: "#F9F5F2",
      characterImage: "", // Character in background
      products: [
        {
          name: "Filter Tips",
          icon: "/images/icon-tips.svg",
          cta: "Shop",
          href: "/categories/filter-tips",
          bg: "#C94245",
          textColor: "#F8C1BA",
        },
        {
          name: "Grinders",
          icon: "/images/icon-grinders.svg",
          cta: "Shop",
          href: "/categories/grinders",
          bg: "#AC4F98",
          textColor: "#F9CC73",
        },
        {
          name: "Rolling Papers",
          icon: "/images/icon-papers.svg",
          cta: "Shop",
          href: "/categories/rolling-papers",
          bg: "#8584BD",
          textColor: "#F4ED36",
        },
      ],
      shopAllHref: "/categories/all",
    },
  ],

  /* --- SECTION 5: BOTTOM --- */
  bottom: {
    eyebrow: [
      ["Wherever", "you"],
      ["want", "to", "go"],
    ],
    heading: [
      ["Flying", "papers"],
      ["is", "your", "ticket", "to"],
      ["get", "there"],
    ],
    bg: "#A7B5CC",
    textColor: "#1A1A1A",
    characterImage: "", // Character rising from below
  },

  /* --- SECTION 6: FOOTER --- */
  footer: {
    bg: "#C94245",
    textColor: "#F8C1BA",
    cards: [
      {
        title: "Gift a $5 Discount",
        icon: "/images/promo-gift.svg",
        cta: "Learn more",
        href: "/support/all#referral",
        bg: "#8584BD",
        textColor: "#F4ED36",
      },
      {
        title: "Become an affiliate",
        cta: "Learn more",
        href: "/affiliate",
        bg: "#375027",
        textColor: "#B5C995",
      },
      {
        title: "Win an Ibiza Holiday",
        image: "/images/promo-ibiza.png",
        cta: "Learn more",
        href: "/ibiza-holiday",
        bg: "#C94245",
        textColor: "#F8C1BA",
      },
    ],
    bottomText: "Thanks for flying with us",
  },

  /* --- HEADER / NAV --- */
  nav: {
    logo: "",
    menuItems: [
      { label: "Shop All", href: "/categories/all" },
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
