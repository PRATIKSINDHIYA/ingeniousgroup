# Ingenious Group — Creative Digital Marketing Website

> Static multi-page site for **Ingenious Group** (Himmatnagar, Gujarat): social media & Meta ads, branding, SEO & analytics, content, and website development. Based on the open **Creative Agency** HTML template; customised copy, imagery, and contact details.

[![Static HTML](https://img.shields.io/badge/Static-HTML%20%2B%20CSS%20%2B%20JS-111111?style=for-the-badge)](#technology-used)
[![Atomic CSS](https://img.shields.io/badge/Structure-Atomic%20Design-7C3AED?style=for-the-badge)](#atomic-design-structure)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](#deployment-github-pages)
[![SEO](https://img.shields.io/badge/Copy-SEO%20Focused-0F766E?style=for-the-badge)](#seo-and-content-strategy)

---

## Table of Contents

- [Overview](#overview)
- [Project Intent](#project-intent)
- [Designer's Perspective](#designers-perspective)
- [Highlights](#highlights)
- [Pages](#pages)
- [Experience Architecture](#experience-architecture)
- [Atomic Design Structure](#atomic-design-structure)
- [Technology Used](#technology-used)
- [Design System Notes](#design-system-notes)
- [Motion and Interaction Notes](#motion-and-interaction-notes)
- [SEO and Content Strategy](#seo-and-content-strategy)
- [Accessibility Notes](#accessibility-notes)
- [Local Development](#local-development)
- [Deployment](#deployment-github-pages)
- [Editing Content](#editing-content)
- [Quality Checklist](#quality-checklist)
- [Roadmap](#roadmap)
- [Project Role](#project-role)
- [License](#license)

---

## Overview

**Ingenious Group** is a static website for a creative digital marketing agency in Himmatnagar, Gujarat. The site presents services, portfolio-style highlights, about the team, insights, and contact information for new projects.

The codebase is built with static HTML, CSS, JavaScript, vendor libraries, local assets, and an Atomic Design-inspired stylesheet organization. It is designed to be deployed easily through GitHub Pages or any static hosting platform.

This repository is not a minimal landing page. It is a multi-page studio website with:

- homepage
- about page
- services page
- work page
- blog/insights page
- contact page
- project grid sections
- service accordion sections
- overlay menu
- page transition layer
- magic cursor behavior
- media-heavy project cards
- SEO-focused copywriting

---

## Project Intent

The goal of this project is to show how a creative agency website can feel premium while still staying static, maintainable, and GitHub Pages-friendly.

The design direction focuses on:

- cinematic first impression
- strong studio positioning
- large editorial typography
- full-screen hero treatment
- immersive navigation
- selected work presentation
- service clarity
- campaign and brand language
- motion-rich but content-led interaction

From a product/design perspective, the website tries to answer:

> How can a static agency website feel like a crafted brand experience without needing a heavy CMS or framework?

The answer is a strong page architecture, reusable layout conventions, clean section comments, structured CSS, vendor-assisted interaction, and clear content hierarchy.

---

## Designer's Perspective

This README is written from the perspective of a designer who understands front-end structure.

The website is built with attention to:

- visual storytelling
- user flow
- project discovery
- service clarity
- motion rhythm
- image mood
- information hierarchy
- editing maintainability
- SEO language
- accessibility basics

The implementation uses direct HTML/CSS/JS because this kind of marketing website does not always need a JavaScript framework. For a portfolio/client-style static website, a direct codebase can be easier to inspect, easier to deploy, and easier to edit.

---

## Highlights

- Multi-page static website for a creative agency concept.
- SEO-focused copy across home, about, services, work, insights, and contact pages.
- Overlay menu with centered navigation and menu counter pattern.
- Page transition layer with logo preloader.
- Magic cursor and magnetic-item interaction pattern.
- Full-screen hero section with background image, ghost title, parallax-ready classes, and scroll-down circle.
- Portfolio grid with mixed layout support and hover captions.
- Local MP4/WebM video support for motion-based project cards.
- Vendor libraries for Swiper, lightGallery, Font Awesome, normalize.css, and template interactions.
- Atomic Design-inspired SCSS source structure alongside runtime CSS output.
- GitHub Pages-ready static file structure.

---

## Pages

| Page | Purpose | Visitor Goal |
|---|---|---|
| `index.html` | Primary landing page with hero, featured work, services, and CTA | Understand the agency offer quickly |
| `about.html` | Studio story, values, and positioning | Learn credibility and working style |
| `services.html` | Detailed service capabilities | Understand what the studio can do |
| `work.html` | Project and motion reel preview | Review creative output |
| `blog.html` | Insights and thought-leadership content | Read strategic/marketing ideas |
| `contact.html` | Contact details and project intake form | Start a project conversation |

---

## Experience Architecture

The homepage is structured around a studio-style journey:

1. **Hero / first impression** — large, immersive visual with the main value proposition.
2. **Featured work** — selected creative projects shown through a strong portfolio grid.
3. **Services accordion** — clear service groups such as research, digital strategy, brand systems, and campaigns.
4. **Supporting proof sections** — studio capabilities, content blocks, insights, and conversion prompts.
5. **Contact CTA** — encourages the visitor to begin a project conversation.

The navigation pattern supports a premium studio feel. Instead of a simple top nav only, the site uses an overlay menu with large navigation links and transition behavior.

---

## Atomic Design Structure

The repository uses a structure that separates runtime CSS from source SCSS.

```text
assets/
  css/
    main.css           # compiled output used by the static site
    helper.css         # compiled helper utilities
    atomic/            # atomic CSS for runtime or future modular usage
  scss/
    atomic/
      _tokens.scss     # design tokens
      _base.scss       # global resets and foundation
      _utilities.scss  # helpers and reusable utilities
      _components.scss # component-level styles
      _sections.scss   # section-level styles
```

### Why Both CSS and SCSS Exist

- `assets/css/` contains the CSS files used directly by the live static pages.
- `assets/scss/atomic/` contains source-style organization for future modular development.

This allows the current site to run simply while keeping a better structure for designers/developers who want to evolve the design system later.

---

## Technology Used

| Area | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Semantic page structure |
| Styling | CSS3 | Runtime design system and page styling |
| Source Styling | SCSS | Atomic Design-inspired modular structure |
| JavaScript | ES5/ES6 | Template interactions and UI behavior |
| Fonts | Poppins, Noto Serif JP | Body/UI and editorial accent typography |
| Icons | Font Awesome | Interface and decorative icons |
| Layout/Media | Swiper, lightGallery | Slider/gallery-ready presentation |
| Normalize | normalize.css | Cross-browser style consistency |
| Hosting | GitHub Pages | Static deployment |

---

## Design System Notes

The design system has a dark, cinematic, studio-led personality.

### Visual Direction

- large hero compositions
- dark interface base
- image-led storytelling
- editorial typography moments
- smooth overlay menu
- strong project thumbnails
- minimal but expressive section spacing
- refined hover and cursor interactions

### Typography

The site loads:

- `Poppins` for main body and interface text
- `Noto Serif JP` for secondary/editorial contrast

This creates a modern agency feel with enough personality for headings, hero copy, and storytelling sections.

### Layout

The site uses established template layout classes such as:

- `tt-wrap`
- `tt-section`
- `tt-grid`
- `tt-heading`
- `portfolio-grid-item`
- `tt-overlay-menu`
- `tt-accordion`

These classes keep the page structure consistent across sections while allowing creative layout variations.

---

## Motion and Interaction Notes

The website uses several interaction patterns that make it feel more premium than a basic static page.

### Interaction Patterns

- Page transition overlay with preloader logo.
- Smooth scroll container.
- Magic cursor layer.
- Magnetic button/menu interactions.
- Overlay navigation menu.
- Scroll-down circular CTA.
- Portfolio hover captions.
- Video project cards with local MP4/WebM sources.
- Accordion-based service discovery.
- Animation-ready utility classes such as `anim-fadeinup`, `anim-zoomin`, and `anim-parallax`.

### Motion Philosophy

The motion should feel like part of the agency brand. It should support storytelling, not distract from the content.

When extending the site, keep motion:

- smooth
- intentional
- not too fast
- not too aggressive on mobile
- respectful of reduced-motion preferences where possible

---

## SEO and Content Strategy

The website includes SEO-focused agency copy and metadata.

### Content Positioning

Ingenious Group is positioned as an agency that helps growth-focused businesses with:

- brand identity
- digital product design
- digital experiences
- launch campaigns
- strategy
- creative direction
- measurable growth

### SEO Strengths

- Descriptive meta description on the homepage.
- Clear service-focused page structure.
- Project and insight pages for topical relevance.
- Internal linking between work, services, insights, and contact.
- Descriptive alt text for hero and project visuals.
- Static HTML that can be crawled easily.

### Recommended SEO Additions

- Unique title and meta description for every page.
- Open Graph images for social sharing.
- `robots.txt` and `sitemap.xml` if not already added.
- Structured data for Organization, WebSite, and BlogPosting where useful.
- Self-hosted optimized images for production.
- Real business details before using the site publicly.

---

## Accessibility Notes

The codebase includes useful accessibility signals such as:

- skip link to main content
- descriptive alt text on key images
- semantic navigation structure
- accessible menu toggle label
- clear page sections
- static content that remains crawlable and readable

### Accessibility Checklist

- [ ] Confirm menu toggle works with keyboard.
- [ ] Confirm focus states are visible.
- [ ] Make sure all project cards have meaningful link text or labels.
- [ ] Avoid hiding critical text behind hover-only behavior on mobile.
- [ ] Add reduced-motion handling for heavy transition/cursor effects.
- [ ] Check contrast on all overlay image sections.
- [ ] Ensure forms have labels and useful validation messaging.

---

## Local Development

This project can be served with any static server.

### Python Static Server

```bash
python -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

### Node Static Server

```bash
npx http-server -p 8000 .
```

Then open:

```text
http://127.0.0.1:8000/index.html
```

No framework build is required for basic local preview.

---

## Deployment: GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Select the `main` branch.
4. Choose the root `/` folder.
5. Save and wait for GitHub Pages to publish the site.

Because the site uses static HTML/CSS/JS, deployment is straightforward.

---

## Editing Content

All pages contain inline section comments above major sections and blocks. Keep these comments when editing because they make the site easier to maintain.

### Common Editing Areas

| Need | File |
|---|---|
| Homepage hero and featured work | `index.html` |
| Studio story and values | `about.html` |
| Service copy | `services.html` |
| Work/project previews | `work.html` |
| Insight/article listings | `blog.html` |
| Contact details and form copy | `contact.html` |
| Main visual styling | `assets/css/main.css` |
| Helper utilities | `assets/css/helper.css` |
| Future modular styling | `assets/scss/atomic/` |

---

## Quality Checklist

### Design QA

- [ ] Hero image loads quickly and looks intentional.
- [ ] Overlay menu opens and closes smoothly.
- [ ] Project grid is readable on desktop and mobile.
- [ ] Service accordion is easy to use.
- [ ] Motion feels premium, not distracting.
- [ ] Page transitions do not block content too long.
- [ ] Typography hierarchy is clear.

### Technical QA

- [ ] All pages open from root.
- [ ] Local assets load correctly.
- [ ] External image URLs work.
- [ ] Local video files load and degrade gracefully.
- [ ] No broken navigation links.
- [ ] No console errors in modern browsers.
- [ ] GitHub Pages paths work correctly.

### Content QA

- [ ] Agency name is consistent.
- [ ] Service descriptions are accurate.
- [ ] Contact details are real before launch.
- [ ] Project names and visuals are approved.
- [ ] Unsplash/demo imagery is replaced for production if required.
- [ ] SEO descriptions match the actual service offering.

---

## Roadmap

- Replace demo imagery with final brand/project assets.
- Add optimized local image variants.
- Add sitemap and robots file.
- Add real project detail pages.
- Add contact form backend or form service integration.
- Add performance budget checks.
- Add accessibility audit pass.
- Add production metadata for every page.
- Compile SCSS from source as part of a defined workflow if the project grows.

---

## Project Role

Designed and coded by **Nischhal Raj Subba**.

Project responsibilities include:

- information architecture
- visual direction
- SEO content strategy
- static front-end implementation
- page structure
- interaction review
- documentation

---

## License

This project is intended for portfolio, internal, educational, or client-style use. Replace demo imagery, placeholder copy, and any non-owned brand assets before production launch.
