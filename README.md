# Luma Studio

**Where creativity meets digital elegance.**

Luma Studio is a fictional creative-studio portfolio concept built with semantic HTML, CSS, and vanilla JavaScript. Its visual direction is editorial, tactile, and intentionally varied: each case study has its own visual language.

> **Concept notice:** Luma Studio and its featured projects are fictional studies, not client commissions. No real testimonials or business metrics are claimed.

## Pages

- `index.html` — studio home, selected work, services, process, and contact CTA
- `work.html` — portfolio archive with category filters
- `services.html` — service editorial
- `about.html` — studio principles and concept note
- `contact.html` — accessible client-side validation with an explicit demo-only notice
- `projects/*.html` — three case-study pages

## Stack

- HTML5, CSS3, vanilla JavaScript
- Cormorant Garamond and Manrope, with system fallbacks
- Custom SVG concept artwork; no build step or package manager required

## Run locally

Open `index.html` or run `python3 -m http.server 8080` from the project root.

## GitHub Pages

The included workflow deploys the static site on pushes to `main`. In repository **Settings → Pages**, set the build source to **GitHub Actions**.

## Before production

Connect the contact form to a real endpoint; the current form does not send or store information. Review accessibility, privacy, and approved project content before presenting as a live business.
