/* ==========================================================================
   VEYRON JOIAS — Interactions
   ========================================================================== */

(() => {
  "use strict";

  /* ===========================
     PRODUCT DATA
  ============================ */
  const products = [
    {
      id: 1,
      name: "Colar Aurora",
      desc: "Corrente veneziana em ouro 18k, acabamento espelhado.",
      category: "correntes",
      categoryLabel: "Corrente",
      material: "Ouro 18k · 45cm",
      price: "R$ 4.890",
      tag: "Bestseller",
      img: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Anel Solène",
      desc: "Aro liso com diamante natural lapidação brilhante.",
      category: "aneis",
      categoryLabel: "Anel",
      material: "Ouro 18k · 0,15ct",
      price: "R$ 6.290",
      tag: "Novo",
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Pulseira Riviera",
      desc: "Riviera de zircônias com fecho de segurança duplo.",
      category: "pulseiras",
      categoryLabel: "Pulseira",
      material: "Ouro 18k · 18cm",
      price: "R$ 3.490",
      img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Relógio Veyron Classic",
      desc: "Movimento suíço, pulseira em couro italiano nobre.",
      category: "relogios",
      categoryLabel: "Relógio",
      material: "Aço dourado · 40mm",
      price: "R$ 8.990",
      tag: "Edição limitada",
      img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Pingente Étoile",
      desc: "Estrela minimalista em ouro com brilhante central.",
      category: "pingentes",
      categoryLabel: "Pingente",
      material: "Ouro 18k · 0,05ct",
      price: "R$ 2.190",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Corrente Lumière",
      desc: "Fio singapore, brilho intenso e caimento perfeito.",
      category: "correntes",
      categoryLabel: "Corrente",
      material: "Ouro 18k · 50cm",
      price: "R$ 3.890",
      img: "https://images.unsplash.com/photo-1535632066274-3ccecc34246c?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Anel Marquise",
      desc: "Lapidação marquise com pavê de diamantes laterais.",
      category: "aneis",
      categoryLabel: "Anel",
      material: "Ouro 18k · 0,32ct",
      price: "R$ 9.490",
      tag: "Premium",
      img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Bracelete Onyx",
      desc: "Bracelete rígido com pedra ônix natural e ouro polido.",
      category: "pulseiras",
      categoryLabel: "Pulseira",
      material: "Ouro 18k · Ônix",
      price: "R$ 5.290",
      img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Relógio Noir Edition",
      desc: "Mostrador negro acetinado, ponteiros dourados, automático.",
      category: "relogios",
      categoryLabel: "Relógio",
      material: "Aço PVD · 42mm",
      price: "R$ 12.490",
      tag: "Top",
      img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 10,
      name: "Pingente Lua Cheia",
      desc: "Disco em ouro escovado com microcravação de safiras.",
      category: "pingentes",
      categoryLabel: "Pingente",
      material: "Ouro 18k · Safiras",
      price: "R$ 4.190",
      img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 11,
      name: "Corrente Cuban",
      desc: "Elos cubanos densos, fecho em gatilho reforçado.",
      category: "correntes",
      categoryLabel: "Corrente",
      material: "Ouro 18k · 55cm",
      price: "R$ 7.890",
      img: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=700&q=80&auto=format&fit=crop",
    },
    {
      id: 12,
      name: "Anel Eternity",
      desc: "Aliança de diamantes em volta completa, lapidação ideal.",
      category: "aneis",
      categoryLabel: "Anel",
      material: "Ouro 18k · 1,2ct",
      price: "R$ 14.890",
      tag: "Luxury",
      img: "https://images.unsplash.com/photo-1551655510-555dc3be8633?w=700&q=80&auto=format&fit=crop",
    },
  ];

  /* ===========================
     LOADER
  ============================ */
  window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => loader?.classList.add("is-hidden"), 600);
  });

  /* ===========================
     LUCIDE ICONS init helper
  ============================ */
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  /* ===========================
     PRODUCT RENDER + FILTERS
  ============================ */
  const grid = document.getElementById("productsGrid");
  const filterBtns = document.querySelectorAll(".filter");

  function renderProducts(list) {
    if (!grid) return;
    grid.innerHTML = list
      .map(
        (p, i) => `
        <article class="card" data-category="${p.category}" data-id="${p.id}" style="animation-delay:${i * 60}ms">
          <div class="card__media">
            <div class="card__img" style="background-image:url('${p.img}')"></div>
            ${p.tag ? `<span class="card__tag">${p.tag}</span>` : ""}
            <button class="card__fav" aria-label="Favoritar" data-fav>
              <i data-lucide="heart"></i>
            </button>
          </div>
          <div class="card__body">
            <span class="card__category">${p.categoryLabel} · ${p.material}</span>
            <h3 class="card__name">${p.name}</h3>
            <p class="card__desc">${p.desc}</p>
            <div class="card__meta">
              <div class="card__price">
                <small>A partir de</small>
                ${p.price}
              </div>
              <button class="card__btn" data-detail="${p.id}">
                <span>Ver Detalhes</span>
                <i data-lucide="arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      `,
      )
      .join("");
    refreshIcons();
    bindCardEvents();
  }

  function filterProducts(category) {
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    // Fade out then render
    if (!grid) return;
    grid.style.opacity = "0";
    grid.style.transform = "translateY(8px)";
    grid.style.transition = "opacity .25s ease, transform .25s ease";
    setTimeout(() => {
      renderProducts(filtered);
      grid.style.opacity = "1";
      grid.style.transform = "translateY(0)";
    }, 250);
  }

  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      filterProducts(btn.dataset.filter);
    }),
  );

  function bindCardEvents() {
    // Favorite toggle
    grid.querySelectorAll("[data-fav]").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        b.classList.toggle("is-active");
      }),
    );

    // Open modal
    grid
      .querySelectorAll("[data-detail]")
      .forEach((b) =>
        b.addEventListener("click", () => openModal(b.dataset.detail)),
      );
  }

  // initial render
  renderProducts(products);

  /* ===========================
     QUICK VIEW MODAL
  ============================ */
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modalBody");

  function openModal(id) {
    const p = products.find((x) => x.id == id);
    if (!p) return;
    modalBody.innerHTML = `
      <div class="modal__img" style="background-image:url('${p.img}')"></div>
      <div class="modal__info">
        <span class="card__category">${p.categoryLabel}</span>
        <h3>${p.name}</h3>
        <p>${p.desc} Cada peça é finalizada à mão no atelier Veyron, com certificado de origem e garantia vitalícia.</p>
        <div class="modal__details">
          <div><span>Material</span><span>${p.material}</span></div>
          <div><span>Acabamento</span><span>Polido espelhado</span></div>
          <div><span>Garantia</span><span>Vitalícia</span></div>
          <div><span>Entrega</span><span>5–10 dias úteis</span></div>
        </div>
        <div class="modal__price">${p.price}</div>
        <a href="#contato" class="btn btn--primary" data-close>
          <span>Falar com consultor</span>
          <i data-lucide="arrow-up-right"></i>
        </a>
      </div>
    `;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    refreshIcons();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  modal?.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]") || e.target.closest("[data-close]"))
      closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("is-open"))
      closeModal();
  });

  /* ===========================
     HEADER SCROLL STATE
  ============================ */
  const header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 30) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ===========================
     MOBILE MENU
  ============================ */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  function setMenu(open) {
    menuToggle.classList.toggle("is-open", open);
    mobileMenu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }
  menuToggle?.addEventListener("click", () =>
    setMenu(!menuToggle.classList.contains("is-open")),
  );
  mobileMenu
    ?.querySelectorAll("a")
    .forEach((a) => a.addEventListener("click", () => setMenu(false)));

  /* ===========================
     SCROLL REVEAL
  ============================ */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(
            () => entry.target.classList.add("is-visible"),
            parseInt(delay, 10),
          );
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );
  revealEls.forEach((el) => io.observe(el));

  /* ===========================
     CURSOR GLOW (desktop)
  ============================ */
  const cursor = document.querySelector(".cursor-glow");
  const isFinePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  if (cursor && isFinePointer) {
    let x = 0,
      y = 0,
      tx = 0,
      ty = 0;
    document.addEventListener("mousemove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    function loop() {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  /* ===========================
     SUBTLE PARALLAX ON HERO VISUAL
  ============================ */
  const heroVisual = document.querySelector(".hero__visual-frame");
  if (heroVisual && isFinePointer) {
    const hero = document.querySelector(".hero");
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.transform = `translate(${x * -10}px, ${y * -10}px)`;
    });
    hero.addEventListener("mouseleave", () => {
      heroVisual.style.transform = "";
    });
  }

  /* ===========================
     SMOOTH SCROLL FOR ANCHORS
  ============================ */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });

  /* ===========================
     INIT ICONS
  ============================ */
  refreshIcons();
})();
