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
      backDelay: 2000
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
      messages.innerHTML = "⏳ Sending message...";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
        });

        const text = await response.text();

        if (response.ok) {
          messages.className = "alert alert-success";
          messages.innerHTML = "✅ " + text;
          form.reset();
        } else {
          messages.className = "alert alert-danger";
          messages.innerHTML = "❌ " + text;
        }
      } catch (error) {
        messages.className = "alert alert-danger";
        messages.innerHTML = "❌ Error sending message. Please try again.";
      }
    });
  }
});

(async function loadGitHubProjects() {
  const username = "Sharif2023";
  const container = document.getElementById("github-projects");
  const fallback = document.getElementById("gh-fallback");

  // --- cache (session) to avoid rate limits during browsing
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

  // small concurrency limiter for commit requests
  async function withConcurrency(items, limit, worker) {
    const ret = [];
    let i = 0;
    const run = async () => {
      while (i < items.length) {
        const idx = i++;
        ret[idx] = await worker(items[idx], idx);
      }
    };
    const runners = Array.from({ length: Math.min(limit, items.length) }, run);
    await Promise.all(runners);
    return ret;
  }

  try {
    // 1) base repos (non-forks)
    let repos = readCache();
    if (!repos) {
      const token = "my private token";
      const headers = { Authorization: `token ${token}` };

      const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers });
      if (!res.ok) throw new Error("GitHub API rate limit or network error");
      repos = (await res.json()).filter(r => !r.fork).slice(0, 30);
    }

    let enriched;
    try {
      const counts = repos.map(repo => ({
        name: repo.name,
        commits: 0
      }));

      const byName = Object.fromEntries(counts.map(c => [c.name, c.commits]));
      enriched = repos.map(r => ({ ...r, __commits: byName[r.name] || 0 }));
      enriched.sort((a, b) => (b.__commits - a.__commits) || (new Date(b.pushed_at) - new Date(a.pushed_at)));
      writeCache(enriched);
    } catch {
      // fallback: sort by recent update only
      enriched = repos.map(r => ({ ...r, __commits: 0 }))
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    }

    // 3) render top N
    const top = enriched.slice(0, 12);
    if (!top.length) { fallback.style.display = "block"; return; }

    const makeItem = (repo) => {
      const repoUrl = repo.html_url;
      const title = repo.name;
      const desc = repo.description || `${repo.language || "Project"} • Updated ${new Date(repo.pushed_at).toLocaleDateString()}`;
      const ogImage = `https://opengraph.githubassets.com/1/${username}/${encodeURIComponent(title)}`;
      const lang = (repo.language || "App").toLowerCase();
      const filterClass =
        lang.includes("php") || lang.includes("laravel") ? "filter-product" :
          lang.includes("js") || lang.includes("react") || lang.includes("node") ? "filter-app" :
            lang.includes("html") || lang.includes("css") ? "filter-branding" :
              "filter-books";
      const commitBadge = `<span class="badge-commit" title="Total commits">${repo.__commits} commits</span>`;
      const starBadge = repo.stargazers_count > 0 ? `<span class="badge-star">★ ${repo.stargazers_count}</span>` : "";

      return `
        <div class="col-lg-4 col-md-6 projects-item isotope-item ${filterClass}">
          <div class="projects-content h-100">
            <div class="gh-thumb-wrap">
              <img src="${ogImage}" class="img-fluid gh-card-img" alt="${title}" onerror="this.src='assets/img/projects/app-1.jpg'">
              <div class="gh-badges">${commitBadge}${starBadge}</div>
            </div>
            <div class="projects-info">
              <h4>${title}</h4>
              <p>${desc}</p>
              <a href="${ogImage}" title="${title}" data-gallery="projects-gallery-${filterClass}" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="${repoUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary mt-2">
                Visit Repo <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>`;
    };

    container.innerHTML = top.map(makeItem).join("");

    // 4) Lightbox + Isotope reflow AFTER images load (prevents broken layouts)
    if (typeof GLightbox === "function") GLightbox({ selector: ".glightbox" });

    // imagesLoaded & Isotope are already included by your template
    const grid = container;
    if (window.imagesLoaded) {
      imagesLoaded(grid, function () {
        if (window.Isotope) {
          // use existing instance if template created one; otherwise create quickly
          const iso = Isotope.data(grid) || new Isotope(grid, {
            itemSelector: ".projects-item",
            layoutMode: "masonry"
          });
          iso.reloadItems();
          iso.layout();
        }
      });
    }
  } catch (e) {
    console.error(e);
    fallback.style.display = "block";
  }
})();