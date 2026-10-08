// Barre de navigation interactive : affiche le nom de la section en cours
(function () {
  var title = document.getElementById("section-title");
  var links = document.querySelectorAll("nav ul a");
  var sections = document.querySelectorAll("section[id]");
  var current = "";

  function show(id) {
    if (id === current) return;
    current = id;
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + id;
      a.parentElement.hidden = on; // le lien de la section en cours disparaît
      if (on) {
        title.classList.add("out");
        setTimeout(function () {
          title.textContent = a.textContent;
          title.classList.remove("out");
        }, 150);
      }
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) show(e.target.id);
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  sections.forEach(function (s) { observer.observe(s); });
  show("presentation");
})();