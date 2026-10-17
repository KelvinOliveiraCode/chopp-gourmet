# Chopp Gourmet

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Pix](https://img.shields.io/badge/Pagamento-Pix-008ECC?style=flat-square)
![GitHub Pages](https://img.shields.io/badge/Hospedagem-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white)
![Licença MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=flat-square)

Página única para vender chopp gourmet gelado por R$ 4,00 a unidade, com pagamento via Pix.

## Problema / Por que existe

O produtor precisava de uma vitrine simples para vender chopp gourmet congelado em oito sabores, sem carrinho de compras nem checkout complexo. O cliente escolhe o sabor, paga por Pix e recebe o produto.

## O que faz

- Lista oito sabores: leite ninho, tapioca, chocolate, morango, maracujá, abacate, abacaxi e coco
- Fixou o preço em R$ 4,00 por unidade
- Abre um modal com chave Pix, QR code e código Pix Copia e Cola quando o usuário clica em comprar ou em um card de sabor
- Copia automaticamente o código Pix para a área de transferência ao abrir o modal
- Anima partículas de gelo no canvas e sabores caindo ao fundo da página
- Inclina os cards de sabor em 3D ao passar o mouse
- Mostra uma barra de compra fixa na parte inferior dos celulares

## Stack

| Camada | Tecnologia |
|--------|------------|
| Estrutura | HTML5 |
| Estilo | CSS3 com variáveis, backdrop-filter e grid |
| Interatividade | JavaScript vanilla, sem frameworks |
| Ícones | Font Awesome |
| Fontes | Fredoka e Inter via Google Fonts |
| QR code | quickchart.io |
| Hospedagem | GitHub Pages (site estático) |

## Como funciona

O visitante entra na página, vê o preço e os sabores, e clica em "Comprar Agora" ou em um card. O modal de pagamento se abre e copia o código Pix Copia e Cola. O cliente escaneia o QR code ou cola o código no app do banco, paga R$ 4,00 e fecha o modal quando terminar.

1. A página carrega com o canvas de partículas e os sabores caindo ao fundo.
2. O usuário clica no botão de compra ou em um card de sabor.
3. O modal se abre e o script copia o payload Pix para a área de transferência.
4. O cliente escaneia o QR code ou cola o código no app bancário.
5. Após o pagamento, o usuário fecha o modal e continua navegando.

## Como rodar

git clone https://github.com/KelvinOliveiraCode/chopp-gourmet.git
cd chopp-gourmet

Abra o index.html diretamente no navegador. Em alternativa, sirva com Python:

python -m http.server 8000

Não há dependências para instalar. Fontes e ícones carregam de CDNs, então é preciso estar online para que a página apareça com a identidade visual completa.

## Estrutura do projeto

chopp-gourmet/
├── index.html      # Página única: hero, sabores, sobre, como comprar, modal Pix
├── style.css       # Estilos, variáveis de cor, animações e responsividade
├── script.js       # Partículas de gelo, inclinação dos cards, modal Pix, cópia da área de transferência
├── qrcode-site.png # Imagem de QR code do site
├── assets/         # Pasta reservada, vazia
└── .github/
    └── workflows/  # Workflows de CI/CD

## Trade-offs e decisões

Sem framework, usei JavaScript vanilla. Mantém o site leve e sem passo de build. O custo é escrever mais código direto para interações simples.

O pagamento aceita apenas Pix. Evita integrar gateway de cartão, mas restringe quem não usa Pix.

O QR code vem do quickchart.io. Não depende de biblioteca local, mas exige conexão e confia em serviço externo.

O preço está hardcoded. Simples de manter, mas exige editar o código para mudar o valor.

O canvas desenha as partículas. Dá efeito visual sem o peso de vídeo ou imagem grande.

## Limitações conhecidas

Não há backend nem carrinho de compras. A confirmação do pagamento acontece fora do site, no app do banco do cliente.

O Pix e o valor estão hardcoded no HTML e no JavaScript.

Fontes e ícones dependem de CDNs externos. Sem internet, a página perde a identidade visual.

O QR code aponta para um payload estático de serviço externo.

Não há modo escuro. A paleta é fixa em tons claros.

## Licença

MIT

## Autor (Kelvin Oliveira — github.com/KelvinOliveiraCode)
