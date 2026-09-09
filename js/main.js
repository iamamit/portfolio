// Amit Gautam — Portfolio interactions

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Active nav link highlighting
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('nav.links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`nav.links a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
);
sections.forEach((s) => navObserver.observe(s));
