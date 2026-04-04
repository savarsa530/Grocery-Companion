# Sage & Steph Grocery Companion

A personal grocery list web app — shopping made intentional.

## Features

- Add items to a shopping list organized by store section
- AI-powered auto-categorization via Supabase Edge Function
- Save frequently bought items as favorites for quick-add
- One-click store search link for any item (Walmart, Target, Kroger, etc.)
- Shareable lists — each list has its own URL, no login required
- Shopping mode — stripped-down UI for in-store use
- "What's for dinner?" meal spinner with one-click ingredient import
- Recipe URL import — paste a link, get ingredients on your list
- List templates — save and reload common shopping lists
- Drag-and-drop reordering within and across sections
- Progress tracking with ambient warmth effect
- Celebration overlay with confetti on list completion
- 5 built-in themes (Solstice, Sage, Ocean, Berry, Forest) with auto dark mode
- PWA — installable, works offline (cached shell)
- All data persists via Supabase (PostgreSQL)

## Shareable Lists

Every list has a unique ID in the URL hash (e.g. `#abc123`). Share the full URL with anyone — they'll see and edit the same list in real time. No login needed.

- **Share**: Click "Share list" to copy the link
- **New list**: Click "New list" to start fresh (old list stays accessible via its link)
- First-time visitors get a random list ID automatically

## Forking & Customization

All personalization lives in `config.js`.

**Change the store:**
```js
activeStore: "target",  // "walmart" | "target" | "kroger" | "instacart" | "amazon_fresh" | "whole_foods" | "costco"
```

**Change the theme:**
```js
activeTheme: "solstice",  // "solstice" | "sage" | "ocean" | "berry" | "forest"
```

## Stack

- Vanilla HTML / CSS / JavaScript (no build step)
- Outfit typeface via Google Fonts
- Supabase — PostgreSQL database via REST API

## Database Migration (shareable lists)

Run this in the Supabase SQL Editor to enable shareable lists:

```sql
ALTER TABLE items ADD COLUMN IF NOT EXISTS list_id text DEFAULT 'default';
ALTER TABLE favorites ADD COLUMN IF NOT EXISTS list_id text DEFAULT 'default';
ALTER TABLE sections ADD COLUMN IF NOT EXISTS list_id text DEFAULT 'default';
ALTER TABLE templates ADD COLUMN IF NOT EXISTS list_id text DEFAULT 'default';

CREATE INDEX IF NOT EXISTS idx_items_list_id ON items(list_id);
CREATE INDEX IF NOT EXISTS idx_favorites_list_id ON favorites(list_id);
CREATE INDEX IF NOT EXISTS idx_sections_list_id ON sections(list_id);
CREATE INDEX IF NOT EXISTS idx_templates_list_id ON templates(list_id);

UPDATE items SET list_id = 'steph-main' WHERE list_id = 'default';
UPDATE favorites SET list_id = 'steph-main' WHERE list_id = 'default';
UPDATE sections SET list_id = 'steph-main' WHERE list_id = 'default';
UPDATE templates SET list_id = 'steph-main' WHERE list_id = 'default';
```

After running, open the app with `#steph-main` in the URL to access existing data.
