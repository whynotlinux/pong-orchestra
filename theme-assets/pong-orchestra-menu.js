// PONG Orchestra — runtime menu loader, uploaded as theme-assets/pong-orchestra-menu.js.
// Refreshes [data-cms-menu="header|footer"] from data/menu.json (the
// admin rewrites it whenever menus, posts or categories change) and
// wires the mobile burger. Fails silently: the statically rendered
// menu stays in place.
(function () {
  "use strict";
  // Sites hosted in a sub-folder carry <meta name="x-cms-base" content="/repo/">.
  var meta = document.querySelector('meta[name="x-cms-base"]');
  var BASE = (meta && meta.getAttribute("content")) || "/";
  if (BASE.charAt(BASE.length - 1) !== "/") BASE += "/";
  function withBase(url) {
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\//, "");
  }
  var here = location.pathname.replace(/\/$/, "/index.html");

  function render(items) {
    var ul = document.createElement("ul");
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = withBase(item.href);
      a.textContent = item.label;
      // Anchors ("/index.html#menu") are sections, not the current page.
      if (a.pathname === here && !a.hash) a.setAttribute("aria-current", "page");
      li.appendChild(a);
      if (item.children && item.children.length) li.appendChild(render(item.children));
      ul.appendChild(li);
    });
    return ul;
  }

  function fill(menu) {
    ["header", "footer"].forEach(function (slot) {
      var host = document.querySelector('[data-cms-menu="' + slot + '"]');
      if (!host || !Array.isArray(menu[slot])) return;
      var old = host.querySelector("ul");
      var next = render(menu[slot]);
      if (old) host.replaceChild(next, old);
      else host.appendChild(next);
    });
  }

  function wireBurger() {
    var button = document.querySelector("[data-po-burger]");
    var nav = document.getElementById("po-nav");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    // One-page menus: close the panel once an anchor link is followed.
    nav.addEventListener("click", function (event) {
      if (event.target && event.target.closest && event.target.closest("a")) {
        button.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });
  }


  // ── Video slider (centered, looping) ──────────────────────────────
  // Slides are cloned on both sides so the loop never shows an edge;
  // after each move onto a clone, the track jumps back to the real slide.
  function initSlider(root) {
    var viewport = root.querySelector(".po-slider__viewport");
    var track = root.querySelector(".po-slider__track");
    var dotsHost = root.querySelector("[data-po-dots]");
    var originals = Array.prototype.slice.call(track.children);
    var n = originals.length;
    if (n < 2) return;
    function cloneOf(slide) {
      var c = slide.cloneNode(true);
      c.setAttribute("aria-hidden", "true");
      c.classList.add("is-clone");
      Array.prototype.forEach.call(c.querySelectorAll("a"), function (a) { a.setAttribute("tabindex", "-1"); });
      return c;
    }
    originals.forEach(function (s) { track.appendChild(cloneOf(s)); });
    originals.slice().reverse().forEach(function (s) { track.insertBefore(cloneOf(s), track.firstChild); });
    var all = track.children;
    var index = n;
    var dots = [];
    for (var k = 0; k < n; k++) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "po-slider__dot";
      dot.setAttribute("aria-label", String(k + 1) + " / " + n);
      dot.addEventListener("click", (function (target) { return function () { go(n + target, true); }; })(k));
      dotsHost.appendChild(dot);
      dots.push(dot);
    }
    function go(i, animate) {
      index = i;
      var slide = all[i];
      var offset = slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2;
      track.style.transition = animate ? "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)" : "none";
      track.style.transform = "translate3d(" + -offset + "px,0,0)";
      for (var j = 0; j < all.length; j++) all[j].classList.toggle("is-active", j === i);
      var real = ((i - n) % n + n) % n;
      dots.forEach(function (d, j) { d.setAttribute("aria-current", j === real ? "true" : "false"); });
      if (!animate) settle();
    }
    function settle() {
      if (index >= 2 * n) go(index - n, false);
      else if (index < n) go(index + n, false);
    }
    track.addEventListener("transitionend", function (e) { if (e.target === track) settle(); });
    root.querySelector("[data-po-prev]").addEventListener("click", function () { go(index - 1, true); });
    root.querySelector("[data-po-next]").addEventListener("click", function () { go(index + 1, true); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") go(index - 1, true);
      else if (e.key === "ArrowRight") go(index + 1, true);
    });
    // Swipe / drag; a real drag cancels the click on the thumbnail.
    var startX = null, dragged = false;
    viewport.addEventListener("pointerdown", function (e) { startX = e.clientX; dragged = false; });
    viewport.addEventListener("pointerup", function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) { dragged = true; go(index + (dx < 0 ? 1 : -1), true); }
    });
    viewport.addEventListener("click", function (e) { if (dragged) { e.preventDefault(); e.stopPropagation(); dragged = false; } }, true);
    // Clicking a side slide brings it to the center first.
    track.addEventListener("click", function (e) {
      var slide = e.target.closest && e.target.closest(".po-slider__slide");
      if (!slide || slide.classList.contains("is-active")) return;
      e.preventDefault();
      e.stopPropagation();
      go(Array.prototype.indexOf.call(all, slide), true);
    }, true);
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { go(index, false); }, 120);
    });
    root.classList.add("is-ready");
    go(index, false);
  }

  // ── Video lightbox ────────────────────────────────────────────────
  function openVideo(id, label) {
    var box = document.createElement("div");
    box.className = "po-lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    var close = document.createElement("button");
    close.type = "button";
    close.className = "po-lightbox__close";
    close.setAttribute("aria-label", label || "Close");
    var frame = document.createElement("div");
    frame.className = "po-lightbox__frame";
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
    iframe.title = "YouTube";
    iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture; fullscreen");
    iframe.setAttribute("allowfullscreen", "");
    frame.appendChild(iframe);
    box.appendChild(close);
    box.appendChild(frame);
    var previous = document.activeElement;
    function shut() {
      document.removeEventListener("keydown", onKey);
      box.remove();
      document.documentElement.classList.remove("po-no-scroll");
      if (previous && previous.focus) previous.focus();
    }
    function onKey(e) { if (e.key === "Escape") shut(); }
    close.addEventListener("click", shut);
    box.addEventListener("click", function (e) { if (e.target === box) shut(); });
    document.addEventListener("keydown", onKey);
    document.body.appendChild(box);
    document.documentElement.classList.add("po-no-scroll");
    close.focus();
  }

  function wireVideos() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-po-slider]"), initSlider);
    document.addEventListener("click", function (e) {
      var link = e.target.closest && e.target.closest("[data-po-video]");
      if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      var slider = link.closest("[data-po-slider]");
      openVideo(link.getAttribute("data-po-video"), slider && slider.getAttribute("data-label-close"));
    });
  }

  function start() {
    wireBurger();
    wireVideos();
    fetch(withBase("/data/menu.json"), { credentials: "omit" })
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then(fill)
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
