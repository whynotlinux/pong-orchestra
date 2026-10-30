import { jsx as n, jsxs as i, Fragment as w } from "react/jsx-runtime";
import { i18n as R, pickPublicLocale as B, logoPath as F, canonicalUrl as U, pickFormat as L, postSortMillis as I, buildTermUrl as q, MediaPicker as D, pickMediaUrl as G, uploadThemeLogo as V, removeThemeLogo as Y, toast as K } from "@agent-cms/runtime";
import { useState as N, useEffect as X } from "react";
import { useTranslation as W } from "react-i18next";
const T = `@import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600&family=Roboto:wght@100;300;400;500&display=swap");

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

.po-prose .cms-embed {
  background: #000;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}


/* Spotify player: tall player with the track list. */
.po-prose .cms-embed-spotify {
  height: 480px;
  margin: 2rem auto 0;
  border-radius: 12px;
  overflow: hidden;
  background: transparent;
}

@media (max-width: 640px) {
  .po-prose .cms-embed-spotify {
    height: 420px;
  }
}

/* ---------- Video slider ---------- */
.po-slider {
  --po-slide: calc((100% - 40px) / 3);
  position: relative;
  margin: 0 auto;
  padding: 0 56px 48px;
  max-width: 1100px;
}

.po-section__inner:has(.po-slider) {
  max-width: 1180px;
}

.po-slider__viewport {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.po-slider.is-ready .po-slider__viewport {
  overflow: hidden;
  touch-action: pan-y;
}

.po-slider__track {
  display: flex;
  gap: 20px;
  will-change: transform;
}

.po-slider__slide {
  flex: 0 0 var(--po-slide);
  scroll-snap-align: center;
  transition: opacity 0.4s, transform 0.4s;
}

.po-slider.is-ready .po-slider__slide {
  opacity: 0.45;
  transform: scale(0.9);
}

.po-slider.is-ready .po-slider__slide.is-active {
  opacity: 1;
  transform: none;
}

.po-video {
  position: relative;
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.55);
  -webkit-user-drag: none;
}

.po .po-video img {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  object-fit: cover;
  transition: transform 0.5s, filter 0.3s;
  filter: grayscale(0.3);
  pointer-events: none;
}

.po-video:hover img {
  transform: scale(1.05);
  filter: none;
}

.po-video__play {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 68px;
  margin: -34px 0 0 -34px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: color-mix(in srgb, var(--po-accent) 85%, transparent);
  transition: transform 0.25s, background 0.25s;
}

.po-video__play::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -11px 0 0 -6px;
  border-style: solid;
  border-width: 11px 0 11px 18px;
  border-color: transparent transparent transparent #fff;
}

.po-video:hover .po-video__play {
  transform: scale(1.1);
  background: var(--po-accent);
}

.po-slider__arrow {
  display: none;
  position: absolute;
  top: calc(50% - 24px);
  width: 44px;
  height: 44px;
  margin-top: -22px;
  padding: 0;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
}

.po-slider.is-ready .po-slider__arrow {
  display: block;
}

.po-slider__arrow::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
}

.po-slider__arrow--prev {
  left: 0;
}

.po-slider__arrow--prev::before {
  margin: -5px 0 0 -3px;
  transform: rotate(-135deg);
}

.po-slider__arrow--next {
  right: 0;
}

.po-slider__arrow--next::before {
  margin: -5px 0 0 -7px;
  transform: rotate(45deg);
}

.po-slider__arrow:hover {
  background: var(--po-accent);
  border-color: var(--po-accent);
}

.po-slider__dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 8px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.po-slider__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.po-slider__dot[aria-current="true"] {
  background: var(--po-accent);
  transform: scale(1.25);
}

@media (max-width: 900px) {
  .po-slider {
    --po-slide: 62%;
  }
}

@media (max-width: 560px) {
  .po-slider {
    --po-slide: 84%;
    padding: 0 0 72px;
  }

  .po-slider__arrow {
    top: auto;
    bottom: 0;
    margin: 0;
  }

  .po-slider__arrow--prev {
    left: calc(50% - 110px);
  }

  .po-slider__arrow--next {
    right: calc(50% - 110px);
  }

  .po-slider__dots {
    bottom: 17px;
  }

  .po-video__play {
    width: 56px;
    height: 56px;
    margin: -28px 0 0 -28px;
  }
}

/* ---------- Video lightbox ---------- */
.po-no-scroll {
  overflow: hidden;
}

.po-lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 64px 16px;
  background: rgba(0, 0, 0, 0.92);
  animation: po-fade 0.25s ease both;
}

.po-lightbox__frame {
  width: min(1100px, 100%, calc((100vh - 128px) * 16 / 9));
  aspect-ratio: 16 / 9;
  background: #000;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.8);
}

.po-lightbox__frame iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}

.po-lightbox__close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: none;
  color: #fff;
  cursor: pointer;
}

.po-lightbox__close::before,
.po-lightbox__close::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 10px;
  right: 10px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
}

.po-lightbox__close::after {
  transform: rotate(-45deg);
}

.po-lightbox__close:hover {
  color: var(--po-accent);
}

@keyframes po-fade {
  from {
    opacity: 0;
  }
}

/* Press review: a heading followed by a list becomes a column of cards. */
.po-section .po-prose h3 + ul {
  display: grid;
  gap: 14px;
  max-width: 760px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.po-section .po-prose h3 + ul li {
  padding: 18px 22px;
  background: color-mix(in srgb, var(--po-bg) 80%, #fff 6%);
  border-left: 3px solid var(--po-accent);
  font-size: 0.97rem;
  line-height: 1.6;
}

.po-section .po-prose h3 + ul li strong:first-child {
  font-family: var(--po-display);
  font-weight: 500;
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--po-accent);
}

.po-section .po-prose h3 + ul li a {
  white-space: nowrap;
}

.po-section .po-prose blockquote + h3 {
  margin-top: 3.5em;
  font-size: 1rem;
  letter-spacing: 0.3em;
  color: var(--po-muted);
}
`, Z = `// PONG Orchestra — runtime menu loader, uploaded as theme-assets/pong-orchestra-menu.js.
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
`, J = `# PONG Orchestra

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
function v(e, o) {
  const t = R.getFixedT(B(o || e.settings.language || "en"), "theme-pong-orchestra");
  return (a) => t(`public.${a}`);
}
const j = ["instagram", "facebook", "spotify", "deezer", "youtube", "apple"], b = {
  colors: { accent: "#d7141a", background: "#050505", text: "#f1f1f1" },
  hero: { image: "", tagline: "Brass Band" },
  logoEnabled: !1,
  logoUpdatedAt: 0,
  socials: { instagram: "", facebook: "", spotify: "", deezer: "", youtube: "", apple: "" },
  footer: { credit: "" }
};
function x(e) {
  const o = e ?? {};
  return {
    colors: { ...b.colors, ...o.colors ?? {} },
    hero: { ...b.hero, ...o.hero ?? {} },
    logoEnabled: o.logoEnabled === !0,
    logoUpdatedAt: typeof o.logoUpdatedAt == "number" ? o.logoUpdatedAt : 0,
    socials: { ...b.socials, ...o.socials ?? {} },
    footer: { ...b.footer, ...o.footer ?? {} }
  };
}
const Q = {
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
function nn(e, o) {
  const t = { ...b.colors, ...(o == null ? void 0 : o.colors) ?? {} };
  if (Object.keys(t).every((p) => t[p] === b.colors[p])) return e;
  const r = (p) => /^#[0-9a-f]{3,8}$/i.test(p) ? p : "inherit";
  return `${e}
:root{--po-accent:${r(t.accent)};--po-bg:${r(t.background)};--po-text:${r(t.text)}}
`;
}
const en = {
  instagram: "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.6a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
  facebook: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  spotify: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.6 14.4a.6.6 0 0 1-.9.2c-2.4-1.4-5.3-1.8-8.8-1a.6.6 0 1 1-.3-1.2c3.8-.9 7-.5 9.7 1.1.3.2.4.6.3.9zm1.2-2.7a.8.8 0 0 1-1.1.3c-2.7-1.7-6.9-2.2-10.1-1.2a.8.8 0 1 1-.5-1.5c3.7-1.1 8.3-.6 11.4 1.3.4.2.5.7.3 1.1zm.1-2.8C14.7 9 9.4 8.8 6.3 9.7a1 1 0 1 1-.6-1.8c3.5-1.1 9.4-.9 13.1 1.3a1 1 0 0 1-.9 1.7z",
  deezer: "M18.8 5.6h4.2V8h-4.2zM18.8 9.1h4.2v2.4h-4.2zM12.9 9.1h4.2v2.4h-4.2zM18.8 12.6h4.2V15h-4.2zM12.9 12.6h4.2V15h-4.2zM7 12.6h4.2V15H7zM18.8 16.1h4.2v2.4h-4.2zM12.9 16.1h4.2v2.4h-4.2zM7 16.1h4.2v2.4H7zM1 16.1h4.2v2.4H1z",
  youtube: "M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2C.5 9.1.5 12 .5 12s0 2.9.5 4.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.7 15.5v-7l6 3.5-6 3.5z",
  apple: "M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.8-2c-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.8 2.6 3.1 2.6s1.7-.8 3.2-.8 1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4a10 10 0 0 0 1.4-2.8 4.3 4.3 0 0 1-2.1-4.3zM13.9 5.1A4.4 4.4 0 0 0 15 1.9a4.5 4.5 0 0 0-2.9 1.5 4.2 4.2 0 0 0-1.1 3.1c1.1.1 2.2-.6 2.9-1.4z"
}, z = {
  instagram: "Instagram",
  facebook: "Facebook",
  spotify: "Spotify",
  deezer: "Deezer",
  youtube: "YouTube",
  apple: "Apple Music"
};
function on({ network: e, size: o = 16 }) {
  return /* @__PURE__ */ n("svg", { viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n("path", { fill: "currentColor", d: en[e] }) });
}
function P({ socials: e, size: o, className: t }) {
  const a = j.filter((r) => e[r]);
  return a.length === 0 ? null : /* @__PURE__ */ n("ul", { className: `po-socials ${t ?? ""}`, children: a.map((r) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("a", { href: e[r], rel: "noopener", target: "_blank", "aria-label": z[r], title: z[r], children: /* @__PURE__ */ n(on, { network: r, size: o }) }) }, r)) });
}
function O({ site: e, className: o }) {
  const { logoEnabled: t, logoUpdatedAt: a } = x(e.themeConfig), r = e.settings.title || "";
  return t ? /* @__PURE__ */ n("img", { className: `${o} ${o}--img`, src: `/${F("pong-orchestra")}?v=${a}`, alt: r }) : /* @__PURE__ */ n("span", { className: `${o} ${o}--text`, children: r });
}
function A({ items: e, currentPath: o }) {
  return /* @__PURE__ */ n("ul", { children: e.map((t) => {
    const a = o !== void 0 && t.href === `/${o}`;
    return /* @__PURE__ */ i("li", { children: [
      /* @__PURE__ */ n("a", { href: t.href, "aria-current": a ? "page" : void 0, children: t.label }),
      t.children && t.children.length > 0 && /* @__PURE__ */ n(A, { items: t.children, currentPath: o })
    ] }, t.id);
  }) });
}
function tn({ site: e, currentPath: o, locale: t }) {
  const a = v(e, t), r = x(e.themeConfig);
  return /* @__PURE__ */ n("header", { className: "po-header", children: /* @__PURE__ */ i("div", { className: "po-header__inner", children: [
    /* @__PURE__ */ n("div", { className: "po-header__left", children: /* @__PURE__ */ n(P, { socials: r.socials, size: 15 }) }),
    /* @__PURE__ */ n("a", { className: "po-header__brand", href: e.homePath ?? "/index.html", children: /* @__PURE__ */ n(O, { site: e, className: "po-brand" }) }),
    /* @__PURE__ */ i("div", { className: "po-header__right", children: [
      /* @__PURE__ */ i("button", { className: "po-burger", type: "button", "aria-expanded": "false", "aria-controls": "po-nav", "data-po-burger": !0, children: [
        /* @__PURE__ */ n("span", { className: "po-sr-only", children: a("menu") }),
        /* @__PURE__ */ n("span", { className: "po-burger__bars", "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ n("nav", { id: "po-nav", className: "po-nav", "aria-label": a("mainNav"), "data-cms-menu": "header", children: /* @__PURE__ */ n(A, { items: e.resolvedMenus.header, currentPath: o }) })
    ] })
  ] }) });
}
function an({ site: e, locale: o }) {
  const t = v(e, o), a = x(e.themeConfig);
  return /* @__PURE__ */ n("footer", { className: "po-footer", children: /* @__PURE__ */ i("div", { className: "po-container po-footer__inner", children: [
    /* @__PURE__ */ n(P, { socials: a.socials, size: 18 }),
    /* @__PURE__ */ n("nav", { "aria-label": t("footerNav"), "data-cms-menu": "footer", className: "po-footer__nav", children: /* @__PURE__ */ n(A, { items: e.resolvedMenus.footer }) }),
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
function rn({ site: e, pageTitle: o, pageDescription: t, ogImage: a, currentPath: r, currentLocale: p, children: s }) {
  const c = p || e.settings.language || "en", m = e.settings.title || "", h = o ? o.includes(m) ? o : `${o} — ${m}` : m, d = e.settings.baseUrl && r ? U(e.settings.baseUrl, r) : void 0;
  return /* @__PURE__ */ i("html", { lang: c, children: [
    /* @__PURE__ */ i("head", { children: [
      /* @__PURE__ */ n("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ n("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ n("title", { children: h }),
      t && /* @__PURE__ */ n("meta", { name: "description", content: t }),
      d && /* @__PURE__ */ n("link", { rel: "canonical", href: d }),
      /* @__PURE__ */ n("meta", { property: "og:title", content: h }),
      t && /* @__PURE__ */ n("meta", { property: "og:description", content: t }),
      a && /* @__PURE__ */ n("meta", { property: "og:image", content: a }),
      d && /* @__PURE__ */ n("meta", { property: "og:url", content: d }),
      /* @__PURE__ */ n("link", { rel: "stylesheet", href: `/${e.themeCssPath}` }),
      /* @__PURE__ */ n("script", { src: "/theme-assets/pong-orchestra-menu.js", defer: !0 }),
      /* @__PURE__ */ n("meta", { name: "x-cms-head-extra" })
    ] }),
    /* @__PURE__ */ i("body", { className: "po", children: [
      /* @__PURE__ */ n(tn, { site: e, currentPath: r, locale: c }),
      /* @__PURE__ */ n("main", { className: "po-main", children: s }),
      /* @__PURE__ */ n(an, { site: e, locale: c }),
      /* @__PURE__ */ n("script", { type: "application/x-cms-body-end" })
    ] })
  ] });
}
function sn({ post: e }) {
  const o = L(e.hero, "medium");
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
function E({ posts: e, site: o }) {
  return e.length === 0 ? /* @__PURE__ */ n("p", { className: "po-empty", children: v(o)("empty") }) : /* @__PURE__ */ n("div", { className: "po-grid", children: e.map((t) => /* @__PURE__ */ n(sn, { post: t }, t.id)) });
}
function M(e) {
  return e.replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/gi, " ").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
const ln = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, pn = /^\s*<p>\s*(?:<a\b[^>]*>\s*)?(<img\b[^>]*>)\s*(?:<\/a>\s*)?<\/p>/i;
function cn(e) {
  const o = [], t = /* @__PURE__ */ new Set();
  let a = 0, r = { html: "" };
  const p = (s) => {
    const c = pn.exec(s);
    c && (r.background = c[1], s = s.slice(c[0].length)), r.html = s.trim(), (r.heading || r.html || r.background) && o.push(r);
  };
  for (const s of e.matchAll(ln)) {
    p(e.slice(a, s.index));
    let c = M(s[1]) || "section";
    for (let m = 2; t.has(c); m++) c = `${M(s[1]) || "section"}-${m}`;
    t.add(c), r = { id: c, heading: s[1], html: "" }, a = (s.index ?? 0) + s[0].length;
  }
  return p(e.slice(a)), o;
}
const $ = /<div class="cms-embed cms-embed-youtube">\s*<iframe\b[^>]*\bsrc="https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{11})[^"]*"[^>]*><\/iframe>\s*<\/div>/g, _ = (e) => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function H(e, o) {
  const t = [...e.matchAll($)].map((s) => s[1]);
  if (t.length < 2) return e;
  const a = t.map(
    (s, c) => `<div class="po-slider__slide"><a class="po-video" href="https://www.youtube.com/watch?v=${s}" data-po-video="${s}" target="_blank" rel="noopener" aria-label="${_(o.play)} ${c + 1}/${t.length}"><img src="https://i.ytimg.com/vi/${s}/hqdefault.jpg" alt="" loading="lazy" width="480" height="360" /><span class="po-video__play" aria-hidden="true"></span></a></div>`
  ).join(""), r = `<div class="po-slider" data-po-slider data-label-close="${_(o.close)}"><div class="po-slider__viewport"><div class="po-slider__track">${a}</div></div><button type="button" class="po-slider__arrow po-slider__arrow--prev" data-po-prev aria-label="${_(o.prev)}"></button><button type="button" class="po-slider__arrow po-slider__arrow--next" data-po-next aria-label="${_(o.next)}"></button><div class="po-slider__dots" data-po-dots></div></div>`;
  let p = !0;
  return e.replace($, () => p ? (p = !1, r) : "");
}
function dn({ site: e, posts: o, staticPage: t, archivesLink: a }) {
  var h;
  const r = x(e.themeConfig), p = v(e), s = { prev: p("prev"), next: p("next"), play: p("play"), close: p("close") }, c = t ? cn(H(t.bodyHtml, s)) : [], m = (h = c.find((d) => d.id)) == null ? void 0 : h.id;
  return /* @__PURE__ */ i(w, { children: [
    /* @__PURE__ */ i("section", { className: "po-hero", children: [
      r.hero.image && /* @__PURE__ */ n("div", { className: "po-hero__bg", "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: r.hero.image, alt: "" }) }),
      /* @__PURE__ */ i("div", { className: "po-hero__inner", children: [
        /* @__PURE__ */ n("h1", { className: "po-hero__title", children: /* @__PURE__ */ n(O, { site: e, className: "po-hero__brand" }) }),
        r.hero.tagline && /* @__PURE__ */ n("p", { className: "po-hero__tagline", children: r.hero.tagline })
      ] }),
      /* @__PURE__ */ n("a", { className: "po-hero__down", href: m ? `#${m}` : "#po-content", "aria-label": p("scroll"), children: /* @__PURE__ */ n("span", { "aria-hidden": "true" }) })
    ] }),
    /* @__PURE__ */ n("div", { id: "po-content", children: t ? c.map((d, u) => /* @__PURE__ */ i("section", { id: d.id, className: `po-section${d.background ? " po-section--photo" : u % 2 ? " po-section--alt" : ""}`, children: [
      d.background && /* @__PURE__ */ n("div", { className: "po-bg", "aria-hidden": "true", dangerouslySetInnerHTML: { __html: d.background } }),
      /* @__PURE__ */ i("div", { className: "po-container po-section__inner", children: [
        d.heading && /* @__PURE__ */ n("h2", { className: "po-section__title", dangerouslySetInnerHTML: { __html: d.heading } }),
        d.html && /* @__PURE__ */ n("div", { className: "po-prose", dangerouslySetInnerHTML: { __html: d.html } })
      ] })
    ] }, d.id ?? u)) : /* @__PURE__ */ n("section", { className: "po-section", children: /* @__PURE__ */ i("div", { className: "po-container po-section__inner", children: [
      /* @__PURE__ */ n("h2", { className: "po-section__title", children: p("news") }),
      /* @__PURE__ */ n(E, { posts: o, site: e }),
      a && /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: a.href, children: a.label }) })
    ] }) }) })
  ] });
}
function k({ image: e, eyebrow: o, title: t, children: a }) {
  return /* @__PURE__ */ i("header", { className: `po-band${e ? " po-band--photo" : ""}`, children: [
    e && /* @__PURE__ */ n("div", { className: "po-bg", "aria-hidden": "true", children: /* @__PURE__ */ n("img", { src: e, alt: "" }) }),
    /* @__PURE__ */ i("div", { className: "po-container po-band__inner", children: [
      o,
      /* @__PURE__ */ n("h1", { className: "po-title", children: t }),
      a
    ] })
  ] });
}
function mn({ site: e, post: o, bodyHtml: t, author: a, hero: r, primaryTerm: p, tags: s }) {
  const c = v(e), m = H(t, { prev: c("prev"), next: c("next"), play: c("play"), close: c("close") }), h = L(r, "large"), d = o.type === "post", u = new Date(I(o));
  let y = "";
  try {
    y = new Intl.DateTimeFormat(e.settings.language || "en", { dateStyle: "long" }).format(u);
  } catch {
    y = u.toDateString();
  }
  return /* @__PURE__ */ i("article", { className: "po-article", children: [
    /* @__PURE__ */ n(
      k,
      {
        image: h || void 0,
        title: o.title,
        eyebrow: d && p ? /* @__PURE__ */ n("a", { className: "po-eyebrow", href: `/${q(p)}`, children: p.name }) : void 0,
        children: d && /* @__PURE__ */ i("p", { className: "po-meta", children: [
          a ? /* @__PURE__ */ i(w, { children: [
            a.url ? /* @__PURE__ */ n("a", { href: a.url, children: a.displayName }) : a.displayName,
            " · "
          ] }) : null,
          /* @__PURE__ */ n("time", { dateTime: u.toISOString(), children: y })
        ] })
      }
    ),
    /* @__PURE__ */ i("div", { className: "po-container po-container--narrow po-article__body", children: [
      (r == null ? void 0 : r.caption) && /* @__PURE__ */ n("p", { className: "po-caption", children: r.caption }),
      /* @__PURE__ */ n("div", { className: "po-prose", dangerouslySetInnerHTML: { __html: m } }),
      d && s.length > 0 && /* @__PURE__ */ n("ul", { className: "po-tags", "aria-label": c("tags"), children: s.map((g) => /* @__PURE__ */ i("li", { children: [
        "#",
        g.name
      ] }, g.id)) })
    ] })
  ] });
}
function hn({ site: e, term: o, posts: t, archivesLink: a }) {
  return /* @__PURE__ */ i(w, { children: [
    /* @__PURE__ */ n(k, { title: o.name, children: o.description && /* @__PURE__ */ n("p", { className: "po-lead", children: o.description }) }),
    /* @__PURE__ */ i("div", { className: "po-container po-listing", children: [
      /* @__PURE__ */ n(E, { posts: t, site: e }),
      a && /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: a.href, children: a.label }) })
    ] })
  ] });
}
function gn({ site: e, author: o, posts: t }) {
  const a = L(o.avatar, "small");
  return /* @__PURE__ */ i(w, { children: [
    /* @__PURE__ */ i(k, { title: o.displayName, eyebrow: a ? /* @__PURE__ */ n("img", { className: "po-avatar", src: a, alt: "", width: 96, height: 96 }) : void 0, children: [
      o.title && /* @__PURE__ */ n("p", { className: "po-meta", children: o.title }),
      o.bio && /* @__PURE__ */ n("p", { className: "po-lead", children: o.bio }),
      o.socials && o.socials.length > 0 && /* @__PURE__ */ n("ul", { className: "po-author-links", children: o.socials.map((r) => /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n("a", { href: r.url, rel: "me noopener", children: r.network }) }, r.network)) })
    ] }),
    /* @__PURE__ */ n("div", { className: "po-container po-listing", children: /* @__PURE__ */ n(E, { posts: t, site: e }) })
  ] });
}
function un({ site: e, message: o }) {
  const t = v(e);
  return /* @__PURE__ */ i(k, { title: t("notFoundTitle"), children: [
    /* @__PURE__ */ n("p", { className: "po-lead", children: o ?? t("notFoundText") }),
    /* @__PURE__ */ n("p", { className: "po-more", children: /* @__PURE__ */ n("a", { className: "po-button", href: e.homePath ?? "/index.html", children: t("backHome") }) })
  ] });
}
function fn({ config: e, save: o }) {
  const { t } = W("theme-pong-orchestra"), [a, r] = N(() => x(e)), [p, s] = N(!1), [c, m] = N(!1);
  X(() => r(x(e)), [e]);
  async function h(l) {
    s(!0);
    try {
      await o(l), K.success(t("settings.saved"));
    } finally {
      s(!1);
    }
  }
  async function d(l) {
    l.preventDefault(), await h(a);
  }
  async function u(l) {
    var C;
    const f = (C = l.target.files) == null ? void 0 : C[0];
    if (l.target.value = "", !f) return;
    s(!0);
    try {
      await V({ themeId: "pong-orchestra", file: f, width: 800, height: 400, fit: "contain" });
    } finally {
      s(!1);
    }
    const S = { ...a, logoEnabled: !0, logoUpdatedAt: Date.now() };
    r(S), await h(S);
  }
  async function y() {
    s(!0);
    try {
      await Y("pong-orchestra");
    } finally {
      s(!1);
    }
    const l = { ...a, logoEnabled: !1, logoUpdatedAt: Date.now() };
    r(l), await h(l);
  }
  const g = (l, f) => r({ ...a, [l]: { ...a[l], ...f } });
  return /* @__PURE__ */ i("form", { onSubmit: d, "data-form-type": "other", className: "max-w-2xl space-y-6", children: [
    /* @__PURE__ */ n("h1", { className: "text-xl font-semibold", children: t("settings.title") }),
    /* @__PURE__ */ n("p", { className: "text-sm text-surface-500", children: t("settings.regenerateHint") }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.logo") }),
      /* @__PURE__ */ n("p", { className: "text-sm text-surface-500", children: a.logoEnabled ? t("settings.logoOn") : t("settings.logoOff") }),
      /* @__PURE__ */ i("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ i("label", { className: "btn-secondary", children: [
          /* @__PURE__ */ n("span", { children: t("settings.logoUpload") }),
          /* @__PURE__ */ n("input", { type: "file", accept: "image/png,image/webp,image/jpeg,image/svg+xml", onChange: u, style: { display: "none" }, disabled: p })
        ] }),
        /* @__PURE__ */ n("button", { type: "button", className: "btn-ghost", onClick: y, disabled: p || !a.logoEnabled, children: /* @__PURE__ */ n("span", { children: t("settings.logoRemove") }) })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.hero") }),
      /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: t("settings.heroImage") }),
        /* @__PURE__ */ i("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.hero.image, onChange: (l) => g("hero", { image: l.target.value }), placeholder: "https://… / /media/…" }),
          /* @__PURE__ */ n("button", { type: "button", className: "btn-secondary", onClick: () => m(!0), children: /* @__PURE__ */ n("span", { children: t("settings.pick") }) })
        ] })
      ] }),
      a.hero.image && /* @__PURE__ */ n("img", { src: a.hero.image, alt: "", style: { maxWidth: 320, maxHeight: 180, objectFit: "cover", borderRadius: 6 } }),
      /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: t("settings.tagline") }),
        /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.hero.tagline, onChange: (l) => g("hero", { tagline: l.target.value }) })
      ] })
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.socials") }),
      j.map((l) => /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
        /* @__PURE__ */ n("span", { className: "label", children: z[l] }),
        /* @__PURE__ */ n("input", { className: "input w-full", type: "url", value: a.socials[l], onChange: (f) => g("socials", { [l]: f.target.value }), placeholder: "https://…" })
      ] }, l))
    ] }),
    /* @__PURE__ */ i("section", { className: "card p-4 space-y-3", children: [
      /* @__PURE__ */ n("h2", { className: "text-lg font-semibold", children: t("settings.colors") }),
      ["accent", "background", "text"].map((l) => /* @__PURE__ */ i("label", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ n("span", { className: "text-sm", children: t(`settings.${l}`) }),
        /* @__PURE__ */ n("input", { type: "color", value: a.colors[l], onChange: (f) => g("colors", { [l]: f.target.value }) })
      ] }, l))
    ] }),
    /* @__PURE__ */ n("section", { className: "card p-4 space-y-3", children: /* @__PURE__ */ i("label", { className: "block space-y-1", children: [
      /* @__PURE__ */ n("span", { className: "label", children: t("settings.credit") }),
      /* @__PURE__ */ n("input", { className: "input w-full", type: "text", value: a.footer.credit, onChange: (l) => g("footer", { credit: l.target.value }) })
    ] }) }),
    /* @__PURE__ */ n("button", { type: "submit", className: "btn-primary", disabled: p, children: /* @__PURE__ */ n("span", { children: t("settings.save") }) }),
    c && /* @__PURE__ */ n(
      D,
      {
        onClose: () => m(!1),
        onPick: (l) => {
          g("hero", { image: G(l, "large") }), m(!1);
        }
      }
    )
  ] });
}
const bn = {
  en: {
    public: { menu: "Menu", mainNav: "Main", footerNav: "Footer", tags: "Tags", empty: "Nothing published yet.", notFoundTitle: "Page not found", notFoundText: "The page you are looking for does not exist or has moved.", backHome: "Back to the home page", by: "By", news: "News", scroll: "Scroll down", rights: "All rights reserved", prev: "Previous", next: "Next", play: "Play video", close: "Close" },
    settings: { navLabel: "PONG Orchestra", title: "PONG Orchestra settings", accent: "Accent color", background: "Background", text: "Text color", save: "Save", saved: "Saved. Run Regenerate → All HTML to apply logo, photo and social links to every page.", regenerateHint: "Colors apply right away. Logo, hero photo, social links and footer are written into the pages: run Regenerate → All HTML after saving.", logo: "Logo", logoOn: "The uploaded logo replaces the site title in the header and the hero.", logoOff: "No logo: the site title is shown as a wordmark.", logoUpload: "Upload a logo", logoRemove: "Remove", hero: "Home hero", heroImage: "Background photo", pick: "Media library", tagline: "Tagline under the logo", socials: "Social networks", colors: "Colors", credit: "Extra footer line" }
  },
  fr: {
    public: { menu: "Menu", mainNav: "Principal", footerNav: "Pied de page", tags: "Étiquettes", empty: "Rien de publié pour le moment.", notFoundTitle: "Page introuvable", notFoundText: "La page que vous cherchez n'existe pas ou a été déplacée.", backHome: "Retour à l'accueil", by: "Par", news: "Actualités", scroll: "Défiler vers le bas", rights: "Tous droits réservés", prev: "Précédent", next: "Suivant", play: "Lire la vidéo", close: "Fermer" },
    settings: { navLabel: "PONG Orchestra", title: "Réglages PONG Orchestra", accent: "Couleur d'accent", background: "Fond", text: "Couleur du texte", save: "Enregistrer", saved: "Enregistré. Lancez Régénérer → Tout le HTML pour appliquer logo, photo et réseaux à toutes les pages.", regenerateHint: "Les couleurs s'appliquent immédiatement. Logo, photo d'accueil, réseaux sociaux et pied de page sont écrits dans les pages : lancez Régénérer → Tout le HTML après avoir enregistré.", logo: "Logo", logoOn: "Le logo envoyé remplace le titre du site dans l'en-tête et l'accueil.", logoOff: "Pas de logo : le titre du site est affiché en texte.", logoUpload: "Envoyer un logo", logoRemove: "Retirer", hero: "Accueil plein écran", heroImage: "Photo de fond", pick: "Médiathèque", tagline: "Accroche sous le logo", socials: "Réseaux sociaux", colors: "Couleurs", credit: "Ligne supplémentaire du pied de page" }
  }
}, wn = {
  id: "pong-orchestra",
  name: "PONG Orchestra",
  version: "1.0.5",
  description: "Thème sombre type fanfare rock, inspiré de pongorchestra.fr",
  readme: J,
  scssEntry: "theme.css",
  cssText: T,
  // Uploaded as theme-assets/pong-orchestra-menu.js; fills the menus from
  // data/menu.json so menu edits don't require regenerating every page.
  jsText: Z,
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
    base: rn,
    home: dn,
    single: mn,
    category: hn,
    author: gn,
    notFound: un
  },
  // /theme-settings page; the saved config is baked into the uploaded CSS.
  settings: { navLabelKey: "settings.navLabel", defaultConfig: b, component: fn, schema: Q },
  compileCss: (e) => nn(T, e),
  // Translations, namespace "theme-pong-orchestra" (admin UI + public labels).
  i18n: bn
};
export {
  wn as default
};
