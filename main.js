// ── MOBILE NAV TOGGLE ──
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── SCROLL FADE-IN ANIMATIONS ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── STICKY CALL BUTTON: hide when contact section is visible ──
const contactSection = document.getElementById('contact');
const stickyCall = document.querySelector('.sticky-call');

const contactObserver = new IntersectionObserver((entries) => {
  stickyCall.style.opacity = entries[0].isIntersecting ? '0' : '1';
  stickyCall.style.pointerEvents = entries[0].isIntersecting ? 'none' : 'auto';
}, { threshold: 0.2 });

contactObserver.observe(contactSection);

// ── QUOTE FORM SUBMIT ──
function handleFormSubmit() {
  const btn = document.querySelector('.form-submit');
  btn.textContent = "✓ Sent! We'll call you soon.";
  btn.style.background = '#1a3a2a';
  btn.style.color = '#4caf80';
  btn.disabled = true;
}