# 🥨 Pretzel Day Bakery

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-brightgreen?logo=github)](https://almondelf2.github.io/pretzel-day-bakery/)
[![React](https://img.shields.io/badge/React-18%2B-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Bundler-purple?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18n-Multilingual%20%2B%20RTL-orange)](https://www.i18next.com/)

> *"I wake up every morning in a bed that's too small, drive my daughter to a school that's too expensive, and then I go to work to a job for which I get paid too little. But on Pretzel Day? Well, I like Pretzel Day."*  
> — **Stanley Hudson**, *The Office*

Welcome to **Pretzel Day Bakery**, an interactive, multilingual bakery website inspired by Dunder Mifflin's favorite annual Scranton celebration. Built as a modern, responsive single-page application featuring artisan hand-twisted pretzels, custom dips and toppings, live cart simulation, location finder, and complete internationalization with RTL support.

---

## 🌟 Live Demo
Experience the fresh pretzels in production:  
👉 **[https://almondelf2.github.io/pretzel-day-bakery/](https://almondelf2.github.io/pretzel-day-bakery/)**

---

## ✨ Features

- **🥨 Comprehensive Pretzel Catalog:** Explore Classic Pretzels, Sweet Glazed & Cinnamon Twists, Savory Cheese options, and Signature Dips (beer cheese, sweet caramel, spicy mustard).
- **🛒 Dynamic Cart Experience:** Real-time in-memory session cart with item counter, quantity controls, and subtotal calculation.
- **🌍 Full Multilingual Support (i18n):**
  - Languages: **English**, **French (Français)**, and **Arabic (العربية)**.
  - Automatic bidirectional layout switching (**LTR & RTL**) synced with the document root.
- **🏆 Scranton Lore & Dundie Awards:** Themed branding, Dundie awards hero presentation, and Scranton team profiles featuring Stanley Hudson, Pam Beesly, Kevin Malone, and William Buttlicker.
- **📍 Interactive Bakery Locator:** Scranton store hours, contact details, and Leaflet map integration for directions.
- **⚡ Fast & Modern Architecture:** Instant page transitions powered by Vite and Wouter client-side routing.
- **🚀 Automated CI/CD:** Fully automated builds and zero-downtime deployments to GitHub Pages via GitHub Actions on every push.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework & UI** | [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) |
| **Routing** | [Wouter](https://github.com/molefrog/wouter) (lightweight, client-side routing) |
| **Localization** | [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/), language detector |
| **Build & Tooling** | [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/), [pnpm workspaces](https://pnpm.io/) |
| **Maps & Data** | [Leaflet](https://leafletjs.com/), [React Leaflet](https://react-leaflet.js.org/) |
| **Hosting & CI/CD** | [GitHub Pages](https://pages.github.com/) with [GitHub Actions](https://github.com/features/actions) |

---

## 📁 Repository Structure

```text
pretzel-day-bakery/
├── .github/workflows/          # Automated GitHub Pages CI/CD pipeline
│   └── deploy.yml
├── artifacts/
│   ├── kanz-bakery/            # Main React + Vite bakery storefront
│   │   ├── public/             # Static assets (images, icons, robots.txt)
│   │   │   └── images/         # Menu photography, team bios, Dundie award
│   │   ├── src/
│   │   │   ├── components/     # UI components (Header, Footer, Logo, Radix UI)
│   │   │   ├── contexts/       # React Context (CartContext)
│   │   │   ├── data/           # Bundled pretzel catalog & categories (menu.ts)
│   │   │   ├── i18n/           # English, French, and Arabic translation files
│   │   │   ├── pages/          # Home, Menu, Detail, Order, About, Find Us
│   │   │   ├── App.tsx         # Route definitions & router setup
│   │   │   └── main.tsx        # Application entry point
│   │   ├── package.json
│   │   └── vite.config.ts      # Vite configuration with base path handling
│   └── mockup-sandbox/         # Component and preview sandbox
├── package.json                # Root pnpm monorepo workspace configuration
├── pnpm-workspace.yaml         # Workspace package and dependency catalog definitions
└── README.md                   # Project documentation
```

---

## 🚀 Local Development Setup

### Prerequisites
* **Node.js:** v20+ or v22+
* **pnpm:** v9+ (`npm install -g pnpm`)

### 1. Clone the repository
```bash
git clone https://github.com/almondelf2/pretzel-day-bakery.git
cd pretzel-day-bakery
```

### 2. Install dependencies
```bash
pnpm install
```

### 3. Start local development server
```bash
pnpm --filter @workspace/kanz-bakery run dev
```
Open your browser to `http://localhost:5000` to preview the bakery!

### 4. Build for production
```bash
pnpm --filter @workspace/kanz-bakery run build
```

---

## 🚢 Deployment

Deployments are 100% automated! Whenever changes are pushed to the `main` branch, the `.github/workflows/deploy.yml` workflow:
1. Installs project dependencies using `pnpm`.
2. Compiles the TypeScript and Vite assets for the subpath `/pretzel-day-bakery/`.
3. Uploads and deploys the static bundle to **GitHub Pages**.

---

## 📜 License
This project is open source and available under the [MIT License](LICENSE).
