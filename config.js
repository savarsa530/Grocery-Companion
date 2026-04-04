/**
 * Grocery Companion — Configuration
 *
 * This is the only file you need to edit to make this app your own.
 * Fork the repo, update the values below, and you're good to go.
 */

// ---------------------------------------------------------------------------
// Built-in store presets
// Each entry has a name (shown on the "Find" button) and a searchUrl.
// Use {query} as the placeholder for the encoded search term.
// To use one, set CONFIG.activeStore to its key.
// ---------------------------------------------------------------------------

const STORES = {

  walmart: {
    name: "Walmart",
    searchUrl: "https://www.walmart.com/search?q={query}",
  },
  target: {
    name: "Target",
    searchUrl: "https://www.target.com/s?searchTerm={query}",
  },
  kroger: {
    name: "Kroger",
    searchUrl: "https://www.kroger.com/search?query={query}",
  },
  instacart: {
    name: "Instacart",
    searchUrl: "https://www.instacart.com/store/s?k={query}",
  },
  amazon_fresh: {
    name: "Amazon Fresh",
    searchUrl: "https://www.amazon.com/s?i=amazonfresh&k={query}",
  },
  whole_foods: {
    name: "Whole Foods",
    searchUrl: "https://www.amazon.com/s?i=wholefoods&k={query}",
  },
  costco: {
    name: "Costco",
    searchUrl: "https://www.costco.com/CatalogSearch?keyword={query}",
  },

};

// ---------------------------------------------------------------------------
// Built-in theme presets
// Each preset has a light and dark variant that auto-switch with the OS.
// To use one, set CONFIG.activeTheme to its key.
// To create your own, add a new entry here or use CONFIG.customTheme below.
// ---------------------------------------------------------------------------

const THEMES = {

  sage: {
    light: {
      backgroundPrimary:   "#ffffff",
      backgroundSecondary: "#f8f7f5",
      backgroundTertiary:  "#f0ede8",
      backgroundInfo:      "#e6f1fb",
      backgroundSuccess:   "#eaf3de",
      backgroundDanger:    "#fcebeb",
      textPrimary:         "#2c2c2a",
      textSecondary:       "#888780",
      textTertiary:        "#b4b2a9",
      textInfo:            "#185fa5",
      textSuccess:         "#3b6d11",
      textDanger:          "#a32d2d",
      borderTertiary:      "rgba(0, 0, 0, 0.15)",
      borderSecondary:     "rgba(0, 0, 0, 0.3)",
      borderPrimary:       "rgba(0, 0, 0, 0.4)",
    },
    dark: {
      backgroundPrimary:   "#1a1a1a",
      backgroundSecondary: "#262623",
      backgroundTertiary:  "#323230",
      backgroundInfo:      "#042c53",
      backgroundSuccess:   "#173404",
      backgroundDanger:    "#501313",
      textPrimary:         "#e8e8e5",
      textSecondary:       "#9d9d9a",
      textTertiary:        "#6b6b68",
      textInfo:            "#b5d4f4",
      textSuccess:         "#97c459",
      textDanger:          "#f09595",
      borderTertiary:      "rgba(255, 255, 255, 0.1)",
      borderSecondary:     "rgba(255, 255, 255, 0.2)",
      borderPrimary:       "rgba(255, 255, 255, 0.35)",
    },
  },

  ocean: {
    light: {
      backgroundPrimary:   "#ffffff",
      backgroundSecondary: "#f2f7fc",
      backgroundTertiary:  "#e4eff9",
      backgroundInfo:      "#dbeeff",
      backgroundSuccess:   "#e0f5f0",
      backgroundDanger:    "#fce8e8",
      textPrimary:         "#1a2a3a",
      textSecondary:       "#5a7a94",
      textTertiary:        "#9ab5c8",
      textInfo:            "#0059a8",
      textSuccess:         "#0d7a5f",
      textDanger:          "#b03030",
      borderTertiary:      "rgba(0, 0, 0, 0.12)",
      borderSecondary:     "rgba(0, 0, 0, 0.25)",
      borderPrimary:       "rgba(0, 0, 0, 0.4)",
    },
    dark: {
      backgroundPrimary:   "#0d1b2a",
      backgroundSecondary: "#162436",
      backgroundTertiary:  "#1e3045",
      backgroundInfo:      "#0a2a4a",
      backgroundSuccess:   "#0a2a20",
      backgroundDanger:    "#3a1010",
      textPrimary:         "#d8eaf8",
      textSecondary:       "#7aadcc",
      textTertiary:        "#4a7a99",
      textInfo:            "#80c4f8",
      textSuccess:         "#50d4b0",
      textDanger:          "#f08080",
      borderTertiary:      "rgba(255, 255, 255, 0.08)",
      borderSecondary:     "rgba(255, 255, 255, 0.18)",
      borderPrimary:       "rgba(255, 255, 255, 0.32)",
    },
  },

  berry: {
    light: {
      backgroundPrimary:   "#ffffff",
      backgroundSecondary: "#f7f4fc",
      backgroundTertiary:  "#ede8f8",
      backgroundInfo:      "#e8e0f8",
      backgroundSuccess:   "#edf5e0",
      backgroundDanger:    "#fce8f0",
      textPrimary:         "#1e1530",
      textSecondary:       "#7a6890",
      textTertiary:        "#b09ec0",
      textInfo:            "#5a20c0",
      textSuccess:         "#3a7020",
      textDanger:          "#b02060",
      borderTertiary:      "rgba(0, 0, 0, 0.12)",
      borderSecondary:     "rgba(0, 0, 0, 0.25)",
      borderPrimary:       "rgba(0, 0, 0, 0.4)",
    },
    dark: {
      backgroundPrimary:   "#150e20",
      backgroundSecondary: "#1e1530",
      backgroundTertiary:  "#281c3c",
      backgroundInfo:      "#2a1848",
      backgroundSuccess:   "#162a08",
      backgroundDanger:    "#3a0e28",
      textPrimary:         "#e8d8f8",
      textSecondary:       "#9a80b8",
      textTertiary:        "#5a4878",
      textInfo:            "#c090f8",
      textSuccess:         "#90c858",
      textDanger:          "#f088b8",
      borderTertiary:      "rgba(255, 255, 255, 0.08)",
      borderSecondary:     "rgba(255, 255, 255, 0.18)",
      borderPrimary:       "rgba(255, 255, 255, 0.32)",
    },
  },

  forest: {
    light: {
      backgroundPrimary:   "#ffffff",
      backgroundSecondary: "#f3f7f2",
      backgroundTertiary:  "#e6efe4",
      backgroundInfo:      "#dff0fb",
      backgroundSuccess:   "#e0f0d8",
      backgroundDanger:    "#fce8e8",
      textPrimary:         "#1a2a18",
      textSecondary:       "#608060",
      textTertiary:        "#98b898",
      textInfo:            "#1060a0",
      textSuccess:         "#2a6018",
      textDanger:          "#a03030",
      borderTertiary:      "rgba(0, 0, 0, 0.12)",
      borderSecondary:     "rgba(0, 0, 0, 0.25)",
      borderPrimary:       "rgba(0, 0, 0, 0.4)",
    },
    dark: {
      backgroundPrimary:   "#0e1a0c",
      backgroundSecondary: "#162414",
      backgroundTertiary:  "#1e301c",
      backgroundInfo:      "#0a2040",
      backgroundSuccess:   "#0e2808",
      backgroundDanger:    "#380e0e",
      textPrimary:         "#d0e8cc",
      textSecondary:       "#70a868",
      textTertiary:        "#408038",
      textInfo:            "#78c8f0",
      textSuccess:         "#88d060",
      textDanger:          "#f08080",
      borderTertiary:      "rgba(255, 255, 255, 0.08)",
      borderSecondary:     "rgba(255, 255, 255, 0.18)",
      borderPrimary:       "rgba(255, 255, 255, 0.32)",
    },
  },

};

// ---------------------------------------------------------------------------
// App configuration
// ---------------------------------------------------------------------------

const CONFIG = {

  // --- App Identity ---
  app: {
    name: "Sage & Steph Grocery Companion",
    subtitle: "Shopping made intentional.",
    version: "1.8.0",
  },

  // --- Store ---
  // Pick a built-in store preset: "walmart" | "target" | "kroger" |
  //   "instacart" | "amazon_fresh" | "whole_foods" | "costco"
  activeStore: "walmart",

  // To use a store not in the list, uncomment and fill in customStore.
  // This overrides activeStore entirely.
  //
  // customStore: {
  //   name: "My Local Market",
  //   searchUrl: "https://mylocalmarket.com/search?q={query}",
  // },

  // --- Default Sections ---
  // These are created in the database on first load if no sections exist yet.
  defaultSections: [
    "Produce",
    "Dairy",
    "Pantry",
    "Meat",
    "Frozen",
    "Other",
  ],

  // --- Theme ---
  // Pick a built-in preset: "sage" | "ocean" | "berry" | "forest"
  // Both light and dark variants are included — they switch with the OS setting.
  activeTheme: "sage",

  // To use a fully custom theme instead, uncomment and fill in customTheme.
  // This overrides activeTheme entirely.
  //
  // customTheme: {
  //   light: { backgroundPrimary: "#fff", ... },
  //   dark:  { backgroundPrimary: "#111", ... },
  // },

  // --- i18n (future) ---
  // Locale is English-only for now.
  // To add a language later: set locale here and add a matching strings file.
  locale: "en",

};
