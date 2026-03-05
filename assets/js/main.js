/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function () {
  "use strict";

  /**
   * Header toggle
   */
  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      contentType: 'html'
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function (direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });
  // Circular progress animation
  document.querySelectorAll(".circle").forEach(circle => {
    const value = circle.getAttribute("data-value");
    circle.style.setProperty("--value", value + "%");
    circle.textContent = value + "%";
  });


  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");
  const messages = document.getElementById("form-messages");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Show loading state
      messages.style.display = "block";
      messages.className = "alert alert-info";
      messages.innerHTML = "â³ Sending message...";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
        });

        const text = await response.text();

        if (response.ok) {
          messages.className = "alert alert-success";
          messages.innerHTML = "âœ… " + text;
          form.reset();
        } else {
          messages.className = "alert alert-danger";
          messages.innerHTML = "âŒ " + text;
        }
      } catch (error) {
        messages.className = "alert alert-danger";
        messages.innerHTML = "âŒ Error sending message. Please try again.";
      }
    });
  }
});

// --- Dark / Light Mode Toggle ----------
(function initTheme() {
  const saved = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    updateToggleIcon();

    btn.addEventListener("click", function () {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      updateToggleIcon();
    });
  });

  function updateToggleIcon() {
    const btn = document.getElementById("theme-toggle-btn");
    if (!btn) return;
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    btn.innerHTML = current === "dark"
      ? `<i class="bi bi-sun-fill"></i><span>Light Mode</span>`
      : `<i class="bi bi-moon-fill"></i><span>Dark Mode</span>`;
  }
})();

// --- Project Detail Cards ----------
(async function loadGitHubProjects() {
  const username = "Sharif2023";
  const container = document.getElementById("github-projects");
  const fallback = document.getElementById("gh-fallback");

  // -- Rich per-project metadata ----------
  const PROJECT_META = {
    "amar_recipies_reactjs": {
      featured: true,
      problem: "Finding authentic Bangladeshi recipes online is scattered and unreliable -” there's no dedicated, clean platform for home cooks.",
      stack: ["React.js", "Tailwind CSS", "TheMealDB API", "Vercel"],
      impact: "A live recipe sharing platform used by friends and family across Bangladesh. Deployed on Vercel with 100+ monthly visits and real user engagement.",
      learning: "Mastered React Hooks, API integration, component architecture, and production deployment via Vercel CI/CD.",
      credentials: [
        { role: "Test User", user: "No login required to view recipes." },
        { role: "Admin Panel", user: "sharifulislamut1@gmail.com", pass: "12345678", link: "https://amar-recipe.vercel.app/adminlogin" }
      ]
    },
    "studynest": {
      featured: false,
      problem: "Students struggle to organise study materials, track their progress, and collaborate with peers in a single place.",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      impact: "Built as a real study-management tool for UIU students -” helping organise notes, deadlines, and group study sessions.",
      learning: "Deepened understanding of MVC architecture with PHP, session management, and database relational design."
    },
    "camsociety_laraval": {
      featured: false,
      problem: "University camera clubs lack a centralised digital platform to manage members, events, and photo galleries.",
      stack: ["Laravel", "PHP", "MySQL", "Blade Templates", "Bootstrap"],
      impact: "Built for UIU's camera society to manage memberships and showcase photography -” a real club management system.",
      learning: "Gained hands-on expertise in Laravel's Eloquent ORM, middleware, role-based authentication, and MVC design."
    },
    "uiu-health-care": {
      featured: false,
      problem: "University students have no easy way to book appointments, access medical records, or communicate with on-campus doctors.",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "InfinityFree Hosting"],
      impact: "A functional healthcare portal for UIU that simplifies student-doctor interactions and appointment booking -” live and accessible.",
      learning: "Learned multi-role authentication systems, form validation, and real-world deployment on shared hosting.",
      credentials: [
        { role: "Student", user: "011221078", pass: "1234" },
        { role: "Doctor", user: "D001", pass: "1234" }
      ]
    },
    "uiusupplements": {
      featured: false,
      problem: "Local supplement retailers in Bangladesh have no professional e-commerce presence to reach campus customers.",
      stack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      impact: "Helped a local business launch an online supplement store -” enabling product listing, cart, and order management for campus customers.",
      learning: "Built a complete e-commerce flow including cart logic, order management, and admin dashboard from scratch.",
      credentials: [
        { role: "Student", user: "011221079", pass: "123456" },
        { role: "Admin", user: "011221078", pass: "1234" }
      ]
    }
  };

  // Only show these specific repositories (optionally with a Live Demo link)
  const PROJECTS = [
    { name: "Amar_Recipies_ReactJS", live: "https://amar-recipe.vercel.app/" },
    { name: "StudyNest" },
    { name: "CamSociety_Laraval" },
    { name: "UIU-Health-Care", live: "https://uiu-healthcare.infinityfreeapp.com/" },
    { name: "UIUSupplements", live: "http://uiusupplements.yzz.me/" },
  ];
  const ALLOWED_NAMES = new Set(PROJECTS.map(p => p.name.toLowerCase()));
  const LIVE_BY_NAME = Object.fromEntries(
    PROJECTS.filter(p => p.live).map(p => [p.name.toLowerCase(), p.live])
  );

  // -- Session cache ----------
  const cacheKey = "gh_repos_with_commits_" + username;
  const cacheMins = 30;

  const readCache = () => {
    try {
      const raw = sessionStorage.getItem(cacheKey);
      if (!raw) return null;
      const { timestamp, data } = JSON.parse(raw);
      if (Date.now() - timestamp > cacheMins * 60 * 1000) return null;
      return data;
    } catch { return null; }
  };
  const writeCache = (data) => {
    try { sessionStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data })); } catch { }
  };

  try {
    let repos = readCache();
    if (!repos) {
      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
      if (!res.ok) throw new Error("GitHub API rate limit or network error");
      repos = (await res.json()).filter(r => !r.fork).slice(0, 30);
    }

    repos = (repos || []).filter(r => ALLOWED_NAMES.has(String(r.name || "").toLowerCase()));

    let enriched;
    try {
      enriched = repos.map(r => ({ ...r, __commits: 0 }));
      enriched.sort((a, b) => {
        const aIdx = PROJECTS.findIndex(p => p.name.toLowerCase() === String(a.name || "").toLowerCase());
        const bIdx = PROJECTS.findIndex(p => p.name.toLowerCase() === String(b.name || "").toLowerCase());
        return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
      });
      writeCache(enriched);
    } catch {
      enriched = repos.map(r => ({ ...r, __commits: 0 }))
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    }

    const selected = enriched;
    if (!selected.length) { fallback.style.display = "block"; return; }

    // -- Store project detail data globally for modal access ----------
    window.__projectDetails = {};

    // -- Card renderer ----------
    const makeItem = (repo) => {
      const repoUrl = repo.html_url;
      const title = repo.name;
      const nameKey = String(repo.name || "").toLowerCase();
      const sanitizedId = nameKey.replace(/[^a-z0-9]/g, "-");
      const languageLabel = repo.language || "Project";
      const desc = repo.description || `A ${languageLabel} project by Shariful Islam.`;
      const ogImage = `https://opengraph.githubassets.com/1/${username}/${encodeURIComponent(title)}`;
      const liveUrl = LIVE_BY_NAME[nameKey] || "";
      const meta = PROJECT_META[nameKey] || null;

      const lang = (repo.language || "App").toLowerCase();
      const baseFilterClass =
        lang.includes("php") || lang.includes("laravel") ? "filter-product" :
          lang.includes("js") || lang.includes("react") || lang.includes("node") ? "filter-app" :
            lang.includes("html") || lang.includes("css") ? "filter-branding" :
              "filter-books";

      const isFeatured = meta && meta.featured;
      const filterClass = isFeatured ? `${baseFilterClass} filter-featured` : baseFilterClass;

      // Store details for modal
      if (meta) {
        window.__projectDetails[sanitizedId] = {
          title, desc, ogImage, repoUrl, liveUrl, languageLabel, ...meta
        };
      }

      // Live demo badge (pulsing, on thumbnail)
      const liveBadge = liveUrl
        ? `<a href="${liveUrl}" target="_blank" rel="noopener" class="badge-live-demo">
             <i class="bi bi-broadcast-pin"></i> Live
           </a>` : "";

      // Featured chip (minimal, elegant)
      const featuredChip = isFeatured
        ? `<span class="proj-featured-chip"><i class="bi bi-star-fill"></i> Featured</span>` : "";

      // Language dot color
      const langDot = `<span class="proj-lang-dot" style="background:${getLangColor(lang)}"></span>`;

      // Action buttons
      const liveBtn = liveUrl
        ? `<a href="${liveUrl}" target="_blank" rel="noopener" class="proj-btn proj-btn-live">
             <i class="bi bi-play-fill"></i> Live Demo
           </a>` : "";

      const detailBtn = meta
        ? `<button class="proj-btn proj-btn-detail" onclick="openProjectModal('${sanitizedId}')">
             <i class="bi bi-info-circle"></i> Details
           </button>` : "";

      return `
        <div class="projects-item ${filterClass}" data-aos="fade-up">
          <div class="proj-card${isFeatured ? " proj-card--featured" : ""}">
            <div class="proj-thumb">
              <img src="${ogImage}" alt="${title}" class="proj-thumb-img" onerror="this.src='assets/img/projects/app-1.jpg'">
              <div class="proj-thumb-overlay"></div>
              ${liveBadge}
              ${featuredChip}
              <a href="${ogImage}" data-gallery="projects-gallery-${filterClass}" class="glightbox proj-zoom" title="${title}">
                <i class="bi bi-arrows-fullscreen"></i>
              </a>
            </div>
            <div class="proj-body">
              <div class="proj-meta">
                ${langDot}
                <span class="proj-lang-label">${languageLabel}</span>
              </div>
              <h4 class="proj-title">${title.replace(/_/g, " ")}</h4>
              <p class="proj-desc">${desc}</p>
              <div class="proj-actions">
                ${detailBtn}
                <a href="${repoUrl}" target="_blank" rel="noopener" class="proj-btn proj-btn-repo">
                  <i class="bi bi-github"></i> Repo
                </a>
                ${liveBtn}
              </div>
            </div>
          </div>
        </div>`;
    };

    container.innerHTML = selected.map(makeItem).join("");

    // -- Initialize filter buttons ----------
    const filterBtns = document.querySelectorAll(".projects-filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");

        // Update active button
        filterBtns.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        // Filter projects
        const items = document.querySelectorAll(".projects-item");
        items.forEach(item => {
          if (filterValue === "*") {
            item.style.display = "block";
            item.style.animation = "fadeInUp 0.6s ease-out backwards";
          } else if (item.classList.contains(filterValue.substring(1))) {
            item.style.display = "block";
            item.style.animation = "fadeInUp 0.6s ease-out backwards";
          } else {
            item.style.display = "none";
          }
        });
      });
    });

    // -- Inject modal into DOM (once) ----------
    if (!document.getElementById("proj-modal")) {
      const m = document.createElement("div");
      m.id = "proj-modal";
      m.className = "proj-modal-overlay";
      m.setAttribute("role", "dialog");
      m.setAttribute("aria-modal", "true");
      m.innerHTML = `
        <div class="proj-modal-box" id="proj-modal-box">
          <button class="proj-modal-close" onclick="event.stopPropagation(); closeProjectModal();" aria-label="Close">
            <i class="bi bi-x-lg"></i>
          </button>
          <div class="proj-modal-img-wrap">
            <img src="" alt="" id="proj-modal-img" class="proj-modal-img">
            <div class="proj-modal-img-overlay"></div>
          </div>
          <div class="proj-modal-content">
            <div class="proj-modal-header">
              <h3 id="proj-modal-title"></h3>
              <span id="proj-modal-lang" class="proj-modal-lang-badge"></span>
            </div>
            <div id="proj-modal-body"></div>
            <div class="proj-modal-actions" id="proj-modal-actions"></div>
          </div>
        </div>`;
      document.body.appendChild(m);

      // close on backdrop click
      m.addEventListener("click", function (e) {
        if (e.target === m) closeProjectModal();
      });

      // close on Escape (prevent multiple listeners)
      const escapeHandler = function (e) {
        if (e.key === "Escape" && m.classList.contains("open")) closeProjectModal();
      };
      document.addEventListener("keydown", escapeHandler);
    }

    // Lightbox reflow
    if (typeof GLightbox === "function") GLightbox({ selector: ".glightbox" });


  } catch (e) {
    console.error(e);
    fallback.style.display = "block";
  }
})();

// --- Language color helper ----------
function getLangColor(lang) {
  if (lang.includes("js") || lang.includes("react") || lang.includes("node")) return "#f1e05a";
  if (lang.includes("php") || lang.includes("laravel")) return "#4f5d90";
  if (lang.includes("python")) return "#3572a5";
  if (lang.includes("html")) return "#e34c26";
  if (lang.includes("css")) return "#563d7c";
  return "#22c55e";
}

// --- Project Modal ----------
function openProjectModal(sanitizedId) {
  const data = window.__projectDetails && window.__projectDetails[sanitizedId];
  if (!data) return;

  // Populate image
  const img = document.getElementById("proj-modal-img");
  img.src = data.ogImage;
  img.alt = data.title;

  // Title & lang
  document.getElementById("proj-modal-title").textContent = data.title.replace(/_/g, " ");
  document.getElementById("proj-modal-lang").textContent = data.languageLabel;

  // Body
  const stackPills = (data.stack || []).map(t => `<span class="modal-stack-pill">${t}</span>`).join("");
  document.getElementById("proj-modal-body").innerHTML = `
    <div class="modal-section">
      <span class="modal-section-label"><i class="bi bi-lightbulb-fill"></i> Problem</span>
      <p>${data.problem || data.desc}</p>
    </div>
    <div class="modal-section">
      <span class="modal-section-label"><i class="bi bi-stack"></i> Tech Stack</span>
      <div class="modal-stack-list">${stackPills}</div>
    </div>
    <div class="modal-section">
      <span class="modal-section-label"><i class="bi bi-globe2"></i> Real-World Impact</span>
      <p>${data.impact}</p>
    </div>
    <div class="modal-section">
      <span class="modal-section-label"><i class="bi bi-mortarboard-fill"></i> What I Learned</span>
      <p>${data.learning}</p>
    </div>`;

  if (data.credentials && data.credentials.length > 0) {
    const credHtml = data.credentials.map(c => `
      <div style="background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 8px; margin-bottom: 6px;">
        <strong>${c.role}:</strong> ${c.link ? `<a href="${c.link}" target="_blank" style="color:var(--accent-color); font-size:12px; margin-left:8px;">[Login Page]</a>` : ''}<br/>
        ID/Email: <code>${c.user}</code> ${c.pass ? `<br/>Password: <code>${c.pass}</code>` : ''}
      </div>
    `).join('');

    const credBlock = document.createElement("div");
    credBlock.className = "modal-section";
    credBlock.innerHTML = `
      <span class="modal-section-label"><i class="bi bi-key-fill"></i> Test Credentials</span>
      ${credHtml}
    `;
    document.getElementById("proj-modal-body").appendChild(credBlock);
  }

  // Action buttons
  const liveBtn = data.liveUrl
    ? `<a href="${data.liveUrl}" target="_blank" rel="noopener" class="proj-btn proj-btn-live">
         <i class="bi bi-play-fill"></i> Live Demo
       </a>` : "";
  document.getElementById("proj-modal-actions").innerHTML = `
    <a href="${data.repoUrl}" target="_blank" rel="noopener" class="proj-btn proj-btn-repo">
      <i class="bi bi-github"></i> View Repo
    </a>
    ${liveBtn}`;

  // Show modal
  const modal = document.getElementById("proj-modal");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";

  // Reset scroll position of modal box
  const box = document.getElementById("proj-modal-box");
  if (box) box.scrollTop = 0;
}

function closeProjectModal() {
  const modal = document.getElementById("proj-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}
