(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const SITE = window.SITE;
  if (!SITE) return;

  const { profile, nav, about, stats, skills, courses = [], internships = [], certificates, projects, contact } = SITE;

  document.title = `${profile.nameEn} · ${profile.role}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", profile.headline);

  $("#brand-name").textContent = profile.nameTh;
  const photo = profile.photo || "assets/profile.jpg";
  const heroPhoto = $("#hero-photo");
  const brandPhoto = $("#brand-photo");
  if (heroPhoto) {
    heroPhoto.src = photo;
    heroPhoto.alt = profile.nameTh;
  }
  if (brandPhoto) {
    brandPhoto.src = photo;
    brandPhoto.alt = "";
    brandPhoto.hidden = false;
  }
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

  const formatPhone = (num) => {
    const digits = String(num || "").replace(/\D/g, "");
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    return num;
  };

  const channels = [
    profile.email && {
      href: `mailto:${profile.email}`,
      kind: "Email",
      value: profile.email,
      label: "Email",
    },
    profile.line && {
      href: `https://line.me/ti/p/~${encodeURIComponent(profile.line)}`,
      kind: "LINE ID",
      value: profile.line,
      label: "LINE",
    },
    profile.phone && {
      href: `tel:${String(profile.phone).replace(/\D/g, "")}`,
      kind: "โทรศัพท์",
      value: formatPhone(profile.phone),
      label: "โทร",
    },
    profile.github && {
      href: profile.github,
      kind: "GitHub",
      value: profile.github.replace(/^https?:\/\/(www\.)?github\.com\//, ""),
      label: "GitHub",
    },
    profile.linkedin && {
      href: profile.linkedin,
      kind: "LinkedIn",
      value: "LinkedIn",
      label: "LinkedIn",
    },
  ].filter(Boolean);

  const socials = channels.map((c) => ({ href: c.href, label: c.label }));

  const socialHtml = (className = "socials") =>
    socials.length
      ? `<div class="${className}">${socials
          .map((s) => {
            const external = !s.href.startsWith("mailto:") && !s.href.startsWith("tel:");
            return `<a href="${s.href}" target="${external ? "_blank" : "_self"}" rel="noreferrer">${s.label}</a>`;
          })
          .join("")}</div>`
      : "";

  $("#hero-socials").innerHTML = socialHtml();
  $("#contact-socials").innerHTML = "";
  $("#contact-cards").innerHTML = channels
    .map((c) => {
      const external = !c.href.startsWith("mailto:") && !c.href.startsWith("tel:");
      return `<a class="contact-card" href="${c.href}" target="${external ? "_blank" : "_self"}" rel="noreferrer">
        <span>${c.kind}</span>
        <strong>${c.value}</strong>
      </a>`;
    })
    .join("");

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

  const courseCategories = ["ทั้งหมด", ...new Set(courses.map((c) => c.category))];
  let activeCourseCategory = "ทั้งหมด";

  const renderCourseFilters = () => {
    $("#course-filters").innerHTML = courseCategories
      .map(
        (cat) =>
          `<button class="chip ${cat === activeCourseCategory ? "is-active" : ""}" data-course-cat="${cat}" type="button">${cat}</button>`
      )
      .join("");
  };

  const renderCourses = () => {
    const list =
      activeCourseCategory === "ทั้งหมด"
        ? courses
        : courses.filter((c) => c.category === activeCourseCategory);

    $("#course-grid").innerHTML = list
      .map(
        (c, i) => `<article class="course-card reveal" style="--d:${i * 40}ms">
          <span class="course-cat">${c.category}</span>
          <h3>${c.title}</h3>
          <p class="course-en">${c.titleEn}</p>
          <p class="course-gain-label">เมื่อเรียนจบจะได้</p>
          <p class="course-outcome">${c.outcome}</p>
          <ul class="tags">${(c.gains || []).map((g) => `<li>${g}</li>`).join("")}</ul>
        </article>`
      )
      .join("");

    observeReveals();
  };

  renderCourseFilters();
  renderCourses();

  $("#course-filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-course-cat]");
    if (!btn) return;
    activeCourseCategory = btn.dataset.courseCat;
    renderCourseFilters();
    renderCourses();
  });

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

  const internLink = (href, label) => {
    if (!href) return "";
    const external = href !== "#";
    return `<a href="${href}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>${label}</a>`;
  };

  $("#intern-grid").innerHTML = internships
    .map((item) => {
      const media = item.image
        ? `<img src="${item.image}" alt="${item.org}">`
        : `<div class="project-fallback"><span>/${item.level}</span></div>`;
      return `<article class="intern-card reveal">
        <div class="project-media">${media}</div>
        <div class="project-body">
          <div class="intern-badges">
            <span class="course-cat">${item.level}</span>
            <span class="intern-year">${item.year}</span>
          </div>
          <h3>${item.org}</h3>
          <p class="course-en">${item.role}</p>
          <p class="intern-site">${item.site}</p>
          <p>${item.summary}</p>
          <ul class="tags">${(item.tags || []).map((t) => `<li>${t}</li>`).join("")}</ul>
          <div class="project-links">${internLink(item.links?.live, "เปิดเว็บฝึกงาน")}${internLink(item.links?.github, "GitHub")}</div>
        </div>
      </article>`;
    })
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
