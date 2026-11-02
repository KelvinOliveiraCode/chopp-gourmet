# chopp-gourmet

[English](README.en.md) · **Português (Brasil)**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages)](#)

## O que é

**Landing page de venda do Chopp Gourmet** — sobremesa gelada vendida por unidade (R$ 4,00) com **pagamento via Pix** embutido na página. Site estático (HTML + CSS + JS), sem backend, sem banco de dados.

## Status

Funcional e pronto para uso: landing com catálogo, modal de pagamento Pix (QR Code + copia-e-cola) e deploy automático no GitHub Pages via `pages.yml`.

## Funcionalidades

- **Catálogo de sabores**: 8 sabores (Leite Ninho, Tapioca, Chocolate, Morango, Maracujá, Abacate, Abacaxi, Coco), cada um a R$ 4,00.
- **Modal de pagamento Pix**: QR Code, chave Pix em copia-e-cola e botão "Copiar" — copia o payload Pix copia-e-cola automaticamente ao abrir.
- **Efeitos visuais**: sistema de partículas de neve (canvas), tilt 3D nos cards de sabor, animações de entrada com `IntersectionObserver` e animação de título.
- **Acessibilidade por teclado**: `Escape` fecha o modal.
- **Deploy no GitHub Pages**: workflow `pages.yml` (Pages + upload artifact + deploy).

## Arquitetura

Página única com separação em três arquivos. O `script.js` organiza os efeitos em classes independentes (`SnowSystem`, `TiltEffect`, `ScrollAnimation`, `ModalManager`, etc.) e as inicializa no `DOMContentLoaded`.

```mermaid
flowchart LR
    index.html --> style.css
    index.html --> script.js
    script.js --> SnowSystem
    script.js --> TiltEffect
    script.js --> ScrollAnimation
    script.js --> ModalManager[ModalManager - Pix]
    ModalManager --> QR[dados pix no DOM]
    GH[pages.yml - GitHub Actions] --> PAGES[GitHub Pages]
```

## Stack

- HTML5 + CSS3 + JavaScript (vanilla, Canvas API)
- GitHub Pages (deploy) · GitHub Actions (`pages.yml`)

## Estrutura do repositório

```
chopp-gourmet/
├── index.html      # landing page (catálogo + modal Pix)
├── script.js       # efeitos e lógica do modal (classes)
├── style.css       # estilo e tema
├── qrcode-site.png # imagem do QR Code (referência)
└── .github/workflows/pages.yml
```

## Pré-requisitos e instalação

Nenhum. Basta abrir a página.

## Como executar

Abra localmente ou publique no GitHub Pages:

```bash
# local
start index.html
# ou sirva com um servidor
python -m http.server 8000
```

O nome de usuário/github de base para o deploy é `KelvinOliveiraCode`; o workflow sobe o site no Pages a cada push na `main`.

## Testes e qualidade

Site estático sem testes automatizados. O carregamento não depende de rede (sem CDN), então a página abre offline.

## Decisões técnicas e trade-offs

- **Static site sem backend**: custo zero de hospedagem (Pages) e abertura rápida; em troca, o pagamento é manual (o usuário copia o Pix) — não há gateway de pagamento de verdade.
- **Chave Pix e QR embutidos no DOM/JS**: simples; em troca, para trocar a chave é preciso editar o código e redeployar.
- **Efeitos em Canvas/CSS**: leve e sem dependências; em troca, efeitos extras por imagem animada em alguns navegadores.

## Limitações conhecidas e roadmap

- Pagamento não é automatizado (sem confirmação de transferência na página).
- Chave Pix fixa no código (`582cc87e-...`).
- Sem integração com catálogo externo ou checkout.

## Processo de desenvolvimento

Projeto individual de Kelvin Oliveira, construído com agentes de IA orquestrados e revisado pelo autor. O design e a revisão são do autor.

## Licença e autor

**Autor**: [Kelvin Oliveira](https://github.com/KelvinOliveiraCode) · [Portfólio](https://kelvinoliveiracode.github.io/portfolio/)
