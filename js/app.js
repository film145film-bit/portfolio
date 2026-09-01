(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const SITE = window.SITE;
  if (!SITE) return;

  const { profile, nav, about, stats, skills, certificates, projects, contact } = SITE;

  document.title = `${profile.nameEn} · ${profile.role}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", profile.headline);

  $("#brand-name").textContent = profile.nameEn.split(" ")[0];
  $("#hero-kicker").textContent = profile.availability;
  $("#hero-name-th").textContent = profile.nameTh;
  $("#hero-name-en").textContent = profile.nameEn;
  $("#hero-role").textContent = profile.role;
  $("#hero-headline").textContent = profile.headline;
  $("#hero-location").textContent = profile.location;
  $("#year").textContent = new Date().getFullYear();
  $("#footer-name").textContent = profile.nameTh;

  const navEl = $("#nav-links");
  navEl.innerHTML = nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  const socials = [
    profile.email && { href: `mailto:${profile.email}`, label: "Email" },
    profile.github && { href: profile.github, label: "GitHub" },
    profile.linkedin && { href: profile.linkedin, label: "LinkedIn" },
    profile.resume && { href: profile.resume, label: "Resume" },
  ].filter(Boolean);

  const socialHtml = (className = "socials") =>
    socials.length
      ? `<div class="${className}">${socials
          .map(
            (s) =>
              `<a href="${s.href}" target="${s.href.startsWith("mailto:") ? "_self" : "_blank"}" rel="noreferrer">${s.label}</a>`
          )
          .join("")}</div>`
      : "";

  $("#hero-socials").innerHTML = socialHtml();
  $("#contact-socials").innerHTML = socialHtml("socials socials-lg");

  $("#stats").innerHTML = stats
    .map(
      (s) => `<article class="stat">
        <strong>${s.value}</strong>
        <span>${s.label}</span>
      </article>`
    )
    .join("");

  $("#about-kicker").textContent = about.kicker;
  $("#about-title").textContent = about.title;
  $("#about-body").innerHTML = about.body.map((p) => `<p>${p}</p>`).join("");

  $("#skills-grid").innerHTML = skills
    .map(
      (group) => `<article class="skill-card reveal">
        <h3>${group.group}</h3>
        <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  const categories = ["ทั้งหมด", ...new Set(certificates.map((c) => c.category))];
  let activeCategory = "ทั้งหมด";

  const renderFilters = () => {
    $("#cert-filters").innerHTML = categories
      .map(
        (cat) =>
          `<button class="chip ${cat === activeCategory ? "is-active" : ""}" data-cat="${cat}" type="button">${cat}</button>`
      )
      .join("");
  };

  const renderCertificates = () => {
    const list =
      activeCategory === "ทั้งหมด"
        ? certificates
        : certificates.filter((c) => c.category === activeCategory);

    $("#cert-grid").innerHTML = list
      .map(
        (c, i) => `<button class="cert-card reveal" data-id="${c.id}" type="button" style="--d:${i * 60}ms">
          <span class="cert-frame">
            <img src="${c.image}" alt="${c.title}" loading="lazy">
          </span>
          <span class="cert-meta">
            <span class="cert-cat">${c.category}</span>
            <strong>${c.title}</strong>
            <em>${c.titleEn}</em>
            <span class="cert-foot">
              <span>${c.issuer}</span>
              <span>${c.date} · ${c.hours}</span>
            </span>
          </span>
        </button>`
      )
      .join("");

    observeReveals();
  };

  renderFilters();
  renderCertificates();

  $("#cert-filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    renderFilters();
    renderCertificates();
  });

  const stack = certificates.slice(0, 3);
  $("#hero-stack").innerHTML = stack
    .map(
      (c, i) => `<figure class="stack-card" style="--i:${i}">
        <img src="${c.image}" alt="${c.title}">
      </figure>`
    )
    .join("");

  const renderProjects = () => {
    if (!projects.length) {
      $("#project-grid").innerHTML = `<div class="empty-card">
        <p>ยังไม่มีผลงานในไฟล์คอนเทนต์</p>
        <p>เปิด <code>js/content.js</code> แล้วเพิ่ม object ในอาร์เรย์ <code>projects</code></p>
      </div>`;
      return;
    }

    $("#project-grid").innerHTML = projects
      .map((p) => {
        const live = p.links?.live
          ? `<a href="${p.links.live}" ${p.links.live === "#" ? "" : 'target="_blank" rel="noreferrer"'}>Live</a>`
          : "";
        const gh = p.links?.github
          ? `<a href="${p.links.github}" target="_blank" rel="noreferrer">GitHub</a>`
          : "";
        const media = p.image
          ? `<img src="${p.image}" alt="${p.title}">`
          : `<div class="project-fallback"><span>/${p.title.split(" ")[0].toLowerCase()}</span></div>`;

        return `<article class="project-card reveal">
          <div class="project-media">${media}</div>
          <div class="project-body">
            <div class="project-top">
              <h3>${p.title}</h3>
              <span>${p.year}</span>
            </div>
            <p>${p.summary}</p>
            <ul class="tags">${(p.tags || []).map((t) => `<li>${t}</li>`).join("")}</ul>
            <div class="project-links">${live}${gh}</div>
          </div>
        </article>`;
      })
      .join("");
  };

  renderProjects();

  $("#contact-title").textContent = contact.title;
  $("#contact-note").textContent = socials.length
    ? "เลือกช่องทางที่สะดวกได้เลย"
    : contact.note;

  const lightbox = $("#lightbox");
  const lbImage = $("#lb-image");
  const lbTitle = $("#lb-title");
  const lbMeta = $("#lb-meta");
  const lbPdf = $("#lb-pdf");
  let lbIndex = 0;

  const openLightbox = (id) => {
    lbIndex = certificates.findIndex((c) => c.id === id);
    if (lbIndex < 0) return;
    paintLightbox();
    lightbox.hidden = false;
    document.body.classList.add("no-scroll");
    $("#lb-close").focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("no-scroll");
  };

  const paintLightbox = () => {
    const c = certificates[lbIndex];
    lbImage.src = c.fullImage || c.image;
    lbImage.alt = c.title;
    lbTitle.textContent = c.title;
    lbMeta.textContent = `${c.issuer} · ${c.date} · ${c.hours}`;
    if (c.pdf) {
      lbPdf.href = c.pdf;
      lbPdf.hidden = false;
    } else {
      lbPdf.hidden = true;
    }
  };

  $("#cert-grid").addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (card) openLightbox(card.dataset.id);
  });

  $("#lb-close").addEventListener("click", closeLightbox);
  $("#lb-prev").addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + certificates.length) % certificates.length;
    paintLightbox();
  });
  $("#lb-next").addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % certificates.length;
    paintLightbox();
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") $("#lb-prev").click();
    if (e.key === "ArrowRight") $("#lb-next").click();
  });

  const toggle = $("#nav-toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  navEl.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  });

  function observeReveals() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    $$(".reveal").forEach((el) => io.observe(el));
  }

  observeReveals();
  $$(".hero-copy > *, .hero-visual, .stat").forEach((el, i) => {
    el.style.animationDelay = `${i * 70}ms`;
    el.classList.add("boot");
  });
})();
