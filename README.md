# chopp-gourmet

<div align="center">

[English](README.en.md) · **Português (Brasil)**

</div>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222?style=flat-square&logo=githubpages)](https://pages.github.com/) [![MIT License](https://img.shields.io/badge/License-MIT-f4c430?style=flat-square)](LICENSE)

### Chopp Gourmet - Sorvete em saquinho com casquinha de chocolate

---

## O que é

Chopp Gourmet - Sorvete em saquinho com casquinha de chocolate

---

## Início Rápido

Abra `index.html` diretamente no navegador, ou sirva localmente:

```bash
python -m http.server 8080
# Acesse http://localhost:8080
```

Ou faça deploy no GitHub Pages / Netlify / Vercel com configuração zero.

## Como funciona

**Arquitetura zero-build, arquivo único** ,  tudo vive em `index.html`:
- **HTML5** estrutura semântica
- **CSS3** propriedades customizadas para tema (claro/escuro)
- **Vanilla ES6+ JavaScript** ,  sem framework, sem build
- **localStorage** para persistência de tema
- **Catálogo JSON** (`catalogo.json`) como fonte de dados aberta

---

## Capacidades

| Capacidade | Descrição |
|------------|-------------|
| Motor de Recomendação | Filtro determinístico: Área ∩ Preço -> Provedor -> Tier gratuito -> Nível de config |
| Catálogo | 124 serviços de 8 provedores (AWS, Azure, GCP, Oracle, Cloudflare, DO, Firebase, Google) |
| Dados Abertos | catalogo.json + llms.txt para consumo por chat de IA |
| Educação | Vocabulário de nuvem (IaaS/PaaS/SaaS), myth-busting, glossário, quiz de 5 perguntas |
| Tematização | Modo claro/escuro persistido em localStorage, sem CSS externo |
| Zero Build | index.html único ,  deploy em qualquer lugar (GitHub Pages, Netlify, Vercel) |
| Auditoria | Cada decisão do filtro exibida: "Como chegamos aqui" rastreia todos 124 serviços |
| Sem Rastreamento | Sem contas de usuário, sem analytics, sem dependências externas |


---



---

## Perguntas Frequentes

<details>
<summary><strong>O que é este projeto?</strong></summary>

Um estudo/projeto em vanilla JS demonstrando Custom CSS styling, Single-page HTML entry, Vanilla JavaScript logic.

</details>

<details>
<summary><strong>Como executar?</strong></summary>

Veja [Início Rápido](#início-rápido) para comandos copiáveis.

</details>

<details>
<summary><strong>Há testes?</strong></summary>

Nenhum teste automatizado neste repositório.

</details>

<details>
<summary><strong>Posso usar em produção?</strong></summary>

Este é um **projeto de estudo/portfólio**. Revise e endureça (auth, persistência, monitoramento, etc.) antes de usar em produção.

</details>



---

## Documentação

- **Código-Fonte** ,  Navegue pelo diretório `src/` para detalhes de implementação
- **Referência da API** ,  N/A
- **Diagrama de Arquitetura** ,  Veja [architecture.mermaid](docs/architecture.mermaid) (se presente)
- **Changelog** ,  [CHANGELOG.md](CHANGELOG.md) (se presente)
- **Contribuindo** ,  [CONTRIBUTING.md](CONTRIBUTING.md) (se presente)

## Licença

[MIT](LICENSE) ,  Kelvin Oliveira

---

<div align="center">

**Construído com** · Vanilla HTML/CSS/JS

**Autor** · [Kelvin Oliveira](https://github.com/KelvinOliveiraCode) · [Portfolio](https://kelvinoliveiracode.github.io/portfolio/)

</div>