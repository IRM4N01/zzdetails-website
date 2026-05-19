/* ═══════════════════════════════════════════
   ZZ DETAILS — main.js
   ═══════════════════════════════════════════ */

/* ── Nav scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});


/* ── Mobile menu ── */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');
const closeMenu    = document.getElementById('closeMenu');
const mobileLinks  = document.querySelectorAll('.mobile-link');

hamburgerBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click',    () => mobileMenu.classList.remove('open'));
mobileLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});


/* ── Scroll reveal (IntersectionObserver) ── */
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => observer.observe(el));


/* ── Quote form — Formspree AJAX submit ── */
const quoteForm   = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

quoteForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn = quoteForm.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled  = true;

  try {
    const response = await fetch(quoteForm.action, {
      method:  'POST',
      body:    new FormData(quoteForm),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      quoteForm.reset();
      quoteForm.style.display = 'none';
      formSuccess.style.display = 'block';
    } else {
      btn.innerHTML = originalHTML;
      btn.disabled  = false;
      alert('Something went wrong. Please call us on 0433 782 233.');
    }
  } catch {
    btn.innerHTML = originalHTML;
    btn.disabled  = false;
    alert('Something went wrong. Please call us on 0433 782 233.');
  }
});


/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});