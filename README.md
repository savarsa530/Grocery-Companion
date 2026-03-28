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
