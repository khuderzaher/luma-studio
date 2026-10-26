# Luma Studio

**Where creativity meets digital elegance.**

Luma Studio is a fictional creative-studio portfolio concept built with semantic HTML, CSS, and vanilla JavaScript. Its visual direction is editorial, tactile, and intentionally varied: each case study has its own visual language rather than being forced into one card template.

> **Concept notice:** Luma Studio and the three portfolio projects (Luma Identity, Forma Digital, and Bloom Objects) are fictional concept studies. They are not client work, and this repository does not claim real commissions, testimonials, or business metrics.

## Pages

- `index.html` — home, selected work, services, process, and contact CTA
- `work.html` — project archive with working category filters
- `services.html` — numbered service editorial
- `about.html` — studio principles and concept note
- `contact.html` — accessible client-side validation with an explicit demo-only notice
- `projects/*.html` — three case-study pages with distinct art direction

## Stack and local development

- HTML5, CSS3, and vanilla JavaScript; no build step or package manager required
- Cormorant Garamond and Manrope, with system fallbacks
- Original SVG concept artwork included in `assets/images/`

Open `index.html` in a browser, or run a local static server from the project root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Automated checks

Every push to `main` and every pull request runs **Validate Luma Studio**. It checks JavaScript syntax, HTML navigation, local file references, and page fragments using Node.js and a small Python script.

## GitHub Pages deployment

The deployment workflow is ready at `.github/workflows/pages.yml`, but Pages must be enabled for the repository before it can publish:

1. Open repository **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
2. Open **Actions → Deploy Luma Studio to GitHub Pages → Run workflow**.
3. Confirm the run succeeds, then use the site URL shown under **Settings → Pages**.

**Visibility note:** GitHub Pages is available for public repositories on GitHub Free. Publishing from a private repository requires a plan that supports Pages for private repositories. This repository is currently private, so the initial automated enablement attempt was blocked; no live site URL is claimed yet. See [GitHub's official Pages availability guide](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Before production

- Connect the contact form to a real, verified form endpoint. The current form intentionally does not send or store information.
- Replace fictional concept content with approved material if the studio becomes a real business.
- Review accessibility, privacy, image performance, and font-hosting requirements before launch.

## Structure

```text
.
├── index.html
├── work.html
├── services.html
├── about.html
├── contact.html
├── projects/
│   ├── luma-identity.html
│   ├── forma-digital.html
│   └── bloom-objects.html
├── css/style.css
├── js/{main,portfolio,contact}.js
├── scripts/check_site.py
└── assets/images/*.svg
```

## License

Unless another license is added by the repository owner, treat this source as a personal portfolio concept, not an open-source package for redistribution. Choose and add a license before publishing it as open source.
