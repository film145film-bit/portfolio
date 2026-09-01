(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const SITE = window.SITE;
  if (!SITE) return;

  const { profile, nav, stats, skills, internships = [], certificates, certificateIssuers = [], contact } = SITE;

  const svg = (d) =>
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

  const ICONS = {
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    phone: svg('<path d="M6 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-3z"/>'),
    chat: svg('<path d="M4 5h16v11H8l-4 3z"/>'),
    github: svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.6A5 5 0 0 0 16 4.8 4.6 4.6 0 0 0 15.9 1S14.7.7 12 2.5a15 15 0 0 0-6 0C3.3.7 2.1 1 2.1 1A4.6 4.6 0 0 0 2 4.8 5 5 0 0 0 .5 8.9c0 5.1 3.1 6.3 6.1 6.6a3.4 3.4 0 0 0-.9 2.6V22"/>'),
    pin: svg('<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/>'),
    briefcase: svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>'),
    award: svg('<circle cx="12" cy="9" r="6"/><path d="M8.2 14.4 7 22l5-2 5 2-1.2-7.6"/>'),
    code: svg('<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>'),
    cpu: svg('<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>'),
    spark: svg('<path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/>'),
    server: svg('<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>'),
    shield: svg('<path d="M12 3 5 6v6c0 5 3.4 7.8 7 9 3.6-1.2 7-4 7-9V6z"/>'),
    building: svg('<path d="M4 21V5a1 1 0 0 1 1-1h9v17M14 9h6v12M8 8h2M8 12h2M8 16h2M17 12h2M17 16h2M3 21h18"/>'),
    hospital: svg('<path d="M3 21h18M6 21V8l6-4 6 4v13M10 12h4M12 10v4"/>'),
    school: svg('<path d="M3 10 12 4l9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 22V12"/>'),
    link: svg('<path d="M10 13a5 5 0 0 0 7.5.1l1.4-1.4a5 5 0 0 0-7.1-7.1L10.5 6"/><path d="M14 11a5 5 0 0 0-7.5-.1L5.1 12.3a5 5 0 0 0 7.1 7.1L13.5 18"/>'),
  };

  const icon = (name) => ICONS[name] || "";

  document.title = `${profile.nameEn} · ${profile.role}`;
  $("#brand-name").textContent = profile.nameTh;
  const photo = profile.photo || "assets/profile.jpg";
  $("#hero-photo").src = photo;
  $("#hero-photo").alt = profile.nameTh;
  $("#cover-photo").src = photo;
  $("#cover-photo").alt = "";
  const brandPhoto = $("#brand-photo");
  brandPhoto.src = photo;
  brandPhoto.hidden = false;
  $("#hero-name-th").textContent = profile.nameTh;
  $("#hero-name-en").textContent = "Patcharapon Waisopa";
  $("#hero-role").textContent = profile.role;
  $("#hero-headline").textContent = profile.headline;
  $("#hero-counts").textContent = `${internships.length} ฝึกงาน · ${certificates.length} เกียรติบัตร · ${skills.length} กลุ่มทักษะ`;
  $("#year").textContent = new Date().getFullYear();
  $("#footer-name").textContent = profile.nameTh;

  $("#hero-facts").innerHTML = [
    `${icon("pin")} <span>${profile.location}</span>`,
    `${icon("school")} <span>วิทยาลัยเทคนิคเลย</span>`,
    `${icon("briefcase")} <span>${profile.availability}</span>`,
  ]
    .map((row) => `<li>${row}</li>`)
    .join("");

  const navEl = $("#nav-links");
  navEl.innerHTML = nav
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  const formatPhone = (num) => {
    const digits = String(num || "").replace(/\D/g, "");
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    return num;
  };

  const channels = [
    { href: `mailto:${profile.email}`, kind: "Email", value: profile.email, icon: "mail" },
    profile.line && { href: `https://line.me/ti/p/~${encodeURIComponent(profile.line)}`, kind: "LINE", value: profile.line, icon: "chat" },
    profile.phone && { href: `tel:${String(profile.phone).replace(/\D/g, "")}`, kind: "โทร", value: formatPhone(profile.phone), icon: "phone" },
    profile.github && { href: profile.github, kind: "GitHub", value: "film145film-bit", icon: "github" },
  ].filter(Boolean);

  const isExternal = (href) => !href.startsWith("mailto:") && !href.startsWith("tel:");

  const email = channels.find((c) => c.kind === "Email");
  const phone = channels.find((c) => c.kind === "โทร");
  $("#hero-actions").innerHTML = `
    ${email ? `<a class="btn-main" href="${email.href}">${icon("mail")} ${email.kind}</a>` : ""}
    ${phone ? `<a class="btn-alt" href="${phone.href}">${icon("phone")} ${phone.kind}</a>` : ""}
  `;

  const tabTone = {
    internships: "green",
    skills: "purple",
    certificates: "blue",
    contact: "orange",
  };
  $("#profile-tabs").innerHTML = nav
    .map((item) => {
      const key = item.href.replace("#", "");
      return `<a href="${item.href}" class="profile-tab tone-${tabTone[key] || "blue"}">${item.label}</a>`;
    })
    .join("");

  $("#contact-cards").innerHTML = channels
    .map(
      (c) => `<a class="dash-card tone-orange" href="${c.href}" ${isExternal(c.href) ? 'target="_blank" rel="noreferrer"' : ""}>
        <div class="dash-icon">${icon(c.icon)}</div>
        <div>
          <span class="dash-label">${c.kind}</span>
          <strong class="dash-value small">${c.value}</strong>
        </div>
      </a>`
    )
    .join("");

  $("#stats").innerHTML = stats
    .map(
      (s) => `<article class="dash-card tone-${s.tone || "green"}">
        <div class="dash-icon">${icon(s.icon)}</div>
        <div>
          <span class="dash-label">${s.label}</span>
          <strong class="dash-value">${s.value}</strong>
          <span class="dash-hint">${s.hint || ""}</span>
        </div>
      </article>`
    )
    .join("");

  $("#skills-grid").innerHTML = skills
    .map(
      (group) => `<article class="skill-group tone-purple">
        <h3>${icon(group.icon)} ${group.group}</h3>
        <ul class="chip-list">${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
    )
    .join("");

  $("#intern-grid").innerHTML = internships
    .map((item) => {
      const live = item.links?.live
        ? `<a href="${item.links.live}" target="_blank" rel="noreferrer">${icon("link")} เปิดเว็บ</a>`
        : "";
      const gh = item.links?.github
        ? `<a href="${item.links.github}" target="_blank" rel="noreferrer">${icon("github")} GitHub</a>`
        : "";
      const tags = (item.tags || []).map((t) => `<li>${t}</li>`).join("");
      const logo = item.logo
        ? `<img class="place-logo${item.logoDark ? " dark" : ""}" src="${item.logo}" alt="${item.org}">`
        : `<div class="place-logo fallback">${icon(item.icon || "briefcase")}</div>`;
      return `<article class="place-card tone-${item.tone || "green"}">
        <div class="place-brand">
          ${logo}
          <div>
            <span class="place-level">${item.level}${item.year && item.year !== item.level ? ` · ${item.year}` : ""}</span>
            <h3>${item.org}</h3>
            <p class="place-role">${item.role}</p>
          </div>
        </div>
        <p class="place-summary">${item.summary}</p>
        ${tags ? `<ul class="tags">${tags}</ul>` : ""}
        <div class="project-links">${live}${gh}</div>
      </article>`;
    })
    .join("");

  const issuerMarks = certificateIssuers
    .map((logo) => `<img src="${logo.src}" alt="${logo.alt}">`)
    .join("");
  $("#cert-grid").innerHTML = certificates
    .map(
      (c) => `<button class="cert-tile tone-blue" data-id="${c.id}" type="button">
        <span class="cert-preview">
          <img src="${c.image}" alt="">
          <span class="cert-issuers">${issuerMarks}</span>
        </span>
        <span class="cert-copy">
          <span class="dash-label">${c.category} · ${c.hours || c.date}</span>
          <strong>${c.title}</strong>
          <span class="dash-hint">${c.date} · กดเพื่อดูใบเต็ม</span>
        </span>
      </button>`
    )
    .join("");

  $("#contact-title").textContent = contact.title;

  const lightbox = $("#lightbox");
  let lbIndex = 0;
  const paintLightbox = () => {
    const c = certificates[lbIndex];
    $("#lb-image").src = c.fullImage || c.image;
    $("#lb-title").textContent = c.title;
    $("#lb-meta").textContent = `${c.issuer} · ${c.date}`;
    if (c.pdf) {
      $("#lb-pdf").href = c.pdf;
      $("#lb-pdf").hidden = false;
    } else {
      $("#lb-pdf").hidden = true;
    }
  };
  const openLightbox = (id) => {
    lbIndex = certificates.findIndex((c) => c.id === id);
    if (lbIndex < 0) return;
    paintLightbox();
    lightbox.hidden = false;
    document.body.classList.add("no-scroll");
  };
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.classList.remove("no-scroll");
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
})();
