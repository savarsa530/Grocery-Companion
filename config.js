/**
 * Grocery Companion — Configuration
 * This is the only file you need to edit to make this app your own.
 */

const STORES = {
  walmart:      { name: "Walmart",       searchUrl: "https://www.walmart.com/search?q={query}" },
  target:       { name: "Target",        searchUrl: "https://www.target.com/s?searchTerm={query}" },
  kroger:       { name: "Kroger",        searchUrl: "https://www.kroger.com/search?query={query}" },
  instacart:    { name: "Instacart",     searchUrl: "https://www.instacart.com/store/s?k={query}" },
  amazon_fresh: { name: "Amazon Fresh",  searchUrl: "https://www.amazon.com/s?i=amazonfresh&k={query}" },
  whole_foods:  { name: "Whole Foods",   searchUrl: "https://www.amazon.com/s?i=wholefoods&k={query}" },
  costco:       { name: "Costco",        searchUrl: "https://www.costco.com/CatalogSearch?keyword={query}" },
};

const THEMES = {
  solstice: {
    light: {
      backgroundPrimary:   "#fdfcfa",
      backgroundSecondary: "#f6f4ef",
      backgroundTertiary:  "#edeae3",
      backgroundInfo:      "#e8eff8",
      backgroundSuccess:   "#e6f0db",
      backgroundDanger:    "#fae8e8",
      textPrimary:         "#1c1b18",
      textSecondary:       "#7a766b",
      textTertiary:        "#a8a49a",
      textInfo:            "#3d6e9e",
      textSuccess:         "#4a7832",
      textDanger:          "#a33030",
      borderTertiary:      "rgba(0, 0, 0, 0.08)",
      borderSecondary:     "rgba(0, 0, 0, 0.15)",
      borderPrimary:       "rgba(0, 0, 0, 0.28)",
      accent:              "#8b6e4e",
      accentMuted:         "rgba(139, 110, 78, 0.10)",
    },
    dark: {
      backgroundPrimary:   "#161514",
      backgroundSecondary: "#1e1d1a",
      backgroundTertiary:  "#121110",
      backgroundInfo:      "#0f1e2e",
      backgroundSuccess:   "#141f0e",
      backgroundDanger:    "#2a1010",
      textPrimary:         "#e4e0d8",
      textSecondary:       "#968f82",
      textTertiary:        "#5e5a52",
      textInfo:            "#7eb5d6",
      textSuccess:         "#8aba6a",
      textDanger:          "#e08080",
      borderTertiary:      "rgba(255, 255, 255, 0.06)",
      borderSecondary:     "rgba(255, 255, 255, 0.12)",
      borderPrimary:       "rgba(255, 255, 255, 0.20)",
      accent:              "#c4a57a",
      accentMuted:         "rgba(196, 165, 122, 0.10)",
    },
  },
  sage: {
    light: {
      backgroundPrimary: "#ffffff", backgroundSecondary: "#f8f7f5", backgroundTertiary: "#f0ede8",
      backgroundInfo: "#e6f1fb", backgroundSuccess: "#eaf3de", backgroundDanger: "#fcebeb",
      textPrimary: "#2c2c2a", textSecondary: "#888780", textTertiary: "#b4b2a9",
      textInfo: "#185fa5", textSuccess: "#3b6d11", textDanger: "#a32d2d",
      borderTertiary: "rgba(0,0,0,0.15)", borderSecondary: "rgba(0,0,0,0.3)", borderPrimary: "rgba(0,0,0,0.4)",
      accent: "#4a7c59", accentMuted: "rgba(74,124,89,0.12)",
    },
    dark: {
      backgroundPrimary: "#1a1a1a", backgroundSecondary: "#262623", backgroundTertiary: "#323230",
      backgroundInfo: "#042c53", backgroundSuccess: "#173404", backgroundDanger: "#501313",
      textPrimary: "#e8e8e5", textSecondary: "#9d9d9a", textTertiary: "#6b6b68",
      textInfo: "#b5d4f4", textSuccess: "#97c459", textDanger: "#f09595",
      borderTertiary: "rgba(255,255,255,0.1)", borderSecondary: "rgba(255,255,255,0.2)", borderPrimary: "rgba(255,255,255,0.35)",
      accent: "#6aad78", accentMuted: "rgba(106,173,120,0.12)",
    },
  },
  ocean: {
    light: {
      backgroundPrimary: "#ffffff", backgroundSecondary: "#f2f7fc", backgroundTertiary: "#e4eff9",
      backgroundInfo: "#dbeeff", backgroundSuccess: "#e0f5f0", backgroundDanger: "#fce8e8",
      textPrimary: "#1a2a3a", textSecondary: "#5a7a94", textTertiary: "#9ab5c8",
      textInfo: "#0059a8", textSuccess: "#0d7a5f", textDanger: "#b03030",
      borderTertiary: "rgba(0,0,0,0.12)", borderSecondary: "rgba(0,0,0,0.25)", borderPrimary: "rgba(0,0,0,0.4)",
      accent: "#2874a6", accentMuted: "rgba(40,116,166,0.12)",
    },
    dark: {
      backgroundPrimary: "#0d1b2a", backgroundSecondary: "#162436", backgroundTertiary: "#1e3045",
      backgroundInfo: "#0a2a4a", backgroundSuccess: "#0a2a20", backgroundDanger: "#3a1010",
      textPrimary: "#d8eaf8", textSecondary: "#7aadcc", textTertiary: "#4a7a99",
      textInfo: "#80c4f8", textSuccess: "#50d4b0", textDanger: "#f08080",
      borderTertiary: "rgba(255,255,255,0.08)", borderSecondary: "rgba(255,255,255,0.18)", borderPrimary: "rgba(255,255,255,0.32)",
      accent: "#5aa8d4", accentMuted: "rgba(90,168,212,0.12)",
    },
  },
  berry: {
    light: {
      backgroundPrimary: "#ffffff", backgroundSecondary: "#f7f4fc", backgroundTertiary: "#ede8f8",
      backgroundInfo: "#e8e0f8", backgroundSuccess: "#edf5e0", backgroundDanger: "#fce8f0",
      textPrimary: "#1e1530", textSecondary: "#7a6890", textTertiary: "#b09ec0",
      textInfo: "#5a20c0", textSuccess: "#3a7020", textDanger: "#b02060",
      borderTertiary: "rgba(0,0,0,0.12)", borderSecondary: "rgba(0,0,0,0.25)", borderPrimary: "rgba(0,0,0,0.4)",
      accent: "#7b44b0", accentMuted: "rgba(123,68,176,0.12)",
    },
    dark: {
      backgroundPrimary: "#150e20", backgroundSecondary: "#1e1530", backgroundTertiary: "#281c3c",
      backgroundInfo: "#2a1848", backgroundSuccess: "#162a08", backgroundDanger: "#3a0e28",
      textPrimary: "#e8d8f8", textSecondary: "#9a80b8", textTertiary: "#5a4878",
      textInfo: "#c090f8", textSuccess: "#90c858", textDanger: "#f088b8",
      borderTertiary: "rgba(255,255,255,0.08)", borderSecondary: "rgba(255,255,255,0.18)", borderPrimary: "rgba(255,255,255,0.32)",
      accent: "#a070d0", accentMuted: "rgba(160,112,208,0.12)",
    },
  },
  forest: {
    light: {
      backgroundPrimary: "#ffffff", backgroundSecondary: "#f3f7f2", backgroundTertiary: "#e6efe4",
      backgroundInfo: "#dff0fb", backgroundSuccess: "#e0f0d8", backgroundDanger: "#fce8e8",
      textPrimary: "#1a2a18", textSecondary: "#608060", textTertiary: "#98b898",
      textInfo: "#1060a0", textSuccess: "#2a6018", textDanger: "#a03030",
      borderTertiary: "rgba(0,0,0,0.12)", borderSecondary: "rgba(0,0,0,0.25)", borderPrimary: "rgba(0,0,0,0.4)",
      accent: "#3a7a3a", accentMuted: "rgba(58,122,58,0.12)",
    },
    dark: {
      backgroundPrimary: "#0e1a0c", backgroundSecondary: "#162414", backgroundTertiary: "#1e301c",
      backgroundInfo: "#0a2040", backgroundSuccess: "#0e2808", backgroundDanger: "#380e0e",
      textPrimary: "#d0e8cc", textSecondary: "#70a868", textTertiary: "#408038",
      textInfo: "#78c8f0", textSuccess: "#88d060", textDanger: "#f08080",
      borderTertiary: "rgba(255,255,255,0.08)", borderSecondary: "rgba(255,255,255,0.18)", borderPrimary: "rgba(255,255,255,0.32)",
      accent: "#5aaa5a", accentMuted: "rgba(90,170,90,0.12)",
    },
  },
};

const SECTION_ICONS = {
  produce:  '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3c0 0-4 1.5-4 6s4 9 4 9 4-4.5 4-9-4-6-4-6z"/><path d="M10 3c-2-.8-4 0-4 0"/></svg>',
  dairy:    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 5h8l1 2.5v8.5a2 2 0 01-2 2H7a2 2 0 01-2-2V7.5z"/><path d="M6 5V3h8v2"/><path d="M4 7.5h12"/></svg>',
  pantry:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h10v13a1 1 0 01-1 1H6a1 1 0 01-1-1V4z"/><path d="M5 4c0-1.2 1.5-2 5-2s5 .8 5 2"/><path d="M8 9h4"/></svg>',
  meat:     '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="10" cy="11" rx="7" ry="5.5"/><path d="M5.5 7.5c1.5-3 3-4.5 4.5-4.5s3 1.5 4.5 4.5"/><circle cx="8" cy="11.5" r="1.2"/></svg>',
  frozen:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v16M2 10h16"/><path d="M5 5l2.5 2.5M12.5 5L10 7.5M5 15l2.5-2.5M12.5 15L10 12.5"/><path d="M15 5l-2.5 2.5M15 15l-2.5-2.5"/></svg>',
  bakery:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 13c0 0 2.5-5 7-5s7 5 7 5"/><path d="M3 13h14v2.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 15.5V13z"/></svg>',
  beverage: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 3h9l-1.5 13a2 2 0 01-2 1.5h-2a2 2 0 01-2-1.5z"/><path d="M4.5 3h11"/></svg>',
  snacks:   '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3L5 11h10L13.5 3z"/><path d="M5 11h10v4.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 15.5V11z"/></svg>',
  other:    '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="7"/><circle cx="10" cy="10" r="1.5"/></svg>',
};

function getSectionIcon(sectionName) {
  const key = sectionName.toLowerCase().trim();
  for (const [k] of Object.entries(SECTION_ICONS)) {
    if (key.includes(k) || k.includes(key)) return SECTION_ICONS[k];
  }
  return SECTION_ICONS.other;
}

const CONFIG = {
  app: {
    name: "Sage & Steph Grocery Companion",
    subtitle: "Shopping made intentional.",
    version: "2.0.0",
  },
  activeStore: "walmart",
  defaultSections: ["Produce", "Dairy", "Pantry", "Meat", "Frozen", "Other"],
  activeTheme: "solstice",
  locale: "en",
};
