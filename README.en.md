# Chopp Gourmet

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Pix](https://img.shields.io/badge/Pagamento-Pix-008ECC?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/Hospedagem-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)
![Licença MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=flat-square)

Single page to sell cold gourmet draft beer for R$ 4.00 per unit, with payment via Pix.

## Problem / Why it exists

The producer needed a simple storefront to sell frozen gourmet draft beer in eight flavors, without a shopping cart or complex checkout. The customer picks a flavor, pays via Pix, and receives the product.

## What it does

- Lists eight flavors: leite ninho, tapioca, chocolate, morango, maracujá, abacate, abacaxi e coco
- Fixes the price at R$ 4.00 per unit
- Opens a modal with the Pix key, QR code, and Pix Copia e Cola code when the user clicks buy or a flavor card
- Automatically copies the Pix code to the clipboard when the modal opens
- Animates ice particles on canvas and falling flavors at the bottom of the page
- Tilts flavor cards in 3D when hovering with the mouse
- Shows a fixed purchase bar at the bottom of mobile phones

## Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Style | CSS3 with variables, backdrop-filter and grid |
| Interactivity | Vanilla JavaScript, no frameworks |
| Icons | Font Awesome |
| Fonts | Fredoka and Inter via Google Fonts |
| QR code | quickchart.io |
| Hosting | GitHub Pages (static site) |

## How it works

The visitor enters the page, sees the price and the flavors, and clicks "Comprar Agora" or a card. The payment modal opens and copies the Pix Copia e Cola code. The customer scans the QR code or pastes the code into the banking app, pays R$ 4.00, and closes the modal when done.

1. The page loads with the particle canvas and flavors falling at the bottom.
2. The user clicks the buy button or a flavor card.
3. The modal opens and the script copies the Pix payload to the clipboard.
4. The customer scans the QR code or pastes the code into the banking app.
5. After payment, the user closes the modal and keeps browsing.

## How to run

git clone https://github.com/KelvinOliveiraCode/chopp-gourmet.git
cd chopp-gourmet

Open index.html directly in the browser. Alternatively, serve with Python:

python -m http.server 8000

There are no dependencies to install. Fonts and icons load from CDNs, so you need to be online for the page to appear with the complete visual identity.

## Project structure

chopp-gourmet/
├── index.html      # Single page: hero, flavors, about, how to buy, Pix modal
├── style.css       # Styles, color variables, animations and responsiveness
├── script.js       # Ice particles, card tilt, Pix modal, clipboard copy
├── qrcode-site.png # Site QR code image
├── assets/         # Reserved folder, empty
└── .github/
    └── workflows/  # CI/CD workflows

## Trade-offs and decisions

No framework, I used vanilla JavaScript. Keeps the site light and without a build step. The cost is writing more direct code for simple interactions.

Payment accepts only Pix. Avoids integrating a card gateway, but restricts those who do not use Pix.

The QR code comes from quickchart.io. It does not depend on a local library, but requires connection and trusts an external service.

The price is hardcoded. Simple to maintain, but requires editing the code to change the value.

The canvas draws the particles. Gives a visual effect without the weight of a video or large image.

## Known limitations

There is no backend nor shopping cart. Payment confirmation happens outside the site, in the customer's banking app.

Pix and the value are hardcoded in the HTML and JavaScript.

Fonts and icons depend on external CDNs. Without internet, the page loses its visual identity.

The QR code points to a static external service payload.

There is no dark mode. The palette is fixed in light tones.

## License

MIT

## Author (Kelvin Oliveira — github.com/KelvinOliveiraCode)
