// Language toggle, persisted across pages
(function () {
  var lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
  var btn = document.getElementById("langToggle");
  function apply() {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    document.querySelectorAll("[data-en]").forEach(function (el) {
      el.innerHTML = el.getAttribute(lang === "en" ? "data-en" : "data-pt");
    });
    if (btn) btn.textContent = lang === "en" ? "PT" : "EN";
  }
  if (btn) {
    btn.addEventListener("click", function () {
      lang = lang === "en" ? "pt" : "en";
      try { localStorage.setItem("lang", lang); } catch (e) {}
      apply();
    });
  }
  apply();
})();

// Scroll-spy: highlight the nav link for the section in view
(function () {
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll('nav a[href^="#"]');
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.id;
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + id);
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  sections.forEach(function (s) { observer.observe(s); });
})();

// Scroll-reveal: fade/rise content in as it enters the viewport
(function () {
  var els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  els.forEach(function (el) { observer.observe(el); });
})();
