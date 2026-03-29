/**
 * Grocery Companion — UI Strings
 *
 * All user-facing text lives here. English-only for now.
 *
 * To add a new language:
 *   1. Duplicate the `en` block below with the new locale key (e.g. `es`).
 *   2. Translate every string value.
 *   3. Set CONFIG.locale to the new key in config.js.
 *
 * Variable interpolation: use {varName} in any string.
 * Example: "Added to {section}" → t('status.addedTo', { section: 'Produce' })
 */

const STRINGS = {

  en: {

    // Header
    header: {
      itemCount:    "{count} items",
      favCount:     "{count} favorites",
    },

    // Add item card
    addCard: {
      title:        "Add to your list",
      placeholder:  "What do you need?",
      addBtn:       "Add item",
    },

    // Quick-add favorites strip
    quickAdd: {
      label:        "Quick add favorites",
    },

    // Shopping list
    list: {
      title:        "Your shopping list",
      clearSection: "Clear section",
      clearChecked: "Clear checked",
    },

    // Per-item actions
    item: {
      findAt:       "Find at {store}",
      copy:         "Copy",
      copied:       "Copied!",
      favorite:     "Save to favorites",
      delete:       "✕",
    },

    // Sections manager
    sections: {
      title:        "Manage sections",
      placeholder:  "New section name",
      addBtn:       "Add",
      cancelBtn:    "Cancel",
      newBtn:       "+ Add section",
    },

    // Favorites manager
    favorites: {
      title:        "Your favorites",
      emptyState:   "Heart items you shop for regularly, and they'll appear above as quick-add buttons.",
    },

    // Focus mode
    focus: {
      allSections:  "📍 All sections",
      focusingOn:   "📍 Focusing on: {section}",
      focusBtn:     "Focus",
    },

    // Celebration overlay
    celebration: {
      btn:          "Let's go again 🛒",
    },

    // Status / feedback messages
    status: {
      categorizing:       "Categorizing...",
      addedTo:            "Added to {section}",
      alreadyFavorite:    '"{name}" is already in favorites.',
      noConnection:       "Could not connect to database. Check your connection.",
      errorAddItem:       "Failed to add item.",
      errorDeleteItem:    "Failed to delete item.",
      errorClearSection:  "Failed to clear section.",
      errorSaveFavorite:  "Failed to save favorite.",
      errorRemoveFavorite:"Failed to remove favorite.",
      errorAddSection:    "Failed to add section.",
      errorDeleteSection: "Failed to delete section.",
      errorToggleCheck:   "Failed to update item.",
      errorMoveItem:      "Failed to move item.",
      clipboardError:     "Could not access clipboard.",
    },

  },

};

/**
 * Translate a dot-notation key, optionally interpolating variables.
 *
 * t('item.findAt', { store: 'Walmart' }) → "Find at Walmart"
 * t('status.addedTo', { section: 'Produce' }) → "Added to Produce"
 */
function t(key, vars = {}) {
  const locale = CONFIG.locale || 'en';
  const dict = STRINGS[locale] || STRINGS.en;
  const value = key.split('.').reduce((obj, k) => obj?.[k], dict) ?? key;
  return String(value).replace(/\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : `{${k}}`));
}
