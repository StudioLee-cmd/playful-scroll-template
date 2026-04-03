/* ==========================================================================
   SITE CONFIG — Change this file to swap out all content
   Everything the site displays comes from here.
   ========================================================================== */

export const siteConfig = {
  /* --- BRAND --- */
  name: "Flying Papers",
  tagline: "Your ticket to get there",
  url: "https://www.flyingpapers.com",

  /* --- COLORS (override CSS vars) --- */
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

  /* --- HERO SECTION --- */
  hero: {
    // Small heading above
    eyebrow: ["I'm", "fly!"],
    // Main heading lines (each array = one visual line)
    heading: [
      ["Let", "me", "show"],
      ["you", "where"],
      ["we", "can", "go"],
    ],
    // Character image (floating illustration)
    characterImage: "/images/character-hero.svg",
    // Background color for this section
    bg: "#F9F5F2",
    textColor: "#1A1A1A",
  },

  /* --- EXPLORE SLIDER SECTION --- */
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

  /* --- SCROLL REVEAL SECTIONS (the sticky parallax ones) --- */
  scrollSections: [
    {
      // Text that shows before scroll reveals the real heading
      previewText: ["Consider", "looking for", "some third eye", "perspective?"],
      // Real heading (word-by-word animated)
      heading: [
        ["Consider"],
        ["looking", "for"],
        ["some", "third", "eye"],
        ["perspective?"],
      ],
      bg: "#AC4F98",
      textColor: "#F9F5F2",
      characterImage: "/images/character-section1.svg",
      // Product cards that slide in
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
      characterImage: "/images/character-section2.svg",
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

  /* --- BOTTOM SECTION --- */
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
    characterImage: "/images/character-bottom.svg",
  },

  /* --- FOOTER PROMO CARDS --- */
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
    logo: "/images/logo.svg",
    menuItems: [
      { label: "Shop All", href: "/categories/all" },
      { label: "About", href: "/about" },
      { label: "Support", href: "/support" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
