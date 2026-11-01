# chopp-gourmet

**English** · [Português (Brasil)](README.md)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages)](#)

## What it is

**A sales landing page for Chopp Gourmet** — a frozen dessert sold per unit (BRL 4.00) with **Pix payment embedded** in the page. A static site (HTML + CSS + JS), no backend, no database.

## Status

Working and ready to use: catalog landing page, Pix payment modal (QR code + copy-paste), and automatic deploy on GitHub Pages via `pages.yml`.

## Features

- **Flavor catalog**: 8 flavors (Leite Ninho, Tapioca, Chocolate, Morango, Maracujá, Abacate, Abacaxi, Coco), each BRL 4.00.
- **Pix payment modal**: QR Code, pix-addressing in copy-and-paste form and a "Copy" button — it copies the Pix copy/paste payload automatically when the modal opens.
- **Visual effects**: snow particle system (canvas), 3D tilt on the flavor cards, scroll-triggered entrance animations with `IntersectionObserver`, and a title animation.
- **Keyboard accessibility**: `Escape` closes the modal.
- **Deploy on GitHub Pages**: `pages.yml` workflow (Pages + upload artifact + deploy).

## Architecture

A single page split into three files. `script.js` organizes the effects into independent classes (`SnowSystem`, `TiltEffect`, `ScrollAnimation`, `ModalManager`, etc.) and initialises them on `DOMContentLoaded`.

```mermaid
flowchart LR
    index.html --> style.css
    index.html --> script.js
    script.js --> SnowSystem
    script.js --> TiltEffect
    script.js --> ScrollAnimation
    script.js --> ModalManager[ModalManager - Pix]
    ModalManager --> QR[pix data in the DOM]
    GH[pages.yml - GitHub Actions] --> PAGES[GitHub Pages]
```

## Stack

- HTML5 + CSS3 + JavaScript (vanilla, Canvas API)
- GitHub Pages (deploy) · GitHub Actions (`pages.yml`)

## Repository layout

```
chopp-gourmet/
├── index.html      # landing page (catalog + Pix modal)
├── script.js       # effects and modal logic (classes)
├── style.css       # styling and theme
├── qrcode-site.png # QR code image (reference)
└── .github/workflows/pages.yml
```

## Prerequisites and installation

None. Just open the page.

## How to run

Open locally or publish on GitHub Pages:

```bash
# local
start index.html
# or serve with a local server
python -m http.server 8000
```

The deploying account is `KelvinOliveiraCode`; the workflow publishes the site to Pages on every push to `main`.

## Tests and quality

A static site with no automated tests. Loading does not depend on the network (no CDN), so the page opens offline.

## Technical decisions and trade-offs

- **Backend-less static site**: zero hosting cost (Pages) and fast load; in exchange, the payment is manual (the user copies the Pix) — there is no real payment gateway.
- **Pix key and QR embedded in the DOM/JS**: simple; in exchange, changing the key means editing the code and redeploying.
- **Canvas/CSS effects**: light and dependency-free; in exchange, extra image-like animation in some browsers.

## Known limitations and roadmap

- Payment is not automated (no transfer confirmation on the page).
- Pix key fixed in code (`582cc87e-...`).
- No external catalog or checkout integration.

## Development process

An individual project by Kelvin Oliveira, built with orchestrated AI agents and reviewed by the author. The design and the review are the author's.

## License and author

**Author**: [Kelvin Oliveira](https://github.com/KelvinOliveiraCode) · [Portfolio](https://kelvinoliveiracode.github.io/portfolio/)
