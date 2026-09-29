'use strict';
/* Behaviour for the vCard layout: sidebar toggle, page tabs, project filter, contact form (mailto). */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const toggle = (el) => el && el.classList.toggle('active');

// sidebar "show contacts" on small screens
const sidebar = $('[data-sidebar]');
$('[data-sidebar-btn]')?.addEventListener('click', () => toggle(sidebar));

// page tabs: the button text matches an article's data-page
const links = $$('[data-nav-link]');
const pages = $$('[data-page]');
function openPage(name) {
  pages.forEach((p) => p.classList.toggle('active', p.dataset.page === name));
  links.forEach((l) => l.classList.toggle('active', l.textContent.trim().toLowerCase() === name));
  window.scrollTo(0, 0);
  history.replaceState(null, '', '#' + name);
}
links.forEach((l) => l.addEventListener('click', () => openPage(l.textContent.trim().toLowerCase())));
const start = location.hash.slice(1);
if (pages.some((p) => p.dataset.page === start)) openPage(start);

// project filter (buttons on desktop, select on mobile)
const items = $$('[data-filter-item]');
const filter = (value) => items.forEach((i) => i.classList.toggle('active', value === 'all' || i.dataset.category === value));
const select = $('[data-select]');
select?.addEventListener('click', () => toggle(select));
$$('[data-select-item]').forEach((b) => b.addEventListener('click', () => {
  const v = b.textContent.trim().toLowerCase();
  $('[data-selecct-value]').textContent = b.textContent.trim();
  toggle(select);
  filter(v);
}));
let lastBtn = $('[data-filter-btn].active');
$$('[data-filter-btn]').forEach((b) => b.addEventListener('click', () => {
  filter(b.textContent.trim().toLowerCase());
  lastBtn?.classList.remove('active');
  b.classList.add('active');
  lastBtn = b;
}));

// contact form: enable when valid, then open the visitor's mail app
const form = $('[data-form]');
const btn = $('[data-form-btn]');
$$('[data-form-input]').forEach((i) => i.addEventListener('input', () => { btn.disabled = !form.checkValidity(); }));
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const body = `${d.get('message')}\n\n${d.get('fullname')} · ${d.get('email')}`;
  location.href = `mailto:amit2608.ag@gmail.com?subject=${encodeURIComponent('Hello from ' + d.get('fullname'))}&body=${encodeURIComponent(body)}`;
});
