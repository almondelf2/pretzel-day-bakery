# Pretzel Day Bakery

A multilingual, frontend-only bakery demo for browsing pretzels and previewing a sample cart.

## Run & Operate

- `pnpm --filter @workspace/kanz-bakery run dev` — run the website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/kanz-bakery run typecheck` — typecheck the website
- `pnpm --filter @workspace/kanz-bakery run build` — build the static website

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React, Vite, Wouter, Tailwind CSS, and i18next
- Static menu data bundled with the frontend; no runtime API or database

## Where things live

- `artifacts/kanz-bakery/src/pages/` — website pages
- `artifacts/kanz-bakery/src/data/menu.ts` — bundled menu and category catalog
- `artifacts/kanz-bakery/src/i18n/locales/` — English, French, and Arabic copy

## Architecture decisions

- The site is a static demo. Menu data ships with the app and requires no server.
- Cart state stays in memory for the current browser session only.
- Order and review submission are intentionally unavailable.

## Product

Visitors can browse a multilingual bakery menu, view item details, and preview a sample cart.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- The order page is a demo only; it does not send or save orders.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
