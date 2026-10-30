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

  function start() {
    wireBurger();
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
