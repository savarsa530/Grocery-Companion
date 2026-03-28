# Sage & Steph Grocery Companion

A personal grocery list web app — shopping made intentional.

## Features

- Add items to a shopping list organized by store section
- Save frequently bought items as favorites for quick-add
- One-click Walmart search link for any item
- Copy item name to clipboard
- Manage custom store sections
- All data persists via Supabase (shopping list, favorites, sections)

## Linked Artifacts

| Service | Link |
|---|---|
| Supabase Project | https://supabase.com/dashboard/project/lrmdawizqxfaoncddwnz |
| Supabase Database | `db.lrmdawizqxfaoncddwnz.supabase.co` |
| GitHub Repo | https://github.com/savarsa530/Grocery-Companion |

## Forking & Customization

All personalization lives in `config.js` — it's the only file you need to edit.

**Change the app name:**
```js
app: {
  name: "My Grocery Companion",
  subtitle: "Let's get shopping.",
}
```

**Change the store:**
```js
store: {
  name: "Target",
  searchUrl: "https://www.target.com/s?searchTerm={query}",
}
```
Use `{query}` as the placeholder for the search term. Works with any store that has a search URL.

**Change the theme:**
```js
activeTheme: "ocean",  // "sage" | "ocean" | "berry" | "forest"
```
Both light and dark variants are included in every preset and switch automatically with the OS setting.

To use fully custom colors instead:
```js
customTheme: {
  light: { backgroundPrimary: "#fff", backgroundSecondary: "#f5f5f5", ... },
  dark:  { backgroundPrimary: "#111", backgroundSecondary: "#1a1a1a", ... },
}
```

**Change default sections:**
```js
defaultSections: ["Produce", "Bakery", "Deli", "Drinks", "Other"],
```

## Stack

- Vanilla HTML / CSS / JavaScript (single file, no build step)
- [Supabase](https://supabase.com) — PostgreSQL database via REST API

## Usage

Open `index.html` directly in a browser. No server required.

## Database Schema

| Table | Columns |
|---|---|
| `sections` | `id`, `name`, `position`, `created_at` |
| `items` | `id`, `name`, `section`, `created_at` |
| `favorites` | `id`, `name`, `section`, `created_at` |
