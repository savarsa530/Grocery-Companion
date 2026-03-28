/**
 * Grocery Companion — Configuration
 *
 * This is the only file you need to edit to make this app your own.
 * Fork the repo, update the values below, and you're good to go.
 */

const CONFIG = {

  // --- App Identity ---
  app: {
    name: "Sage & Steph Grocery Companion",
    subtitle: "Shopping made intentional.",
  },

  // --- Store ---
  // The store used for "Find" links on each item.
  // searchUrl: use {query} as the placeholder for the search term.
  store: {
    name: "Walmart",
    searchUrl: "https://www.walmart.com/search?q={query}",
  },

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
  // Colors map directly to CSS custom properties.
  // Swap out a theme object to completely change the look.
  theme: {
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

  // --- i18n (future) ---
  // Locale is English-only for now.
  // To add a language later: set locale here and add a matching strings file.
  locale: "en",

};
