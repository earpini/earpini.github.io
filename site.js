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
