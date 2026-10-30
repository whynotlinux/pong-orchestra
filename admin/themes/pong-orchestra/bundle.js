import { jsx as n, jsxs as i, Fragment as y } from "react/jsx-runtime";
import { i18n as H, pickPublicLocale as P, logoPath as R, canonicalUrl as B, pickFormat as k, postSortMillis as $, buildTermUrl as U, MediaPicker as I, pickMediaUrl as j, uploadThemeLogo as q, removeThemeLogo as G, toast as D } from "@agent-cms/runtime";
import { useState as w, useEffect as Y } from "react";
import { useTranslation as V } from "react-i18next";
const C = `@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Roboto:wght@100;300;400;500&display=swap");

/* PONG Orchestra — black stage, thin spaced capitals, red duotone photos. */
:root {
  --po-accent: #d7141a;
  --po-bg: #050505;
  --po-text: #f1f1f1;
  --po-surface: color-mix(in srgb, var(--po-bg) 88%, #fff 12%);
  --po-alt: color-mix(in srgb, var(--po-bg) 94%, #fff 6%);
  --po-muted: color-mix(in srgb, var(--po-text) 62%, transparent);
  --po-line: color-mix(in srgb, var(--po-text) 16%, transparent);
  --po-header-h: 64px;
  --po-display: "Jost", "Futura", "Century Gothic", sans-serif;
  --po-body: "Roboto", "Helvetica Neue", Arial, sans-serif;
  --po-max: 1140px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: var(--po-header-h);
}

body.po {
  margin: 0;
  background: var(--po-bg);
  color: var(--po-text);
  font-family: var(--po-body);
  font-weight: 300;
  font-size: 1.0625rem;
  line-height: 1.75;
  -webkit-font-smoothing: antialiased;
}

.po a {
  color: inherit;
}

.po-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.po-container {
  width: 100%;
  max-width: var(--po-max);
  margin: 0 auto;
  padding: 0 24px;
}

.po-container--narrow {
  max-width: 780px;
}

.po-main {
  padding-top: var(--po-header-h);
  min-height: 70vh;
}

/* ---------- Header ---------- */
.po-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--po-header-h);
  background: #000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.po-header__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 100%;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 28px;
  gap: 16px;
}

.po-header__right {
  display: flex;
  justify-content: flex-end;
}

.po-header__brand {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.po-brand--img {
  display: block;
  height: 40px;
  width: auto;
}

.po-brand--text {
  font-family: var(--po-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
}

.po-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.po-socials a {
  display: flex;
  color: var(--po-text);
  opacity: 0.85;
  transition: color 0.2s, opacity 0.2s;
}

.po-socials a:hover {
  color: var(--po-accent);
  opacity: 1;
}

.po-nav ul {
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.po-nav ul ul {
  display: none;
}

.po-nav a {
  position: relative;
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 6px 0;
}

.po-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  height: 2px;
  background: var(--po-accent);
  transition: right 0.25s ease;
}

.po-nav a:hover::after,
.po-nav a[aria-current="page"]::after {
  right: 0;
}

.po-burger {
  display: none;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--po-text);
  cursor: pointer;
}

.po-burger__bars,
.po-burger__bars::before,
.po-burger__bars::after {
  display: block;
  width: 24px;
  height: 2px;
  margin: 0 auto;
  background: currentColor;
  transition: transform 0.25s, opacity 0.25s;
}

.po-burger__bars {
  position: relative;
}

.po-burger__bars::before,
.po-burger__bars::after {
  content: "";
  position: absolute;
  left: 0;
}

.po-burger__bars::before {
  top: -7px;
}

.po-burger__bars::after {
  top: 7px;
}

.po-burger[aria-expanded="true"] .po-burger__bars {
  background: transparent;
}

.po-burger[aria-expanded="true"] .po-burger__bars::before {
  transform: translateY(7px) rotate(45deg);
}

.po-burger[aria-expanded="true"] .po-burger__bars::after {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- Duotone photo backgrounds ---------- */
.po-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #000;
}

.po-bg img {
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1) contrast(1.1) brightness(1.15);
}

.po-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--po-accent);
  mix-blend-mode: multiply;
  opacity: 0.8;
}

.po-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.62));
}

/* ---------- Home hero ---------- */
.po-hero {
  position: relative;
  display: grid;
  place-items: center;
  min-height: calc(100vh - var(--po-header-h));
  min-height: calc(100svh - var(--po-header-h));
  padding: 64px 24px;
  overflow: hidden;
  text-align: center;
  background: radial-gradient(ellipse at 50% 35%, #2a0b0c 0%, #000 70%);
}

.po-hero__bg {
  position: absolute;
  inset: 0;
}

.po-hero__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.04);
}

.po-hero__bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.72) 0%, rgba(10, 2, 3, 0.55) 45%, rgba(0, 0, 0, 0.85) 100%);
}

.po-hero__inner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  animation: po-rise 1.1s cubic-bezier(0.2, 0.7, 0.2, 1) both;
}

.po-hero__title {
  margin: 0;
  line-height: 1;
}

.po .po-hero__brand--img {
  display: block;
  width: min(340px, 70vw);
  height: auto;
  filter: drop-shadow(0 6px 30px rgba(0, 0, 0, 0.6));
}

.po-hero__brand--text {
  display: block;
  font-family: var(--po-display);
  font-weight: 600;
  font-size: clamp(3rem, 11vw, 7.5rem);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 0.95;
  text-shadow: 0 6px 40px rgba(0, 0, 0, 0.6);
}

.po-hero__tagline {
  margin: 0;
  font-family: var(--po-body);
  font-weight: 100;
  font-size: clamp(1.1rem, 2.6vw, 1.75rem);
  letter-spacing: 0.5em;
  margin-right: -0.5em;
  text-transform: uppercase;
}

.po-hero__down {
  position: absolute;
  bottom: 28px;
  left: 50%;
  width: 26px;
  height: 42px;
  margin-left: -13px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 14px;
}

.po-hero__down span {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  height: 8px;
  margin-left: -2px;
  border-radius: 2px;
  background: var(--po-accent);
  animation: po-scroll 1.8s infinite;
}

@keyframes po-rise {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
}

@keyframes po-scroll {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(14px);
  }
}

/* ---------- Landing sections ---------- */
.po-section {
  position: relative;
  padding: clamp(72px, 10vw, 128px) 0;
  background: var(--po-bg);
  overflow: hidden;
}

.po-section--alt {
  background: var(--po-alt);
}

.po-section--photo {
  padding: clamp(96px, 14vw, 180px) 0;
}

.po-section__inner {
  position: relative;
  max-width: 920px;
  text-align: center;
}

.po-section__title,
.po-title {
  margin: 0 0 40px;
  font-family: var(--po-display);
  font-weight: 300;
  font-size: clamp(1.9rem, 4.4vw, 3rem);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  line-height: 1.2;
}

.po-section__title::after,
.po-title::after {
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  margin: 22px auto 0;
  background: var(--po-accent);
}

/* ---------- Prose ---------- */
.po-prose > :first-child {
  margin-top: 0;
}

.po-prose > :last-child {
  margin-bottom: 0;
}

.po-prose p {
  margin: 0 0 1.3em;
}

.po-prose strong {
  font-weight: 500;
}

.po-prose a {
  color: var(--po-text);
  text-decoration-color: var(--po-accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}

.po-prose a:hover {
  color: var(--po-accent);
}

.po-prose h2,
.po-prose h3,
.po-prose h4 {
  font-family: var(--po-display);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.3;
  margin: 2em 0 0.8em;
}

.po-prose h2 {
  font-size: 1.6rem;
}

.po-prose h3 {
  font-size: 1.2rem;
}

.po-prose h4 {
  font-size: 0.95rem;
  color: var(--po-muted);
}

.po-prose img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}

.po-prose figure {
  margin: 2em 0;
}

.po-prose figcaption,
.po-caption {
  margin-top: 0.6em;
  font-size: 0.85rem;
  color: var(--po-muted);
  text-align: center;
}

.po-prose iframe,
.po-prose video {
  display: block;
  width: 100%;
  max-width: 100%;
  border: 0;
}

.po-prose iframe[src*="youtube"],
.po-prose iframe[src*="vimeo"],
.po-prose video {
  aspect-ratio: 16 / 9;
  height: auto;
}

.po-prose ul,
.po-prose ol {
  display: inline-block;
  margin: 0 0 1.3em;
  padding-left: 1.2em;
  text-align: left;
}

.po-prose li::marker {
  color: var(--po-accent);
}

.po-prose hr {
  width: 56px;
  margin: 2.5em auto;
  border: 0;
  border-top: 3px solid var(--po-accent);
}

/* Press quotes */
.po-prose blockquote {
  position: relative;
  margin: 2.4em auto;
  padding: 0 1em;
  max-width: 760px;
  font-family: var(--po-display);
  font-weight: 300;
  font-style: italic;
  font-size: clamp(1.2rem, 2.4vw, 1.6rem);
  line-height: 1.5;
}

.po-prose blockquote::before {
  content: "\\201C";
  display: block;
  height: 0.55em;
  font-family: Georgia, serif;
  font-style: normal;
  font-size: 4.5rem;
  line-height: 1;
  color: var(--po-accent);
}

.po-prose blockquote p {
  margin: 0 0 0.5em;
}

.po-prose blockquote p:last-child {
  margin: 0.8em 0 0;
  font-family: var(--po-display);
  font-style: normal;
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--po-muted);
}

.po-prose blockquote p:only-child {
  margin: 0;
  font: inherit;
  letter-spacing: normal;
  text-transform: none;
  color: inherit;
}

.po-prose code {
  font-size: 0.9em;
  padding: 0.1em 0.35em;
  background: var(--po-surface);
  border-radius: 3px;
}

.po-prose pre {
  overflow-x: auto;
  padding: 1em;
  background: var(--po-surface);
  text-align: left;
}

.po-prose pre code {
  padding: 0;
  background: none;
}

.po-prose table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 0 1.5em;
  text-align: left;
}

.po-prose th,
.po-prose td {
  padding: 0.6em 0.8em;
  border-bottom: 1px solid var(--po-line);
}

.po-prose th {
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* Rows of images in a section (several images in one paragraph) */
.po-section .po-prose p:has(> img + img),
.po-section .po-prose p:has(> a > img):has(> a + a) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(150px, 40vw), 1fr));
  gap: 12px;
}

.po-section .po-prose p:has(> img + img) img,
.po-section .po-prose p:has(> a + a) img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  filter: grayscale(0.35);
  transition: filter 0.3s;
}

.po-section .po-prose p:has(> img + img) img:hover,
.po-section .po-prose p:has(> a + a) img:hover {
  filter: none;
}

/* Buttons */
.po-button {
  display: inline-block;
  padding: 14px 32px;
  border: 2px solid var(--po-accent);
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
}

.po .po-button:hover {
  background: var(--po-accent);
  color: #fff;
}

.po-more {
  margin: 48px 0 0;
  text-align: center;
}

/* ---------- Inner page band ---------- */
.po-band {
  position: relative;
  padding: clamp(72px, 10vw, 120px) 0 clamp(56px, 8vw, 96px);
  text-align: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 0%, #26090a 0%, var(--po-bg) 70%);
  border-bottom: 1px solid var(--po-line);
}

.po-band--photo {
  padding: clamp(110px, 16vw, 200px) 0 clamp(72px, 10vw, 120px);
}

.po-band__inner {
  position: relative;
}

.po-band .po-title {
  margin-bottom: 24px;
}

.po-eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--po-accent) !important;
}

.po-meta {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--po-muted);
}

.po-meta a {
  text-decoration: none;
}

.po-lead {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.15rem;
  color: var(--po-muted);
}

.po .po-avatar {
  display: block;
  width: 96px;
  height: 96px;
  margin: 0 auto 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--po-accent);
}

.po-author-links {
  display: flex;
  justify-content: center;
  gap: 18px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  font-family: var(--po-display);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.po-article__body {
  padding-top: 64px;
  padding-bottom: 96px;
}

.po-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 48px 0 0;
  padding: 24px 0 0;
  list-style: none;
  border-top: 1px solid var(--po-line);
  font-family: var(--po-display);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--po-muted);
}

/* ---------- Cards ---------- */
.po-listing {
  padding-top: 64px;
  padding-bottom: 96px;
}

.po-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 28px;
  text-align: left;
}

.po-card {
  display: flex;
  flex-direction: column;
  background: var(--po-surface);
  transition: transform 0.25s;
}

.po-card:hover {
  transform: translateY(-4px);
}

.po-card__media {
  display: block;
  position: relative;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  background: #000;
}

.po-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.4);
  transition: transform 0.5s, filter 0.3s;
}

.po-card:hover .po-card__media img {
  transform: scale(1.05);
  filter: none;
}

.po-card__placeholder {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(135deg, #140405 0 14px, #1d0607 14px 28px);
}

.po-card__body {
  padding: 22px 24px 26px;
}

.po-card__title {
  margin: 0 0 10px;
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 1.15rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.35;
}

.po-card__title a {
  text-decoration: none;
}

.po-card__title a:hover {
  color: var(--po-accent);
}

.po-card__excerpt {
  margin: 0 0 12px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--po-muted);
}

.po-empty {
  text-align: center;
  color: var(--po-muted);
}

/* ---------- Footer ---------- */
.po-footer {
  padding: 56px 0 40px;
  background: #000;
  border-top: 1px solid var(--po-line);
  text-align: center;
}

.po-footer__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.po-footer__nav ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 26px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.po-footer__nav a {
  font-family: var(--po-display);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--po-muted);
}

.po-footer__nav a:hover {
  color: var(--po-accent);
}

.po-footer__legal,
.po-footer__credit {
  margin: 0;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--po-muted);
}

/* ---------- Phone ---------- */
@media (max-width: 860px) {
  :root {
    --po-header-h: 58px;
  }

  .po-header__inner {
    padding: 0 16px;
  }

  .po-header__left .po-socials {
    gap: 10px;
  }

  .po-burger {
    display: block;
  }

  .po-nav {
    position: fixed;
    inset: var(--po-header-h) 0 auto 0;
    max-height: 0;
    overflow: hidden;
    background: #000;
    transition: max-height 0.35s ease;
  }

  .po-nav.is-open {
    max-height: calc(100vh - var(--po-header-h));
    border-bottom: 1px solid var(--po-line);
  }

  .po-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 12px 0 20px;
  }

  .po-nav a {
    display: block;
    padding: 14px 0;
    font-size: 0.85rem;
  }

  .po-container {
    padding: 0 16px;
  }
}

@media (max-width: 520px) {
  .po-header__inner {
    grid-template-columns: auto 1fr auto;
  }

  .po-header__left {
    min-width: 0;
  }

  /* Socials stay in the footer on small phones; logo moves left. */
  .po-header__left .po-socials {
    display: none;
  }

  .po-header__left {
    display: none;
  }

  .po-header__brand {
    grid-column: 1 / 3;
  }

  .po-brand--text {
    font-size: 1rem;
  }

  .po-hero__tagline {
    letter-spacing: 0.32em;
    margin-right: -0.32em;
  }

  .po-section__title,
  .po-title {
    letter-spacing: 0.1em;
  }

  body.po {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .po-hero__inner,
  .po-hero__down span {
    animation: none;
  }
}

/* Links on red photo sections: the accent underline would vanish. */
.po-section--photo .po-prose a,
.po-band--photo .po-meta a {
  text-decoration-color: currentColor;
}

.po-section--photo .po-prose a:hover {
  color: #fff;
  text-decoration-thickness: 3px;
}

/* Several videos in a section: the first one large, the others two by two. */
.po-section .po-prose:has(> .cms-embed + .cms-embed) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.po-section .po-prose:has(> .cms-embed + .cms-embed) > * {
  grid-column: 1 / -1;
  margin: 0;
}

.po-section .po-prose:has(> .cms-embed + .cms-embed) > .cms-embed ~ .cms-embed {
  grid-column: auto;
}

.po-prose .cms-embed {
  background: #000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

@media (max-width: 640px) {
  .po-section .po-prose:has(> .cms-embed + .cms-embed) > .cms-embed ~ .cms-embed {
    grid-column: 1 / -1;
  }
}

/* Spotify player: the full-size player (track list), like the official embed code. */
.po-prose .cms-embed-spotify {
  height: 352px;
  margin: 2rem auto 0;
  border-radius: 12px;
  overflow: hidden;
  background: transparent;
}
`, J = `// PONG Orchestra — runtime menu loader, uploaded as theme-assets/pong-orchestra-menu.js.
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
    if (!url || BASE === "/" || /^([a-z][a-z0-9+.-]*:|\\/\\/|#)/i.test(url) || url.indexOf(BASE) === 0) return url;
    return BASE + url.replace(/^\\//, "");
  }
  var here = location.pathname.replace(/\\/$/, "/index.html");

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
`, K = `# PONG Orchestra

Thème sombre type fanfare rock, inspiré de pongorchestra.fr

An AgentCMS theme. Install the ZIP from the admin: **Themes → Install theme**.

## Develop

\`\`\`bash
npm install
npm run build     # type-check, build dist/bundle.js, pack pong-orchestra.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
\`\`\`

Bump \`version\` in \`manifest.json\`, \`src/manifest.tsx\` and \`package.json\` for each release: installing a newer ZIP upgrades the theme in place.
`;
function x(e, o) {
  const t = H.getFixedT(P(o || e.settings.language || "en"), "theme-pong-orchestra");
  return (a) => t(`public.${a}`);
}
const M = ["instagram", "facebook", "spotify", "deezer", "youtube", "apple"], u = {
  colors: { accent: "#d7141a", background: "#050505", text: "#f1f1f1" },
  hero: { image: "", tagline: "Brass Band" },
  logoEnabled: !1,
  logoUpdatedAt: 0,
  socials: { instagram: "", facebook: "", spotify: "", deezer: "", youtube: "", apple: "" },
  footer: { credit: "" }
};
function b(e) {
  const o = e ?? {};
  return {
    colors: { ...u.colors, ...o.colors ?? {} },
    hero: { ...u.hero, ...o.hero ?? {} },
    logoEnabled: o.logoEnabled === !0,
    logoUpdatedAt: typeof o.logoUpdatedAt == "number" ? o.logoUpdatedAt : 0,
    socials: { ...u.socials, ...o.socials ?? {} },
    footer: { ...u.footer, ...o.footer ?? {} }
  };
}
const W = {
  "colors.accent": { description: "Accent color: underlines, buttons, the duotone tint of photo sections.", format: "hex color" },
  "colors.background": { description: "Page background (keep it dark).", format: "hex color" },
  "colors.text": { description: "Body text.", format: "hex color" },
  "hero.image": { description: "Full-screen photo behind the logo on the home page (URL, e.g. a media 'large' URL)." },
  "hero.tagline": { description: "Letter-spaced line under the logo on the home page, e.g. 'Brass Band'." },
  logoEnabled: { description: "Use the uploaded logo (theme-assets/pong-orchestra-logo.webp) instead of the site title. Set by `themes logo` or the settings page." },
  logoUpdatedAt: { description: "Cache-busting timestamp of the logo." },
  "socials.instagram": { description: "Instagram profile URL (empty = hidden)." },
  "socials.facebook": { description: "Facebook page URL (empty = hidden)." },
  "socials.spotify": { description: "Spotify artist URL (empty = hidden)." },
  "socials.deezer": { description: "Deezer artist URL (empty = hidden)." },
  "socials.youtube": { description: "YouTube channel URL (empty = hidden)." },
  "socials.apple": { description: "Apple Music artist URL (empty = hidden)." },
  "footer.credit": { description: "Optional extra line in the footer, e.g. 'Réalisation : …'." }
};
function Z(e, o) {
  const t = { ...u.colors, ...(o == null ? void 0 : o.colors) ?? {} };
  if (Object.keys(t).every((c) => t[c] === u.colors[c])) return e;
  const r = (c) => /^#[0-9a-f]{3,8}$/i.test(c) ? c : "inherit";
  return `${e}
:root{--po-accent:${r(t.accent)};--po-bg:${r(t.background)};--po-text:${r(t.text)}}
`;
}
const Q = {
  instagram: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
  facebook: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  spotify: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.6.6 0 0 1-.9.2c-2.4-1.4-5.3-1.8-8.8-1a.6.6 0 1 1-.3-1.2c3.8-.9 7-.5 9.7 1.1.3.2.4.6.3.9zm1.2-2.7a.8.8 0 0 1-1.1.3c-2.7-1.7-6.9-2.2-10.1-1.2a.8.8 0 1 1-.5-1.5c3.7-1.1 8.3-.6 11.4 1.3.4.2.5.7.3 1.1zm.1-2.8C14.7 9 9.4 8.8 6.3 9.7a1 1 0 1 1-.6-1.8c3.5-1.1 9.4-.9 13.1 1.3a1 1 0 0 1-.9 1.7z",
  deezer: "M18.8 5.6h4.2V8h-4.2zM18.8 9.1h4.2v2.4h-4.2zM12.9 9.1h4.2v2.4h-4.2zM18.8 12.6h4.2V15h-4.2zM12.9 12.6h4.2V15h-4.2zM7 12.6h4.2V15H7zM18.8 16.1h4.2v2.4h-4.2zM12.9 16.1h4.2v2.4h-4.2zM7 16.1h4.2v2.4H7zM1 16.1h4.2v2.4H1z",
  youtube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.7 15.5v-7l6 3.5-6 3.5z",
  apple: "M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6s1.7-.8 3.2-.8 1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4a10 10 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.1-4.3zM13.9 5.1A4.4 4.4 0 0 0 15 1.9a4.5 4.5 0 0 0-2.9 1.5 4.2 4.2 0 0 0-1.1 3.1c1.1.1 2.2-.6 2.9-1.4z"
}, N = {
  instagram: "Instagram",
  facebook: "Facebook",
  spotify: "Spotify",
  deezer: "Deezer",
  youtube: "YouTube",
  apple: "Apple Music"
};
function X({ network: e, size: o = 16 }) {
  return /* @__PURE__ */ n("svg", { viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n("path", { fill: "currentColor", d: Q[e] }) });
}
function E({ socials: e, size: o, className: t }) {
  const a = M.filter((r) => e[r]);
  return a.length === 0 ? null : /* @__PURE__ */ n("ul", { className: `po-socials ${t ?? ""}`, children: a.map((r) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("a", { href: e[r], rel: "noopener", target: "_blank", "aria-label": N[r], title: N[r], children: /* @__PURE__ */ n(X, { network: r, size: o }) }) }, r)) });
}
function O({ site: e, className: o }) {
  const { logoEnabled: t, logoUpdatedAt: a } = b(e.themeConfig), r = e.settings.title || "";
  return t ? /* @__PURE__ */ n("img", { className: `${o} ${o}--img`, src: `/${R("pong-orchestra")}?v=${a}`, alt: r }) : /* @__PURE__ */ n("span", { className: `${o} ${o}--text`, children: r });
}
function z({ items: e, currentPath: o }) {
  return /* @__PURE__ */ n("ul", { children: e.map((t) => {
    const a = o !== void 0 && t.href === `/${o}`;
    return /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ n("a", { href: t.href, "aria-current": a ? "page" : void 0, children: t.label }),
      t.children && t.children.length > 0 && /* @__PURE__ */ n(z, { items: t.children, currentPath: o })
    ] }, t.id);
  }) });
}
function nn({ site: e, currentPath: o, locale: t }) {
  const a = x(e, t), r = b(e.themeConfig);
  return /* @__PURE__ */ n("header", { className: "po-header", children: /* @__PURE__ */ i("div", { className: "po-header__inner", children: [
    /* @__PURE__ */ n("div", { className: "po-header__left", children: /* @__PURE__ */ n(E, { socials: r.socials, size: 15 }) }),
    /* @__PURE__ */ n("a", { className: "po-header__brand", href: e.homePath ?? "/index.html", children: /* @__PURE__ */ n(O, { site: e, className: "po-brand" }) }),
    /* @__PURE__ */ i("div", { className: "po-header__right", children: [
      /* @__PURE__ */ i("button", { className: "po-burger", type: "button", "aria-expanded": "false", "aria-controls": "po-nav", "data-po-burger": !0, children: [
        /* @__PURE__ */ n("span", { className: "po-sr-only", children: a("menu") }),
        /* @__PURE__ */ n("span", { className: "po-burger__bars", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ n("nav", { id: "po-nav", className: "po-nav", "aria-label": a("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ n(z, { items: e.resolvedMenus.header, currentPath: o }) })
    ] })
  ] }) });
}
function en({ site: e, locale: o }) {
  const t = x(e, o), a = b(e.themeConfig);
  return /* @__PURE__ */ n("footer", { className: "po-footer", children: /* @__PURE__ */ i("div", { className: "po-container po-footer__inner", children: [
    /* @__PURE__ */ n(E, { socials: a.socials, size: 18 }),
    /* @__PURE__ */ n("nav", { "aria-label": t("footerNav"), "data-cms-menu": "footer", className: "po-footer__nav", children: /* @__PURE__ */ n(z, { items: e.resolvedMenus.footer }) }),
    /* @__PURE__ */ i("p", { className: "po-footer__legal", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      e.settings.title,
      " — ",
      t("rights")
    ] }),
    a.footer.credit && /* @__PURE__ */ n("p", { className: "po-footer__credit", children: a.footer.credit })
  ] }) });
}
function on({ site: e, pageTitle: o, pageDescription: t, ogImage: a, currentPath: r, currentLocale: c, children: l }) {
  const d = c || e.settings.language || "en", m = e.settings.title || "", p = o ? o.includes(m) ? o : `${o} — ${m}` : m, h = e.settings.baseUrl && r ? B(e.settings.baseUrl, r) : void 0;
  return /* @__PURE__ */ i("html", { lang: d, children: [
    /* @__PURE__ */ i("head", { children: [
      /* @__PURE__ */ n("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ n("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ n("title", { children: p }),
      t && /* @__PURE__ */ n("meta", { name: "description", content: t }),
      h && /* @__PURE__ */ n("link", { rel: "canonical", href: h }),
      /* @__PURE__ */ n("meta", { property: "og:title", content: p }),
      t && /* @__PURE__ */ n("meta", { property: "og:description", content: t }),
      a && /* @__PURE__ */ n("meta", { property: "og:image", content: a }),
      h && /* @__PURE__ */ n("meta", { property: "og:url", content: h }),
      /* @__PURE__ */ n("link", { rel: "stylesheet", href: `/${e.themeCssPath}` }),
      /* @__PURE__ */ n("script", { src: "/theme-assets/pong-orchestra-menu.js", defer: !0 }),
      /* @__PURE__ */ n("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ i("body", { className: "po", children: [
      /* @__PURE__ */ n(nn, { site: e, currentPath: r, locale: d }),
      /* @__PURE__ */ n("main", { className: "po-main", children: l }),
      /* @__PURE__ */ n(en, { site: e, locale: d }),
      /* @__PURE__ */ n("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function tn({ post: e }) {
  const o = k(e.hero, "medium");
  return /* @__PURE__ */ i("article", { className: "po-card", children: [
    /* @__PURE__ */ n("a", { href: `/${e.url}`, className: "po-card__media", tabIndex: -1, "aria-hidden": "true", children: o ? /* @__PURE__ */ n("img", { src: o, alt: "", loading: "lazy" }) : /* @__PURE__ */ n("span", { className: "po-card__placeholder" }) }),
    /* @__PURE__ */ i("div", { className: "po-card__body", children: [
      e.category && /* @__PURE__ */ n("a", { className: "po-eyebrow", href: e.category.url, children: e.category.name }),
      /* @__PURE__ */ n("h3", { className: "po-card__title", children: /* @__PURE__ */ n("a", { href: `/${e.url}`, children: e.title }) }),
      e.excerpt && /* @__PURE__ */ n("p", { className: "po-card__excerpt", children: e.excerpt }),
      e.dateLabel && /* @__PURE__ */ n("p", { className: "po-meta", children: e.dateLabel })
    ] })
  ] });
}
function S({ posts: e, site: o }) {
  return e.length === 0 ? /* @__PURE__ */ n("p", { className: "po-empty", children: x(o)("empty") }) : /* @__PURE__ */ n("div", { className: "po-grid", children: e.map((t) => /* @__PURE__ */ n(tn, { post: t }, t.id)) });
}
function T(e) {
  return e.replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/gi, " ").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const an = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, rn = /^\s*<p>\s*(?:<a\b[^>]*>\s*)?(<img\b[^>]*>)\s*(?:<\/a>\s*)?<\/p>/i;
function sn(e) {
  const o = [], t = /* @__PURE__ */ new Set();
  let a = 0, r = { html: "" };
  const c = (l) => {
    const d = rn.exec(l);
    d && (r.background = d[1], l = l.slice(d[0].length)), r.html = l.trim(), (r.heading || r.html || r.background) && o.push(r);
  };
  for (const l of e.matchAll(an)) {
    c(e.slice(a, l.index));
    let d = T(l[1]) || "section";
    for (let m = 2; t.has(d); m++) d = `${T(l[1]) || "section"}-${m}`;
    t.add(d), r = { id: d, heading: l[1], html: "" }, a = (l.index ?? 0) + l[0].length;
  }
  return c(e.slice(a)), o;
}
function ln({ site: e, posts: o, staticPage: t, archivesLink: a }) {
  var m;
  const r = b(e.themeConfig), c = x(e), l = t ? sn(t.bodyHtml) : [], d = (m = l.find((p) => p.id)) == null ? void 0 : m.id;
  return /* @__PURE__ */ i(y, { children: [
    /* @__PURE__ */ i("section", { className: "po-hero", children: [
      r.hero.image && /* @__PURE__ */ n("div", { className: "po-hero__bg", "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: r.hero.image, alt: "" }) }),
      /* @__PURE__ */ i("div", { className: "po-hero__inner", children: [
        /* @__PURE__ */ n("h1", { className: "po-hero__title", children: /* @__PURE__ */ n(O, { site: e, className: "po-hero__brand" }) }),
        r.hero.tagline && /* @__PURE__ */ n("p", { className: "po-hero__tagline", children: r.hero.tagline })
      ] }),
      /* @__PURE__ */ n("a", { className: "po-hero__down", href: d ? `#${d}` : "#po-content", "aria-label": c("scroll"), children: /* @__PURE__ */ n("span", { "aria-hidden": "true" }) })
    ] }),
    /* @__PURE__ */ n("div", { id: "po-content", children: t ? l.map((p, h) => /* @__PURE__ */ i("section", { id: p.id, className: `po-section${p.background ? " po-section--photo" : h % 2 ? " po-section--alt" : ""}`, children: [
      p.background && /* @__PURE__ */ n("div", { className: "po-bg", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: p.background } }),
      /* @__PURE__ */ i("div", { className: "po-container po-section__inner", children: [
        p.heading && /* @__PURE__ */ n("h2", { className: "po-section__title", dangerouslySetInnerHTML: { __html: p.heading } }),
        p.html && /* @__PURE__ */ n("div", { className: "po-prose", dangerouslySetInnerHTML: { __html: p.html } })
      ] })
    ] }, p.id ?? h)) : /* @__PURE__ */ n("section", { className: "po-section", children: /* @__PURE__ */ i("div", { className: "po-container po-section__inner", children: [
      /* @__PURE__ */ n("h2", { className: "po-section__title", children: c("news") }),
      /* @__PURE__ */ n(S, { posts: o, site: e }),
      a && /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: a.href, children: a.label }) })
    ] }) }) })
  ] });
}
function _({ image: e, eyebrow: o, title: t, children: a }) {
  return /* @__PURE__ */ i("header", { className: `po-band${e ? " po-band--photo" : ""}`, children: [
    e && /* @__PURE__ */ n("div", { className: "po-bg", "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: e, alt: "" }) }),
    /* @__PURE__ */ i("div", { className: "po-container po-band__inner", children: [
      o,
      /* @__PURE__ */ n("h1", { className: "po-title", children: t }),
      a
    ] })
  ] });
}
function pn({ site: e, post: o, bodyHtml: t, author: a, hero: r, primaryTerm: c, tags: l }) {
  const d = k(r, "large"), m = o.type === "post", p = new Date($(o));
  let h = "";
  try {
    h = new Intl.DateTimeFormat(e.settings.language || "en", { dateStyle: "long" }).format(p);
  } catch {
    h = p.toDateString();
  }
  return /* @__PURE__ */ i("article", { className: "po-article", children: [
    /* @__PURE__ */ n(
      _,
      {
        image: d || void 0,
        title: o.title,
        eyebrow: m && c ? /* @__PURE__ */ n("a", { className: "po-eyebrow", href: `/${U(c)}`, children: c.name }) : void 0,
        children: m && /* @__PURE__ */ i("p", { className: "po-meta", children: [
          a ? /* @__PURE__ */ i(y, { children: [
            a.url ? /* @__PURE__ */ n("a", { href: a.url, children: a.displayName }) : a.displayName,
            " · "
          ] }) : null,
          /* @__PURE__ */ n("time", { dateTime: p.toISOString(), children: h })
        ] })
      }
    ),
    /* @__PURE__ */ i("div", { className: "po-container po-container--narrow po-article__body", children: [
      (r == null ? void 0 : r.caption) && /* @__PURE__ */ n("p", { className: "po-caption", children: r.caption }),
      /* @__PURE__ */ n("div", { className: "po-prose", dangerouslySetInnerHTML: { __html: t } }),
      m && l.length > 0 && /* @__PURE__ */ n("ul", { className: "po-tags", "aria-label": x(e)("tags"), children: l.map((v) => /* @__PURE__ */ i("li", { children: [
        "#",
        v.name
      ] }, v.id)) })
    ] })
  ] });
}
function cn({ site: e, term: o, posts: t, archivesLink: a }) {
  return /* @__PURE__ */ i(y, { children: [
    /* @__PURE__ */ n(_, { title: o.name, children: o.description && /* @__PURE__ */ n("p", { className: "po-lead", children: o.description }) }),
    /* @__PURE__ */ i("div", { className: "po-container po-listing", children: [
      /* @__PURE__ */ n(S, { posts: t, site: e }),
      a && /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: a.href, children: a.label }) })
    ] })
  ] });
}
function dn({ site: e, author: o, posts: t }) {
  const a = k(o.avatar, "small");
  return /* @__PURE__ */ i(y, { children: [
    /* @__PURE__ */ i(_, { title: o.displayName, eyebrow: a ? /* @__PURE__ */ n("img", { className: "po-avatar", src: a, alt: "", width: 96, height: 96 }) : void 0, children: [
      o.title && /* @__PURE__ */ n("p", { className: "po-meta", children: o.title }),
      o.bio && /* @__PURE__ */ n("p", { className: "po-lead", children: o.bio }),
      o.socials && o.socials.length > 0 && /* @__PURE__ */ n("ul", { className: "po-author-links", children: o.socials.map((r) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("a", { href: r.url, rel: "me noopener", children: r.network }) }, r.network)) })
    ] }),
    /* @__PURE__ */ n("div", { className: "po-container po-listing", children: /* @__PURE__ */ n(S, { posts: t, site: e }) })
  ] });
}
function mn({ site: e, message: o }) {
  const t = x(e);
  return /* @__PURE__ */ i(_, { title: t("notFoundTitle"), children: [
    /* @__PURE__ */ n("p", { className: "po-lead", children: o ?? t("notFoundText") }),
    /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: e.homePath ?? "/index.html", children: t("backHome") }) })
  ] });
}
function hn({ config: e, save: o }) {
  const { t } = V("theme-pong-orchestra"), [a, r] = w(() => b(e)), [c, l] = w(!1), [d, m] = w(!1);
  Y(() => r(b(e)), [e]);
  async function p(s) {
    l(!0);
    try {
      await o(s), D.success(t("settings.saved"));
    } finally {
      l(!1);
    }
  }
  async function h(s) {
    s.preventDefault(), await p(a);
  }
  async function v(s) {
    var A;
    const g = (A = s.target.files) == null ? void 0 : A[0];
    if (s.target.value = "", !g) return;
    l(!0);
    try {
      await q({ themeId: "pong-orchestra", file: g, width: 800, height: 400, fit: "contain" });
    } finally {
      l(!1);
    }
    const L = { ...a, logoEnabled: !0, logoUpdatedAt: Date.now() };
    r(L), await p(L);
  }
  async function F() {
    l(!0);
    try {
      await G("pong-orchestra");
    } finally {
      l(!1);
    }
    const s = { ...a, logoEnabled: !1, logoUpdatedAt: Date.now() };
    r(s), await p(s);
  }
  const f = (s, g) => r({ ...a, [s]: { ...a[s], ...g } });
  return /* @__PURE__ */ i("form", { onSubmit: h, "data-form-type": "other", className: "max-w-2xl space-y-6", children: [
    /* @__PURE__ */ n("h1", { className: "text-xl font-semibold", children: t("settings.title") }),
    /* @__PURE__ */ n("p", { className: "text-sm text-surface-500", children: t("settings.regenerateHint") }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.logo") }),
      /* @__PURE__ */ n("p", { className: "text-sm text-surface-500", children: a.logoEnabled ? t("settings.logoOn") : t("settings.logoOff") }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i("label", { className: "btn-secondary", children: [
          /* @__PURE__ */ n("span", { children: t("settings.logoUpload") }),
          /* @__PURE__ */ n("input", { type: "file", accept: "image/png,image/webp,image/jpeg,image/svg+xml", onChange: v, style: { display: "none" }, disabled: c })
        ] }),
        /* @__PURE__ */ n("button", { type: "button", className: "btn-ghost", onClick: F, disabled: c || !a.logoEnabled, children: /* @__PURE__ */ n("span", { children: t("settings.logoRemove") }) })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.hero") }),
      /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: t("settings.heroImage") }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.hero.image, onChange: (s) => f("hero", { image: s.target.value }), placeholder: "https://… / /media/…" }),
          /* @__PURE__ */ n("button", { type: "button", className: "btn-secondary", onClick: () => m(!0), children: /* @__PURE__ */ n("span", { children: t("settings.pick") }) })
        ] })
      ] }),
      a.hero.image && /* @__PURE__ */ n("img", { src: a.hero.image, alt: "", style: { maxWidth: 320, maxHeight: 180, objectFit: "cover", borderRadius: 6 } }),
      /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: t("settings.tagline") }),
        /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.hero.tagline, onChange: (s) => f("hero", { tagline: s.target.value }) })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.socials") }),
      M.map((s) => /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: N[s] }),
        /* @__PURE__ */ n("input", { className: "input w-full", type: "url", value: a.socials[s], onChange: (g) => f("socials", { [s]: g.target.value }), placeholder: "https://…" })
      ] }, s))
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.colors") }),
      ["accent", "background", "text"].map((s) => /* @__PURE__ */ i("label", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ n("span", { className: "text-sm", children: t(`settings.${s}`) }),
        /* @__PURE__ */ n("input", { type: "color", value: a.colors[s], onChange: (g) => f("colors", { [s]: g.target.value }) })
      ] }, s))
    ] }),
    /* @__PURE__ */ n("section", { className: "card p-4 space-y-3", children: /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ n("span", { className: "label", children: t("settings.credit") }),
      /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.footer.credit, onChange: (s) => f("footer", { credit: s.target.value }) })
    ] }) }),
    /* @__PURE__ */ n("button", { type: "submit", className: "btn-primary", disabled: c, children: /* @__PURE__ */ n("span", { children: t("settings.save") }) }),
    d && /* @__PURE__ */ n(
      I,
      {
        onClose: () => m(!1),
        onPick: (s) => {
          f("hero", { image: j(s, "large") }), m(!1);
        }
      }
    )
  ] });
}
const gn = {
  en: {
    public: { menu: "Menu", mainNav: "Main", footerNav: "Footer", tags: "Tags", empty: "Nothing published yet.", notFoundTitle: "Page not found", notFoundText: "The page you are looking for does not exist or has moved.", backHome: "Back to the home page", by: "By", news: "News", scroll: "Scroll down", rights: "All rights reserved" },
    settings: { navLabel: "PONG Orchestra", title: "PONG Orchestra settings", accent: "Accent color", background: "Background", text: "Text color", save: "Save", saved: "Saved. Run Regenerate → All HTML to apply logo, photo and social links to every page.", regenerateHint: "Colors apply right away. Logo, hero photo, social links and footer are written into the pages: run Regenerate → All HTML after saving.", logo: "Logo", logoOn: "The uploaded logo replaces the site title in the header and the hero.", logoOff: "No logo: the site title is shown as a wordmark.", logoUpload: "Upload a logo", logoRemove: "Remove", hero: "Home hero", heroImage: "Background photo", pick: "Media library", tagline: "Tagline under the logo", socials: "Social networks", colors: "Colors", credit: "Extra footer line" }
  },
  fr: {
    public: { menu: "Menu", mainNav: "Principal", footerNav: "Pied de page", tags: "Étiquettes", empty: "Rien de publié pour le moment.", notFoundTitle: "Page introuvable", notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil", by: "Par", news: "Actualités", scroll: "Défiler vers le bas", rights: "Tous droits réservés" },
    settings: { navLabel: "PONG Orchestra", title: "Réglages PONG Orchestra", accent: "Couleur d'accent", background: "Fond", text: "Couleur du texte", save: "Enregistrer", saved: "Enregistré. Lancez Régénérer → Tout le HTML pour appliquer logo, photo et réseaux à toutes les pages.", regenerateHint: "Les couleurs s'appliquent immédiatement. Logo, photo d'accueil, réseaux sociaux et pied de page sont écrits dans les pages : lancez Régénérer → Tout le HTML après avoir enregistré.", logo: "Logo", logoOn: "Le logo envoyé remplace le titre du site dans l'en-tête et l'accueil.", logoOff: "Pas de logo : le titre du site est affiché en texte.", logoUpload: "Envoyer un logo", logoRemove: "Retirer", hero: "Accueil plein écran", heroImage: "Photo de fond", pick: "Médiathèque", tagline: "Accroche sous le logo", socials: "Réseaux sociaux", colors: "Couleurs", credit: "Ligne supplémentaire du pied de page" }
  }
}, vn = {
  id: "pong-orchestra",
  name: "PONG Orchestra",
  version: "1.0.2",
  description: "Thème sombre type fanfare rock, inspiré de pongorchestra.fr",
  readme: K,
  scssEntry: "theme.css",
  cssText: C,
  // Uploaded as theme-assets/pong-orchestra-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: J,
  // Image variants generated for every upload while this theme is active.
  imageFormats: {
    inputFormats: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
    outputFormat: "webp",
    quality: 80,
    defaultFormat: "medium",
    formats: {
      small: { width: 480, height: 320, fit: "cover" },
      medium: { width: 960, height: 640, fit: "cover" },
      large: { width: 1600, height: 900, fit: "cover" }
    }
  },
  templates: {
    base: on,
    home: ln,
    single: pn,
    category: cn,
    author: dn,
    notFound: mn
  },
  // /theme-settings page; the saved config is baked into the uploaded CSS.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: u, component: hn, schema: W },
  compileCss: (e) => Z(C, e),
  // Translations, namespace "theme-pong-orchestra" (admin UI + public labels).
  i18n: gn
};
export {
  vn as default
};
