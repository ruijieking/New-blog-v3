

# Astro Blog Template


A modern, good-looking personal blog template built with **Astro 7** and **Tailwind CSS 4** — fully static, zero client-side JavaScript by default, and easy to customize from a single config file. The homepage, archive, photo albums, daily-talk feed and about page all work out of the box.

The build output goes to the `dist/` folder.

[![Astro](screenshots/astro-7.1.svg)](https://astro.build)
[![Tailwind CSS](screenshots/tailwindcss-4.svg)](https://tailwindcss.com)
[![License](screenshots/license-mit.svg)](LICENSE)
[![Node.js](screenshots/node-22.svg)](https://nodejs.org)

> **English** | [简体中文](./README.md)

> 🌐 Live demo: <https://ruijieking.github.io>

## 📸 Preview

![Home](screenshots/3.png)

## ✨ Features

- 🏠 **Full homepage** — automatically aggregates the latest Daily Talk / Blog / Photos, no manual upkeep
- 📢 **Notice board** — a floating sidebar on the left of the homepage, one line per item in the config
- 📊 **Stats panel** — counts posts, notes, photos and total words, plus the repo's last update time
- 🖼️ **Cover images** — one `cover` line in frontmatter, shown on the left of each list card
- 👤 **About page** — avatar card + social links (GitHub / Bilibili / mail…, built-in SVG icons) + bio card
- 🧊 **Liquid-glass navbar** — an SVG displacement filter for underwater refraction (works in Chromium); other browsers fall back to plain frosted glass
- 🌗 **Dark / Light theme** with FOUC (flash-of-unstyled-content) protection, remembers your choice
- 🖼️ **Wallpaper system** — separate wallpaper sets per theme, cross-fade transitions, persisted per theme
- 📝 **Blog** powered by Astro content collections (title, description, pubDate, category, tags, cover)
- 📚 **Archive timeline** grouped by year, with **instant search** and **multi-tag filtering**
- 💬 **Daily Talk** — a lightweight microblog / short-note section
- 📷 **Photo albums** — folder-based albums with stacked covers and a **lightbox** viewer
- 📑 **Table of contents** auto-generated from headings on each post page
- 🔍 **Full SEO** — Open Graph, Twitter Cards, canonical URLs, and JSON-LD structured data
- 📡 **RSS feed**, **sitemap**, and **robots.txt**
- ✨ Scroll-in animations and frosted-glass card design
- 📱 Fully responsive, with a mobile hamburger menu
- ⚡ **Optimized images** out of the box (`astro:assets` + `sharp`, WebP output)
- 🚀 **One-command deploy** to GitHub Pages via GitHub Actions

## 🏠 Homepage Layout

```
Hero (site name + description, horizontally centred)
├── Left sidebar (only ≥1280px, sticky right below the navbar; hidden on narrow screens and mobile)
│   ├── Notice board — content comes from `notices` in site.config.ts
│   └── Stats panel  — posts / notes / photos / total words / repo last-update time
└── Main column (always horizontally centred, fixed 720px wide)
    ├── Daily Talk    → latest 2
    ├── Latest posts  → latest 3
    └── Latest photos → first 3 images of the newest album
```

> The stats panel reads the last commit time of the GitHub repo set in `statsRepo` **at build time** (via the commit Atom feed — no auth, no rate limit). If that fails it falls back to the local git commit time, then to the newest post's date, so **a failure never breaks the build**. Leave `statsRepo` empty and that row is simply hidden.

## 📸 Screenshots

| Post | About | Photos |
| --- | --- | --- |
| ![Post](screenshots/post.png) | ![About](screenshots/1.png) | ![Photos](screenshots/2.png) |

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 22.12.0
- npm (or pnpm / yarn)

### 1. Install

```bash
npm install
```

### 2. Develop

Start the dev server at <http://localhost:4321>:

```bash
npm run dev
```

### 3. Build & Preview

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## 🎨 Customization

Everything you need to personalize the site lives in **one file**: `src/site.config.ts`. Change it once and the whole site updates automatically.

```ts
export const site = {
  // site name (navbar logo, footer, page titles, SEO)
  name: 'My Blog',
  defaultTitle: 'My Blog',
  description: 'Write code, take photos, record life.',

  // SEO: site domain (must include https://, used by canonical / sitemap / robots.txt) ⭐⭐⭐
  url: 'https://example.com',
  ogImage: '/og.png',                 // social share image (public/, 1200×630)
  ogSiteName: 'My Blog',              // name shown on share cards

  // author
  author: {
    name: 'Your Name',
    github: 'your-github-username',
    // about-page avatar: a path under public/ (e.g. '/avatar.png') or a full image URL
    // leave empty to use the GitHub avatar https://github.com/<github>.png
    avatar: '',
  },

  // text shown on the about page
  about: 'This is my personal blog, built with Astro.',

  // ── Homepage notice board ──
  // one line per entry; an empty array hides the notice board entirely
  notices: [
    'Welcome to my blog 👋',
    'I write about whatever I feel like here.',
  ],

  // ── Data source for the stats panel's "last update" row ──
  // set to 'owner/repo' (e.g. 'ruijieking/New-blog-v3') to read that repo's last commit time at build time
  // empty, or on failure → falls back to the local git commit time, then to the newest post date
  statsRepo: '',

  // ── Social links on the about page (left to right) ──
  // icon: github / bilibili / mail / telegram / twitter / rss (anything else shows a generic icon)
  // href accepts https:// or mailto:; delete a line to hide that entry
  socials: [
    { label: 'GitHub',   href: 'https://github.com/your-name', icon: 'github' },
    { label: 'Bilibili', href: 'https://space.bilibili.com/your-uid', icon: 'bilibili' },
    { label: 'Email',    href: 'mailto:you@example.com', icon: 'mail' },
  ],

  // navbar (array order = display order)
  nav: [
    { href: '/talk', label: 'Talk' },
    { href: '/blog', label: 'Blog' },
    { href: '/archive', label: 'Archive' },
    { href: '/photo', label: 'Photo' },
    { href: '/about', label: 'About' },
  ],
};
```

## 📝 Adding Content

### Blog posts

Add a Markdown file to `src/content/blog/`:

```md
---
title: 'Hello World'         # required
description: 'My first post' # required
pubDate: '2026-01-01'        # required
category: 'Life'             # optional
tags: ['astro', 'blog']      # optional
cover: '/covers/my-cover.png' # optional, list-card cover image (put the file in public/covers/)
coverAlt: 'A terminal screenshot' # optional, cover alt text; defaults to the post title
---

Content here…
```

### Cover images

Drop the image into `public/covers/`, then add one line to the frontmatter. **1200 × 675 (16:9)** is recommended — other ratios are cropped by `object-cover`:

```yaml
cover: '/covers/my-cover.png'
coverAlt: 'A terminal screenshot'
```

Posts without a `cover` show a document-icon placeholder in the list, so the layout never breaks.

### Daily Talk

Add a Markdown file to `src/content/talk/` (no title required):

```md
---
update: '2026-01-01-12:00'
---

Short note text…
```

### Photo albums

Create a folder inside `src/assets/album/` — **each folder becomes an album (the folder name becomes the album name)**, and its images are displayed automatically:

```
src/assets/album/
├── Trip/          ← album: "Trip"
│   ├── photo1.jpg
│   └── photo2.png
└── Daily/
    └── photo3.jpg
```

### Wallpapers

Place wallpapers in `src/assets/wallpaper/`:

```
src/assets/wallpaper/
├── light/         ← wallpapers shown in light theme
└── dark/          ← wallpapers shown in dark theme
```

A file named `默认light.png` / `默认dark.png` (or the first file in each folder) is used as the default wallpaper.

## 🗂️ Project Structure

```
├── public/
│   ├── covers/             # post cover images (referenced as '/covers/xx.png' in frontmatter)
│   ├── favicon.*
│   └── og.png              # social share image
├── src/
│   ├── assets/
│   │   ├── album/          # photo albums (folder = album)
│   │   └── wallpaper/      # theme wallpapers (light/ dark/)
│   ├── components/         # UI components
│   │   ├── NoticeBoard.astro    # homepage notice board
│   │   ├── SiteStats.astro      # homepage stats panel (posts/photos/words/last update)
│   │   ├── Post.astro           # post list card (with cover image)
│   │   ├── AlbumCard.astro      # album card
│   │   ├── Archive.astro        # archive timeline
│   │   ├── TalkList.astro       # daily-talk list
│   │   ├── Icon.astro           # built-in SVG icons (no icon library)
│   │   ├── AnimateIn.astro      # scroll-in animation wrapper
│   │   ├── ThemeToggle.astro    # dark / light switch
│   │   └── WallpaperPicker.astro
│   ├── content/
│   │   ├── blog/           # blog posts (.md)
│   │   └── talk/           # daily talk notes (.md)
│   ├── layouts/            # BaseLayout (theme, wallpapers, SEO, navbar, liquid-glass filter)
│   ├── pages/              # routes
│   ├── styles/global.css   # Tailwind entry + theme colour tokens
│   ├── content.config.ts   # content collection schemas
│   └── site.config.ts      # ⭐ global site config
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚢 Deployment

### GitHub Pages (highly recommended if you don't need a backend — free and simple)

The included workflow at `.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`:

1. Push this template to a GitHub repository.
2. Go to **Settings → Pages** and set the source to **GitHub Actions**.
3. Done — every push to `main` now rebuilds and redeploys.

### Other platforms

This is a static site — run `npm run build` and deploy the `dist/` folder to any host:

- **Netlify**: build command `npm run build`, publish directory `dist`
- **Vercel**: framework preset **Astro**
- **Cloudflare Pages**: build command `npm run build`, output directory `dist`

> 💡 Set `site.url` in `src/site.config.ts` to your production domain for correct canonical URLs, sitemap, and robots.txt.

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build) 7 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com) 4 | Styling (`@tailwindcss/vite`) |
| [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) | Post typography |
| [astro:assets](https://docs.astro.build/en/guides/images/) + [sharp](https://sharp.pixelplumbing.com) | Image optimization |
| [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Sitemap generation |
| [@astrojs/rss](https://docs.astro.build/en/guides/rss/) | RSS feed |

## 📄 License

[MIT](./LICENSE) © 2026 ruijieking

