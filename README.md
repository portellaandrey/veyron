# Veyron Joias — Site Premium

Site de uma marca fictícia de joias premium, em **HTML, CSS e JavaScript puro**.
Sem build, sem frameworks pesados — basta abrir o `index.html` no navegador.

## 📁 Estrutura

```
veyron-joias/
├── index.html      # Estrutura semântica completa
├── style.css       # Estilos (mobile-first, variáveis CSS, animações)
├── script.js       # Interações: filtros, modal, scroll-reveal, menu mobile
├── assets/         # Pasta para imagens locais (opcional)
└── README.md
```

## ✨ Features

- **Header fixo elegante** com efeito blur ao rolar e menu hambúrguer animado no mobile.
- **Hero cinematográfica** com texto em gradiente dourado, cards flutuantes, badge giratório, parallax suave do mouse e indicador de scroll.
- **Marquee dourado** com benefícios da marca.
- **Catálogo com filtros funcionais** (Todos, Correntes, Pulseiras, Anéis, Relógios, Pingentes) com transição suave entre estados.
- **Quick view modal** ao clicar em "Ver Detalhes" de qualquer produto.
- **Favoritar produtos** com contador na sacola.
- **Coleções premium** em grid assimétrico com overlay e CTAs.
- **Seção sobre** com sticker giratório "EST. 2012" e estatísticas.
- **Seção social/TikTok** com cards de reels.
- **Newsletter** em bloco escuro com glow dourado.
- **Footer completo** com redes, navegação, contato e legais.
- **Cursor glow dourado** no desktop, **scroll-reveal** progressivo e **loader** inicial.

## 🎨 Design

- Tipografia: **Cormorant Garamond** (display) + **Italiana** (acentos itálicos) + **Inter** (corpo).
- Paleta: dourado `#D4AF37`, marfim `#FBF8F1`, champagne `#F5ECD9`, preto `#0A0A0A`.
- Ícones: **Lucide** via CDN (leve).
- Imagens: **Unsplash** (substitua livremente).

## 📱 Responsividade

Mobile-first com breakpoints em **1100px**, **860px** e **480px**.
Layout, grids, tipografia e espaçamentos foram pensados para parecer um **app premium** no celular.

## 🚀 Como rodar

Basta abrir o `index.html` direto no navegador, ou servir localmente:

```bash
# Python 3
python3 -m http.server 8000

# Node (com npx)
npx serve .
```

E acessar `http://localhost:8000`.

## 🔧 Personalização rápida

- **Cores e fontes:** edite as variáveis CSS no topo do `style.css` (bloco `:root`).
- **Produtos:** edite o array `products` no início do `script.js`.
- **Imagens locais:** coloque na pasta `assets/` e troque as URLs do Unsplash pelos caminhos relativos (`./assets/...`).
- **Conteúdo:** todo o texto está no `index.html` em PT-BR.
