// Journey page: strand filters, sort order, certificate viewer, deep links.
(function () {
  "use strict";

  var root = document.getElementById("jr");
  if (!root) return;

  var timeline = document.getElementById("jr-timeline");
  var cards = Array.prototype.slice.call(root.querySelectorAll(".jr-card"));
  var years = Array.prototype.slice.call(root.querySelectorAll(".jr-year"));
  var chips = Array.prototype.slice.call(root.querySelectorAll(".jr-chip"));
  var orderBtn = document.getElementById("jr-order");

  // ---- filter by strand ----------------------------------------------------
  function applyFilter(strand) {
    cards.forEach(function (card) {
      card.hidden = strand !== "all" && card.dataset.strand !== strand;
    });
    years.forEach(function (year) {
      var anyVisible = year.querySelector(".jr-card:not([hidden])") !== null;
      year.hidden = !anyVisible;
    });
    chips.forEach(function (chip) {
      var active = chip.dataset.filter === strand;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      applyFilter(chip.dataset.filter);
    });
  });

  // ---- newest first / oldest first ----------------------------------------
  orderBtn.addEventListener("click", function () {
    var reversed = timeline.classList.toggle("is-reversed");
    orderBtn.textContent = reversed ? "Show newest first" : "Show oldest first";
    orderBtn.setAttribute("aria-pressed", reversed ? "true" : "false");
  });

  // ---- certificate viewer --------------------------------------------------
  var dialog = document.getElementById("jr-dialog");
  var dialogBody = document.getElementById("jr-dialog-body");
  var dialogTitle = document.getElementById("jr-dialog-title");
  var dialogOpen = document.getElementById("jr-dialog-open");
  var dialogClose = document.getElementById("jr-dialog-close");
  var canDialog = dialog && typeof dialog.showModal === "function";

  function isPdf(url) {
    return /\.pdf($|[?#])/i.test(url);
  }

  function openCertificate(url, title) {
    var small = window.matchMedia("(max-width: 767px)").matches;
    // Phone browsers show embedded PDFs badly, so use the phone's own viewer.
    if (!canDialog || (isPdf(url) && small)) {
      window.open(url, "_blank", "noopener");
      return;
    }
    dialogBody.textContent = "";
    var el;
    if (isPdf(url)) {
      el = document.createElement("iframe");
      el.src = url;
    } else {
      el = document.createElement("img");
      el.src = url;
      el.alt = "Certificate: " + title;
    }
    el.title = "Certificate: " + title;
    dialogBody.appendChild(el);
    dialogTitle.textContent = title + " — certificate";
    dialogOpen.href = url;
    dialog.showModal();
  }

  root.addEventListener("click", function (event) {
    var btn = event.target.closest(".jr-cert-btn");
    if (btn) openCertificate(btn.dataset.cert, btn.dataset.certTitle);
  });

  if (canDialog) {
    dialogClose.addEventListener("click", function () {
      dialog.close();
    });
    // click on the dimmed backdrop closes it
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    // stop loading the file once closed
    dialog.addEventListener("close", function () {
      dialogBody.textContent = "";
    });
  }

  // ---- deep links: /journey/#neuromatch opens that card --------------------
  function openFromHash() {
    var id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    var card = document.getElementById(id);
    if (!card || !card.classList.contains("jr-card")) return;
    applyFilter("all");
    card.open = true;
    card.scrollIntoView({ block: "center" });
  }

  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
